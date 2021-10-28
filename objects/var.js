var firstName = 'Ben'
firstName = 'Bob'

//This is valid with var but shouldn't be
var firstName = 'Jen'

console.log(firstName)


//Uses Function Scope and not Block
if(10 === 10) {
    var firstName = 'jen'
}
console.log(firstName)

console.log(age)
var age

console.log(age)
//let age
