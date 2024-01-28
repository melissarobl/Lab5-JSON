function isGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    } else {
        return false
    }
}

//Another option for writing function:
// function isGPA(gpa) {
//     return gpa >= 0 && gpa <= 4
// }

console.log(isGPA(3))
console.log(isGPA(0))
console.log(isGPA(2.5))
console.log(isGPA(15))


// Option 1: if you don't have much to concatenate:
// function cityStateAddress(city, state) {
//     let address = city + ", " + state.toUpperCase() //wi -> WI
//     return address
// }

// Option 2:
function cityStateAddress(city, state) {
    let address = `${city}, ${state.toUpperCase()}` //this is a template string
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))
let address = cityStateAddress('Seattle', 'WA')
console.log(address)