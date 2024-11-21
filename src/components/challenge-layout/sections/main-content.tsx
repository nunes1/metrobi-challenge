import clsx from "clsx";

interface MainContentProps {
  className?: string;
}

export const MainContent = ({className}: MainContentProps) => {
  return (
    <div className={clsx('bg-yellow-400 text-center text-white text-lg w-full', className ?? 'h-full')}>
      Main Content
    </div>
  );
};
