// Exercise Context: Organize a collection of utility functions into a namespace.

// Definicion del espacio de nombres
namespace UtilityFunctions { 
  export function add (a: number, b: number): number { 
    return a + b
  }

  export function subtract(a: number, b: number): number { 
    return a - b
  }

  export function multiply(a: number, b: number): number { 
    return a * b
  }

  export function divide(a: number, b: number): number { 
    if (b === 0) { 
      throw new Error('Cannot devide by zero')
    }
    return a / b;
  }
}

// Uso del espacio de nombres
const sum = UtilityFunctions.add(5, 3)
const difference = UtilityFunctions.subtract(10, 3)
const product = UtilityFunctions.multiply(4, 3)
const quotient = UtilityFunctions.divide(12, 4)

console.log(`Sum: ${sum}`)
console.log(`Difference: ${difference}`)
console.log(`Product: ${product}`)
console.log(`Quotient: ${quotient}`)