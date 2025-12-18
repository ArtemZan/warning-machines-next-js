import type { ContactPayload, ContactResponse, SiteContent } from '../types';

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE || '').replace(/\/$/, '');
const API_PREFIX = API_BASE ? `${API_BASE}` : '';
const API_ROOT = `${API_PREFIX}/api`;

export async function fetchContent(): Promise<SiteContent> {
  const res = await fetch(`${API_ROOT}/content`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Content request failed with status ${res.status}`);
  }
  return res.json() as Promise<SiteContent>;
}

export async function submitContact(payload: ContactPayload | FormData): Promise<ContactResponse> {
  const isFormData = typeof FormData !== 'undefined' && payload instanceof FormData;
  const res = await fetch(`${API_ROOT}/contact`, {
    method: 'POST',
    headers: isFormData ? undefined : { 'Content-Type': 'application/json' },
    body: isFormData ? payload : JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    return { success: false, error: text || 'Failed to submit form' };
  }

  return res.json() as Promise<ContactResponse>;
}

