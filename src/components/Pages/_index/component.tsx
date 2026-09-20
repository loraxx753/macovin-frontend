import { PageComponentType } from '@/lib/types';
import { PageShell } from '@/components/Organisms/PageShell';
import { Button } from '@/components/Atoms/Button';
import { Photo, PhotoCredit } from '@/components/Atoms/Photo';
import { SplitFeature } from '@/components/Organisms/SplitFeature';
import { PageSection } from '@/components/Molecules/PageSection';

export const IndexPage: PageComponentType = () => {
  return (
    <PageShell overlayHeader>
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <Photo
            id="heroHome"
            priority
            className="h-full w-full object-cover animate-ken-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-14 pt-24 md:px-8 md:pb-20">
          <p className="animate-fade-up font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-paper/80">
            Macovin
          </p>
          <p className="animate-fade-up mt-3 font-display text-5xl font-semibold tracking-tight text-paper sm:text-6xl md:text-8xl">
            Macovin
          </p>
          <h1 className="animate-fade-up-delay mt-4 max-w-2xl font-display text-xl font-medium leading-snug text-paper/95 sm:text-2xl md:mt-5 md:text-3xl text-balance">
            We build clear apps and informative websites for people when life
            gets hard.
          </h1>
          <p className="animate-fade-up-late mt-4 max-w-xl text-base leading-relaxed text-paper/75 md:mt-5 md:text-lg">
            Not a sales funnel. Not a pile of features. Stuff you can actually
            read when you&apos;re tired. Meanwhile is the factory we use to ship
            it.
          </p>
          <div className="animate-fade-up-late mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <Button to="/work">See what we can build</Button>
            <Button
              to="/contact"
              variant="secondary"
              className="border-0 bg-paper/10 text-paper ring-1 ring-paper/35 hover:bg-paper/20"
            >
              Talk to us
            </Button>
          </div>
          <div className="mt-6">
            <PhotoCredit id="heroHome" className="text-paper/55" />
          </div>
        </div>
      </section>

      <PageSection>
        <SplitFeature
          photo="homeTogether"
          eyebrow="Who it’s for"
          title="Here’s who it’s for"
        >
          <p>
            Someone in your family is dying and nobody handed you the forms.
            You&apos;re a nurse and you need a straight answer about what you
            can refuse at work. Relatives keep talking past each other and
            you&apos;re the one stuck in the middle.
          </p>
          <p>
            That&apos;s the job. Clear information for people in a hard week.
            If we don&apos;t know something yet, we say so.
          </p>
        </SplitFeature>
      </PageSection>

      <section className="bg-band-dusk text-paper">
        <PageSection>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
            How we work
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
            Most teams waste a week re-explaining the same thing.
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="border-t border-paper/20 pt-5">
              <h3 className="font-display text-xl font-semibold">Same words</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70 md:text-base">
                Design, engineering, and testing use the same names for the same
                thing. Less telephone. Less “wait, which banner?”
              </p>
            </div>
            <div className="border-t border-paper/20 pt-5">
              <h3 className="font-display text-xl font-semibold">Start from a story</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70 md:text-base">
                We write what should happen in plain language first. Tickets and
                docs come out of that. They&apos;re not a second project.
              </p>
            </div>
            <div className="border-t border-paper/20 pt-5">
              <h3 className="font-display text-xl font-semibold">Ship something real</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70 md:text-base">
                Talking about process without shipping is just talking. We prove
                it by putting sites live.
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
          title="Macovin is the company. Meanwhile is the shop."
        >
          <p>
            We build sites in Meanwhile. Same tooling, same habits. If you want
            the longer version of how that works, it&apos;s on the About page and
            in the company docs.
          </p>
          <p>
            The factory repo is{' '}
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
            <Button to="/about" variant="secondary">
              How we work
            </Button>
          </div>
        </SplitFeature>
      </PageSection>

      <section className="bg-mist/50">
        <PageSection>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
                Coming work
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
                Sites we might build
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/70 md:text-lg">
                These aren&apos;t live products. They&apos;re ideas. An elder care
                end-of-life packet. A Texas workers&apos; rights site starting
                with nurses. If we build them, they get the same clear treatment
                as everything else.
              </p>
            </div>
            <Button to="/work">See what we can build</Button>
          </div>
        </PageSection>
      </section>
    </PageShell>
  );
};

IndexPage.path = '/';
