export const API_BASE_URL = process.env.MACOVIN_API_BASE_URL || '';

export const CONTACT_EMAIL = 'hello@macovin.com';

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
};

function apiUrl(path: string): string {
  return `${API_BASE_URL.replace(/\/$/, '')}${path}`;
}

/**
 * Posts to macovin-backend POST /api/contact when MACOVIN_API_BASE_URL is set.
 * Returns 'api' | 'mailto' | 'error' so the UI can fall back cleanly.
 */
export async function submitContact(
  payload: ContactPayload,
): Promise<'api' | 'mailto' | 'error'> {
  if (!API_BASE_URL) {
    return 'mailto';
  }

  try {
    const response = await fetch(apiUrl('/api/contact'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return 'error';
    }

    return 'api';
  } catch {
    return 'error';
  }
}

export function mailtoHref(payload: ContactPayload): string {
  const subject = encodeURIComponent(`Macovin contact from ${payload.name}`);
  const body = encodeURIComponent(
    `${payload.message}\n\n- ${payload.name} <${payload.email}>`,
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
