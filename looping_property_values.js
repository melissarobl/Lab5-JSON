let furniture = { table: "red", chair: "blue", couch: "green"}

for (let f in furniture) {
    console.log(f)  //f is the table, chair, couch = the property names

    console.log(furniture[f])  //this is the value for property f (red, blue, green)
}


let letters = ['a', 'b', 'c']
for (let i = 0; i < letters.length; i++) {
    console.log('Element ' + i + ' is ' + letters[i])

}
