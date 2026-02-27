import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Muhammed Sinan PT | Strategic Data Analytics',
  description: 'Transforming complex data into decision-making clarity. Specialist in KPI modeling, revenue analytics, and strategic business insights.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#f8f9fc] text-slate-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
