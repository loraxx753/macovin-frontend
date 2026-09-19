import { ReactNode } from 'react';
import { SiteHeader } from '@/components/Organisms/SiteHeader';
import { SiteFooter } from '@/components/Organisms/SiteFooter';

type PageShellProps = {
  children: ReactNode;
  /** When true, content starts under a transparent header over a hero. */
  overlayHeader?: boolean;
};

export function PageShell({ children, overlayHeader = false }: PageShellProps) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-paper text-ink">
      <SiteHeader />
      <main className={overlayHeader ? 'flex-1' : 'flex-1 pt-20'}>{children}</main>
      <SiteFooter />
    </div>
  );
}
