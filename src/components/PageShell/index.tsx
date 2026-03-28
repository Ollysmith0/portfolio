import type { PropsWithChildren } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CinematicBackdrop from '@/components/CinematicBackdrop';

type PageShellProps = PropsWithChildren<{
  mainClassName?: string;
}>;

export default function PageShell({ children, mainClassName = '' }: PageShellProps) {
  return (
    <div className="site-shell">
      <CinematicBackdrop />
      <Header />
      <main className={`relative z-10 ${mainClassName}`.trim()}>{children}</main>
      <Footer />
    </div>
  );
}