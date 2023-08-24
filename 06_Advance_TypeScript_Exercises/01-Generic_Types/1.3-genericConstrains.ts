// Exercise Context: Create a generic function that accepts an object with a specific property.

function getProperty <T extends {key: any }>(obj: T): T['key'] {
  return obj.key;
}

// Example Usage:
const obj1 = { key: 'value', extra: 42 };
const result1 = getProperty(obj1);
console.log(result1); // Output: 'value'

const obj2 = { key: 1234 };
const result2 = getProperty(obj2);
console.log(result2); // Output: 1234

// <T extends { key: any }>: This part of the code defines a generic constraint. It means that the generic type T must extend an object with a property named key. 
// The type of the key property is not restricted, so it can be any type.

