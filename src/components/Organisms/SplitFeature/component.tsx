import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Photo, PhotoCredit } from '@/components/Atoms/Photo';
import { PhotoCreditKey } from '@/lib/photos';

type Props = {
  photo: PhotoCreditKey;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  /** Photo on the right on desktop when true */
  reverse?: boolean;
  className?: string;
  priority?: boolean;
};

export function SplitFeature({
  photo,
  eyebrow,
  title,
  children,
  reverse,
  className,
  priority,
}: Props) {
  return (
    <div
      className={cn(
        'grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16',
        className,
      )}
    >
      <div className={cn(reverse && 'md:order-2')}>
        <figure>
          <div className="overflow-hidden rounded-sm shadow-[0_20px_50px_-28px_rgba(20,28,36,0.55)]">
            <Photo
              id={photo}
              priority={priority}
              className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>
          <PhotoCredit id={photo} />
        </figure>
      </div>
      <div className={cn(reverse && 'md:order-1')}>
        {eyebrow ? (
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl text-balance">
          {title}
        </h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/75 md:text-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
