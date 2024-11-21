import clsx from 'clsx';

interface RelatedImagesProps {
  className?: string;
}

export const RelatedImages = ({ className }: RelatedImagesProps) => {
  return (
    <div className={clsx('bg-green-700 text-center text-white text-lg h-full', className ?? 'w-full')}>
      Related Images
    </div>
  );
};
