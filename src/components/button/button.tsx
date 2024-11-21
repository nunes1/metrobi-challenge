import { PropsWithChildren } from 'react';

interface InputProps {
  handleClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<PropsWithChildren<InputProps>> = ({
  handleClick,
  disabled,
  children,
}) => {
  return (
    <button
      className="bg-primary-500 text-white p-2 rounded-lg ml-2 hover:bg-primary-700 disabled:bg-gray-400"
      onClick={handleClick}
      disabled={!!disabled}
    >
      {children}
    </button>
  );
};
