// Function - input (argument), code, output (return value)

let greetUser = function() {
    console.log('Welcome User!')
}

greetUser()



let square = function(num) {
    let result = num * num
    
    return result
    
}

let value = square(3)
console.log(value)


//Challenge Area

let fahrenheitToCelsius = function(temp) {
    let celsius = (temp - 32) * (5/9)

    return celsius
}

let tempOne = fahrenheitToCelsius(32)
let tempTwo = fahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)