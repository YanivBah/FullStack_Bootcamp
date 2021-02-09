const people = ['Greg','Mary','Devon','James'];

// Q1
console.log(`===Question1===`);
for (i = 0 ; i <= people.length - 1 ; i++) {
  console.log(people[i]);
}

// Q2
console.log(`===Question2===`);
people.splice(0, 1);
console.log(people);


// Q3
console.log(`===Question3===`);
people.splice(2, 1);
console.log(people);

// Q4
console.log(`===Question4===`);
people.unshift('Matt');
console.log(people);

// Q5
console.log(`===Question5===`);
people.push('Yaniv');
console.log(people);

// Q6
console.log(`===Question6===`);
for (i = 0 ; i <= people.length - 1 ; i++) {
  console.log(people[i]);
  if (people[i] === 'Mary') {
    break;
  }
}

// Q7
console.log(`===Question7===`);
const peopleQ7 = people.slice(2,4);
console.log(peopleQ7);

// Q8
console.log(`===Question8===`);
console.log(`Index of 'Mary' is ${people.indexOf('Mary')}`);

// Q9
console.log(`===Question9===`);
console.log(`Index of 'Foo' is ${people.indexOf('Foo')}`);

// Q10
console.log(`===Question10===`);
const peopleQ10 = ['Greg','Mary','Devon','James'];
console.log(peopleQ10);
peopleQ10.splice(2, 1, "Elizabeth", "Artie");
console.log(peopleQ10);

// Q11
console.log(`===Question11===`);
const withBob = [...people,'Bob'];
console.log(withBob);