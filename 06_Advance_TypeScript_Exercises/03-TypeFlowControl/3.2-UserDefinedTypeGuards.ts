interface Person { 
  name: string,
  age: number,
  address?: { 
    street: string,
    city: string,
    country: string
  }
}

// User-defined typeguard
function isPerson (obj: any): obj is Person { 
  return (
    obj !== null && 
    typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    typeof obj.age === 'number' && 
    (obj.address === undefined || (
      typeof obj.address === 'object' &&
      typeof obj.address.street === 'string' &&
      typeof obj.address.city === 'string' &&
      typeof obj.address.country === 'string'
    ))
  );
}

const obj10 = {
  name: "John",
  age: 30,
  address: { 
    street: '123 main st',
    city: 'Anytown',
    country: 'USA'
  }
}

if (isPerson(obj10)) {
  console.log(`${obj10.name} is a person.`);
} else {
  console.log("Invalid person object.");
}