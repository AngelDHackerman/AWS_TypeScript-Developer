// Exercise Context: Create a generic function that can swap two values of any type.

const swapPairs = <T>(a: T, b: T): [T, T] => [b, a]  // [T, T] returns a tuple, which is the expected due to the only 2 parameters


const [x, y] = swapPairs(5, 10);
console.log(x, y) //output 10 5

const [firts, second] = swapPairs( 'Hello', 'World')
console.log(firts, second)  // output: World Hello


/**
 * Generic types allow functions, classes, and interfaces to work with multiple types
 * while retaining type information. They enable the creation of reusable and type-safe
 * components by using type variables, such as <T>, to stand in for any type. This ensures
 * flexibility without losing type safety, as the specific type is determined at the time
 * of invocation or instantiation, and is enforced by the TypeScript compiler.
*/