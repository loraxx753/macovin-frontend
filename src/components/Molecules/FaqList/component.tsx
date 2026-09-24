import { cn } from '@/lib/utils';

export type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: readonly FaqItem[];
  className?: string;
  /** Flat paper FAQs, or ink panels on a cyan band */
  tone?: 'paper' | 'onCyan';
};

export function FaqList({ items, className, tone = 'paper' }: Props) {
  const onCyan = tone === 'onCyan';

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => (
        <details
          key={item.question}
          className={cn(
            'group',
            onCyan
              ? 'panel bg-surface open:bg-primary'
              : 'panel-flat bg-surface open:bg-primary-soft',
          )}
        >
          <summary
            className={cn(
              'flex cursor-pointer list-none items-start justify-between gap-4 px-4 py-4 text-left font-display text-lg uppercase tracking-tight text-ink marker:content-none md:px-5 md:text-xl [&::-webkit-details-marker]:hidden',
              onCyan && 'group-open:text-primary-fg',
            )}
          >
            <span className="text-balance">{item.question}</span>
            <span
              aria-hidden
              className={cn(
                'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center border-[2px] border-ink text-sm font-bold leading-none transition',
                onCyan
                  ? 'bg-secondary text-secondary-fg group-open:bg-ink group-open:text-primary group-open:rotate-45'
                  : 'bg-secondary text-secondary-fg group-open:rotate-45 group-open:bg-tertiary',
              )}
            >
              +
            </span>
          </summary>
          <p
            className={cn(
              'measure border-t-[3px] border-ink px-4 pb-4 pt-3 text-base leading-relaxed md:px-5 text-pretty',
              onCyan
                ? 'text-primary-fg/85 group-open:block'
                : 'text-ink-muted',
            )}
          >
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
