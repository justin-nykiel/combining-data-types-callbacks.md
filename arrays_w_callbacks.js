const add = (x, y) => {
    return x + y
}
const subtract = (x, y) => {
    return x - y
}
const multiply = (x, y) => {
    return x * y
}
const divide = (x, y) => {
    return x / y
}
const calculate = (x, y, operates) => {
    let value = operates(x, y)
    return value
}
// console.log(calculate(1, 2, add))
// console.log(calculate(1, 2, subtract))
// console.log(calculate(1, 2, multiply))
// console.log(calculate(1, 2, divide))


// //moved the fx calls to after the fxn is declared
// const bar = () => {
//     console.log('bar here');
// }
// bar();


// const foo = () => {
//     console.log('foo here');
// }
// foo();


// foo();

// const foo ()=>{
//     console.log('hi');
// }
//This above throws an error because the function foo is not initialized to anything, need an assignment operator after foo

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// console.log(nums.every((num) => num > 0))
// console.log(panagram.every((word) => word.length < 8))

// console.log(nums.filter((num) => num < 4))
// console.log(panagram.filter((word) => word.length % 2 === 0))

// console.log(nums.find((num) => num % 5 === 0))
// console.log(panagram.find((word) => word.length < 5))

// console.log(nums.findIndex((num) => num % 3 === 0))
// console.log(panagram.findIndex((word) => word.length < 2))

// nums.forEach((num) => console.log(num * 3))
// panagram.forEach((word) => console.log(word + "!"))

// What happened to the original array? depending on the function written the original array can be untouched or changed
// Can you store the values from a forEach method in a new array? yes if you do so in the callback function

// const nums2 = nums.map((num) => num * 100)
// console.log(nums2)
// const upperPanagram = panagram.map((word) => word.toUpperCase())
// console.log(upperPanagram)
// What happened to the original array? original array untouched
// Can you store the values from a map method in a new array? yes, I did so

// console.log(nums.some((num) => num % 7 === 0))
// console.log(panagram.some((word) => word.includes("a")))

//Hungry for more stuff
// console.log(nums.reduce((a, b) => a + b))
// console.log(panagram.reduce((a, b) => a + " " + b))


//ascending
//console.log(nums.sort((a, b) => a - b))
//dscending
//console.log(nums.sort((a, b) => b - a))
