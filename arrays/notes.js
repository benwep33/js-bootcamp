const notes = [{
    title: 'My Next Trip',
    body: 'I would like to go to Greece'
}, {
    title: 'Habits to work on',
    body: 'Excersing more and eating better'
}, {
    title: 'Office modifications',
    body: 'Get new monitors'
}]



// if  a first, -1, if b first 1, same 0
const sortNotes = function(notes) {
    notes.sort(function (a, b) {
        if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if(b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)


const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function(notes, query) {
    const filteredNotes = notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
    return filteredNotes
}

//console.log(findNotes(notes, 'beTTEr'))
















// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'my Office')
// console.log(note)







// console.log(notes.length)
// console.log(notes)


// // Looks for first match and then stops
// const index = notes.findIndex(function(note, index) {
//     console.log(note)
//     return note.title === 'Habits to work on'
// })
// console.log(index)



















// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1,1)
// notes.splice(1, 0, 'This is new item')

// notes[2] = 'This is now the new note 3'

// //A function in a function - Callback function
// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)
// })



// Counting... 1
// for(let count = 1; count <= 3; count++) {
//     console.log(count)
// }

// for(let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }


// Gives you location in array
//console.log(notes.indexOf('Note 2'))

// let someObject = {}
// let otherObject = someObject
// // This will be true
// console.log(someObject === otherObject)

// // This will be false, objects are only equal if they are exact same object
// console.log({} === {})