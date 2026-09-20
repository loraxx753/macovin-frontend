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
            Macovin · company site
          </p>
          <p className="animate-fade-up mt-3 font-display text-5xl font-semibold tracking-tight text-paper sm:text-6xl md:text-8xl">
            Macovin
          </p>
          <h1 className="animate-fade-up-delay mt-4 max-w-2xl font-display text-xl font-medium leading-snug text-paper/95 sm:text-2xl md:mt-5 md:text-3xl text-balance">
            Clear apps and informative websites for people when life gets hard.
          </h1>
          <p className="animate-fade-up-late mt-4 max-w-xl text-base leading-relaxed text-paper/75 md:mt-5 md:text-lg">
            We build the packet you wish someone had handed you. Not a clinic.
            Not a sales funnel. Words a tired person can read when the week is
            already heavy. Meanwhile is the factory that keeps those words the
            same from seat to seat.
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
          title="People in the hard week, not a buffet of features"
        >
          <p>
            You’re caring for a family member and nobody handed you the forms.
            You’re a nurse trying to learn what you’re allowed to refuse. You’re
            trying to keep relatives from playing telephone about the same
            few facts. That’s who we build for.
          </p>
          <p>
            Execs, the middle, and the people cutting are in the same weather.
            We don’t write for one seat and leave the others guessing. If we
            don’t know yet, we say so, and the energy goes into the walk.
          </p>
        </SplitFeature>
      </PageSection>

      <section className="bg-band-dusk text-paper">
        <PageSection>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
            How the week feels
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
            If this is working, the job feels too easy. You think “…that’s it?”
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="border-t border-paper/20 pt-5">
              <h3 className="font-display text-xl font-semibold">The whisper stops</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70 md:text-base">
                Grown-up telephone is expensive. Tickets whisper. Design
                whispers. Production whispers. We name a thing once so the next
                seat gets what was meant, plus what the last seat actually built.
              </p>
            </div>
            <div className="border-t border-paper/20 pt-5">
              <h3 className="font-display text-xl font-semibold">Story first</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70 md:text-base">
                We build from a short story in plain language (Given / When /
                Then). Tickets, docs, and tests still exist. They’re a byproduct,
                not a second project you have to perform.
              </p>
            </div>
            <div className="border-t border-paper/20 pt-5">
              <h3 className="font-display text-xl font-semibold">Clock as proof</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/70 md:text-base">
                Pointing without shipping is only a speech. A shared language
                without a clock is only a longer week. Live products keep the
                pointing honest.
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
          title="Macovin is the company. Meanwhile is the factory."
        >
          <p>
            We ship real websites and apps in the same shop language. Design,
            engineering, and testing use the same words for the same look, so a
            banner isn’t whispered five different ways.
          </p>
          <p>
            The factory lives in{' '}
            <a
              href="https://github.com/MeanwhileJS/meanwhile"
              target="_blank"
              rel="noreferrer"
            >
              Meanwhile
            </a>
            . We’re finishing a compiler so the paperwork follows the names.
            Standing that language up for another team waits until a named team
            asks.
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
                Ideas, not live products yet. Elder care end-of-life packet.
                Texas workers’ rights for nurses. Each one gets a clear purpose
                in the same factory if we build it.
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
