import { useEffect, useId, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const;

function linkClass({ isActive }: { isActive: boolean }) {
  return cn(
    'block rounded-md px-3 py-2.5 text-base font-medium no-underline transition md:inline-flex md:px-3 md:py-1.5 md:text-sm',
    isActive
      ? 'bg-ink/5 text-ink'
      : 'text-ink/70 hover:bg-ink/5 hover:text-ink',
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 md:gap-6 md:px-8 md:py-5">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="relative z-40 font-display text-xl font-semibold tracking-tight text-ink no-underline hover:text-ink"
        >
          Macovin
        </NavLink>

        <button
          type="button"
          className="relative z-40 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink ring-1 ring-ink/15 transition hover:bg-ink/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-path md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span
              className={cn(
                'block h-0.5 w-full origin-center bg-ink transition',
                open && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-full bg-ink transition',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-full origin-center bg-ink transition',
                open && '-translate-y-2 -rotate-45',
              )}
            />
          </span>
        </button>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={'end' in link ? link.end : false}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-30 md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <button
          type="button"
          className={cn(
            'absolute inset-0 bg-ink/25 transition-opacity',
            open ? 'opacity-100' : 'opacity-0',
          )}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={closeMenu}
        />
        <nav
          id={menuId}
          aria-label="Primary"
          className={cn(
            'absolute inset-x-0 top-0 border-b border-ink/10 bg-paper px-4 pb-6 pt-20 shadow-sm transition-transform duration-200',
            open ? 'translate-y-0' : '-translate-y-full',
          )}
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={'end' in link ? link.end : false}
                  className={linkClass}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
