'use client';

import { useState } from 'react';
import { checkValidBrackets } from '@/utils/utils';
import { Input } from '@/components/input';

export default function Page() {
  const [input, setInput] = useState('{[]}');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    try {
      if (checkValidBrackets(value)) {
        setError('');
      } else {
        setError('These brackets are not valid.');
      }
    } finally {
      setInput(value);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="pt-6 text-center">Question 4:</h1>
      <p className="text-center">
        Write an efficient method that tells us whether or not an input string
        brackets <br />
        {'"{", "}", "(", ")", "[", "]"'} opened and closed properly. Example:{' '}
        {'“{[]}” => true, “{(])}” => false, “{([)]}” => false'}
      </p>
      <div className="text-center pt-4 flex flex-col w-2/5 mx-auto gap-4">
        <label>Input Array:</label>
        <Input
          type="text"
          value={input}
          onChange={handleChange}
          className="border p-2"
          placeholder="Enter the brackets"
        />
        {error ? (
          <p className="text-red-500 h-10 content-center">{error}</p>
        ) : (
          <p className="text-green-500 h-10 content-center">
            {'✅ Valid brackets'}
          </p>
        )}
      </div>
    </div>
  );
}
