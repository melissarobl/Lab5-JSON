function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hello world')) //if you add an extra parameter, JS will ignore it.
//If you don't put a parameter in, however, you will get an error message (parameter will be 'undefined')
//This means it is easier to use optional parameters

let message = shout('hello web programmers')  //save output from function in a variable
console.log(message)


// Version 1: BASIC
// function f_to_c(f) {
//     let celsius = (f - 32) * 5 / 9
//     return celsius.toFixed()  //rounds to nearest whole number
//     //return celsius.toFixed(2) rounds to two decimal places
//     //return celsius does not round at all
// }

//let todayTemp = 75
// todayCelsius = f_to_c(todayTemp)
// console.log(todayCelsius)

// Version 2: MORE OPTIONS
function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9
    if (decimalPlaces) {  //undefined values are considered to be false
        return celsius.toFixed(decimalPlaces)
    } else {
        return celsius
    }
}
let todayTemp = 75
todayCelsius = f_to_c(todayTemp, 4)
console.log(todayCelsius)