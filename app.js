// hard challenges
// making stars and half a star based off numbers
// function showRating(rating) {
//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); ++i){
//             ratings += "*"
//           if (i !== Math.floor(rating) - 1) {
//               ratings = ratings + " "
//           } 
//     }
//     if (!Number.isInteger(rating)) {
//        ratings += " .";
//     }
//     return ratings;
// }
// console.log(showRating(4.5));


// function convertToStar(rating) {
//     let ratings = "";
//     // empty canvas to replace number
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         // makes it so [i] will be rounded down to a whole number
//         ratings += '* '
//         // when it is down to a whole number it
//         if (i !== Math.floor(rating) - 1) {
//             ratings += " "
//             // this makes it so when its not a number there is a space in-between
//         }
//     }
//     if (!Number.isInteger(ratings)) {
//         ratings += " ."
//         // when there is a decimal it will print little dot
//     }
//     return ratings
// }
// console.log(convertToStar(4.5));
// // -------------------------------------------------
// function sotLowToHigh(numbers){
//     return numbers.sort((a, b) => a - b);
//     // sort does it alphebetically, but numerically do this ^
// }
// console.log(sotLowToHigh([1, 5, 0, 10, 3, 4]))
// -----------------------------------------------
function SortPriceHighToLow(numbers){
    return numbers.sort((a, b) => {
        // sorts the numbers
    return b.price - a.price
    // looks at the second numebr with the class and compares them
    });

}
console.log(SortPriceHighToLow([
    {id : 5, price: 50},
    {id : 3, price: 20},
    {id : 6, price: 100}
])
);

















// // medium questions
// function falsyOrTruthy(elem1, elem2){
//         return !elem1 ? elem1 : elem2
// }
// console.log(falsyOrTruthy(3,45))
// // if the first element is true it will cosnole.log the second element
// // -----------------------------
// function arrLength(arr){
//     return arr.length;
// }
// console.log(arrLength([1, 2, 3, 4]));
// // to get the length of the array
// // --------------------------------
// function lastElem(arr){
//     return arr[arr.length - 1];
// }
// console.log(lastElem([0, 1, 2, 3]));
// // to get the last element of an array
// // ----------------------------------
// function arraySum(arr){
//     let sum = 0
//     for (let i = 0; i < arr.length; ++i){
//         // this is how you loop through every element in an array
//         sum = sum + arr[i]
//     }
//     return sum
// }
// console.log(arraySum([1, 2, 3, 4, 5, 6]))
// // adding everythign is the array
// // when you want every index in an array use a for loop
// // -----------------------------------------
// function prgressiveSum(num){
//     let sum = 0
//     for (let i = 1; i <= num; ++i) {
//         sum = sum + i
//     }
//     return sum
// }
// console.log(prgressiveSum(4))
// // add all elements  in an array together
// // -----------------------------------------
// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds / 60)
//     let timerSeconds = seconds % 60;

//     if( timerMinutes.toString().length === 1 ){
//         let timerMinutes = '0' + timerMinutes
//     }

