console.log(Math.PI)
console.log(Math.max(1, 2, 3, 8, 7, 0))

class MyMath {
  static readonly PI = 3.1415

  static max(...numbers: number[]) { // ...numbers, teniendo cualquier cantidad de numeros. Conviertelos en un array
    console.log(numbers)
    return numbers.reduce((max, item) => max >= item ? max: item, 0)
  }
}

console.log('My Math: ',MyMath.PI)
console.log('My max', MyMath.max(122, 289, 9, 10))
