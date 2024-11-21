'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface NavItemProps {
  href?: string;
}

export const NavItem: React.FC<PropsWithChildren<NavItemProps>> = ({
  href,
  children,
}) => {
  const currentPath = usePathname();

  const isActive = currentPath === href;

  return (
    <li>
      <Link
        href={href ?? '#'}
        className={
          isActive
            ? 'text-primary-400'
            : 'text-primary-800 hover:text-primary-500'
        }
      >
        {children}
      </Link>
    </li>
  );
};
