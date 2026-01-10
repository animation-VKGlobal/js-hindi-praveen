let score = "33abc"

//console.log(typeof score)

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)

// "33" ==> 33
// "33abc" ==> NaN
// true ==> 1
// false ==> 0
// "true" ==> NaN
// "" ==> 0

let isloggedIn = 1

let booleanIsloggedIn = Boolean(isloggedIn)
//console.log(typeof booleanIsloggedIn)
//console.log(booleanIsloggedIn)

// 1 ==> true
// 0 ==> false
// "abc" ==> true
// "" ==> false
// null ==> false
// undefined ==> false
// NaN ==> false

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(typeof stringNumber)
//console.log(stringNumber)

// 33 ==> "33"
// true ==> "true"
// false ==> "false"

//*****************Operations in JavaScript ***************/

let value = 3
let nagValue = -value
//console.log(nagValue)

let str1 = "Hello"
let str2 = "World"

//console.log(str1 + " " + str2)
//console.log(str1 + 5)
//console.log(str1 - 5) //NaN

// + operator is used for concatenation if any one operand is a string
// - , * , / operators are not defined for strings

// console.log(5 + "5") // "55"
// console.log("5" - 3) // 2
// console.log("5" * "2") // 10
// console.log("10" / "2") // 5

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"