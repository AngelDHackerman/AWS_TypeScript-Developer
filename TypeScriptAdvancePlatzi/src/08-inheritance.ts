export class Animal {
  constructor (public name: string) { }

  move() {
    console.log('Moving along!')
  }

  greeting () {
    return `Hello my name is ${this.name}`
  }
}

// Usando la herencia para extender la clase Animal
export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string,
  ) {
    super(name)
  }

  bark (times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof')
    }
  }
}


const fifi = new Animal('Fifi')
console.group('Fifi Instance Animal')
  fifi.move()
  console.log(fifi.greeting())
console.groupEnd()

const cheems = new Dog('Cheems', 'Angel');
console.group('Cheems Instance Dog')
  cheems.move()
  console.log(cheems.greeting())
  cheems.bark(3)
  console.log(`My owner is ${cheems.owner}`)
console.groupEnd()
