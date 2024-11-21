'use client';

import { Button } from '@/components/button';
import { useState, useEffect } from 'react';

export default function Page() {
  const [achillesPos, setAchillesPos] = useState(1);
  const [tortoisePos, setTortoisePos] = useState(10);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= 10) return;

    const interval = setInterval(() => {
      setStep((prevStep) => prevStep + 1);
    }, 700);

    const distanceToTortoise = tortoisePos - achillesPos;
    const newAchillesPos = achillesPos + distanceToTortoise / 2;

    const newTortoisePos = tortoisePos + (tortoisePos < 14 ? 1 : 0.1);

    setAchillesPos(newAchillesPos);
    setTortoisePos(newTortoisePos);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const handleRestart = () => {
    setAchillesPos(1);
    setTortoisePos(10);
    setTimeout(() => {
      setStep(0);
    }, 1000);
  };

  return (
    <div className="container mx-auto text-center">
      <h1 className="pt-6 text-center">Question 6:</h1>
      <p className="text-center">
        Write the code that animates “Zeno&apos;s Paradox of Achilles and the
        Tortoise” on an interface
      </p>
      <div className="relative mx-auto my-6 w-3/4 h-20 border border-gray-400 bg-white rounded overflow-hidden">
        <div
          className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center transition-all duration-700"
          style={{ left: `${tortoisePos * 7 - 7}%` }}
        >
          🐢
        </div>

        <div
          className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center transition-all duration-700"
          style={{ left: `${achillesPos * 7 - 7}%` }}
        >
          🏃
        </div>
      </div>
      <Button handleClick={handleRestart} disabled={step < 10}>
        Restart
      </Button>
    </div>
  );
}
