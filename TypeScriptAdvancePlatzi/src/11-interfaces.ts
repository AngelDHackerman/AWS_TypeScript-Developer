export interface Driver { 
  database: string;
  password: string;
  port: number

  // Creando metodos en interfaces
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}


// implements, es la palabra reservada que siver para implementar la interface en la clase
class PostgresDriver implements Driver{   
  constructor (
    public database: string,
    public password: string,
    public port: number,
    private host: number,
  ) {}

  connect(): void {
    // code
  }
  disconnect(): void {
    // code
  }
  isConnected(name: string): boolean {
    return true
  }
}

class OracleDriver implements Driver{   
  constructor (
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    // code
  }
  disconnect(): void {
    // code
  }
  isConnected(name: string): boolean {
    return false
  }
}