'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import { Logo } from '../../../assets/icons/logo';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center w-full h-16 py-2 gap-5">
      <Logo className="h-8" />

      <nav className="flex items-center gap-5">
        <Link
          href="/events"
          className={twMerge(
            'text-sm font-medium text-white transition-colors hover:text-gray-100',
            pathname !== '/events' && 'text-gray-200'
          )}
        >
          Events
        </Link>
        <Link
          href="/participants"
          className={twMerge(
            'text-sm font-medium text-white transition-colors hover:text-gray-100',
            pathname !== '/participants' && 'text-gray-200'
          )}
        >
          Participants
        </Link>
      </nav>
    </header>
  );
};
