/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { findDuplicateItems } from '@/utils/utils';
import { Input } from '@/components/input';
import { Button } from '@/components/button';

export default function Page() {
  const [input, setInput] = useState('[1, 2, 3, 4, 4, "ads"]');
  const [output, setOutput] = useState<any[] | null>();
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        setError('');
      } else {
        setError('Input must be an Array in JSON format.');
      }
    } catch {
      setError('Invalid JSON format.');
    } finally {
      setInput(value);
      setOutput(null);
    }
  };

  const handleArray = () => {
    setOutput(findDuplicateItems(JSON.parse(input)));
  };

  return (
    <div className="container mx-auto">
      <h1 className="pt-6 text-center">Question 1:</h1>
      <p className="text-center">
        Write a javascript function that finds the duplicate items in any given
        array.
      </p>
      <div className="text-center pt-4 flex flex-col w-2/5 mx-auto gap-4">
        <label>Input Array:</label>
        <Input
          type="text"
          value={input}
          placeholder="Enter an array"
          onChange={handleChange}
        />
        {error ? (
          <p className="text-red-500 h-10 content-center">{error}</p>
        ) : (
          <Button handleClick={handleArray} disabled={!!error}>
            Find Duplicates
          </Button>
        )}
      </div>
      {output && (
        <div className="text-center pt-4">
          <p>Dupicated Items:</p>
          {JSON.stringify(output, null, 2)}
        </div>
      )}
    </div>
  );
}
