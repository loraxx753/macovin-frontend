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
import { cn } from '@/lib/utils';

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
      'For the person holding it together when someone in the family is dying. Not a clinic. Not a pitch. Just the packet you wish someone had handed you.',
    ifWeBuild:
      'If we build it: what to ask, what to expect, where the forms and numbers are, how to keep relatives from talking past each other. Plain language. Readable when you’re wiped.',
  },
  'texas-workers-rights': {
    forWhom:
      'For people in specific Texas jobs who need real answers. Nurses first, then other jobs. Not a law firm. Not a rant.',
    ifWeBuild:
      'If we build it: what you can refuse, what has to be in writing, who to call, and how hospital vs clinic vs agency changes it.',
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
        <PageSection className="pb-8 md:pb-10">
          <SectionIntro as="h1" eyebrow="Work" title="What we can build">
            <p>
              These are ideas. Not live products. If we build them, each one
              gets a clear job. Same approach as everything else we ship. No
              fake “portfolio” theater.
            </p>
          </SectionIntro>
          {source === 'fallback' ? (
            <p className="mt-6 text-sm text-ink-muted" role="status">
              Offline copy. API isn&apos;t up or isn&apos;t set. Same ideas
              either way.
            </p>
          ) : source === 'api' ? (
            <p className="mt-6 text-sm text-ink-muted" role="status">
              Loaded from the API.
            </p>
          ) : null}
        </PageSection>
      </section>

      <PageSection className="space-y-16 pt-2 md:space-y-24">
        {examples.map((example, index) => {
          const photo = photoById[example.id] ?? 'workElder';
          const copy = extraCopy[example.id];
          const featured = index === 0;
          const accent = featured ? 'border-secondary' : 'border-tertiary';

          return (
            <article
              key={example.id}
              className={cn(
                'grid items-start gap-8 border-t-4 pt-12',
                accent,
                featured
                  ? 'md:grid-cols-[1.15fr_0.85fr] md:gap-14'
                  : 'md:grid-cols-2 md:gap-12',
                !featured && index % 2 === 1 && 'md:[&>figure]:order-2',
              )}
            >
              <figure>
                <div className="overflow-hidden ring-1 ring-border/50">
                  <Photo
                    id={photo}
                    priority={featured}
                    className={cn(
                      'w-full object-cover',
                      featured ? 'aspect-[16/11]' : 'aspect-[5/4]',
                    )}
                  />
                </div>
                <PhotoCredit id={photo} />
              </figure>
              <div>
                <p className="eyebrow">Idea / coming work</p>
                <h2
                  className={cn(
                    'mt-3 font-display font-semibold tracking-tight text-ink text-balance',
                    featured
                      ? 'text-3xl md:text-5xl'
                      : 'text-3xl md:text-4xl',
                  )}
                >
                  {example.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted text-pretty">
                  {example.summary}
                </p>
                {copy ? (
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted text-pretty">
                    <p>{copy.forWhom}</p>
                    <p>{copy.ifWeBuild}</p>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </PageSection>

      <section className="bg-band-dusk text-primary-fg">
        <PageSection>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-secondary md:text-4xl text-balance">
            Know someone who needs one of these?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-fg/75 md:text-lg text-pretty">
            Tell us. We haven&apos;t named dollars. We&apos;re still figuring
            out what fits. Messy notes welcome.
          </p>
          <div className="mt-8">
            <Button to="/contact" className="no-underline">
              Talk to us
            </Button>
          </div>
        </PageSection>
      </section>
    </PageShell>
  );
};

WorkPage.path = '/work';
