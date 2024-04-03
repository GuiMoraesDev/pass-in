'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { type AnchorHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { Logo } from '../../../assets/icons/logo';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center w-full h-16 py-2 gap-5">
      <Logo className="h-8" />

      <nav className="flex items-center gap-5">
        <NavLink href="/events" isActive={pathname === '/events'}>
          Events
        </NavLink>
        <NavLink href="/participants" isActive={pathname === '/participants'}>
          Participants
        </NavLink>
      </nav>
    </header>
  );
};

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    isActive?: boolean;
  };

const NavLink = ({ isActive, className, ...props }: NavLinkProps) => (
  <Link
    data-isActive={isActive}
    className={twMerge(
      'text-sm font-medium text-white transition-colors hover:text-gray-100',
      'before:content-[">"] before:mr-2 before:text-transparent',
      "data-[isActive='true']:text-gray-100 data-[isActive='true']:before:text-gray-400",
      className
    )}
    {...props}
  />
);
