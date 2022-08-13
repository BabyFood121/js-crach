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


const str = "Frontend Simplified"

for (let i = 0; i < str.length; ++i){
    console.log(str[i])
}





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