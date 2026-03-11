import type { Metadata } from 'next';
import { Syne, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Technical Lifts - Best Gym in Vikaspuri | Personal Training',
  description:
    'Join Technical Lifts, the top-rated gym in Vikaspuri. Certified personal trainers, full equipment, proven transformations. Book your free trial today.',
  keywords: [
    'gym in vikaspuri',
    'best gym vikaspuri',
    'personal training vikaspuri',
    'fitness center vikaspuri',
  ],
  openGraph: {
    title: 'Technical Lifts - Best Gym in Vikaspuri | Personal Training',
    description:
      'Join Technical Lifts, the top-rated gym in Vikaspuri. Certified personal trainers, full equipment, proven transformations. Book your free trial today.',
    type: 'website',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(syne.variable, inter.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
