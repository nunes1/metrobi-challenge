import clsx from 'clsx';

interface ExtraContentProps {
  className?: string;
}

export const ExtraContent = ({ className }: ExtraContentProps) => {
  return (
    <div className={clsx('bg-gray-500 text-center text-white text-lg w-full', className ?? 'h-full')}>
      Extra Content
    </div>
  );
};
