//# Primitive Data Types Summary

// In JavaScript, there are seven primitive data types. These data types are immutable, meaning their values cannot be changed once created. Here is a summary of each primitive data type:

// 1. Number
let num = 42; // Represents both integer and floating-point numbers
let floatNum = 3.14;

// 2. String
let str = "Hello, World!"; // Represents a sequence of characters

// 3. Boolean
let isLoggedIn = true; // Represents logical values: true or false

// 4. Undefined
let undef; // A variable that has been declared but not assigned a value

// 5. Null
let emptyValue = null; // Represents the intentional absence of any object value

// 6. Symbol
let sym1 = Symbol("123"); // Represents a unique identifier, often used as object keys
let sym2 = Symbol("123");
//console.log(sym1); // Symbol(123)
//console.log(sym2); // Symbol(123)
//console.log(sym1 === sym2); // false

// 7. BigInt
let bigIntNum = 9007199254740991n; // Represents integers with arbitrary precision 


//# Reference Types/Non-Primitive Data Types Summary

// In addition to primitive data types, JavaScript also has reference types (non-primitive data types). These data types are mutable and can store collections of values or more complex entities. Here is a summary of the main reference types:

// 1. Object
let obj = {
    name: "Alice",
    age: 30
}; // A collection of key-value pairs

// 2. Array
let arr = [1, 2, 3, 4, 5]; // An ordered list of values

// 3. Function
function greet() {
  return "Hello World!";
} // A block of code designed to perform a particular task

console.log(greet()); // Hello!

// 4. Date
let date = new Date(); // Represents a single moment in time

// 5. RegExp
let regex = /ab+c/; // Represents a pattern used for matching character combinations in strings

// Reference types are stored as references in memory, meaning that when you assign or pass them
//console.log(regex)


// Memory Management Note:
// Stack Memory: Used for storing primitive data types and function calls. It is fast and has a limited size.
// Heap Memory: Used for storing reference types (objects, arrays, etc.). It is larger and more flexible but slower to access.

let myName = "John"; // Stored in Stack Memory
let myObj = { name: "John" }; // Stored in Heap Memory
let myObjRef = myObj; // Reference to the same object in Heap Memory

myObjRef.name = "Doe"; // Modifying the object through the reference
console.log(myObj.name); // Output: Doe

// Understanding the difference between primitive and reference types is crucial for effective JavaScript programming,
// especially when it comes to memory management and performance optimization.