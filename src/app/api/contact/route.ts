import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactRequest = {
  name?: string;
  email?: string;
  message?: string;
  agreement?: boolean;
  number?: string;
  service?: string;
  uploadNames?: string[];
  recaptchaToken?: string;
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

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as ContactRequest;
  const { name, email, message, agreement, number, service, uploadNames, recaptchaToken } = body;

  if (!name || !email || !message || !agreement) {
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
    agreement: !!agreement,
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
        `Agreement: ${payload.agreement}`,
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
        <p><strong>Agreement:</strong> ${payload.agreement}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><small>Received at: ${payload.receivedAt}</small></p>
      `,
    });

    return NextResponse.json({ success: true, data: payload });
  } catch (err) {
    const error = err instanceof Error ? err.message : 'Email send failed';
    return NextResponse.json({ success: false, error }, { status: 502 });
  }
}

