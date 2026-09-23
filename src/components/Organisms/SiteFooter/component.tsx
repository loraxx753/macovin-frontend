import { Link } from 'react-router-dom';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-dusk text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.5fr_1fr_1fr] md:px-8 md:py-16">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            Macovin
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/70 md:text-base">
            Clear apps and sites for people when life gets hard. We&apos;re a
            small family company. Meanwhile is the factory.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
            On this site
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="font-medium text-paper no-underline hover:text-ember"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm text-paper/70">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ember">
            Elsewhere
          </p>
          <p>
            <a
              href="https://github.com/MeanwhileJS/meanwhile"
              className="font-medium text-paper no-underline hover:text-ember"
              target="_blank"
              rel="noreferrer"
            >
              Meanwhile on GitHub
            </a>
          </p>
          <p>
            <a
              href="https://github.com/loraxx753/macovin"
              className="font-medium text-paper no-underline hover:text-ember"
              target="_blank"
              rel="noreferrer"
            >
              Company docs
            </a>
          </p>
          <p className="pt-2 text-xs text-paper/45">
            Photos via Unsplash (credited on each page).
          </p>
        </div>
      </div>
    </footer>
  );
}
