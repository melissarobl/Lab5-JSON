/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

console.log(iss_location.iss_position.latitude) // Extract the latitude value, and log it to the console.
console.log(iss_location.iss_position.longitude)  // Extract the longitude value, and log it to the console.




/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

rates.CHF = 1.1787  // write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.

//Option 1: Not rounded:
// let euros = 100
// let eurAudExchange = rates.AUD
// let eurToAUD = (euros * eurAudExchange)
// console.log(euros + ' Euros is equal to ' + eurToAUD + ' Australian Dollars.' )

//console.log('100 Euros is equal to ' + (euros * eurAudExchange) + 'Australian Dollars' )


//Option 2 using a function and Rounded to cents:
function eur_to_aud(euros, decimalPlaces) {
    let euroToAUD = (euros * rates.AUD)  // the equivalent value in Australian Dollars (AUD)
    if (decimalPlaces) {  //undefined values are considered to be false
        return euroToAUD.toFixed(decimalPlaces)
    } else {
        return euroToAUD
    }
}
let euros1 = 100  //if you had 100 Euros, write code to get the exchange rate from the object, then calculate
euroToAUD = eur_to_aud(euros1, 2)
console.log(euros1 + ' Euros is equal to ' + euroToAUD + ' Australian Dollars.')
//console.log(`${euros1} Euros is equal to ${euroToAUD} Australian Dollars.`)  //just trying other format



/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

// Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners.push( {name: "Taylor Swift", cat: "Meredith"})

// write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
cats_and_owners.forEach( function(person) {  //each loop in array is being called person
    let personName = person.name //the name property of each "person" loop is called personName
    let catName = person.cat //the cat property of each "person" loop is called catName
    console.log(personName + "'s cat is called " + catName + ".")  //   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"
})

//Print Gary Oldman's cat's name by reading the data in the appropriate array index, using [] notation
console.log("Gary Oldman's cat's name is: " + cats_and_owners[1].cat + ".")


// Print Gary Oldman's cat's name by looping over the array until you find the object with name = "Gary Oldman"
    let findGary = cats_and_owners.find (person => person.name === "Gary Oldman")
        //used example given in map.filter.js example from videos:  let steve = students.find( student => student.name === 'steve')
        //.find loops over array until it finds the first instance of "Gary Oldman" and assigns the object with that name to the 'findGary' variable
    console.log("The name of Gary Oldman's cat is " + findGary.cat + ".")



/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",  //need this name for question 1
                    "surname":"Ishiguro", //also need this name for question 1
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}

// print the full name of the Literature Nobel laureate. Drill down to information
let nobelPrizes = nobel_prize_winners_2017.prizes
//gets the array of prize property and assigns it to the variable 'nobelPrizes'

let literature = nobelPrizes[3]
// get the  (0, 1, 2,) 3rd object of array, which is literature
// literature is an object

let literatureWinnerDetails = literature.laureates
//this is an array

let litWinnerName = literatureWinnerDetails[0]
//litWinnerName is an object

let litWinnerFirstName = litWinnerName.firstname
//first name is a property of litWinnerName

let litWinnerSurname = litWinnerName.surname
//surname is a property of litWinnerName


console.log("The full name of the Literature Laureate in 2017 is " + litWinnerFirstName + " " + litWinnerSurname + ".")


// print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
let physics = nobelPrizes[0]

let physicsDetails = physics.laureates

let physicsIDs = []
physicsDetails.forEach( function(laureate){ //loop through physics list. Each laureate is one loop
    physicsIDs.push(laureate.id)  //same format as weather.js example
})
let idsString = physicsIDs.join(', ')  //place comma in between IDs
console.log(idsString)

//console.log('The physics IDs are: ' + idsString + ".")
//use above code if you want to print out a full sentence with the IDs listed


// write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).

nobelCategories = []
nobelPrizes.forEach(function (prize) {
    nobelCategories.push(prize.category)
})

let nobelCategoriesList = nobelCategories.join(', ')
console.log(nobelCategoriesList)


// TODO write code to print the total number of prize categories




// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.