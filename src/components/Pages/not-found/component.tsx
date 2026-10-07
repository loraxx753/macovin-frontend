import { PageComponentType } from '@/lib/types';
import { PageShell } from '@/components/Organisms/PageShell';
import { SectionIntro } from '@/components/Molecules/SectionIntro';
import { PageSection } from '@/components/Molecules/PageSection';
import { Button } from '@/components/Atoms/Button';

export const NotFoundPage: PageComponentType = () => {
  return (
    <PageShell>
      <PageSection className="md:py-24">
        <SectionIntro as="h1" eyebrow="404" title="Nothing here">
          <p>
            That page doesn&apos;t exist. Maybe the link&apos;s off, maybe it
            moved, maybe we never built it. No harm done.
          </p>
        </SectionIntro>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/" className="no-underline">
            Back home
          </Button>
          <Button to="/work" variant="secondary" className="no-underline">
            See the work
          </Button>
        </div>
      </PageSection>
    </PageShell>
  );
};

NotFoundPage.path = '*';
