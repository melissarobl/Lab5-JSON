// use [] to define an array
//length is not fixed- can add and delete elements
//use array[index] to access and modify elements: console.log(animals[0]) or animals[2] = mouse
//can store the same type or mixed types of data

//console.log(my_array[-10]) //non-existent index: this prints 'undefined'

let animals = ['lion', 'tiger', 'cheetah', 'buffalo']
console.log(animals)
console.log(animals[10000])

animals[1] = 'zebra'
console.log(animals[1])


animals.push('elephant')  //add to end of array
console.log(animals)

animals.pop() //removes last addition from end of array (if you just used .push)

//remove from end of array and know what it was:
let lastAnimal = animals.pop()
console.log(lastAnimal)  //what was the last element in the array
console.log(animals) //what is the new array?

animals.reverse()
console.log(animals)

animals.sort()
console.log(animals)

let numberOfAnimals = animals.length
console.log(numberOfAnimals)

console.log(animals.indexOf('lion'))
//if index of an animal is -1, that means it is not found
if (animals.indexOf('walrus') === -1) {
    console.log('walrus is not in the array')
}

if (animals.includes('cheetah')) {
    console.log('cheetah is in the array')
}

console.log(animals.join('*')) //put a * between each array element

animals.unshift('deer') //add to beginning of array
console.log(animals)

let firstAnimal = animals.shift()  //move data from beginning of array
console.log(firstAnimal)
console.log(animals)  //removes 'deer' from beginning

animals.forEach( function(animal) {
  console.log(animal.toUpperCase())
})

// use a loop to print the length of each animal name
animals.forEach( function(animal){
    console.log(animal.length)
})

animals.push('alligator') //add alligator to end of animals array

// Make a new array with the lengths of each animal name?
// For example, [ 'cheetah', 'lion', 'zebra' ]
// Create an array [ 7, 4, 5 ]
let animalNameLength = []  //define variable for new array
animals.forEach( function(animal){
   let length = animal.length  //measure the length
    animalNameLength.push(length)  //add it to animal name length array
})
console.log(animalNameLength)
