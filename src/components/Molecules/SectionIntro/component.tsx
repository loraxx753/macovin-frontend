import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
  as?: 'h1' | 'h2';
};

export function SectionIntro({
  eyebrow,
  title,
  children,
  className,
  as: Heading = 'h2',
}: SectionIntroProps) {
  return (
    <header className={cn('max-w-2xl', className)}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl text-balance">
        {title}
      </Heading>
      {children ? (
        <div className="mt-4 text-lg leading-relaxed text-ink/75 text-pretty">
          {children}
        </div>
      ) : null}
    </header>
  );
}
