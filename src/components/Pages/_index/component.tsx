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
      'Content in your voice. We use your chats, writing, skills, and notes so the next piece sounds like you, not like AI slop. Honestly, that’s the whole pitch.',
  },
  {
    question: 'Is anything live yet?',
    answer:
      'The factory is. Shimmering Stars is live (astrology, same shop). Early voice-profile practice exists. A paid voice job isn’t on the books yet. We haven’t named dollars.',
  },
  {
    question: 'What’s Meanwhile?',
    answer:
      'Meanwhile is the factory. Macovin is the company. Same bible habit: chats and notes become a profile so the next piece stays in your canon.',
  },
  {
    question: 'How do we start?',
    answer:
      'Send the messy version. Chats, drafts, notes, whatever already sounds like you. We’ll read it and say what fits.',
  },
] as const;

export const IndexPage: PageComponentType = () => {
  return (
    <PageShell>
      <section className="relative min-h-[min(100svh,52rem)] overflow-hidden border-b-[3px] border-ink md:min-h-[min(100svh,44rem)]">
        <div className="absolute inset-0">
          <Photo
            id="heroHome"
            priority
            className="h-full w-full object-cover animate-ken-slow"
          />
          <div className="absolute inset-0 bg-ink/75" />
          <div className="absolute inset-0 bg-halftone opacity-40 mix-blend-overlay" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/40 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[min(100svh,52rem)] max-w-6xl flex-col justify-end px-4 pb-16 pt-10 md:min-h-[min(100svh,44rem)] md:px-8 md:pb-20">
          <p className="animate-fade-up wordmark text-hero leading-none text-primary drop-shadow-[3px_3px_0_hsl(var(--ink))]">
            Macovin
          </p>
          <h1 className="animate-fade-up-delay mt-5 max-w-2xl font-display text-2xl uppercase leading-tight text-surface md:text-3xl text-balance">
            Content in your voice. Not AI slop.
          </h1>
          <p className="animate-fade-up-late mt-4 max-w-lg text-base leading-relaxed text-surface/85 md:text-lg text-pretty">
            Your chats, writing, skills, and notes become a bible so the next
            piece sounds like you. Meanwhile is how we keep it.
          </p>
          <div className="animate-fade-up-late mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button to="/contact" className="no-underline">
              Talk to us
            </Button>
            <Button to="/about" variant="secondary" className="no-underline">
              How we work
            </Button>
          </div>
          <div className="mt-8">
            <PhotoCredit id="heroHome" className="text-surface/55" />
          </div>
        </div>
      </section>

      <PageSection>
        <SplitFeature
          photo="homeTogether"
          eyebrow="Who it’s for"
          title="You already talk to AI. Then the draft ruins it."
        >
          <p>
            You know how you use AI to talk through philosophy, religion,
            whatever&apos;s on your mind? You get somewhere worth sharing. So
            you ask for a blog post. You read it. It&apos;s terrible. Obvious
            AI slop. You might as well have written it yourself.
          </p>
          <p>
            That&apos;s who this is for. People who think with AI and want the
            next piece to sound like them. If we don&apos;t know something yet,
            we say so.
          </p>
        </SplitFeature>
      </PageSection>

      <section className="border-y-[3px] border-ink bg-band-dusk text-surface">
        <PageSection>
          <p className="eyebrow text-primary">How we work</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl uppercase tracking-tight md:text-4xl text-balance">
            Thin paste gets you mirroring. A bible gets you you.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface/80 md:text-lg">
            Anyone can paste a chat and hope. We build and keep a voice bible
            so the assistant stays in your canon.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-6">
            <div className="panel bg-primary p-6 text-primary-fg md:col-span-3 md:row-span-2 md:p-8">
              <h3 className="font-display text-2xl uppercase md:text-3xl">
                Keep your material
              </h3>
              <p className="mt-4 text-base leading-relaxed md:text-lg">
                Chats, writing, skills, notes. The stuff that already sounds
                like you. That&apos;s the input. Not a thin prompt.
              </p>
            </div>
            <div className="panel bg-secondary p-6 text-secondary-fg md:col-span-3">
              <h3 className="font-display text-xl uppercase">Build the bible</h3>
              <p className="mt-3 text-sm leading-relaxed md:text-base">
                Profile and examples live in files you can edit. The assistant
                stays in your canon. It doesn&apos;t invent a second person.
              </p>
            </div>
            <div className="panel bg-tertiary p-6 text-tertiary-fg md:col-span-3">
              <h3 className="font-display text-xl uppercase">Ship the piece</h3>
              <p className="mt-3 text-sm leading-relaxed md:text-base">
                The check is simple: does this sound like you, or like
                ChatGPT? We care what actually went out.
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
          title="Macovin sells the voice. Meanwhile keeps the bible."
        >
          <p>
            Same tooling, same habits. Want the longer version? About page and
            the company docs. Or just ask. Curious beats a brochure every time.
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

      <section className="border-y-[3px] border-ink bg-atmosphere">
        <PageSection>
          <div className="panel flex flex-col gap-6 bg-primary p-6 md:flex-row md:items-end md:justify-between md:p-10">
            <div className="max-w-2xl text-primary-fg">
              <p className="eyebrow text-ink">Proof</p>
              <h2 className="mt-3 font-display text-3xl uppercase tracking-tight md:text-4xl text-balance">
                Factory is live. Voice jobs come next.
              </h2>
              <p className="mt-4 text-base leading-relaxed md:text-lg text-pretty">
                Shimmering Stars ships from the same shop. Sites stay later /
                secondary. The front door this season is voice content. We
                haven&apos;t named dollars.
              </p>
            </div>
            <Button to="/work" variant="tertiary" className="no-underline shrink-0">
              See the proof
            </Button>
          </div>
        </PageSection>
      </section>

      <PageSection>
        <p className="eyebrow">Straight answers</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl uppercase tracking-tight md:text-4xl text-balance">
          Questions we get
        </h2>
        <FaqList items={faqs} className="mt-8" />
      </PageSection>
    </PageShell>
  );
};

IndexPage.path = '/';
