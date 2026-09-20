import { PageComponentType } from '@/lib/types';
import { PageShell } from '@/components/Organisms/PageShell';
import { SectionIntro } from '@/components/Molecules/SectionIntro';
import { PageSection } from '@/components/Molecules/PageSection';
import { Button } from '@/components/Atoms/Button';
import { Photo, PhotoCredit } from '@/components/Atoms/Photo';
import { SplitFeature } from '@/components/Organisms/SplitFeature';

const habits = [
  {
    title: 'Name a thing once',
    body: 'That’s how we refuse to play telephone. Design, engineering, and testing use the same words for the same look. The next seat gets the last output and what was meant first, so the whisper can’t start.',
  },
  {
    title: 'Build from the story',
    body: 'We start from a short story in plain language (Given / When / Then). That’s what development builds from. Tickets, docs, and tests are a byproduct. Same words, not a second project.',
  },
  {
    title: 'Prove it with a clock',
    body: 'What we actually shipped, and how long it took. Live products keep the pointing honest and the language real. Pointing without a shared language is only a speech. A shared language without shipping is only a longer week.',
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
            Macovin is a small family company. Meanwhile is the factory. We ship
            real websites and apps, and we keep design, engineering, and testing
            on the same words for the same thing.
          </p>
          <PhotoCredit id="aboutPath" className="text-paper/50" />
        </div>
      </section>

      <PageSection>
        <SectionIntro title="The problem we refuse to pretend is normal">
          <p>
            You’ve sat in a planning meeting and felt worn out, a little
            misunderstood, talking about the same thing for the tenth time.
            That’s telephone with a salary. There’s an easier week on the other
            side of that.
          </p>
        </SectionIntro>
        <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-ink/75 md:text-lg">
          <p>
            Someone means a thing. The ticket whispers it. Design whispers what
            they heard. Production whispers that. QA whispers the code. Standup
            whispers it back so the room can relax. You can’t point to the seat
            where the whisper became the meaning. That’s why it feels baked
            in.
          </p>
          <p>
            We make the circle lighter on purpose. We tell the truth about what
            we know. “I don’t know yet” means the echo hasn’t gotten to me yet.
            When it does, I get a copy of every previous echo, plus what was
            meant at the start.
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
          title="Same weather for every seat"
        >
          <p>
            The person in the tree, the people in the middle, and the people
            cutting deserve a week where “I don’t know yet” is allowed. That
            includes the person who has to report up. We don’t invent an answer
            just because someone asked the kid next to them.
          </p>
          <p>
            From middle-manager on up through the client, the stakeholder loop
            can live in the ticket when the ticket is the story. Same words.
            Not a second telling they have to sit through.
          </p>
        </SplitFeature>
      </PageSection>

      <section className="bg-dusk text-paper">
        <PageSection>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl text-balance">
            Longer why, shorter week
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/70 md:text-lg">
            The company docs hold the manifesto and the value of the shared
            language. The factory that ships the sites lives in Meanwhile. This
            site is the people-facing front door: clear apps and informative
            websites when life gets hard.
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
