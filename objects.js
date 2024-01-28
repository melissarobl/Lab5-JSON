//objects in JS are like hashmaps, hashtables
//list properties, which are name:value pairs
// let user = { username: 'Zoe', password: 'kittens'} where user is object and username and pwd are properties
//JSON (JavaScript Object Notation): { name: value, name2: value2 } values can be anything, but the names have to be strings
//object -> curly braces
//array -> straight brackets

let user = {username: 'Melissa', password: 'bracelet'}

for (let name in user) {  //loop over all properties of an object using a for...in loop
    console.log(name, user[name])
}

//other example:

// let furniture = { table: "red" , chair: "blue", couch : "green"};
//for (let f in furniture) {
// console.log(f); //f is table, chair, couch- the property names
// console.log(furniture[f]); //this is the value for property f


console.log(user.username)  //faster to type. Know what the property is when you are writing your code
console.log(user['username'])
console.log(user.password)
console.log(user['password'])

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])  //use this format if the name of the property is something you know, but it is in a variable

user.password = 'elephant'  //updates password
console.log(user)

user['password'] = 'alligator' //another option to update password
console.log(user)

user.email = 'email@email.com'
console.log(user)
console.log(user.email)
