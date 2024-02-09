//to be a senator, you must:
// be at least 30 years old
//have been a US citizen for 9 or more years
//must live in the state you want to represent


let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Wisconsin'


if (age >= 30 && usCitizenTime >=9 && stateOfResidence === stateWantToRepresent) {
    console.log (`You are eligible to be a US senator in ${stateOfResidence}.`)
} else {
    console.log('Sorry, you are not eligible.')
}


//falsy values - undefined, null, empty lists, empty objects, 0, false
//best practice is to use triple equals ===
//only use == when you know type coercion is ok.
if (false == 0) {
    console.log('the same!')
} else {
    console.log('not the same!')
}

