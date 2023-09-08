class Singleton { 
  // 1. almacena la unica instancia de la clase
  private static instance: Singleton

  // 2. el constructor debe ser privado para evitar que se cree una nueva instancia desde fuera
  private constructor () { 
    // aqui puede ir la logica de inicializacion si es necesario
  }

  // 3. Metodo estatico para obtener la unica instancia de la clase 
  public static getInstace(): Singleton { 
    // Si no existe una instancia, la crea
    if (!Singleton.instance) { 
      Singleton.instance = new Singleton();
    }
    // Devuelve la unica instancia
    return Singleton.instance;
  }

  // Otros metodos de la clase 
  public someMethod(): void { 
    console.log('Metodo ejecutado desde la unica instancia de Singleton')
  }
}

// Uso del singleton
const instance1 = Singleton.getInstace();
const instance2 = Singleton.getInstace();

// Verificar que ambas son la misma instancia
console.log(instance1 == instance2)  // deberia dar "true"

instance1.someMethod()
instance2.someMethod()
