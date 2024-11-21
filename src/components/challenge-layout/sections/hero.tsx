import { clsx } from 'clsx';

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  return (
    <div className={clsx('bg-primary-200 text-center text-white text-lg w-full', className ?? 'h-full')}>
      Hero
    </div>
  );
};
