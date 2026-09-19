export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-mist/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-ink/65 md:flex-row md:items-center md:justify-between md:px-8">
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
