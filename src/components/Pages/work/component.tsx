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

const panelTones = [
  {
    panel: 'bg-primary text-primary-fg',
    eyebrow: 'text-ink',
  },
  {
    panel: 'bg-secondary text-secondary-fg',
    eyebrow: 'text-primary',
  },
  {
    panel: 'bg-tertiary text-tertiary-fg',
    eyebrow: 'text-primary',
  },
] as const;

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
      <section className="relative overflow-hidden border-b-[3px] border-ink bg-band-dusk text-surface">
        <div className="absolute inset-0 bg-halftone opacity-30 mix-blend-overlay" aria-hidden />
        <div
          className="absolute -right-8 top-6 font-display text-[8rem] leading-none text-primary/15 md:text-[12rem]"
          aria-hidden
        >
          WORK
        </div>
        <PageSection className="relative z-10 pb-10 md:pb-14">
          <SectionIntro
            as="h1"
            eyebrow="Work"
            title="What we can build"
            tone="dusk"
          >
            <p>
              These are ideas. Not live products. If we build them, each one
              gets a clear job. Same approach as everything else we ship. No
              fake “portfolio” theater.
            </p>
          </SectionIntro>
          {source === 'fallback' ? (
            <p className="mt-6 text-sm text-surface/55" role="status">
              Offline copy. API isn&apos;t up or isn&apos;t set. Same ideas
              either way.
            </p>
          ) : source === 'api' ? (
            <p className="mt-6 text-sm text-surface/55" role="status">
              Loaded from the API.
            </p>
          ) : null}
        </PageSection>
      </section>

      <PageSection className="space-y-12 pt-2 md:space-y-20">
        {examples.map((example, index) => {
          const photo = photoById[example.id] ?? 'workElder';
          const copy = extraCopy[example.id];
          const featured = index === 0;
          const tone = panelTones[index % panelTones.length];

          return (
            <article
              key={example.id}
              className={cn(
                'panel grid items-start gap-0 overflow-hidden',
                featured
                  ? 'md:grid-cols-[1.1fr_0.9fr]'
                  : 'md:grid-cols-2',
                !featured && index % 2 === 1 && 'md:[&>figure]:order-2',
              )}
            >
              <figure className="border-b-[3px] border-ink md:border-b-0 md:border-r-[3px]">
                <Photo
                  id={photo}
                  priority={featured}
                  className={cn(
                    'w-full object-cover',
                    featured ? 'aspect-[16/11]' : 'aspect-[5/4]',
                  )}
                />
                <div className="border-t-[3px] border-ink bg-surface px-3 py-2">
                  <PhotoCredit id={photo} className="mt-0" />
                </div>
              </figure>
              <div className={cn('relative overflow-hidden p-6 md:p-8', tone.panel)}>
                <span
                  aria-hidden
                  className="stamp absolute -bottom-2 -right-1 font-display text-6xl leading-none opacity-15 md:text-7xl"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className={cn('eyebrow', tone.eyebrow)}>
                  Idea / coming work
                </p>
                <h2
                  className={cn(
                    'mt-3 font-display uppercase tracking-tight text-balance',
                    featured ? 'text-3xl md:text-5xl' : 'text-3xl md:text-4xl',
                  )}
                >
                  {example.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-pretty opacity-90">
                  {example.summary}
                </p>
                {copy ? (
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty opacity-85">
                    <p>{copy.forWhom}</p>
                    <p>{copy.ifWeBuild}</p>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </PageSection>

      <section className="border-t-[3px] border-ink bg-primary text-primary-fg">
        <PageSection>
          <h2 className="max-w-2xl font-display text-3xl uppercase tracking-tight md:text-4xl text-balance">
            Know someone who needs one of these?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed md:text-lg text-pretty opacity-85">
            Tell us. We haven&apos;t named dollars. We&apos;re still figuring
            out what fits. Messy notes welcome.
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="tertiary" className="no-underline">
              Talk to us
            </Button>
          </div>
        </PageSection>
      </section>
    </PageShell>
  );
};

WorkPage.path = '/work';
