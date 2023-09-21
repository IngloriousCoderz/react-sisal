const numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]);
numbers[2] = 6;
console.log(numbers);

// stack
numbers.push(7);
console.log(numbers);
numbers.pop();
console.log(numbers);

// queue
numbers.shift();
console.log(numbers);

numbers.splice(1, 2, 7, 8, 9);
console.log(numbers);

const sliced = numbers.slice(1, 3);
console.log(sliced, numbers);

// destructuring

{
  const firstElement = numbers[0];
  const secondElement = numbers[1];
  const lastElement = numbers[numbers.length - 1];
  console.log(firstElement, secondElement, lastElement);
}

{
  const [firstElement, , thirdElement, ...restOfNumbers] = numbers;
  const lastElement = numbers[numbers.length - 1];
  console.log(firstElement, thirdElement, lastElement, restOfNumbers);
}

{
  const vector = [2, 3];
  // const x = vector[0]
  // const y = vector[1]
  const [x, y] = vector;
}

{
  const numbers = [1, 2, 3, 4, 5];
  delete numbers[2];
  console.log(numbers);
  console.log(numbers.length);
}

{
  const incremented = [...numbers, 10];
  console.log(incremented, numbers);
}
