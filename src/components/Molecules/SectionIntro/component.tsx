import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
  as?: 'h1' | 'h2';
  /** Paper (default) or dusk (light type on dark bands) */
  tone?: 'paper' | 'dusk';
};

export function SectionIntro({
  eyebrow,
  title,
  children,
  className,
  as: Heading = 'h2',
  tone = 'paper',
}: SectionIntroProps) {
  const dusk = tone === 'dusk';

  return (
    <header className={cn('max-w-2xl', className)}>
      {eyebrow ? (
        <p className={cn('eyebrow mb-3', dusk && 'text-primary')}>{eyebrow}</p>
      ) : null}
      <Heading
        className={cn(
          'font-display text-3xl uppercase tracking-tight sm:text-4xl text-balance',
          dusk ? 'text-surface' : 'text-ink',
        )}
      >
        {title}
      </Heading>
      {children ? (
        <div
          className={cn(
            'mt-4 text-lg leading-relaxed text-pretty',
            dusk ? 'text-surface/80' : 'text-ink-muted',
          )}
        >
          {children}
        </div>
      ) : null}
    </header>
  );
}
