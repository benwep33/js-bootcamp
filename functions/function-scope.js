// Global scope (fahrenheitToCelsius, tempOne, tempTwo)
  // Local scope (fahrenheit, celsius)



let fahrenheitToCelsius = function(temp) {
    let celsius = (temp - 32) * (5/9)

    if(celsius <= 0) {
        let isFreezing = true
    }
    return `${temp}`
}

//let tempOne = fahrenheitToCelsius(32)
//let tempTwo = fahrenheitToCelsius(68)

let tempOne = 32
let tempTwo = 68

console.log(tempOne)
console.log(tempTwo)