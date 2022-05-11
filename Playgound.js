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
// //209 to 217 failed unfortunetly
// function isEven(string) {
//     var len = string.length
//     return (len/2 == Math.round(len/2))
// }

// console.log(isEven("Home"));

// var isEven = (string) => string.length % 2 == 0


// function getIndex (array, string) {
//     return array.indexOf(string)
// }
// console.log(getIndex(["Q","W","R"], "W"))// -> 1

// var NEWmessage = "Welcome to Hell"
// console.log(NEWmessage)

// // const array1 = [1, 4, 9, 16];

// // // pass a function to map
// // const map1 = array1.map(x => x * 2);

// // console.log(map1);
// // // expected output: Array [2, 8, 18, 32]

// let arr = [
//     {id:"toby"},
//     {id:7010},
//     {id:"hawkes"},
//     {id:2022},
// ]

// let invalidEntries = 0

// function filterByID(item) {
//   if (Number.isFinite(item.id) && item.id !== 0) {
//     return true
//   }
//   invalidEntries++
//   return false;
// }

// let arrByID = arr.filter(filterByID)

// console.log('Filtered Array\n', arrByID)

// console.log('Number of Invalid Entries = ', invalidEntries)

// function onlyNumbers(arr) {
//     return arr.filter(val => Number.isInteger(val))
// }

// function addByOne(num){
//     return num + 1
// }
// console.log(addByOne(3))

// const booStr1 = new Boolean(true);

// console.log(booStr1.toString())

// function greaterThan(num1,num2,arr){
//     let filtered = []
//     let n = arr.length
//     for (var i = 0; i < n ;i++){
//         if((arr[i]>num1) &&(arr[i]<num2)) {
//             filtered.push(arr[i])
//         }
//     }
//     return filtered
// }

// //let filtered = [3,4,5,6,7].filter(greaterThan)
// console.log(greaterThan(2,7,[1,2,3,4,5,6,7,8,9,10]))

// function greaterThan(num1, num2, arr) {
//     return arr.filter(val => val > num1 && val < num2)
// }
// console.log(greaterThan(2,7,[1,2,3,4,5,6,7,8,9,10]))

// // class className{
// //     constructor(param1, param2, ....){
// //         this.prop1 = param1
// //         this.prop2 = param2
// //     }
// // }

// class Person{
//     constructor(name, age,){
//         this.name = name
//         this.age = age
//     }
// }

// let personOne = new Person('Toby',123)
// let personTwo = new Person('Kenny',44)
// let personThree = new Person('Max',56)
// let personFour = new Person('Sam',33)

// console.log(personTwo.name)

// // class Student{
// //     constructor(name, id, age,){
// //     this.name = name
// //     this.id = id
// //     this.age = age
// //     }
// // }

// // const first_year = new Student()

// // first_year.name

// class Greeting {
//     constructor(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     greet(){
//         return 'Hello ${this.firstName} ${this.lastName}'
//     }
// }

// const new_person = new Greeting('Toby','Hawkes')

// console.log(new_person)


// function findMiniMax(arr){
//     let array=[];
//     let min = arr[0]
//     let max = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < min){
//             min = arr[i]
//         }
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     array.push(min)
//     array.push(max)

//     return array
// }

// console.log(findMiniMax([1,2,3,4,5]))

//below is problem for 1st and 2nd solution.
// arraysConcat([1,2,3,4,5], [6,7,8,9,]) -> [1,2,3,4,5,6,7,8,9]

// const firstOne = [1,2,3,4,5]
// const secondOne = [6,7,8,9]
// const combinBothEm = firstOne.concat(secondOne);
// console.log(firstOne)
// console.log(secondOne)
// console.log(combinBothEm)
// 1st solution

// function concatArray(...args) {
//     return [].concat(...args)
// }

// let concatArray = (...a) => a.flat(Infinity)//2nd solution

//Creat a function that takes an array of numbers,
//a string and return an array of number as per the following rules:
//ArrayRules([4,3,2,1], "Asc") -> [1,2,3,4]
//ArrayRules([5,6,7,8,9], "Des") -> [9,8,7,6,5]
//ArrayRules([4,3,2,1], "None") -> [4,3,2,1]

// function ArrayRules (arr,str ) {

//     switch(str){
//         case 'Asc':
//             return arr.sort((a,b) => a-b)

//             case 'Des':
//                 return arr.sort((a,b) => b-a)

//                 default:
//                     return arr
//     }
// }

// console.log(ArrayRules)

//Creat a function that returns the total number of items in nested arrays.

// const arr1 = ([1,[2,3]])
// console.log(arr1.flat());
// const arr2 = ([1,[2,[3,4]]])
// console.log(arr2.flat(2));
// const nestedArrays = arr => arr.flat(Infinity).Length

