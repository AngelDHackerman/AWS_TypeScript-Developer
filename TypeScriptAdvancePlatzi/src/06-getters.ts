export class MyDate {

  constructor(
    public year: number = 1993, 
    public month: number = 7, 
    private _day: number = 9  // el '_' hace que el getter pueda leer el valor de la propiedad
  ) { }

  printFormat(): string {
    const day = this.addPadding(this.day)
    const month = this.addPadding(this.month)
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
      this.month += amount;
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
}

const myDate = new MyDate(1995, 11, 20)
console.log('1995', myDate.isLeapYear)
console.log('using the getter day => ', myDate.day)

const myDate2 = new MyDate(1996, 11, 20)
console.log('1996', myDate2.isLeapYear)

const myDate3 = new MyDate(1998, 11, 20)
console.log('1998', myDate3.isLeapYear)

const myDate3_5 = new MyDate(2012, 11, 20)
console.log('2012', myDate3_5.isLeapYear)

const myDate4 = new MyDate(2028, 11, 20)
console.log('2028', myDate.isLeapYear)
