let birds = ['Owl', 'Robin', 'Eagle']  //can change size of array in JS
console.log(birds)

birds.forEach( function(bird, index){
    // repeat once for each object in array
    //function will be called for each object in the array
    console.log(index, bird)
})


// Traditional for loop
for( let x = 0 ; x < birds.length ; x++) {
    let bird = birds[x]
    console.log(bird.toUpperCase())
}


//let whereIsZ = text.indexOf('z') // Index of first batch character or -1 if not found

// let whisperAndShout = whisper.concat(shout) //Join strings together

//let replaceO = text.replace('o', 'O') //Replace the first instance of first things with the second thing

//let replacedAll = text.replace(/itec/g, 'ITEC')  //g means global- replace globally in document.
// let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')  //means match any digit(d) that is repeated four times {4} in the entire document(/g) with ITEC and the numbers that match

//let removeWhitespace = text.trim()  //removes spaces, tabs, new lines, etc. from both ends of the string