//     return timerMinutes + ':' + timerSeconds
// }
// console.log(calcTime(1015));
// // // convert this to a sting, (converting a time into mm:ss)
// // // -----------------------------------------
// function getMax(arr) {
//     let max = arr[0]
//     for (let i = 1; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max
// }
// console.log(getMax([-100, 40, -300]));
// // // highest number in an array
// // // ---------------------------------------------
// // common loop/reverse loop method
// function reverseString(str) {
//     let reversedString = '';
//     for (let i = 0; i < str.length; ++i){
//      //this is how to loop every character in a string
//       reversedString =  reversedString +str[i];
//     }
//     return reversedString;
// }
// console.log(reverseString('32das'))
// // reverse the order of elements in a string
// // ------------------------------------------
// // decremental for loop
// function reverseString(str){
//     for (let i = str.length - 1; i >= 0; --i) {
//         reversedString += str[i]
//     }
//     return reversedString;
// }
// console.log(reverseString('abc'))
// // --------------------------'str'.split('elem').reversed().join('')
// // string to array = .split
// // array to string = .join
// // only use .reverse on an array 
// // -----------------------------------------------
// // array reverse property
// // shortest reverse property
// function reverseString(str) {
//     return str.split('').reverse().join('')
// }
// console.log(reverseString('hello'))
// // ------------------------------------------------
// // convert elements in an array to 0
// // for loop example
// function convertToZero(arr){
//     let newArr = [];
//     for (let i = 0; i < arr.length; ++i){
//         newArr[i] = 0
//     }
//     return newArr
// }
// console.log(convertToZero([1, 2, 3, 4, 5, 6]))
// // -----------------------------------------------
// // convert elements in an array to 0
// // array fill method
// function convertToZeroFill(arr){
//     return new Array(arr.length).fill(0);
// }   
// console.log(convertToZeroFill([1, 2, 3, 4,]))
// // ---------------------------------------------
// // convert elements in an array to 0
// // array map method (SUPER IMPORTANT)
// // map lets you map over every element in an array
// // [1, 2, 3].map(elem => elem * 2)
// // map has 3 parts
// // the current element, arrow and the conversion
// // map will convert everything on the array to the right of 
// function convertToZeroMap(arr){
//    return arr.map(elem => 0)
// }   
// console.log(convertToZeroMap([1, 2, 3, 4,]))
// // ----------------------------------------------------
// // remove the word apple from an array
// function removeApples(arr){
//     let noApples = []
//     // this creates an empty array to push where the apple is
//     for (i = 0; i < arr.length; ++i){
//        if(arr[i] !== 'apple') {
//         noApples.push(arr[i]);
//         // in an if statement it will not be equal to apple so we check  to then
//         // pushg the new empty array where apple is
//        }
//     }
//     return noApples
//     // return the noApple array so that its active
//  }   
//  console.log(removeApples(['orange', 'apple', 'pepper']))
//  // // -------------------------------------
// // remove apple from an array with filter method
// // whenever you need to filter anything always go to the array. filter property
// function removeApplesFilter(arr){
//     return arr.filter(elem => elem !== 'apple')
//     // goes through the array checks if its not equal to apple, then gets rid of it
//  }   
//  console.log(removeApplesFilter(['orange', 'apple', 'pepper']))


// //  ex. [1, ,2 ,3].filter(elem => elem === 3)
// // this goes through the array, and then filters the element to the right of arrow
// // ------------------------------------------------------
// // filter out falsy values
// // filter method
// function filterOutFalsy(arr) {
//     return arr.filter(elem => !!elem === true)
// }
// console.log(filterOutFalsy(['spongebob', 0, undefined, 'squidward']))

// // for loop way\/
// function filterOutFalsyLoop(arr){
//     let truthyvalue = []
//     for (i = 0; i < arr.length; ++i) {
//         if (!!arr[i] === true) {
//             truthyvalue.push(arr[i])
//         }
//     }
//     return truthyvalue
// }
// console.log(filterOutFalsyLoop(['hello', 0, undefined, NaN, 'orange']))
// ------------------------------------------------------------
// thruthy stuff named truthy, fasy stuff named false
// when convertying anything use the .map method
// function convertToBoolean(arr){
//     return arr.map(elem => !!elem)
// }
// console.log(convertToBoolean(['hey', 0, undefined, '', true, 'im black']))







// begginer challenges

