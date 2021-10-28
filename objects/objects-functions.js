let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}


let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    //console.log(`${book.title} by ${book.author}`) 
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Challenge Area
//Create function - take fahrenheit in - return object with all three

let tempChange = function(temp) {
    return {
        fahrenheit: temp,
        celsius: (temp - 32) * (5/9),
        kelvin: (temp - 32) * (5/9) + 273.15
    }
}

let temps = tempChange(74)

console.log(temps)
