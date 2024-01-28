//console.log('User roles are: ', user.roles) //print roles array
//console.log('User roles are: ', user['roles']) //print roles array, other syntax
//console.log('Users first role is: ' + user.roles[0]) //First role
// user.roles.forEach(function(role) {
//     console.log(role)
// })  //all of the user's roles

let user = {
    username: 'Melissa',
    email: 'myemail@notyouremail.com',
    password: 'tortilla',
    userid: 1,
    roles: ['user', 'admin'],
    contact: {
        phone: '111-222-3333',
        office: 'C1930'
    }
}

user.userid = 522 //change userid
console.log(user)

user.salary = 80000
user.roles.push('server admin')
user.officeLocation = 'Minneapolis'
console.log(user)
