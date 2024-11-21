import clsx from 'clsx';

interface RelatedPostsProps {
  className?: string;
}

export const RelatedPosts = ({ className }: RelatedPostsProps) => {
  return (
    <div className={clsx('bg-pink-300 text-center text-white text-lg h-full', className ?? 'w-full')}>
      Related Posts
    </div>
  );
};
