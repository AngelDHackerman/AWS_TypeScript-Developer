// Exercise Context: Implement a generic stack class that can store elements of any type.

class Stack<T> { 
  private items: T[] = [];

  // Method to push an element onto the stack
  push(element: T): void { 
    this.items.push(element)
  }

  // Method to pop an element from the stack
  pop(): T | undefined { 
    return this.items.pop();
  }

  // Method to peek the top element of the stack without removing it
  peek(): T | undefined { 
    return this.items[this.items.length - 1]
  }

  // Method to check if the stack is empty
  isEmpty(): boolean { 
    return this.items.length === 0
  }

  // Method to get the size of the stack
}