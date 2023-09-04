// Exercise Context: Use intersection types to extend interfaces and create a complex object.

interface Person { 
  name: string;
  age: number;
}

interface Employee { 
  title: string; 
  department: string;
}

type PersonEmployee = Person & Employee;  // Create a new type that inherits both properties of Person & Employee

const createPersonEmployee = (person: Person, employee: Employee): PersonEmployee => ({ ...person, ...employee });

// Example Usage remains the same:
const person: Person = { name: 'John', age: 30 };
const employee: Employee = { title: 'Manager', department: 'HR' };

const combined = createPersonEmployee(person, employee);
console.log(combined); // Output: { name: 'John', age: 30, title: 'Manager', department: 'HR' }


// Inheritance vs. Combination: extends creates an inheritance relationship, while & simply combines types without creating a relationship.