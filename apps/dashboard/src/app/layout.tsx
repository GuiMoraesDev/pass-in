import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../styles/globals.css';
import { twMerge } from 'tailwind-merge';

import { Header } from '../components/molecules/Header';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
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
    <html lang="en">
      <body
        className={twMerge(
          'bg-zinc-950 text-white antialiased',
          roboto.className
        )}
      >
        <div className="container mx-auto flex overflow-hidden items-start w-full h-[100dvh] flex-col gap-5 py-5 px-8">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
