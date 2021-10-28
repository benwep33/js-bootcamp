let isAccountLocked = false
let userRole = 'admin'



if(isAccountLocked) {
    console.log('Account is locked')
} else if(userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}


//Challenge area

let temp = 120

//It is freezing outside!
//it is hot outside!
//go for it, it's nice weather


if(temp <=32) { 
    console.log('It is freezing outside!')
} else if(temp >= 110) {
    console.log('It is way too hot outside!')
} else {
    console.log("Go for it, the weather is nice!")
}
