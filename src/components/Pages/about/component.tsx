import { PageComponentType } from '@/lib/types';
import { PageShell } from '@/components/Organisms/PageShell';
import { SectionIntro } from '@/components/Molecules/SectionIntro';
import { PageSection } from '@/components/Molecules/PageSection';
import { Button } from '@/components/Atoms/Button';
import { Photo, PhotoCredit } from '@/components/Atoms/Photo';
import { SplitFeature } from '@/components/Organisms/SplitFeature';
import { FaqList } from '@/components/Molecules/FaqList';

const habits = [
  {
    title: 'Keep your material',
    body: 'Chats, writing, skills, notes. The stuff that already sounds like you. That’s the input. Not a thin paste.',
    tone: 'bg-primary text-primary-fg',
    span: 'md:col-span-2',
  },
  {
    title: 'Build the bible',
    body: 'Profile and examples live in files you can edit. The assistant stays in your canon. It doesn’t invent a second person.',
    tone: 'bg-secondary text-secondary-fg',
    span: 'md:col-span-1',
  },
  {
    title: 'Ship the piece',
    body: 'Talk without a draft that sounds like you is just talk. We care what actually went out, and whether anyone clocks it as slop.',
    tone: 'bg-tertiary text-tertiary-fg',
    span: 'md:col-span-1',
  },
] as const;

const faqs = [
  {
    question: 'Is Macovin a big agency?',
    answer:
      'Nah. Small company. Meanwhile is the factory. We sell voice content and try not to ship drafts that sound like ChatGPT.',
  },
  {
    question: 'Why a voice bible?',
    answer:
      'Because a thin paste is mirroring. A real bible keeps the next piece in your canon, the way project rules keep a show from inventing a second lead.',
  },
] as const;

export const AboutPage: PageComponentType = () => {
  return (
    <PageShell>
      <section className="relative min-h-[48vh] overflow-hidden border-b-[3px] border-ink md:min-h-[56vh]">
        <Photo
          id="aboutPath"
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-halftone opacity-35 mix-blend-overlay" />
        <div className="relative z-10 mx-auto flex min-h-[48vh] max-w-6xl flex-col justify-end px-4 pb-12 pt-10 md:min-h-[56vh] md:px-8 md:pb-16">
          <p className="eyebrow text-primary">About</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl uppercase tracking-tight text-surface md:text-5xl text-balance">
            How we work
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-surface/85 md:text-lg text-pretty">
            Macovin&apos;s a small company. Meanwhile&apos;s the factory. We
            sell content in your voice. We try not to ship AI slop.
            (You&apos;ve read that draft. We know.)
          </p>
          <PhotoCredit id="aboutPath" className="text-surface/50" />
        </div>
      </section>

      <PageSection>
        <SectionIntro title="You’ve read that draft">
          <p>
            You got somewhere worth sharing with AI. Then you asked for a blog
            post. It came back with tells all over the place. That&apos;s
            telephone with a different costume.
          </p>
        </SectionIntro>
        <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-ink-muted md:text-lg text-pretty">
          <p>
            The meaning was in the chat. The draft didn&apos;t keep the person.
            Thin context is mirroring. The model guesses a generic &quot;good
            post&quot; because it never had a bible for you.
          </p>
          <p>
            Real talk: we&apos;re not trying to prompt better. We&apos;re trying
            to keep who you are in the room. If we don&apos;t know yet, we say
            that.
          </p>
        </div>
      </PageSection>

      <section className="border-y-[3px] border-ink bg-surface-2">
        <PageSection>
          <p className="eyebrow">Three habits</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {habits.map((habit) => (
              <div
                key={habit.title}
                className={`panel p-6 ${habit.tone} ${habit.span}`}
              >
                <h2 className="font-display text-2xl uppercase">{habit.title}</h2>
                <p className="mt-3 max-w-prose text-sm leading-relaxed md:text-base">
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
          title="Same standard for every seat"
        >
          <p>
            You, the person pointing, and whoever helps fill the draft all get
            to say “I don’t know yet.” Including whoever has to report up.
          </p>
          <p>
            Have you ever pasted a chat, gotten slop, and tried again with a
            longer prompt? Yeah. If the bible is the story, you can skip that.
          </p>
        </SplitFeature>
      </PageSection>

      <PageSection>
        <h2 className="font-display text-3xl uppercase tracking-tight md:text-4xl text-balance">
          Quick answers
        </h2>
        <FaqList items={faqs} className="mt-8" />
      </PageSection>

      <section className="border-t-[3px] border-ink bg-band-dusk text-surface">
        <PageSection>
          <h2 className="max-w-2xl font-display text-3xl uppercase tracking-tight text-primary md:text-4xl text-balance">
            Want more detail?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface/80 md:text-lg text-pretty">
            Company docs are on GitHub. The factory is Meanwhile. This site is
            the front door for voice content. If that fits, tell us.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href="https://github.com/loraxx753/macovin"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              Company docs
            </Button>
            <Button
              href="https://github.com/MeanwhileJS/meanwhile"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="no-underline"
            >
              Meanwhile factory
            </Button>
            <Button to="/contact" variant="ghost" className="text-surface no-underline hover:text-ink">
              Talk to us
            </Button>
          </div>
        </PageSection>
      </section>
    </PageShell>
  );
};

AboutPage.path = '/about';
