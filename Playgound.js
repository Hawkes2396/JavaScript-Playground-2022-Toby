// var oldMessage = "Welcome to SDV503"
// console.log(oldMessage)

// var NEWmessage = "Welcome to Hell"
// console.log(NEWmessage)

// var Tobias = "Good morning Tobias"
// console.log(Tobias)

// var Luna = "welcome Luna"
// console.log(Luna)

//  /* */


// var message;
// console.log(message);
// message = null;
// console.log(message);
// var myLight = false;
// console.log(myLight);
// myLight = true;
// if(myLight){
//     console.log(myLight);
// }
// var score1, score2, score3, score4;
// var a="Hello";
// var b=10;
// var c=false;
// console.log(a);
//1-Local scope
//2-Global scope

// const msg = "Hello World"
// console.log(msg)
//types of scope local and global
//Block scope, an example: if, while, switch, for,
// if(false) {
//     const msg = "Hello World"
//     console.log(msg)
// }
// console.log(msg)
//Function scope
// function call(){
//     var msg = "Hello World"
//     console.log(msg)
// }

// console.log(call())
// console.log(msg)
// global
// var msg = "Hello sdv"

// function readMsg() {
//     console.log(msg)
// }

// // console.log(readMsg())

// keyword Lexical Scope

// keyword Lexical Scope
// function outerFunc() {
//     var msg = "Hello World"
//     function innerFunc() {
//         console.log(msg)
//     }
//     console.log(innerFunc())
//     }
//     console.log(outerFunc())
// // 
// function outerFunc() {
//     var msg = "Hello World"
//     function innerFunc() {
//         console.log(msg)
//     }
//     console.log(innerFunc())
//     } 
//     console.log(outerFunc())


    // 1-DataType
    /*
1- numbers
2- Boolean
3-strings
4- objects

    */
//let a = 1 //a numberDataType
// let b = "Hello" //B is a sting
// let c = true // C is a boolean DataType
// let d; //D is undefined DataType

// JavaScript has type conversion for numbers eg "2" won't be read as a sting but as a number when JavaScript is looking for numbers

// let Str = "Toby"
// console.log(Str)
// let Str1 = "study NMIT"
// console.log(fullStr)

// let fullStr = Str +""+ Str1
// console.log(fullStr)
// const value1 = '5';
// const value2 = '9';

// let sum = Number(value1) + value2

// console.log(sum);

// let output = 'The sum of value1 and value2 is ${sum}'

// let bol = true
// console.log(bol)

// console.log(5>3)
// console.log(7>2,or,7<2)
// console.log 9+10 = 21

// objects
// var cat = {
//     fur: 'black',
//     whisker: 'many',
//     paw: 5,
// }
// console.log(cat)

// number
// let a = 4
// let b = 6.5
// let output = `total value of a is ${a} total value of b is ${b}`
// console.log(output)

// // strings
// let name = "Bob"
// let job = "coder"
// let output1 = `My name is ${name} and my job is ${job}`

//boolean
// var gg = true
// var jk = false 
// const xp1 = 7
// const xp2 = 2
// number(xp1>xp2)
// console.log(number)

// what is a function?
// receves and input, calculats, sends and output related to the input
// function div(num1, num2) {
//     return num1/num2
// }

// console.log(div(6, 3))

// 

/*
Create a functions that takes an array as a param ["1" "2" "3"] and return 
the array values all in number data type
*/
// const convert = (Array) => Array.map((Element) => parseInt(Element));
// numbers = convert(["1","2","3"]);

// numbers.array.forEach(element => {
//     console.log(typeof element)
// });

//refactor
//const numbers = arr => arr.map(Number)
//const numbers = arr => arr.map(elem => +elem)

// console(function evenOrOdd(num) ; {
//     if(num % 2 === 0) {
//     return "even"
//     }else {
//     return "odd")
//     }
// }


// function whatsTheMonth(num) {
//     if (num === 1) {
//         return "January";
//     } else if (num === 2) {
//         return "February";
//     } else if (num === 3) {
//         return "March";
//     } else if (num === 4) {
//         return "April";
//     } else if (num === 5) {
//         return "May";
//     } else if (num === 6) {
//         return "June";
//     } else if (num === 7) {
//         return "July";
//     } else if (num === 8) {
//         return "August";
//     } else if (num === 9) {
//         return "September";
//     } else if (num === 10) {
//         return "October";
//     } else if (num === 11) {
//         return "November";
//     } else if (num === 12) {
//         return "December";
//     } else
//     return "error"
// }
// console.log(whatsTheMonth(3))

// function trueOrFalse calculats (num)
// numbers = calculats(["1","2","3","4",]);

// let even = true
// let odd = false
// console.log("trueOrFalse")
//209 to 217 failed unfortunetly
function isEven(string) {
    var len = string.length
    return (len/2 == Math.round(len/2))
}

console.log(isEven("Home"));

var isEven = (string) => string.length % 2 == 0


function getIndex (array, string) {
    return array.indexOf(string)
}
console.log(getIndex(["Q","W","R"], "W"))// -> 1

var NEWmessage = "Welcome to Hell"
console.log(NEWmessage)

// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]

let arr = [
    {id:"toby"},
    {id:7010},
    {id:"hawkes"},
    {id:2022},
]

let invalidEntries = 0

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true
  }
  invalidEntries++
  return false;
}

let arrByID = arr.filter(filterByID)

console.log('Filtered Array\n', arrByID)

console.log('Number of Invalid Entries = ', invalidEntries)

function onlyNumbers(arr) {
    return arr.filter(val => Number.isInteger(val))
}

function addByOne(num){
    return num + 1
}
console.log(addByOne(3))

const booStr1 = new Boolean(true);

console.log(booStr1.toString())
