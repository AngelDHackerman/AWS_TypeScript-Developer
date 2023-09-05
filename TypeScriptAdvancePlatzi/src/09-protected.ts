export class Animal {
  // ? Protected es basicamente un privado que va a tener herencia
  constructor (protected name: string) { }

  move() {
    console.log('Moving along!')
  }

  greeting () {
    return `Hello my name is ${this.name}`
  }

  protected doSomething() {
    console.log('dooooooo')
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
      console.log(`woof pero mi otro nombre ${this.name}`)
    }
    this.doSomething()
  }

  move(): void {
    console.log('Moving as a dog')
    super.move()  // Asi llamamos al metodo move de la clase padre
  }
}


const cheems = new Dog('Cheems', 'Angel');
console.group('Cheems Instance Dog')
  // cheems.name = 'Otro nombre'
  cheems.bark(1)
  // cheems.doSomething()
  cheems.move()
console.groupEnd()
