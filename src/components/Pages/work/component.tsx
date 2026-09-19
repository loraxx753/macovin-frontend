import { useEffect, useState } from 'react';
import { PageComponentType } from '@/lib/types';
import { PageShell } from '@/components/Organisms/PageShell';
import { SectionIntro } from '@/components/Molecules/SectionIntro';
import { Button } from '@/components/Atoms/Button';
import {
  FALLBACK_EXAMPLES,
  SiteExample,
  fetchExamples,
} from '@/lib/api';

export const WorkPage: PageComponentType = () => {
  const [examples, setExamples] = useState<SiteExample[]>(FALLBACK_EXAMPLES);
  const [source, setSource] = useState<'api' | 'fallback' | 'loading'>(
    'loading',
  );

  useEffect(() => {
    let cancelled = false;

    fetchExamples().then((result) => {
      if (cancelled) return;
      setExamples(result.examples);
      setSource(result.source);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <SectionIntro
          eyebrow="Work"
          title="Example sentences we might invent"
        >
          <p>
            These are ideas / coming work. They&apos;re not live products yet.
            If we build them, each one gets a clear sentence in the same factory.
          </p>
        </SectionIntro>

        {source === 'fallback' ? (
          <p className="mt-6 text-sm text-ink/55" role="status">
            Showing the offline copy (API unreachable or unset). Same ideas.
          </p>
        ) : null}

        <ul className="mt-14 space-y-14">
          {examples.map((example) => (
            <li
              key={example.id}
              className="max-w-3xl border-t border-ink/10 pt-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-path">
                Idea / coming work
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                {example.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">
                {example.summary}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 max-w-2xl">
          <p className="leading-relaxed text-ink/70">
            If a sentence like this would help someone you know, tell us. We
            haven&apos;t named dollars here. We&apos;re still pointing at what
            fits.
          </p>
          <div className="mt-6">
            <Button to="/contact">Contact Macovin</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

WorkPage.path = '/work';