// function addition(num1, num2){
//     return num1 + num2
// }
// console.log(addition(3, 5));
// // -------------------------------------
// function hourToSec(num1){
//     return num1 * 3600
// }
// console.log(hourToSec(2))
// // -----------------------------------
// function calPerimeter(length, width){
//     return 2 * (length + width);
// }
// console.log(calPerimeter(10,20))
// // ------------------------------------
// function calTriangleArea (base, height){
//     return 0.5 * base * height;
// }
// console.log(calTriangleArea(10, 4))
// -------------------------------------
// function endfrontend (word){
//     return word + 'frontend'
// }
// console.log(endfrontend('apple'));
// // -------------------------------------
// function sumGreaterThan100 (num1, num2){
//     return num1 + num2 >= 100 
// }
// console.log(sumGreaterThan100(50,54));
// // ------------------------------------
// function lessOrEqualToZero (num){
//     return num <= 0
// }
// console.log(lessOrEqualToZero(-1))
// // -----------------------------------
// function oppositeboolean(bool){
//     return !bool
// }
// console.log(oppositeboolean(true))
// // ----------------------------------
// function isNot0(num){
//     return num !== 0
// }
// console.log(isNot0(1))
// // ---------------------------------
// function calcRemainder (num1, num2){
//     return num1 % num2
// }
// console.log(calcRemainder(3,6));
// // ------------------------------------
// function isOdd (num){
//     return num % 2 == 1
// }
// console.log(isOdd(3))
// // -----------------------------------
// function booleanInteger (num){
//     return num % 2 === 0 ? 1 : -1
// }
// console.log(booleanInteger(3))
// // even number return as 1, odd returns as -1 
// // -------------------------------------
// function isLoogedinAndSubscried (loggin, subscribed){
//     if (loggin === 'LOGGED_IN' || subscribed === 'SUBSCRIBED') {
//         return true
//     }
//     return false
// }
// console.log(isLoogedinAndSubscried('LOGGED_IN','SUBSCRIBED'))

















// --------DOM--------
// (document Object Model)

// how to change CSS 
// document.querySelector(".title").style.fontSize = '20px'


// // how to target iner html
// document.querySelector('.title').innerHTML = 'hello seggsy'

// function changeTitletoRed() {
//     document.querySelector('.title').style.color = 'red'
//     console.log('clicked');
// }




// function toggleDarkMode() {
//     document.querySelector('body').classList.toggle('black')
// }




// the first way to access an element (common)
// console.log(document.querySelector('#title'));


// the second way of accessing an element(only works with an eement that has an id)
// console.log(document.getElementById('title'));




// -----OBJECTS-----

// let user = [
//   {
//     username: "Alex",
//     email: "allie2005nicholas@gmail.com",
//     password: "test123",
//     userSubscriptionStatus: "VIP+",
//     discordId: "Kenpachi",
//     lessonCompleted: [0, 1],
//   },
//   {
//     username: "mitri",
//     email: "mitri@gmail.com",
//     password: "mitri123",
//     userSubscriptionStatus: "VIP+",
//     discordId: "mitri",
//     lessonCompleted: [0, 1, 3, 4],
//   },
//   {
//     username: "zen",
//     email: "zen@gmail.com",
//     password: "zen123",
//     userSubscriptionStatus: "VIP+",
//     discordId: "zen#001",
//     lessonCompleted: [0, 1, 3, 4],
//   },
// ];

// function login(email, password) {
//   for (let i = 0; i < user.length; ++i) {
//     if (user[i].email === email) {
//       console.log(user[i]);
//       if (user[i].password === password) {
//         console.log("log the user in - the details are correct");
//       } else {
//         console.log("password is incorrect - try again");
//       }
//       return;
//     }
//   }
//   console.log("could not find an email that matches");
// }

// login("allie2005nicholas@gmail.com", "test123");

// // object practice

// function register(user) {
//     user.push(users);
// }

// register({
//     username: "zen", 
//     email: "zen@gmail.com", 
//     password: "zen123", 
//     userSubscriptionStatus: "VIP+", 
//     discordId: "zen#001", 
//     lessonCompleted: [0, 1, 3, 4]
//     });

//     console.log(user);


// --- ARRAYS ---

// let dollars = [1, 5, 10, 3]

// // create new 'cents' array
// let cents = []
// // loop over every element in 'dollars'

// for (let i = 0; i < dollars.length; ++i) {
//     cents.push(dollars[i] * 100);
// }
// // multiply th element by 100
// //  add this element onto the cents

// // console log cents
// console.log(cents)

// let dollar = [1, 5, 10, 3]

// let cents = dollar.map(element => element * 100)

// console.log(cents)

// let dollar = [1, 5, 10, 3]

// let cents = dollar.map(element => {
//     return element * 100
// })

// console.log(cents)

// let arr = [1, 5, 10, 3]

// let newArray = arr.map(element => 'dog')

// console.log(newArray)

// let arr = [1, 4, 9, 16]

// let newArray = arr.map((element) => {
//     console.log(element)
//     return 'dog'
// })

