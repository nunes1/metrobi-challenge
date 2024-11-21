/* eslint-disable @typescript-eslint/no-explicit-any */

// QUESTION 1
export function findDuplicateItems(arrayToFindDuplicate: any[]): any[] {
  const seenSet = new Set();
  const duplicatesSet = new Set();

  for (const item of arrayToFindDuplicate) {
    if (seenSet.has(item)) {
      duplicatesSet.add(item);
    } else {
      seenSet.add(item);
    }
  }

  return Array.from(duplicatesSet);
}

// QUESTION 2
export async function writeItemsWithDelay(
  itemsArray: any[],
  callbackToWrite: (item: any) => void
) {
  for (let i = 0; i < itemsArray.length; i++) {
    await new Promise((resolve) => {
      setTimeout(
        () => resolve(callbackToWrite(itemsArray[i])),
        Math.pow(2, i) * 1000
      );
    });
  }
}

// QUESTION 4
export function checkValidBrackets(bracketsString: string): boolean {
  const stack: string[] = [];
  const bracketMap = new Map<string, string>([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  for (const char of bracketsString) {
    if (!bracketMap.has(char)) {
      stack.push(char);
    } else {
      const expectedBracket = bracketMap.get(char);
      if (stack.length === 0 || stack.pop() !== expectedBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function calculateBestStart(totalFloors: number): number {
  let startFloor = 0;
  let sum = 0;

  while (sum < totalFloors) {
    startFloor++;
    sum += startFloor;
  }

  return startFloor;
}

// QUESTION 5
export function findHighestSafeFloor(highestSafeFloor: number) {
  const TOTAL_FLOORS = 100;
  const bestStart = calculateBestStart(TOTAL_FLOORS);
  const steps = [];

  let increment = bestStart;
  let currentFloor = 0;

  while (currentFloor + increment <= TOTAL_FLOORS) {
    currentFloor += increment;
    if (currentFloor > highestSafeFloor) {
      steps.push({ egg: 'first', floor: currentFloor, status: 'unsafe' });
      currentFloor -= increment;
      break;
    }
    steps.push({ egg: 'first', floor: currentFloor, status: 'safe' });
    increment--;
  }

  const startFloor = currentFloor;
  for (let floor = startFloor + 1; floor <= TOTAL_FLOORS; floor++) {
    if (floor > highestSafeFloor) {
      steps.push({ egg: 'second', floor, status: 'unsafe' });
      return {
        highestSafeFloor: floor - 1,
        steps,
        bestStart,
      };
    }
    steps.push({ egg: 'second', floor, status: 'safe' });
  }

  return {
    highestSafeFloor: TOTAL_FLOORS,
    steps,
    bestStart,
  };
}

type CarrotType = {
  kg: number;
  price: number;
};

export type MaxValueResult = {
  maxValue: number;
  usedCarrots: number[];
};

// QUESTION 7
export function getMaxValue(
  carrotTypes: CarrotType[],
  capacity: number
): MaxValueResult {
  const dp = new Array(capacity + 1).fill(0);
  const usedCarrots = new Array(carrotTypes.length).fill(0);

  for (let i = 0; i < carrotTypes.length; i++) {
    const carrot = carrotTypes[i];
    for (let w = carrot.kg; w <= capacity; w++) {
      const newValue = dp[w - carrot.kg] + carrot.price;
      if (newValue > dp[w]) {
        dp[w] = newValue;
      }
    }
  }

  let remainingCapacity = capacity;
  for (let i = carrotTypes.length - 1; i >= 0; i--) {
    const carrot = carrotTypes[i];
    while (
      remainingCapacity >= carrot.kg &&
      dp[remainingCapacity] === dp[remainingCapacity - carrot.kg] + carrot.price
    ) {
      usedCarrots[i]++;
      remainingCapacity -= carrot.kg;
    }
  }

  return { maxValue: dp[capacity], usedCarrots };
}
