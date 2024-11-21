import Image from 'next/image';
import { NavMenu, NavItem } from './navigation';
import Link from 'next/link';

export const Header = () => {
  return (
    <nav className="bg-primary-100 h-20 content-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={'/'}>
          <Image src={'/logo.png'} alt="Logo" width={140} height={35} />
        </Link>
        <NavMenu>
          <NavItem href="/question-1">Question 1</NavItem>
          <NavItem href="/question-2">Question 2</NavItem>
          <NavItem href="/question-3">Question 3</NavItem>
          <NavItem href="/question-4">Question 4</NavItem>
          <NavItem href="/question-5">Question 5</NavItem>
          <NavItem href="/question-6">Question 6</NavItem>
          <NavItem href="/question-7">Question 7</NavItem>
        </NavMenu>
      </div>
    </nav>
  );
};