// console.log(newArray)

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = []

// for (let i = 0; i < grades.length; ++i) {
//     if (grades[i] !== 'FAIL') {
//         goodGrades.push(grades[i]);
//     }
// }

// console.log(goodGrades);

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = grades.filter(element => element !== 'FAIL')

// console.log(goodGrades)

// let arr =[20, 30, 40, 50, 100]

// // [20, 30, 40,]
// let newArr = arr.filter(element => {
//     console.log(element)
//     if (element < 50) {
//         return true;
//     }
// })

// // the same thing ^
// //  let newArr = arr.filter(element => element < 50)

// console.log(newArr)

// -- FUNCTIONS---

// const convertCelciusToFahrenehit = (celcius) => {
//     return celcius * 1.8 + 32
// }

// console.log(convertCelciusToFahrenehit(0));

// function convertCelciusToFahrenehit(celcius) {
//     return celcius * 1.8 + 32
// }

// console.log(convertCelciusToFahrenehit(5));
// console.log(convertCelciusToFahrenehit(18));

// function sumOfTwoNumbers(num1, num2) {
//     return num1 + num2
// }

// console.log(sumOfTwoNumbers(10, 10));

// function definition
// function welcomPersonToFES (FirstName, LastName) {
// console.log(`welcome to FES, ${FirstName} ${LastName}`)
// }
//
// call the function
// welcomPersonToFES('Alex', 'Nicholas');
// welcomPersonToFES('joe', 'shmoe');

// LOOPS

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         console.log(`${i} -> frontend`)
//     }
//     else if (i % 5 === 0) {
//         console.log(`${i} -> Simplified`)
//     }
//     else if (i % 3 === 0 && i % 5 == 0) {
//         console.log(`${i} -> Frontend Simplified`)
//     }
//     else {
//         console.log(`${i} -> ${i}`)
//     }
// }

// const str = "Frontend Simplified"

// for (let i = 0; i < str.length; ++i){
//     console.log(str[i])
// }

// DRY = Don't repeat youself

// let count = 1;

// while (count <= 100) {
//     console.log(count)
//     count = count + 1
// }

// for (let i = 0; i < 100; i++) {
//     console.log(i + 1);
// }

//    'i' less than how many times we wan tto loop
//                   ^
//for (let i = 0; i < 100; i++) {
//        ^                ^
//    set 'i' to 0     increment 'i' by 1
//     console.log(i)

// }

// ternary operators

// let cash = 40
// let price = 40
// let isStoreOpen = true

// let str = cash >= price && isStoreOpen ? 'give receipt' : 'dont give receipt'
// console.log(str);

// ^
// let subscribed = true
// let loggedIn = true

// let str = subscribed && loggedIn ? 'show the video' : 'hide the video'
// console.log(str);

// ^
// let hot = true

// hot ? console.log('weather is hot outside') : console.log('wather is cold')

// truthy falsy stuff
// let val = "ccunt";

// if (val) {
//     console.log("truthy value", !!val)
// }
// else {
//     console.log("falsy value", !!val)
// }

// let cash = 50
// let price = 40
// let isStoreOpen = false

//  if you have enough cash to get the item from the store, and the store is open, then you print the receipt
// if (cash >= price && !isStoreOpen) {
//     console.log('print the receipt')
// }

// if (cash >= price) {
//     console.log('you have enough cash to buy the product')
// }

// CONDITIONALS
//

// let cash = 30
// let price = 40
// let difference = cash - price

// if (cash > price) {
//     console.log(`you paid extra - here's ${difference} dollars change`)
// }
// else if (cash === price) {
//     console.log("you paid the exact ammount, have a nice day!")
// }
// else {
//     console.log (`not enough money - you still owe ${difference * -1} dollares`)
// }

// data types and variables
// let bool = '1' == 1

// console.log(bool)

// _----------------------
// let FullName = 'alex'

// const inRaing = true
// let temperature = 30
// let planet = 'earth'

// temperature = temperature + 2

// console.log(temperature)
// -----------------------------------
// let celsius = 10;

// let fahrenheit = celsius * 1.8 + 32

// console.log(fahrenheit)
