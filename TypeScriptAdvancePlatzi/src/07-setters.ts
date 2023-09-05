export class MyDate {

  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9  // el '_' hace que el getter pueda leer el valor de la propiedad
  ) { }

  printFormat(): string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this._month)
    return `${day}/${month}/${this.year}`;
  }

  private addPadding (value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount
    }
  }

  // Creando un Getter
  get day() {
    return this._day
  }

  // Con este getter, no es necesario declararlo arriba en el constructor, isLeapYear() no fue declarado en el constructor.
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue
    } else {
      throw new Error('Month out of range')
    }
  }
}

const myDate = new MyDate(1995, 11, 20)
console.log(myDate.printFormat())
myDate.month = 3
console.log(myDate.month)
// myDate.month = 73
// console.log(myDate.month)
