let temp = 65

//Logical AND operator - && - True if both sides are true, false otherwise
//Logical OR operator  - || - True if at least one side is true, false otherwise


if(temp >= 60 && temp <= 90) {
    console.log('It is wonderful outside!')
} else if(temp <= 0 || temp >= 120) {
    console.log("Do not go outside!")
} else {
    console.log('Eh, do what you want.')
}

//Challenge Area

let isGuestOneVegan = true
let isGuestTwoVegan = false

//Are both vegan?

//At least one vegan?

//Else, offer up anything on the menu.

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer up only vegan dishes')
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer up some vegan options')
} else {
    console.log('Offer up anything on the menu')
}