// La sobrecarga de funciones te permite definir múltiples firmas para una función, 
// permitiendo diferentes tipos y números de argumentos. 
// Esto te permite tener una función que puede ser llamada de diferentes maneras y aún así mantener la seguridad en la tipificación.

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any { 
  return a + b;
}

console.log(add(5, 10)); // 15
console.log(add("Hello, ", "World!")); // "Hello, World!"
