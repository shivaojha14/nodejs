// Array Destructuring is Es6 Feature
// It is used to unpack values from arrays, or properties from objects, into distinct variables.    
// Example of Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3
// Example of Object Destructuring
const person = {
    name: 'John',   
    age: 30,
    city: 'New York'
};
const { name, age, city } = person;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York

