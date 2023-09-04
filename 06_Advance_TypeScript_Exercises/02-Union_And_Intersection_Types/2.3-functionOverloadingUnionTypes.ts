// Exercise Context: Create function overloads using union types to handle different input types.

// Function overloading in TypeScript allows you to define multiple function signatures for the same function, 
// enabling the function to handle different types of input. Union types can be used in conjunction with overloading to create flexible functions.

function processInput(input: string): string;
function processInput(input: number): number;
function processInput(input: boolean): boolean;
function processInput(input: string | number | boolean): string | number | boolean {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else if (typeof input === 'number') { 
    return input * 2;
  } else { 
    return !input
  }
}

// Example Usage:
console.log(processInput('hello')); // Output: 'HELLO'
console.log(processInput(10));      // Output: 20
console.log(processInput(true));    // Output: false