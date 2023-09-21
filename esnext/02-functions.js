// function declaration (top-level functions)
// hoisting

{
  function sum(a, b) {
    return a + b;
  }

  console.log(sum(2, 3));
}

// function expression (no use)

{
  const sum = function (a, b) {
    return a + b;
  };

  console.log(sum(2, 3));
}

// arrow function (callbacks)

{
  const sum = (a, b) => a + b; // sum: (a, b) -> a + b

  console.log(sum(2, 3));
}

// rest parameters

{
  console.log(sum(1, 2, 3));

  function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
}
