export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-mist/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-ink/65 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <span className="font-display font-semibold text-ink">Macovin</span>
          {' '}is the company. Meanwhile is the factory.
        </p>
        <p>
          <a
            href="https://github.com/MeanwhileJS/meanwhile"
            className="font-medium text-path"
            target="_blank"
            rel="noreferrer"
          >
            Meanwhile on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
