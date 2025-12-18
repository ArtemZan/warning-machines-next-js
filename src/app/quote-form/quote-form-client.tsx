'use client';

import { useCallback, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { submitContact } from '@/lib/api';

type Props = {
  recaptchaSiteKey: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

declare const grecaptcha:
  | {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      ready: (cb: () => void) => void;
    }
  | undefined;

const services = ['3d printing', 'CAD', 'Prototyping', 'PCB', 'CNC', '3D Design', 'other'];

export default function QuoteForm({ recaptchaSiteKey }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | undefined>();

  const getRecaptchaToken = useCallback(async () => {
    if (!recaptchaSiteKey) return undefined;
    if (typeof grecaptcha === 'undefined') return undefined;
    return new Promise<string | undefined>((resolve) => {
      grecaptcha.ready(async () => {
        try {
          const token = await grecaptcha.execute(recaptchaSiteKey, { action: 'quote_form' });
          resolve(token);
        } catch {
          resolve(undefined);
        }
      });
    });
  }, [recaptchaSiteKey]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('loading');
    setError(undefined);

    if (!agreement) {
      setStatus('error');
      setError('You must agree to the NDA and site policies.');
      return;
    }

    const recaptchaToken = await getRecaptchaToken();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('number', number);
      formData.append('service', service);
      formData.append('message', message);
      formData.append('agreement', agreement ? 'true' : 'false');
      if (recaptchaToken) {
        formData.append('recaptchaToken', recaptchaToken);
      }
      if (files?.length) {
        Array.from(files).forEach((file) => {
          formData.append('upload', file, file.name);
        });
      }

      const res = await submitContact(formData);

      if (res.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setNumber('');
        setService(services[0]);
        setMessage('');
        setAgreement(false);
        setFiles(null);
      } else {
        setStatus('error');
        setError(res.error);
      }
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <main className="page-content">
      <section className="section section--narrow">
        <header className="section__header">
          <h1>Quote Form</h1>
          <p>
            <strong>Looking for a custom solution for your Projects?</strong> Fill out the form below to receive a
            tailored quote for your project. Our team will review your request and get back to you within
            <strong> 24 hours</strong>. Let’s build something powerful together.
          </p>
        </header>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__grid">
            <label className="field">
              <span>Name</span>
              <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>

            <label className="field">
              <span>Email</span>
              <input
                name="email"
                type="email"
                placeholder="warning-machines@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label className="field">
              <span>Number</span>
              <input name="number" type="tel" value={number} onChange={(e) => setNumber(e.target.value)} required />
            </label>

            <label className="field">
              <span>Service</span>
              <select name="service" value={service} onChange={(e) => setService(e.target.value)} required>
                {services.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="field">
            <span>Message</span>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your project "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>

          <label className="field">
            <span>Upload (optional)</span>
            <input name="upload" type="file" multiple onChange={(e) => setFiles(e.target.files)} />
          </label>

          <label className="checkbox">
            <input name="nda" type="checkbox" checked={agreement} onChange={(e) => setAgreement(e.target.checked)} required />
            <span>
              I agree to the{' '}
              <Link href="https://warning-machines.com/non-disclosure-agreement-nda-and-site-policies/" target="_blank">
                NDA and site policies
              </Link>
            </span>
          </label>

          <div className="form__actions">
            <button type="submit" className="button button--primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Request a Quote'}
            </button>
            {status === 'success' ? <p className="form__status form__status--ok">Request sent successfully.</p> : null}
            {status === 'error' ? <p className="form__status form__status--error">{error || 'Submission failed.'}</p> : null}
          </div>
        </form>
      </section>
    </main>
  );
}

