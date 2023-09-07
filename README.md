# TypeScript Coding Challenges

Here you'll find the Typescript challanges that Chat-gpt challanged me to resolve, this is with the goal of overcome a near future technical interview. 

## TypeScript Coding Challenges

- [Basic challanges](#basic-challanges)
- [TypeScript With Custom Types](#typescript-with-custom-types)
- [TypeScript Using Interfaces](#typescript-using-interfaces)
- [Asynchronous Typescript](#asynchronous-typescript)
- [AWS and Typescript challanges](#aws-and-typescript-challanges)
- [Advance TypeScript Exercises](#advance-typescript-exercises)

<details>
<summary>How to Install and Use</summary>




## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
- You have installed [TypeScript](https://www.typescriptlang.org/download) globally. You can 

* Install it using npm:

```npm install -g typescript```

* You have installed nodemon globally. Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. 
Install it using npm:

```npm install -g nodemon```


### Using TypeScript Challenges
To use TypeScript Challenges, follow these steps:

* Clone this repository to your local machine.

```https://github.com/AngelDHackerman/backend-dev.git```

* Navigate to the project directory.

```cd typescript-challenges```

* Install the project dependencies.

```npm install --save-dev typescript```  

* Change the configuration of the tsconfig.json file

```"outDir": "dist",``` This indicate to which folder you want to send the transpile javascript files. 

__(For this steps you can use 2 terminal tabs or as I recoment to you, spilt your terminal in half)__

* Run the JavaScript files with nodemon: 

```nodemon dist/<filename>.js```

* If you want to keep the TypeScript compiler running in watch mode, use the following command:

```tsc --watch```

This will automatically compile your TypeScript files to JavaScript whenever they are saved.

</details>


## Basic challanges:

### Fibonacci Challenge
Write a TypeScript function that takes a number `n` as input and returns the `n`th number in the Fibonacci sequence. 
The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. 

The Fibonacci sequence starts as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

- 
  __Input:__
  `A number representing the position in the Fibonacci sequence: 7`

  __Expected Output:__
  `The number at the 7th position in the Fibonacci sequence is: 13`

  __Explanation:__
  `So, the number at the 7th position is 13.`


### Prime Numbers Challenge
Write a TypeScript function that takes a number `n` as input and returns `true` if the number is prime and `false` if it is not. 
A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

- 
  __Input:__
  `A number: 17`

  __Expected Output:__
  `The function should return: true (because 17 is a prime number)`

  __Input:__
  `A number: 15`

  __Expected Output:__
  `The function should return: false (because 15 is not a prime number)`
  `15 is not a prime number because it is divisible by 1, 3, 5, and 15.`

### Longest String Challenge
Write a TypeScript function that takes an array of strings as input and returns the longest string. 
If there is more than one string with the maximum length, return the first one you find.

- 
  __Input:__
  `An array of strings:  ["apple", "banana", "cherry", "date", "elderberry"]`

  __Expected Output:__
  `The longest string in the array:  "elderberry"`

### Pair Sum Challenge
Write a TypeScript function that takes an array of numbers and a target value. 
The function should find two numbers in the array that add up to the target value and return their indices in an array. 
If there are no two numbers that add up to the target value, the function should return an empty array.

- 
  __Input:__
  `An array of numbers: [10, 15, 3, 7] and a target value: 17`

  __Expected Output:__
  `The function should return: [0, 3] (because 10 + 7 equals 17 and the indices of 10 and 7 in the array are 0 and 3 respectively)`

  __Input:__
  `An array of numbers: [1, 2, 3, 4, 5] and a target value: 11`

  __Expected Output:__
  `The function should return: [] (because there are no two numbers in the array that add up to 11)`


### Palindrome Challenge
Write a TypeScript function that checks if a given word is a palindrome. 
A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization. 
Your function should not use the `.split()`, `.join()`, or `.reverse()` methods.

- 
  __Input:__
  `A string: "racecar"`

  __Expected Output:__
  `The function should return: true (because "racecar" is a palindrome, it reads the same forward and backward)`

  __Input:__
  `A string: "openai"`

  __Expected Output:__
  `The function should return: false (because "openai" is not a palindrome, it does not read the same forward and backward)`

### FizzBuzz Challenge
Write a TypeScript function that implements the FizzBuzz game. 
Your function should take a number `n` as input and print all numbers from 1 to `n`. For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

- 
  __Input:__
  `A number n: 15`

  __Expected Output:__

  ```
  1
  2
  Fizz
  4
  Buzz
  Fizz
  7
  8
  Fizz
  Buzz
  11
  Fizz
  13
  14
  FizzBuzz
  ```


---


## TypeScript With Custom Types:

### User Type Challenge
Define a type `User` that has the properties `id` (number), `name` (string), `email` (string), and `isVerified` (boolean). 
Write a function that takes a User object and returns a welcome string that includes the user's name, id, email, and if it is verfied.


- 

  ``` 
  type User = {
    <!-- Put the key:values here -->
  };

  function welcomeUser(user: User): string {
    // your code here
  }
  ```

  __Input:__

  ```
  const user: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  isVerified: true,
  };

  console.log(welcomeUser(user));
  ```

  __Expected output:__ `"Expected output: "Welcome, John Doe! Your ID is: XX and your email: XXXX and you are/are not verified.""`

### Product Type Challenge

Define a type `Product` that has the properties `id` (number), `name` (string), `description` (string), and `price` (number). Write a function that takes an array of `Product` and returns the most expensive product.

- 

  ```
  type Product = {
    <!-- your time product here -->
  };

  function mostExpensiveProduct(products: Product[]): Product {
    // your code here
  }
  ```

  __Input:__

  ```
  const products: Product[] = [
    { id: 1, name: "Product 1", description: "This is product 1", price: 10 },
    { id: 2, name: "Product 2", description: "This is product 2", price: 20 },
    { id: 3, name: "Product 3", description: "This is product 3", price: 30 },
  ];

  console.log(mostExpensiveProduct(products));
  ```

  __Expected Output:__ `{ id: 3, name: "Product 3", description: "This is product 3", price: 30 }`

### Role Type Challenge

Define a type `Role` that is a union of the strings "ADMIN", "USER", and "GUEST". Write a function that takes a `Role` and returns the allowed actions for that role.

ADMIN: ["CREATE", "READ", "UPDATE", "DELETE"]

USER: ["READ", "CREATE"]

GUEST: ["READ"]

- 

 ```
 type Role = "ADMIN" | "USER" | "GUEST";

  function allowedActions(// ): // {
    // your code here
  }
 ```

  __Input:__

  ```
  const role: Role = "ADMIN";

  console.log(allowedActions(role));
  ```

  __Expected Output:__ `["CREATE", "READ", "UPDATE", "DELETE"]`

---

## TypeScript Using Interfaces

### User Profile Interface

Define a TypeScript interface named `UserProfile` that represents a user's profile. 
The profile should have the following properties: `id` (number), `username` (string), `email` (string), and `dateOfBirth` (optional string). 
Write a function that takes an object of type `UserProfile` and returns the user's name and email. And age if the `dateOfBirth` is provided.

__Input:__

- 

  ```
  const user: UserProfile = {
    id: 1,
    username: "johnDoe",
    email: "john@example.com",
    dateOfBirth: "1990-01-01"
  };
  ```

  __Expected Output:__ `33 // Assuming the current year is 2023`


###  Shape Area Calculator

Define two interfaces: `Circle` and `Rectangle`. 
The `Circle` should have a property `radius` (number) and the `Rectangle` should have properties `width` (number) and `height` (number). 
Write a function that calculates the area of a given shape.

__Input:__

- 

  ```
  const shape1: Circle = {
  radius: 5
  };

  const shape2: Rectangle = {
    width: 10,
    height: 5
  };
  ```

  __Expected Output:__
  `78.54 // For shape1 (Circle with radius 5)`
  `50   // For shape2 (Rectangle with width 10 and height 5)`

### Todo List Interface

Define an interface named `Todo` that represents a todo item. 
The todo should have the following properties: `id` (number), `task` (string), and `completed` (boolean). 
Write a function that filters out completed tasks from an array of todos.

- 

  __Input:__

  ```
  const todos: Todo[] = [
  { id: 1, task: "Do laundry", completed: false },
  { id: 2, task: "Buy groceries", completed: true },
  { id: 3, task: "Clean room", completed: false }
  ];
  ```

  __Expected Output:__ 

  ```
  [
  { id: 1, task: "Do laundry", completed: false },
  { id: 3, task: "Clean room", completed: false }
  ]
  ```


### Vehicle Interface

Define an interface named `Vehicle` that represents a vehicle. 
The vehicle should have properties `brand` (string), `year` (number), and `isElectric` (boolean). 
Write a function that returns the age of the vehicle.

- 

  __Input:__

  ```
  const car: Vehicle = {
  brand: "Toyota",
  year: 2015,
  isElectric: false
  };
  ```

  __Expected Output:__ `8 // Assuming the current year is 2023`


### Book Interface

Define an interface named `Book` that represents a book. 
The book should have properties `title` (string), `author` (string), `publishedYear` (number), and `genres` (array of strings). 
Write a function that checks if a given book belongs to a specific genre.

- 

  __Input:__

  ```
  const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  genres: ["Novel", "Historical"]
  };
  ```

  __Expected Output:__  

  `true  // If checking for "Novel"`
  `false // If checking for "Science Fiction"`


---

## Asynchronous Typescript

### Jikan Anime & Manga API Challenge
The Jikan API (https://jikan.moe/) is a public API that allows you to fetch information about various anime and manga.
Write an asynchronous TypeScript function that takes an anime ID as input and returns the title of the anime and the synopsis.
The function should properly handle errors and cases where the anime ID does not exist.

__Example of what the API should return:__

- 
  ```
  {
  "title": "Naruto",
  "synopsis": "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. He wants to become the Hokage, the village leader, in order to gain recognition from everyone around him."
  }
  ```

### Asynchronous Timer Challenge
Write an asynchronous TypeScript function that implements a timer. 
The function should take a number `n` as input and wait `n` milliseconds before resolving a promise. 
The use of JavaScript's `sleep` or `setTimeout` function is not allowed.

__Input:__

- 

  ```
  const n = 1000; // 1000 milliseconds, or 1 second

  asyncTimer(n).then(() => {
    console.log('Timer has finished!');
  });
  ```


__Expected Output:__

- 

  `Timer has finished!`

--- 

## AWS and Typescript challanges: 

> More information about how and what to install in order to run this project can be found in the 05_AWS_and_TypeScript_challanges readme file.

### 1. Challenge: User Registration and Notification System

-
  __General Context:__ In this challenge, you are tasked with building a user registration system that not only stores user information in a DynamoDB table but also sends welcome notifications via email. __This involves creating a DynamoDB table, writing Lambda functions for registration and email notifications, and connecting them using EventBridge.__

  __Use Case:__ This system can be implemented in any online platform that requires user registration, such as e-commerce websites, social media platforms, or online educational portals. When a user registers, they are added to the database, and a welcome email is sent, enhancing user engagement and providing a personalized experience.


#### Subchallenge 1: Create a User Table in DynamoDB

__Context:__ You will need a DynamoDB table to store user information.

__Steps:__


* Create a DynamoDB table with appropriate attributes (e.g., username, email).

* Configure the table with suitable read and write capacity.

__Expected Result:__ A DynamoDB table ready to store user information.

#### Subchallenge 2: Create a Lambda Function for User Registration.

__Context:__ This Lambda function will handle user registration and store the data in the DynamoDB table.

__Steps:__

* Write a TypeScript Lambda function to handle user registration.

* Deploy the function using AWS SDK or web interface.

__Expected Result:__ A Lambda function that can register users and store them in DynamoDB.

#### Subchallenge 3: Create a Lambda Function for Sending Notifications

__Context:__ This function will send welcome emails to users after registration.

__Steps:__

* Write a TypeScript Lambda function to send emails.

* Connect it to the registration Lambda function using EventBridge.

__Expected Result:__ A system that registers users and sends welcome emails.

### 2. Challenge: Inventory Management System

- 
  __General Context:__ The goal of this challenge is to create a robust inventory management system using DynamoDB and Lambda functions. You'll need to design a DynamoDB table to store inventory items and write TypeScript Lambda functions to handle CRUD operations. This will allow for real-time tracking and management of inventory items.

  __Use Case:__ Retail businesses, both online and brick-and-mortar, can utilize this system to manage their inventory. It allows for real-time tracking of products, quantities, and locations, helping in restocking, reducing overstock, and providing insights into sales trends.


#### Subchallenge 1: Create an Inventory Table in DynamoDB

__Context:__ You need a table to store inventory items.

__Steps:__

* Create a DynamoDB table with appropriate attributes (e.g., productID, quantity).

* Configure the table with suitable read and write capacity.

__Expected Result:__ A DynamoDB table ready to store inventory information.

#### Subchallenge 2: Create Lambda Functions for CRUD Operations

__Context:__ These functions will handle creating, reading, updating, and deleting inventory items.

__Steps:__

* Write TypeScript Lambda functions for each CRUD operation.

* Deploy the functions using AWS SDK or web interface.

__Expected Result:__ A set of Lambda functions that can manage inventory items in DynamoDB.


### 3. Challenge: Real-time Analytics Dashboard

- 
  __General Context:__ This challenge focuses on building a real-time analytics dashboard that stores and updates data in a DynamoDB table. You'll create a table for analytics data and write a Lambda function to update this data in real-time. This system will enable monitoring and visualization of real-time analytics such as page views and user counts.

  __Use Case:__ Many businesses, ranging from marketing agencies to SaaS companies, can benefit from a real-time analytics dashboard. It can track user behavior, page views, conversion rates, etc., providing valuable insights for decision-making, optimizing marketing strategies, and enhancing user experience.


#### Subchallenge 1: Create a Table for Storing Analytics Data in DynamoDB
Context: You need a table to store real-time analytics data.

Steps:

Create a DynamoDB table with appropriate attributes (e.g., pageViews, userCount).
Configure the table with suitable read and write capacity.
Expected Result: A DynamoDB table ready to store analytics data.

Subchallenge 2: Create a Lambda Function to Update Analytics
Context: This function will update the analytics data in real-time.

Steps:

Write a TypeScript Lambda function to update analytics data.
Deploy the function using AWS SDK or web interface.
Expected Result: A Lambda function that can update real-time analytics data in DynamoDB.

### 4. Challenge: Order Processing System

- 
  __General Context:__ In this challenge, you are to develop an order processing system that handles customer orders from placement to shipping. This involves creating a DynamoDB table for orders and writing Lambda functions to process these orders, including handling payment and shipping details. The system should be able to manage and track orders efficiently.

  __Use Case:__ E-commerce platforms, restaurants with online ordering, or any business that takes customer orders online can use this system. It automates the entire order processing workflow, from payment to shipping, ensuring efficiency, accuracy, and timely delivery, leading to improved customer satisfaction.

#### Subchallenge 1: Create an Orders Table in DynamoDB

__Context:__ You need a table to store customer orders.

__Steps:__

* Create a DynamoDB table with appropriate attributes (e.g., orderID, status).

* Configure the table with suitable read and write capacity.

__Expected Result:__ A DynamoDB table ready to store order information.

#### Subchallenge 2: Create Lambda Functions to Process Orders

__Context:__ These functions will handle order processing, including payment and shipping.

__Steps:__

* Write TypeScript Lambda functions for processing orders.

* Deploy the functions using AWS SDK or web interface.

__Expected Result:__ A set of Lambda functions that can process orders in DynamoDB.

### 5. Challenge: Scheduled Data Cleanup

- 
  __General Context:__ The objective of this challenge is to build a system that regularly cleans up temporary or expired data from a DynamoDB table. You'll create a table for storing temporary data and write a scheduled Lambda function to delete this data based on expiration dates. This will ensure that the system maintains only relevant data and operates efficiently.

  __Use Case:__ This system is applicable in scenarios where temporary or time-sensitive data is generated, such as temporary user sessions, cache data, or trial subscriptions in various online services. Regular cleanup ensures that only relevant data is maintained, improving system performance and compliance with data retention policies.

#### Subchallenge 1: Create a Table for Storing Temporary Data in DynamoDB

__Context:__ You need a table to store temporary data that should be cleaned up regularly.

__Steps:__

* Create a DynamoDB table with appropriate attributes (e.g., tempID, expirationDate).

* Configure the table with suitable read and write capacity.

__Expected Result:__ A DynamoDB table ready to store temporary data.

#### Subchallenge 2: Create a Scheduled Lambda Function for Data Cleanup

__Context:__ This function will run on a schedule to clean up expired data.

__Steps:__

* Write a TypeScript Lambda function to delete expired data.

* Schedule the function using EventBridge.

__Expected Result:__ A Lambda function that regularly cleans up expired data in DynamoDB.


## Advance TypeScript Exercises

## 1. Generic Types

### Exercise 1.1: Generic Function to Swap Pairs

__Exercise Context:__ Create a generic function that can swap two values of any type.

__Input:__ 

```
(a: T, b: T) => [b, a]
```

__Expected Output:__ 

`A reversed pair of the input values.`

### Exercise 1.2: Generic Class for a Stack

__Exercise Context:__ Implement a generic stack class that can store elements of any type.

__Input:__ 

`Methods to push, pop, and peek the top element.`

__Expected Output:__ 

`Correct stack behavior with elements of the specified type.`

### Exercise 1.3: Generic Constraints

__Exercise Context:__ Create a generic function that accepts an object with a specific property.

__Input:__ 

```
(obj: T) => obj.key
```

__Expected Output:__ 

`Correct handling of objects with the specified property.`

## 2. Union and Intersection Types

### Exercise 2.1: Union Types for User Roles

__Exercise Context:__ Use union types to define different user roles in an application.

__Input:__ 

```
type UserRole = 'admin' | 'user' | 'guest';
```
__Expected Output:__ 

`Correct usage of roles within the application.`

### Exercise 2.2: Intersection Types for Extending Interfaces

__Exercise Context:__ Use intersection types to extend interfaces and create a complex object.

__Input:__ 

`Two or more interfaces to be combined.`

__Expected Output:__ An object that meets all combined interfaces.

### Exercise 2.3: Function Overloading with Union Types

__Exercise Context:__ Create function overloads using union types to handle different input types.

__Input:__ 

`Different types of input data.`

__Expected Output:__ 

`Correct function behavior based on input type.`

## 3. Type Flow Control

### Exercise 3.1: Type Guards with typeof

__Exercise Context:__ Use type guards with typeof to write a type-safe function.

__Input:__ 

`Different types of data.`

__Expected Output:__ 

`Correct behavior based on input data type.`

### Exercise 3.2: User Defined Type Guards

__Exercise Context:__ Create a user-defined type guard to validate a complex object structure.

__Input:__ 

`Object with specific structure.`

__Expected Output:__ 

`Correct object validation.`

### Exercise 3.3: Discriminated Unions

__Exercise Context:__ Implement discriminated unions to create objects with specific shapes.

__Input:__ 

`Different object shapes with a common discriminant property.`

__Expected Output:__ 

`Correct handling of objects based on their shape.`

## 4. Namespaces and Modules

### Exercise 4.1: Namespace for Utility Functions

__Exercise Context:__ Organize a collection of utility functions into a namespace.

__Input:__ 

`Set of related functions.`

__Expected Output:__ 

`Correctly defined and used namespace.`

### Exercise 4.2: Module Export and Import

__Exercise Context:__ Create and use modules to organize code across different files.

__Input:__ 

`Functions and classes in different files.`

__Expected Output:__ 

`Correct import and export between modules.`

### Exercise 4.3: Dynamic Module Loading

__Exercise Context:__ Implement dynamic module loading using import expressions.

__Input:__ 

`Module paths to be loaded dynamically.`

__Expected Output:__ 

`Successful dynamic loading of modules.`


## 5. Design Patterns

### Exercise 5.1: Implementing Dependency Injection

__Exercise Context__: Implement the Dependency Injection pattern in a class or function.

__Input:__ 

`Classes or functions requiring dependencies.`

__Expected Output:__ 

`Successful dependency injection and correct code behavior.`

### Exercise 5.2: Singleton Pattern

__Exercise Context__: Implement the Singleton pattern to ensure a single instance of a class.

__Input:__ 

`Class that must be Singleton.`

__Expected Output:__ 

`Single instance of the class created.`

### Exercise 5.3: Factory Pattern

__Exercise Context__: Implement the Factory pattern to create objects with a common interface.

__Input:__ 

`Different object types with a common interface.`

__Expected Output:__ 

`Correct object creation based on input parameters.`
