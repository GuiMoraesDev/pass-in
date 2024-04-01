import type { Metadata } from 'next';
import { Lato, Fira_Sans } from 'next/font/google';
import '../styles/globals.css';
import { twMerge } from 'tailwind-merge';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
});

const firaSans = Fira_Sans({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-fira',
});

export const metadata: Metadata = {
  title: 'Pass-in',
  description:
    'Pass-in is a platform that allows you to create and share your own custom passes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth min-w-80">
      <body
        className={twMerge(
          'flex h-[100dvh] w-full flex-col items-center gap-3 overflow-x-hidden bg-plum-900 text-white',
          lato.className,
          firaSans.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
