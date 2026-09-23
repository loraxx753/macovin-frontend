import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cn } from '@/lib/utils';

const base =
  'inline-flex min-h-tap items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition duration-press focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60';

const variants = {
  primary: 'bg-ember text-paper hover:bg-ink',
  secondary: 'bg-transparent text-ink ring-1 ring-ink/20 hover:bg-mist/80',
  ghost: 'bg-transparent text-ember hover:bg-mist/60',
} as const;

type Variant = keyof typeof variants;

type Common = {
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined };

type ButtonAsLink = Common & LinkProps & { href?: undefined };

type ButtonAsAnchor = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & { to?: undefined; href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const { variant = 'primary', className, children, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if ('to' in rest && rest.to !== undefined) {
    const { to, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button type={buttonRest.type ?? 'button'} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
