import { PageComponentType } from '@/lib/types';
import { PageShell } from '@/components/Organisms/PageShell';
import { Button } from '@/components/Atoms/Button';
import { SectionIntro } from '@/components/Molecules/SectionIntro';

function HeroScene() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,hsl(186_35%_88%/_0.95),transparent_55%),radial-gradient(ellipse_at_85%_10%,hsl(42_40%_94%/_0.9),transparent_45%),linear-gradient(180deg,hsl(198_32%_90%)_0%,hsl(42_28%_97%)_72%,hsl(42_28%_97%)_100%)]" />
      <svg
        className="absolute inset-x-0 bottom-0 h-[58%] w-full animate-drift text-ridge/25"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 320 C180 260 280 380 460 320 C640 260 720 180 900 240 C1080 300 1200 220 1440 280 L1440 520 L0 520 Z"
        />
        <path
          className="animate-haze text-path/20"
          fill="currentColor"
          d="M0 380 C220 320 360 420 540 360 C720 300 840 260 1020 320 C1200 380 1320 300 1440 340 L1440 520 L0 520 Z"
        />
        <path
          fill="hsl(210 28% 14% / 0.08)"
          d="M0 430 C260 390 420 460 640 420 C860 380 1040 400 1440 390 L1440 520 L0 520 Z"
        />
      </svg>
      <div className="absolute left-[12%] top-[28%] h-24 w-24 rounded-full bg-paper/30 blur-2xl animate-haze sm:h-36 sm:w-36" />
      <div className="absolute right-[18%] top-[18%] h-16 w-40 rounded-full bg-path/10 blur-3xl animate-haze" />
    </div>
  );
}

export const IndexPage: PageComponentType = () => {
  return (
    <PageShell overlayHeader>
      <section className="relative min-h-[100svh] overflow-hidden">
        <HeroScene />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-20 pt-28 sm:px-8 sm:pb-24">
          <p className="animate-fade-up font-display text-5xl font-semibold tracking-tight text-ink sm:text-7xl md:text-8xl">
            Macovin
          </p>
          <h1 className="animate-fade-up-delay mt-5 max-w-2xl font-display text-2xl font-medium leading-snug text-ink/90 sm:text-3xl text-balance">
            Clear apps and informative websites for people when life gets hard.
          </h1>
          <p className="animate-fade-up-late mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
            We build the packet you wish someone had handed you. Meanwhile is
            the factory that keeps the words the same from seat to seat.
          </p>
          <div className="animate-fade-up-late mt-8 flex flex-wrap gap-3">
            <Button to="/work">See example sentences</Button>
            <Button to="/contact" variant="secondary">
              Talk to us
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionIntro title="What we build">
          <p>
            Sites and apps with one clear sentence. Not a sales funnel. Not a
            buffet of features. Words a tired person can read when the week is
            already heavy.
          </p>
        </SectionIntro>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              For people
            </h3>
            <p className="mt-3 leading-relaxed text-ink/70">
              Practical information when you&apos;re caring for someone, learning
              what you&apos;re allowed to refuse at work, or trying to keep
              relatives from playing telephone. Same shop language for every
              product.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              Meanwhile as factory
            </h3>
            <p className="mt-3 leading-relaxed text-ink/70">
              Macovin is the company. Meanwhile is where we name a thing once,
              build from a short story, and prove it with a clock. Tickets,
              Storybook, and docs are byproduct, not a second project.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

IndexPage.path = '/';
