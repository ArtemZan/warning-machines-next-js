import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactRequest = {
  name?: string;
  email?: string;
  message?: string;
  number?: string;
  service?: string;
  uploadNames?: string[];
  recaptchaToken?: string;
  attachments?: {
    filename: string;
    content: Buffer;
    contentType?: string;
  }[];
};

type RecaptchaResult =
  | { ok: true; score?: number }
  | { ok: false; error: string };

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpSecure = process.env.SMTP_SECURE === 'true';
const mailFrom = process.env.MAIL_FROM;
const mailTo = process.env.MAIL_TO;

async function verifyRecaptcha(token?: string): Promise<RecaptchaResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret || !token) {
    return { ok: true };
  }

  try {
    const params = new URLSearchParams();
    params.append('secret', secret);
    params.append('response', token);

    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    if (!res.ok) {
      return { ok: false, error: `reCAPTCHA verify failed: ${res.status}` };
    }

    const data = (await res.json()) as { success?: boolean; score?: number; 'error-codes'?: string[] };

    if (!data.success) {
      return { ok: false, error: `reCAPTCHA rejected: ${(data['error-codes'] || []).join(',') || 'unknown'}` };
    }

    return { ok: true, score: data.score };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'reCAPTCHA verify error' };
  }
}

async function parseContactRequest(request: Request): Promise<ContactRequest> {
  const contentType = request.headers.get('content-type') || '';

  // Handle multipart/form-data (file uploads)
  if (contentType.toLowerCase().includes('multipart/form-data')) {
    const form = await request.formData();
    const uploads: File[] = [];

    const getString = (key: string) => {
      const val = form.get(key);
      return typeof val === 'string' ? val : undefined;
    };

    form.forEach((value, key) => {
      if (value instanceof File && value.size > 0 && key === 'upload') {
        uploads.push(value);
      }
    });

    const uploadNames = uploads.length ? uploads.map((f) => f.name) : undefined;
    const attachments =
      uploads.length > 0
        ? await Promise.all(
            uploads.map(async (file) => ({
              filename: file.name || 'upload',
              content: Buffer.from(await file.arrayBuffer()),
              contentType: file.type || undefined,
            })),
          )
        : undefined;


    return {
      name: getString('name'),
      email: getString('email'),
      message: getString('message'),
      number: getString('number'),
      service: getString('service'),
      recaptchaToken: getString('recaptchaToken'),
      uploadNames,
      attachments,
    };
  }

  // Fallback to JSON body
  const body = (await request.json().catch(() => ({}))) as ContactRequest;
  return body;
}

export async function POST(request: Request) {
  const body = await parseContactRequest(request);
  const { name, email, message, number, service, uploadNames, recaptchaToken, attachments } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
  }

  const recaptcha = await verifyRecaptcha(recaptchaToken);
  if (!recaptcha.ok) {
    return NextResponse.json({ success: false, error: recaptcha.error }, { status: 400 });
  }

  const receivedAt = new Date().toISOString();

  const payload = {
    name,
    email,
    message,
    number,
    service,
    uploadNames,
    receivedAt,
  };

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !mailFrom || !mailTo) {
    return NextResponse.json(
      {
        success: false,
        error: 'Email transport is not configured on the server.',
      },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const uploadLine = uploadNames?.length ? `Uploads: ${uploadNames.join(', ')}` : 'Uploads: none';

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: 'New message from warning-machines.com',
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Number: ${number || '-'}`,
        `Service: ${service || '-'}`,
        uploadLine,
        '',
        message,
        '',
        `Received at: ${payload.receivedAt}`,
      ].join('\n'),
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Number:</strong> ${number || '-'}</p>
        <p><strong>Service:</strong> ${service || '-'}</p>
        <p><strong>Uploads:</strong> ${uploadNames?.length ? uploadNames.join(', ') : 'none'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><small>Received at: ${payload.receivedAt}</small></p>
      `,
      attachments: attachments?.length ? attachments : undefined,
    });

    return NextResponse.json({ success: true, data: payload });
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Email send failed';
    return NextResponse.json({ success: false, error }, { status: 502 });
  }
}

