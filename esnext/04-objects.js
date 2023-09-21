const person = {
  firstName: "Matteo Antony",
  "last-name": "Mistretta",
};
// dot notation
console.log(person.firstName);
// square bracket notation
console.log(person["last-name"]);

const propertyName = "firstName";
console.log(person[propertyName]);

for (let key in person) {
  console.log(key, person[key]);
}

person.age = 40;
console.log(person);
person.age = 41;
console.log(person);

delete person.age;
console.log(person);

// destructuring

{
  const firstName = person.firstName;
  const lastName = person["last-name"];
  console.log(firstName, lastName);
}

{
  const { firstName, "last-name": lastName } = person;
  console.log(firstName, lastName);
}

{
  person.age = 40;
  const { firstName, ...restOfProperties } = person;
  console.log(firstName, restOfProperties);
}

{
  const newPerson = {
    ...person,
    firstName: "Luca Jonathan",
    age: 43,
  };
  console.log(newPerson, person);
}
