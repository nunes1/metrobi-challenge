/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { writeItemsWithDelay } from '@/utils/utils';
import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function Page() {
  const [input, setInput] = useState('["a", "b", "c", "d"]');
  const [items, setItems] = useState<any[] | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
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
    }
  };

  const handleAdd = (item: any) => {
    setItems((prevState) => {
      if (prevState) {
        return [...prevState, item];
      }
      return [item];
    });
  };

  const handleArray = () => {
    setItems(null);
    setIsRunning(true);
    writeItemsWithDelay(JSON.parse(input), handleAdd).then(() => {
      setIsRunning(false);
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="pt-6 text-center">Question 2:</h1>
      <p className="text-center">
        Write an async javascript function that writes every item in any given
        array with 1, 2, 4, 8, etc., seconds apart.
      </p>
      <div className="text-center pt-4 flex flex-col w-2/5 mx-auto gap-4">
        <label>Input Array:</label>
        <Input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter an array"
        />
        {error ? (
          <p className="text-red-500 h-10 content-center">{error}</p>
        ) : (
          <Button handleClick={handleArray} disabled={!!isRunning}>
            {items === null ? 'Start' : 'Restart'}
          </Button>
        )}
      </div>
      {items && (
        <div className="text-center pt-4">
          <p>Output:</p>
          <ul>
            {items.map((item, index) => {
              return (
                <li key={index}>
                  Item: {item} / {Math.pow(2, index)} seconds
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
