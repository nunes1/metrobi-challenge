import clsx from 'clsx';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={clsx('bg-green-400 text-center text-white text-lg w-full', className ?? 'h-full')}>
      Sidebar
    </div>
  );
};
