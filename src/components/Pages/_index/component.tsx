import { PageComponentType } from '@/lib/types';
import { PageShell } from '@/components/Organisms/PageShell';
import { Button } from '@/components/Atoms/Button';
import { Photo, PhotoCredit } from '@/components/Atoms/Photo';
import { SplitFeature } from '@/components/Organisms/SplitFeature';
import { PageSection } from '@/components/Molecules/PageSection';
import { FaqList } from '@/components/Molecules/FaqList';

const faqs = [
  {
    question: 'What do you actually sell?',
    answer:
      'Sites and apps people can use when life gets hard. Clear info, plain language, one job per page. Not a feature buffet.',
  },
  {
    question: 'Is anything live yet?',
    answer:
      'These are ideas / coming work. Not live products. If we build them, they’ll get the same clear treatment as everything else.',
  },
  {
    question: 'What’s Meanwhile?',
    answer:
      'Meanwhile is the factory. Macovin is the company. Same tooling and habits so the next site feels like an afternoon, not a custom month.',
  },
  {
    question: 'How do we start?',
    answer:
      'Tell us what you need. Who it’s for. What’s true today. Messy is fine. We’ll read it and say what fits.',
  },
] as const;

export const IndexPage: PageComponentType = () => {
  return (
    <PageShell>
      <section className="relative min-h-[min(100svh,52rem)] overflow-hidden md:min-h-[min(100svh,44rem)]">
        <div className="absolute inset-0">
          <Photo
            id="heroHome"
            priority
            className="h-full w-full object-cover animate-ken-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/20 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[min(100svh,52rem)] max-w-6xl flex-col justify-end px-4 pb-16 pt-10 md:min-h-[min(100svh,44rem)] md:px-8 md:pb-20">
          <p className="animate-fade-up font-display text-hero font-semibold tracking-tight text-paper">
            Macovin
          </p>
          <h1 className="animate-fade-up-delay mt-4 max-w-2xl font-display text-2xl font-medium leading-snug text-paper/95 md:text-3xl text-balance">
            Clear apps and sites for people when life gets hard.
          </h1>
          <p className="animate-fade-up-late mt-4 max-w-lg text-base leading-relaxed text-paper/75 md:text-lg text-pretty">
            The packet you wish someone had handed you. Meanwhile is how we
            ship it.
          </p>
          <div className="animate-fade-up-late mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button to="/work" className="no-underline">
              See what we can build
            </Button>
            <Button
              to="/contact"
              variant="secondary"
              className="border-0 bg-paper/10 text-paper no-underline ring-1 ring-paper/35 hover:bg-paper/20"
            >
              Talk to us
            </Button>
          </div>
          <div className="mt-8">
            <PhotoCredit id="heroHome" className="text-paper/50" />
          </div>
        </div>
      </section>

      <PageSection>
        <SplitFeature
          photo="homeTogether"
          eyebrow="Who it’s for"
          title="You’re not looking for a pitch deck"
        >
          <p>
            Someone in the family is dying and nobody handed you the packet.
            Relatives keep talking past each other. You need a straight answer
            about work, care, or the next form, and you&apos;re wiped.
          </p>
          <p>
            That&apos;s who we build for. Clear info for a hard week. If we
            don&apos;t know something yet, we say so.
          </p>
        </SplitFeature>
      </PageSection>

      <section className="bg-band-dusk text-paper">
        <PageSection>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
            How we work
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
            Most teams burn a week re-explaining the same thing.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70 md:text-lg">
            We name a thing once so design, engineering, and testing aren&apos;t
            playing telephone.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-6 md:auto-rows-fr">
            <div className="border border-paper/15 bg-paper/5 p-6 md:col-span-3 md:row-span-2 md:p-8">
              <h3 className="font-display text-2xl font-semibold md:text-3xl">
                Same words
              </h3>
              <p className="mt-4 text-base leading-relaxed text-paper/70 md:text-lg">
                Design, engineering, and testing use the same names. Less
                telephone. Less “wait, which banner was that again?”
              </p>
            </div>
            <div className="border border-paper/15 bg-paper/5 p-6 md:col-span-3">
              <h3 className="font-display text-xl font-semibold">
                Write it plain first
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70 md:text-base">
                What should happen, in language a normal person can read.
                Tickets and docs come after. They&apos;re not the point.
              </p>
            </div>
            <div className="border border-paper/15 bg-paper/5 p-6 md:col-span-3">
              <h3 className="font-display text-xl font-semibold">Ship it</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70 md:text-base">
                Process talk without a live site is just talk. We care what
                actually went out.
              </p>
            </div>
          </div>
        </PageSection>
      </section>

      <PageSection>
        <SplitFeature
          photo="aboutPath"
          reverse
          eyebrow="Meanwhile"
          title="Macovin builds it. Meanwhile is the shop."
        >
          <p>
            Same tooling, same habits. Want the longer version? About page and
            the company docs.
          </p>
          <p>
            Factory code:{' '}
            <a
              href="https://github.com/MeanwhileJS/meanwhile"
              target="_blank"
              rel="noreferrer"
            >
              Meanwhile on GitHub
            </a>
            .
          </p>
          <div className="pt-2">
            <Button to="/about" variant="secondary" className="no-underline">
              How we work
            </Button>
          </div>
        </SplitFeature>
      </PageSection>

      <section className="bg-atmosphere">
        <PageSection>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
                Coming work
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
                Sites we might build
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg text-pretty">
                Not live yet. Ideas. An elder care end-of-life packet. A Texas
                workers&apos; rights site (nurses first, then other jobs). If we
                build them, they get the same clear treatment.
              </p>
            </div>
            <Button to="/work" className="no-underline shrink-0">
              See what we can build
            </Button>
          </div>
        </PageSection>
      </section>

      <PageSection>
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
          Straight answers
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
          Questions we get
        </h2>
        <FaqList items={faqs} className="mt-8" />
      </PageSection>
    </PageShell>
  );
};

IndexPage.path = '/';
