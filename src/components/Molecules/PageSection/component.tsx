import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function PageSection({ children, className, narrow }: Props) {
  return (
    <section
      className={cn(
        'mx-auto w-full px-4 py-14 md:px-8 md:py-24',
        narrow ? 'max-w-3xl' : 'max-w-6xl',
        className,
      )}
    >
      {children}
    </section>
  );
}
