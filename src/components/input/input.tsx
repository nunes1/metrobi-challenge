import React from 'react';

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ type, value, placeholder, onChange, ...rest }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="border p-2"
      placeholder={placeholder}
      {...rest}
    />
  );
};