// console.log(arr1.flat(Infinity));

//example of class below
// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }

// write a function that divides an array into sub arrays based on n number giving
// where n is the length of each sub array.

/*
subarray([1,2,3,4,5,6,7,8,9,10],2)->[[1,2],[3,4],[5,6],[7,8],[9,10]]
*/

// function subarrays(arr,n){
//   let x = []
//   let y = []

//   for (let i = 0; i < arr.length; i++) {
//     x.push(arr[i])
//     if(x.length%n === 0) {
//       y.push(x)
//       x=[]
//     }
//     else {
//       y.push(x)
//     }
//     return [... new Set(x)]
//   }
// }

// console.log(subarrays([1,2,3,4,5,6,7,8,9,10],2))

// for (let i = 0; i < arr.length; i++) {
// i index starts at 0 i++ is index +1 meaning it show appair as 1 not 0


// const buffer = new ArrayBuffer(8);
// const Uint8Array = new Uint10Array(buffer, 2);

// console.log(uint8.byteLength);

// const numbers = [3,6,9];

// const arr1 = [1,3,5,7,9,]

// const arr2 = [2,4,6,8,10,]

// const result = numbers.filter(numbers => numbers.length > 8);

// console.log(result);

// const common = (array1, array2) => {
//   return array1.filter(elem => array2.includes(elem))
// }
// console.log(common([1,3,4,5],[1,2,6,7,4,8,9,3]));


//the above code failed

// function isBigEnough(value) {
//   return value >= 10
// }

// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)

// console.log(filtered)

//The experesion above is fix! :)

// let numberArray = [515,314,44,3];

// function reorder(arr){
//   return arr;{
//     numberArray.join(); 
//     numberArray.sort();
//   }
// }

// console.log()


// function redoes(arr, order) {
//   let newArr = [];
//   switch(order) {
//   case 'des':
//   for(let i = 0 ; i < arr.length; i++) {
//      newArr.push (arr.sort((a, b) => b-a));
//   };
//   return newArr
//   case 'asc':
//   for(let i = 0; i < arr.length; i++) {
//       newArr.push (arr.sort((a, b) => a-b));
//   };
//   return newArr
// }
// }
// console.log(redoes([515, 341, 44, 3], 'asc'))

//not my work above. and didn't work, but interesting.

/*
Given an object with students and the grades that they made on the tests that
they took, determine which student has the best Test Average.

The key will be the student's name and the value will be an array of their 
grades you will only have to return the student's name. you do not need to
return their Test Average.
*/

// let Ali = [67,84,75,63];
// let James = [87,98,64,71];
// let Matt = [90,58,73,86];
// let mixedNumericArray = [67,84,75,63,87,98,64,71,90,58,73,86]

// function compareStudents(a, b) {
//   return a - b;
// }

// Ali.join(); 
// Ali.sort(); 
 
// James.join(); 
// James.sort(); 
// James.sort(compareNumbers); 

// Matt.join(); 
// Matt.sort(); 
// Matt.sort(compareNumbers); 

// mixedNumericArray.join(); 
// mixedNumericArray.sort(); 
// mixedNumericArray.sort(compareNumbers); 

// console.log(mixedNumericArray)

// class studentTestScore {
//   constructor(name, scores){
//     this.name = name
//     this.scores = scores
//   }
// }

// let student1 = studentTestScore("Ali",[67,84,75,63])
// let student2 = studentTestScore("James",[87,98,64,86])
// let student3 = studentTestScore("Matt",[90,58,73,86])

// students.sort((firstItem, secondItem) => firstItem.scores - secondItem.scores);

// let user = new Object();

// console.log; user


// let user = {
//   name: 'sam',
//   age: 30
// };

// console.name
// console.age


// let product = new Object()
// console.log(product)
// product.name = 'Laptop'
// product.price = 1200

// console.log(product)

// product.price = 1000

// delete product.name
// console.log(product)

// let user = {name: "John", age:30};

// console.log(user)

//alert method can be used in browser console. e.g. alert("age" in user)

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Peter: 130
// }

// let user = { name: "John"};
// let admin = user; 

// console.log(admin)

// const user = {
//   name: "John",
//   age: 21
// };
// user.name = "Tobias"
// user.age = 23
// console.log(user.name);
// console.log(user.age);

// let user = {
//   name: "John",
//   age: 30
// };
// let clone = Object.assign({}, user);

// //now clone is a fully independent clone
// clone.name = "David";//changed the data in it

// console.log(user.name);
// console.log(clone.name);

// let user = {
//   name: "John",
//   age: 30
// };
// user.sayHi = function () {
//   console.log("Hello!");
// };

// user.sayHi();
// console.log(user)




