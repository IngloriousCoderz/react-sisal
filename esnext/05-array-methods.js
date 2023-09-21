const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

// indexes

{
  for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    console.log(i, item);
  }
}

// for-of

{
  for (const item of numbers) {
    const index = numbers.indexOf(item);
    console.log(item, index);
  }
}

// forEach

{
  numbers.forEach((item, index, arr) => {
    console.log(item);
  });

  numbers.forEach(console.log);
}

// squares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

{
  const squares = []; // initialize
  numbers.forEach((item) => {
    squares.push(square(item)); // accumulate
  });
  console.log(squares); // return
}

{
  const squares = numbers.map((item) => square(item));
  console.log(squares);
}

// short-circuit
// more concise
// more readable
// more declarative

{
  const squares = numbers.map(square);
  console.log(squares);
}

// evens: [1, 2, 3, 4, 5] -> [2, 4]

{
  const evens = []; // initialize
  numbers.forEach((item) => {
    if (isEven(item)) {
      evens.push(item); // accumulate
    }
  });
  console.log(evens); // return
}

{
  const evens = numbers.filter(isEven);
  console.log(evens);
}

// firstEven: [1, 2, 3, 4, 5] -> 2

{
  let firstEven = undefined; // initialize
  numbers.forEach((item) => {
    if (firstEven == null && isEven(item)) {
      firstEven = item;
    }
  });
  console.log(firstEven); // return
}

{
  let firstEven = undefined;
  for (let i = 0; firstEven == null && i < numbers.length; i++) {
    const item = numbers[i];
    if (isEven(item)) {
      firstEven = item;
    }
  }
  console.log(firstEven);
}

{
  const firstEven = numbers.find(isEven);
  console.log(firstEven);
}

{
  const firstEvenIndex = numbers.findIndex(isEven);
  console.log(firstEvenIndex);
}

// hasEven: [1, 2, 3, 4, 5] -> true

{
  let hasEven = false; // initialize
  numbers.forEach((item) => {
    if (isEven(item)) {
      hasEven = true; // accumulate
    }
  });
  console.log(hasEven); // return
}

{
  const hasEven = numbers.some(isEven);
  console.log(hasEven);
}

// allEven: [1, 2, 3, 4, 5] -> false

{
  let allEven = true; // initialize
  numbers.forEach((item) => {
    if (!isEven(item)) {
      allEven = false; // accumulate
    }
  });
  console.log(allEven); // return
}

{
  const allEven = numbers.every(isEven);
  console.log(allEven);
}

{
  const allEven = numbers.reduce((acc, item) => {
    if (!isEven(item)) {
      acc = false;
    }
    return acc;
  }, true);
  console.log(allEven);
}

// add: [1, 2, 3, 4, 5] -> 15

{
  let total = 0; // initialize
  numbers.forEach((item) => {
    total += item; // accumulation
  });
  console.log(total); // return
}

{
  const [firstItem, ...rest] = numbers;
  let total = firstItem; // initialize
  rest.forEach((item) => {
    total += item; // accumulation
  });
  console.log(total); // return
}

{
  const total = numbers.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  console.log(total);
}

{
  const total = numbers.reduce((acc, item) => {
    acc += item;
    return acc;
  });
  console.log(total);
}

{
  const total = numbers.reduce(sum);
  console.log(total);
}

// sumOfSquareEvens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

{
  let sumOfSquareEvens = 0;
  numbers.forEach((item) => {
    if (isEven(item)) {
      sumOfSquareEvens += square(item);
    }
  });
  console.log(sumOfSquareEvens);
}

{
  // O(n)
  const sumOfSquareEvens = numbers.reduce((acc, item) => {
    if (isEven(item)) {
      acc += square(item);
    }
    return acc;
  }, 0);
  console.log(sumOfSquareEvens);
}

{
  // O(n)
  const evens = numbers.filter(isEven);
  const squares = evens.map(square);
  const sumOfEvenSquares = squares.reduce(sum);
  console.log(sumOfEvenSquares);
}

{
  // O(n)
  const sumOfEvenSquares = numbers.filter(isEven).map(square).reduce(sum);
  console.log(sumOfEvenSquares);
}
