import { FormEvent, useState } from 'react';
import { PageComponentType } from '@/lib/types';
import { PageShell } from '@/components/Organisms/PageShell';
import { SectionIntro } from '@/components/Molecules/SectionIntro';
import { Button } from '@/components/Atoms/Button';
import {
  API_BASE_URL,
  CONTACT_EMAIL,
  mailtoHref,
  submitContact,
} from '@/lib/api';

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error';

export const ContactPage: PageComponentType = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = { name, email, message };
    setStatus('sending');

    const result = await submitContact(payload);

    if (result === 'api') {
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
      return;
    }

    if (result === 'mailto') {
      window.location.href = mailtoHref(payload);
      setStatus('mailto');
      return;
    }

    window.location.href = mailtoHref(payload);
    setStatus('error');
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <SectionIntro eyebrow="Contact" title="Say hello">
          <p>
            Tell us what sentence you need. If the API isn&apos;t standing yet,
            this form opens a mail draft instead.
          </p>
        </SectionIntro>

        <form
          onSubmit={onSubmit}
          className="mt-12 max-w-xl space-y-5"
          noValidate={false}
        >
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Name</span>
            <input
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-ink/15 bg-paper px-3 py-2.5 text-ink outline-none ring-path/40 focus:ring-2"
              autoComplete="name"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-ink/15 bg-paper px-3 py-2.5 text-ink outline-none ring-path/40 focus:ring-2"
              autoComplete="email"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">
              Message
            </span>
            <textarea
              required
              name="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-y rounded-md border border-ink/15 bg-paper px-3 py-2.5 text-ink outline-none ring-path/40 focus:ring-2"
            />
          </label>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </Button>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-medium">
              Or email {CONTACT_EMAIL}
            </a>
          </div>

          {status === 'sent' ? (
            <p className="text-sm text-path" role="status">
              Got it. We&apos;ll read it soon.
            </p>
          ) : null}
          {status === 'mailto' ? (
            <p className="text-sm text-ink/65" role="status">
              Opening your mail app
              {API_BASE_URL
                ? '.'
                : ' (no API base set; mailto fallback).'}
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="text-sm text-ink/65" role="status">
              The API didn&apos;t answer, so we opened a mail draft instead.
            </p>
          ) : null}
        </form>
      </section>
    </PageShell>
  );
};

ContactPage.path = '/contact';
