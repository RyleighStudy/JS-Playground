const pi = 3.14
//pi = 15
console.log(pi)
//NOTE - can't be updated or redifined, block scoped 
let num2 = 20
num2 = 25
console.log(num2)
//NOTE - can be updated but not redifined, block scoped
var num3 = 30
console.log(num3)
//NOTE - can be updated and redifined, not block scoped

const fullName = 'Riley Congdon'
console.log(fullName)

const workplace = 'Twitch'
console.log(workplace)

console.log(fullName + " " + workplace)

console.log('My full name is ${fullName}  and I work at ${workplace}')

let a = 2
let result

if (a > 0) {
    result = "positive";
    console.log(result)
} else {
    result = "NOT positive";
    console.log(result)
}