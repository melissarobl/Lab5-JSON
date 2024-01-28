console.log('Hello World!')

//three ways to create variables
let color = 'blue'  //choice for variables
var size = 'medium'  //not recommended option. Variable exists in more places than you expect it to.
const language = 'JavaScript' //can't change variable. Final value.


let quantity = 5
let distance = 4.5

let text = 'Hello World' //single or double quotes ok
let message = "Hi Programmers"  //single or double quotes ok

console.log('There are ' + quantity + ' programmers.')



let todayTemp = 75
//can you use this variable to console.log
//the message "Today's temperature is 75F"

console.log("Today's temperature is " + todayTemp + "°F")
//remember if you use single quotes: console.log('Today\'s temperature is ' +...)

let tempC = (todayTemp - 32)* 5 / 9
console.log('Today\'s temperature is ' + tempC.toFixed(2) + '°C')
console.log(`Today's temperature is ${tempC.toFixed(2)}°C which is equivalent to ${todayTemp}°F.`)


let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'
 //This class is ITEC 2560 Web Programming
console.log(`This class is ${department} ${classCode} ${className}`)