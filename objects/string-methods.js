let name = 'Ben Weppner'

//Length property
console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())


//Includes Method
let password = 'abc123password098'

console.log(password.includes('password'))

//Trim
console.log(name.trim())


//Challenge Area

//isValidPassword
//length is more than 8 - and it doesnt contain the word password
let isValidPassword = function(pw) {
    return !pw.includes('password') && pw.length > 8 
}



console.log(isValidPassword('adbad'))
console.log(isValidPassword('daiwbaif!!#&(&'))
console.log(isValidPassword('baowbfaufbpasswordwdaw'))