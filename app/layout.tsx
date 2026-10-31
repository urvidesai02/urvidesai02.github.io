import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from './theme-provider';

export const metadata: Metadata = {
  title: 'Urvi Desai — ML Engineer',
  description: 'ML Systems Engineer & Researcher. Building agent-first architectures, distributed data systems, and interpretable ML models.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
