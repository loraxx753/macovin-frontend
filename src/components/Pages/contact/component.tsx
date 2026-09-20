import { FormEvent, useState } from 'react';
import { PageComponentType } from '@/lib/types';
import { PageShell } from '@/components/Organisms/PageShell';
import { SectionIntro } from '@/components/Molecules/SectionIntro';
import { PageSection } from '@/components/Molecules/PageSection';
import { Button } from '@/components/Atoms/Button';
import { Photo, PhotoCredit } from '@/components/Atoms/Photo';
import {
  API_BASE_URL,
  CONTACT_EMAIL,
  mailtoHref,
  submitContact,
} from '@/lib/api';

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error';

const fieldClass =
  'w-full rounded-sm border border-ink/15 bg-paper px-3 py-3 text-ink outline-none ring-ember/35 transition focus:ring-2';

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
      <PageSection className="grid items-start gap-10 md:grid-cols-2 md:gap-14 md:py-20">
        <div>
          <SectionIntro eyebrow="Contact" title="Say hello">
            <p>
              Tell us what you need. Who it&apos;s for. What&apos;s true today.
              If the API isn&apos;t up, this opens a mail draft instead. Either
              way, we&apos;ll read it.
            </p>
          </SectionIntro>

          <ul className="mt-10 space-y-5 border-t border-ink/10 pt-8 text-sm leading-relaxed text-ink/70 md:text-base">
            <li>
              <span className="font-display text-lg font-semibold text-ink">
                A site someone needs
              </span>
              <p className="mt-1">
                Elder care, workers&apos; rights, or another hard week where
                clear info would help. Ideas are fine. We haven&apos;t named
                dollars here.
              </p>
            </li>
            <li>
              <span className="font-display text-lg font-semibold text-ink">
                Something that fits how we build
              </span>
              <p className="mt-1">
                One clear job. Same language through design, engineering, and
                testing. That&apos;s the Meanwhile habit.
              </p>
            </li>
            <li>
              <span className="font-display text-lg font-semibold text-ink">
                Or just a question
              </span>
              <p className="mt-1">
                How we work, what Meanwhile is, whether this fits what you need.
                Ask. “I don’t know yet” is allowed on our side too.
              </p>
            </li>
          </ul>

          <figure className="mt-10 hidden md:block">
            <div className="overflow-hidden rounded-sm">
              <Photo
                id="contactDesk"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <PhotoCredit id="contactDesk" />
          </figure>
        </div>

        <div className="rounded-sm bg-mist/35 p-5 md:p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Name
              </span>
              <input
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={fieldClass}
                autoComplete="name"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldClass}
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
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${fieldClass} resize-y`}
                placeholder="What do you need? Who’s it for?"
              />
            </label>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4">
              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </Button>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm font-medium"
              >
                Or email {CONTACT_EMAIL}
              </a>
            </div>

            {status === 'sent' ? (
              <p className="text-sm text-path" role="status">
                Got it. We&apos;ll read it.
              </p>
            ) : null}
            {status === 'mailto' ? (
              <p className="text-sm text-ink/65" role="status">
                Opening your mail app
                {API_BASE_URL ? '.' : ' (no API set; mailto fallback).'}
              </p>
            ) : null}
            {status === 'error' ? (
              <p className="text-sm text-ink/65" role="status">
                API didn&apos;t answer. Opened a mail draft instead.
              </p>
            ) : null}
          </form>
        </div>
      </PageSection>
    </PageShell>
  );
};

ContactPage.path = '/contact';
