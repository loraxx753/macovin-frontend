import { PageComponentType } from '@/lib/types';
import { PageShell } from '@/components/Organisms/PageShell';
import { SectionIntro } from '@/components/Molecules/SectionIntro';
import { PageSection } from '@/components/Molecules/PageSection';
import { Button } from '@/components/Atoms/Button';
import { Photo, PhotoCredit } from '@/components/Atoms/Photo';
import { SplitFeature } from '@/components/Organisms/SplitFeature';

const habits = [
  {
    title: 'Name it once',
    body: 'Design, engineering, and testing use the same words for the same thing. That’s how you stop playing telephone.',
  },
  {
    title: 'Start from a story',
    body: 'We write what should happen in plain language first (Given / When / Then). Tickets and docs follow. They’re leftovers, not the main event.',
  },
  {
    title: 'Prove it by shipping',
    body: 'Talk without a live site is just talk. We care what actually went out and how long it took.',
  },
] as const;

export const AboutPage: PageComponentType = () => {
  return (
    <PageShell>
      <section className="relative min-h-[52vh] overflow-hidden md:min-h-[60vh]">
        <Photo
          id="aboutPath"
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 md:min-h-[60vh] md:px-8 md:pb-16">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-paper/75">
            About
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-paper md:text-6xl text-balance">
            How we work
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/80 md:text-lg">
            Macovin is a small family company. Meanwhile is the factory. We
            build websites and apps, and we try not to spend the week
            re-explaining the same banner.
          </p>
          <PhotoCredit id="aboutPath" className="text-paper/50" />
        </div>
      </section>

      <PageSection>
        <SectionIntro title="The usual mess">
          <p>
            You&apos;ve been in that meeting. Everyone&apos;s tired.
            You&apos;re talking about the same thing for the tenth time and
            somehow it still isn&apos;t clear. That&apos;s telephone with a
            paycheck.
          </p>
        </SectionIntro>
        <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-ink/75 md:text-lg">
          <p>
            Someone means a thing. The ticket says something else. Design hears
            a third version. Engineering builds a fourth. QA checks a fifth.
            Standup repeats it so everyone can pretend they&apos;re aligned.
          </p>
          <p>
            We&apos;re not interested in guessing better. We&apos;re interested
            in keeping the original meaning in the room. If we don&apos;t know
            yet, we say that.
          </p>
        </div>
      </PageSection>

      <section className="bg-mist/40">
        <PageSection>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
            Three habits
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {habits.map((habit) => (
              <div key={habit.title} className="border-t-2 border-ember/70 pt-5">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {habit.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base">
                  {habit.body}
                </p>
              </div>
            ))}
          </div>
        </PageSection>
      </section>

      <PageSection>
        <SplitFeature
          photo="homeTogether"
          eyebrow="Who’s in the room"
          title="Same rules for every seat"
        >
          <p>
            The person pointing, the people in the middle, and the people
            building all get to say “I don’t know yet.” Including whoever has to
            report up. We don’t invent an answer just to make the room feel
            scheduled.
          </p>
          <p>
            If the ticket is the story, stakeholders can stay in that loop
            without sitting through a second telling.
          </p>
        </SplitFeature>
      </PageSection>

      <section className="bg-dusk text-paper">
        <PageSection>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
            Want the longer version?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70 md:text-lg">
            Company docs are on GitHub. The factory is Meanwhile. This site is
            the front door: clear apps and informative websites when life gets
            hard.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href="https://github.com/loraxx753/macovin"
              target="_blank"
              rel="noreferrer"
            >
              Company docs
            </Button>
            <Button
              href="https://github.com/MeanwhileJS/meanwhile"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="border-0 bg-paper/10 text-paper ring-1 ring-paper/35 hover:bg-paper/20"
            >
              Meanwhile factory
            </Button>
            <Button to="/contact" variant="ghost" className="text-paper">
              Contact
            </Button>
          </div>
        </PageSection>
      </section>
    </PageShell>
  );
};

AboutPage.path = '/about';
