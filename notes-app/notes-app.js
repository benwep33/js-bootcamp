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

//Use # to target by id
document.querySelector('#create-note').addEventListener('click', function (event) {
    console.log('Did this work?')
    console.log(event)
    event.target.textContent = 'The button was clicked'
})

//Use . to target classes
document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

//tag goes first
// -- Single --
// p
// #replace
//.item

// -- Multiple --
// p#order
// button.inventory
//h1#title.application
// h1.application#title
















// DOM - Document Object Model

// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
// const ps = document.querySelectorAll('p')

// ps.forEach( function(p) {
//     p.textContent = '*****'
//     // console.log(p.textContent)
//     // p.remove()
// })


// //add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)