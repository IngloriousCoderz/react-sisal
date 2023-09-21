// hoisting

let a = 2;
console.log(typeof a);

let b = 3;
b = 4;
console.log(b);

const c = 5;
console.log(typeof c);
// c = 6;

console.log(typeof NaN);

const message = "It's easy!";
const html = '<div class="hello">hello!</div>';
console.log(typeof message, typeof html);

const iLikeIt = true;
console.log(typeof iLikeIt);

const obj = {};
console.log(typeof obj);

const arr = [];
console.log(typeof arr, Array.isArray(arr));

const likesIceCream = null;
console.log(typeof null);

const noDef = null;
console.log(typeof undefined);

console.log(a == b);
console.log(3 == 3);
console.log(3 == "3.0");

console.log(3 === 3);
console.log(3 === "3.0");

console.log(noDef == null);

const emptyString = "";
console.log(!!emptyString);
