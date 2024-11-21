import { PropsWithChildren } from 'react';

export const NavMenu: React.FC<PropsWithChildren> = ({ children }) => {
  return <ul className="flex space-x-4 font-semibold gap-2">{children}</ul>;
};
