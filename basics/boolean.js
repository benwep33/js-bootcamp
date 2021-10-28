// === - equality operator
// !== - not equal operator
// <   - less than operator 
// >   - greater than operator
// <=   - less than or equal to operator 
// >=   - greater than or equal to operator


let temp = 180

let isFreezing = temp <= 32

if(isFreezing) { 
    console.log('It is freezing outside!')
}

if(temp >= 110) {
    console.log('It is way to hot outside!')
}

//Challenge 3 Area


//Create age set to your age
let age = 65


//calculate is child
let child = age <= 7
//calculate is senior
let senior = age >= 65
//Print is child value
console.log(child)
//Print is senior value
console.log(senior)


//Challenge 4 Area

// If 7 or under print message
if(child) {
    console.log('You get child discount.')
}
//If 65 or older print message
if(senior) {
    console.log('You get senior discount.')
}