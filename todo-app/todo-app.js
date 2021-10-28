const todos = [{
    text: 'Wake up',
    completed: true
}, {
    text: 'Brush teeth',
    completed: false
}, {
    text: 'Read Bible',
    completed: true
}, {
    text: 'Shower',
    completed: false
}, {
    text: 'Check Email',
    completed: true
}]

const incompleteTodos = todos.filter( function (todo){
    return !todo.completed
}) 

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add a new todo...')
})


todos.forEach(function(todo) {
    const newP = document.createElement('p')
    newP.textContent = todo.text
    document.querySelector('body').appendChild(newP)
})



// You have 2 todos left (p element)
// add a p for each todo above







// //const pFilter = function(query) {
//     let filteredP = document.querySelectorAll('p')
//     filteredP.forEach(function(p) {
//         let isMatch = p.textContent.includes('the')
//         if(isMatch) {
//             p.remove()
//         }
//     })
//     //return filteredP
// //}