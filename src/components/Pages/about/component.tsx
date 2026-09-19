import { PageComponentType } from '@/lib/types';
import { PageShell } from '@/components/Organisms/PageShell';
import { SectionIntro } from '@/components/Molecules/SectionIntro';

export const AboutPage: PageComponentType = () => {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <SectionIntro eyebrow="About" title="How we work">
          <p>
            Macovin is a small family company. Meanwhile is the factory. We
            ship real websites and apps, and we keep design, engineering, and
            testing on the same words for the same thing.
          </p>
        </SectionIntro>

        <div className="mt-14 max-w-3xl space-y-12">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              Name a thing once
            </h3>
            <p className="mt-3 leading-relaxed text-ink/75">
              That&apos;s how we refuse to play telephone. Design, engineering,
              and testing use the same words for the same look. The next seat
              gets the last output and the first sentence, so the whisper
              can&apos;t start.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              Build from the story
            </h3>
            <p className="mt-3 leading-relaxed text-ink/75">
              We start from a short story in plain language (Given / When /
              Then). Tickets, docs, and tests are a byproduct. Same words, not
              a second project.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              Prove it with a clock
            </h3>
            <p className="mt-3 leading-relaxed text-ink/75">
              What we actually shipped, and how long it took. Live products
              keep the pointing honest and the language real. Pointing without
              a shared language is only a speech. A shared language without
              shipping is only a longer week.
            </p>
          </div>
        </div>

        <p className="mt-16 max-w-2xl text-sm leading-relaxed text-ink/60">
          Longer why lives in the company docs (
          <a
            href="https://github.com/loraxx753/macovin"
            target="_blank"
            rel="noreferrer"
          >
            loraxx753/macovin
          </a>
          ). The factory is{' '}
          <a
            href="https://github.com/MeanwhileJS/meanwhile"
            target="_blank"
            rel="noreferrer"
          >
            Meanwhile
          </a>
          .
        </p>
      </section>
    </PageShell>
  );
};

AboutPage.path = '/about';
