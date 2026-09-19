import { useEffect, useState } from 'react';
import { PageComponentType } from '@/lib/types';
import { PageShell } from '@/components/Organisms/PageShell';
import { SectionIntro } from '@/components/Molecules/SectionIntro';
import { PageSection } from '@/components/Molecules/PageSection';
import { Button } from '@/components/Atoms/Button';
import { Photo, PhotoCredit } from '@/components/Atoms/Photo';
import {
  FALLBACK_EXAMPLES,
  SiteExample,
  fetchExamples,
} from '@/lib/api';
import { PhotoCreditKey } from '@/lib/photos';

const photoById: Record<string, PhotoCreditKey> = {
  'elder-care': 'workElder',
  'texas-workers-rights': 'workNurses',
};

const extraCopy: Record<
  string,
  { forWhom: string; ifWeBuild: string }
> = {
  'elder-care': {
    forWhom:
      'For the person holding the week together when a family member is at the end of life. Not a clinic. Not a sales funnel.',
    ifWeBuild:
      'If we build it, it’s a site with a clear sentence: what to ask, what to expect, where the forms and phone numbers live, how to keep relatives from playing telephone. Words a tired person can read.',
  },
  'texas-workers-rights': {
    forWhom:
      'For people with specific jobs in Texas who need real answers, starting with nurses. Not a law firm. Not a rant.',
    ifWeBuild:
      'If we build it, each profession gets its own sentence in the same shop. What you’re allowed to refuse, what has to be in writing, who to call, and what changes by hospital vs clinic vs agency. Nurses first. Other jobs after the first vocabulary exists.',
  },
};

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
      <section className="relative overflow-hidden bg-grain">
        <PageSection className="pb-10 md:pb-14">
          <SectionIntro
            eyebrow="Work"
            title="Example sentences we might invent"
          >
            <p>
              These are ideas / coming work. They&apos;re not live products yet.
              If we build them, each one gets a clear sentence in the same
              factory. Same shop language. Same honest story about what exists
              today.
            </p>
          </SectionIntro>
          {source === 'fallback' ? (
            <p className="mt-6 text-sm text-ink/55" role="status">
              Showing the offline copy (API unreachable or unset). Same ideas.
            </p>
          ) : source === 'api' ? (
            <p className="mt-6 text-sm text-ink/55" role="status">
              Loaded from the API.
            </p>
          ) : null}
        </PageSection>
      </section>

      <PageSection className="space-y-20 pt-4 md:space-y-28">
        {examples.map((example, index) => {
          const photo = photoById[example.id] ?? 'workElder';
          const copy = extraCopy[example.id];
          const reverse = index % 2 === 1;

          return (
            <article
              key={example.id}
              className="grid items-start gap-8 border-t border-ink/10 pt-12 md:grid-cols-2 md:gap-12"
            >
              <figure className={reverse ? 'md:order-2' : undefined}>
                <div className="overflow-hidden rounded-sm">
                  <Photo
                    id={photo}
                    className="aspect-[5/4] w-full object-cover"
                  />
                </div>
                <PhotoCredit id={photo} />
              </figure>
              <div className={reverse ? 'md:order-1' : undefined}>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
                  Idea / coming work
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl text-balance">
                  {example.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/75">
                  {example.summary}
                </p>
                {copy ? (
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
                    <p>{copy.forWhom}</p>
                    <p>{copy.ifWeBuild}</p>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </PageSection>

      <section className="bg-dusk text-paper">
        <PageSection>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
            If a sentence like this would help someone you know, tell us.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
            We haven&apos;t named dollars here. We&apos;re still pointing at
            what fits. The front door is clear sites for people. The factory
            keeps the language so the next sentence isn&apos;t a custom month.
          </p>
          <div className="mt-8">
            <Button to="/contact">Contact Macovin</Button>
          </div>
        </PageSection>
      </section>
    </PageShell>
  );
};

WorkPage.path = '/work';
