let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}


console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//Challenge Area

//Name, age, location

//Ben is 22 and lives in Dallas


let myPerson = {
    name:       'Ben',
    age:        22,
    location:   'Dallas'
}

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`)

myPerson.age = myPerson.age + 1

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`)