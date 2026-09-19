export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-dusk text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-14">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">Macovin</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/70">
            Clear apps and informative websites for people when life gets hard.
            Macovin is the company. Meanwhile is the factory.
          </p>
        </div>
        <div className="space-y-3 text-sm text-paper/70 md:text-right">
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
          <p className="text-xs text-paper/45">
            Photos via Unsplash (credited on each page).
          </p>
        </div>
      </div>
    </footer>
  );
}
