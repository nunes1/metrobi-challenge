'use client';

import { useState } from 'react';
import { findHighestSafeFloor } from '@/utils/utils';
import { Input } from '@/components/input';

interface highestSafeFloorType {
  highestSafeFloor: number;
  steps: { egg: string; floor: number; status: string }[];
  bestStart: number;
}

export default function Page() {
  const [input, setInput] = useState(42);

  const [output, setOutput] = useState<highestSafeFloorType | null>(
    findHighestSafeFloor(input)
  );
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setInput(value);

    if (value < 1 || value > 100) {
      setError('Value must be between 1 and 100');
      return;
    }

    setError('');
    setOutput(findHighestSafeFloor(value));
  };

  return (
    <div className="container mx-auto">
      <h1 className="pt-6 text-center">Question 5:</h1>
      <p className="text-center">
        A building has 100 floors. One of the floors is the highest floor an egg
        can be dropped from without breaking. If an egg is dropped from above
        that floor, it will break. If it is dropped from that floor or below, it
        will be completely undamaged and you can drop the egg again. Given two
        eggs, find the highest floor an egg can be dropped from without
        breaking, with as few drops as possible in the worst-case scenario.
      </p>
      <div className="text-center pt-4 flex flex-col w-2/5 mx-auto gap-4">
        <label>Highest safe floor:</label>
        <Input
          type="number"
          value={input}
          onChange={handleChange}
          min={1}
          max={100}
          className="border p-2"
          placeholder="Enter an brackets"
        />
        {error ? (
          <p className="text-red-500 h-10 content-center">{error}</p>
        ) : output ? (
          <div>
            <p>{`Highest safe floor: ${output.highestSafeFloor}`}</p>
            <p className="py-4">{`Best start: ${output.bestStart}`}</p>
            <div className="flex flex-col gap-4">
              {output.steps.map((step, index) => (
                <p key={index}>
                  {`Step ${index + 1}: Drop ${step.egg} egg from floor ${
                    step.floor
                  } - ${step.status === 'safe' ? '🥚' : '❌'}`}
                </p>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
