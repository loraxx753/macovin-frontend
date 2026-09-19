import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  children,
  className,
}: SectionIntroProps) {
  return (
    <header className={cn('max-w-2xl', className)}>
        {eyebrow ? (
        <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl text-balance">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 text-lg leading-relaxed text-ink/75">{children}</div>
      ) : null}
    </header>
  );
}
