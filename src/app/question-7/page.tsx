'use client';

import { useState } from 'react';
import { getMaxValue, MaxValueResult } from '@/utils/utils';
import { Input } from '@/components/input';
import { Button } from '@/components/button';

export default function Page() {
  const [carrotsInput, setCarrotsInput] = useState(
    '[{"kg": 5, "price": 100}, {"kg": 7, "price": 150}, {"kg": 3, "price": 70}]'
  );
  const [capacityInput, setCapacityInput] = useState(36);
  const [output, setOutput] = useState<MaxValueResult | null>();
  const [error, setError] = useState('');

  const handleCarrotsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    try {
      const parsed = JSON.parse(value);
      if (
        Array.isArray(parsed) &&
        parsed.every(
          (item) =>
            typeof item === 'object' &&
            item !== null &&
            'kg' in item &&
            'price' in item &&
            typeof item.kg === 'number' &&
            typeof item.price === 'number'
        )
      ) {
        setError('');
      } else {
        setError(
          'Input must be an Array of objects with "kg" (number) and "price" (number).'
        );
        setOutput(null);
      }
    } catch {
      setError('Invalid JSON format.');
      setOutput(null);
    } finally {
      setCarrotsInput(value);
    }
  };

  const handleCapacityInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(e.target.value);
    setCapacityInput(value);

    if (value < 1 || value > 100) {
      setError('Capacity value must be between 1 and 100');
      return;
    }

    setError('');
    setOutput(null);
  };

  const handleMaxValue = () => {
    setOutput(getMaxValue(JSON.parse(carrotsInput), capacityInput));
  };

  return (
    <div className="container mx-auto">
      <h1 className="pt-6 text-center">Question 7:</h1>
      <p className="text-center">
        Think that you have an unlimited number of carrots, but a limited number
        of carrot types. Also, you have one bag that can hold a limited weight.
        Each type of carrot has a weight and a price. Write a function that
        takes carrotTypes and capacity and return the maximum value the bag can
        hold.
      </p>
      <div className="text-center pt-4 flex flex-col w-2/5 mx-auto gap-4">
        <label>Input Carrots Array:</label>
        <Input
          type="text"
          value={carrotsInput}
          onChange={handleCarrotsInputChange}
          placeholder="Enter an array of carrots"
        />
        <label>Input Capacity of bag:</label>
        <Input
          type="number"
          value={capacityInput}
          onChange={handleCapacityInputChange}
          min={1}
          max={100}
          placeholder="Enter the capacity"
        />
        {error ? (
          <p className="text-red-500 h-10 content-center">{error}</p>
        ) : (
          <Button handleClick={handleMaxValue} disabled={!!error}>
            Find Max Value
          </Button>
        )}
      </div>
      {output && (
        <div className="text-center pt-4">
          <p>{`Max Value: ${output.maxValue}`}</p>
          {output.usedCarrots.map((quantity, index) => {
            const currentCarrot = JSON.parse(carrotsInput);
            return (
              <p key={index}>
                {`${currentCarrot[index]?.kg} kg - $${currentCarrot[index].price}: ${quantity} 🥕`}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
