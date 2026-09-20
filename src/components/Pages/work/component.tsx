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
      'For the person holding it together when someone in the family is dying. Not a clinic. Not a pitch.',
    ifWeBuild:
      'If we build it: what to ask, what to expect, where the forms and numbers are, how to keep relatives from talking past each other. Plain language. Readable when you’re wiped.',
  },
  'texas-workers-rights': {
    forWhom:
      'For people in specific Texas jobs who need real answers. Nurses first. Not a law firm. Not a rant.',
    ifWeBuild:
      'If we build it: what you can refuse, what has to be in writing, who to call, and how hospital vs clinic vs agency changes it. Other jobs after the first version works.',
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
          <SectionIntro eyebrow="Work" title="What we can build">
            <p>
              These are ideas. Not live products. If we build them, each one
              gets a clear job. Same approach as everything else we ship.
            </p>
          </SectionIntro>
          {source === 'fallback' ? (
            <p className="mt-6 text-sm text-ink/55" role="status">
              Offline copy. API isn&apos;t up or isn&apos;t set. Same ideas
              either way.
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
            Know someone who needs one of these?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/70 md:text-lg">
            Tell us. We haven&apos;t named dollars. We&apos;re still figuring
            out what fits.
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
