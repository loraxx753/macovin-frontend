import { cn } from '@/lib/utils';

export type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: readonly FaqItem[];
  className?: string;
};

export function FaqList({ items, className }: Props) {
  return (
    <div className={cn('divide-y divide-border border-y border-border', className)}>
      {items.map((item) => (
        <details key={item.question} className="group py-4 md:py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-display text-xl font-semibold tracking-tight text-ink marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="text-balance">{item.question}</span>
            <span
              aria-hidden
              className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary-soft text-lg leading-none text-secondary-fg ring-1 ring-secondary/35 transition group-open:rotate-45 group-open:bg-tertiary group-open:text-tertiary-fg group-open:ring-tertiary"
            >
              +
            </span>
          </summary>
          <p className="measure mt-3 max-w-2xl text-base leading-relaxed text-ink-muted text-pretty">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
