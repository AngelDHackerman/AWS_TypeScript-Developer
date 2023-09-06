import { add, substract } from "./4.2-utils";

export class Calculator { 
  public addNumbers(a: number, b:number): number { 
    return add(a, b)
  }

  public substractNumbers(a: number, b: number): number { 
    return substract(a, b)
  }
}