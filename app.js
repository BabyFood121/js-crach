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
