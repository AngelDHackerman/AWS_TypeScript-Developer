// Exercise Context: Use type guards with typeof to write a type-safe function

function handleData (data: string | number | boolean): string { 
  if (typeof data === 'string') { 
    return `This is a string with length: ${data.length}`
  } else if (typeof data === 'number') { 
    return `This is a number with value: ${data}`
  } else if (typeof data === 'boolean') { 
    return `This is a boolean with value: ${data}`
  } else { 
    return 'Unknown type'
  }
}

console.log(handleData('Hello')) 
console.log(handleData(32))
console.log(handleData(true))