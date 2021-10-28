let todos = [{
    text: 'Wake up',
    completed: true
}, {
    text: 'brush teeth',
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




const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if(a.completed === false && b.completed === true) {
            return -1
        }else if(!b.completed && a.completed) {
            return 1
        }else {
            return 0
        }
    })
}




sortTodos(todos)
console.log(todos)















// 1. convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value
const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    // For me to see index
    console.log(index)
    if(index > -1) {
        todos.splice(index, 1)
    }
}

// deleteTodo(todos, 'wake dup')
// console.log(todos)



const getThingsToDo = function(todos) {
    const filterNotCompleted = todos.filter(function(todo, index) {
        
        return todo.completed === false
    })
    return filterNotCompleted
}


//console.log(getThingsToDo(todos))



















// //Create an array with five todos
// //You have x todos
// //Print first and second to last -> Todo: walk the dog

// let todos = ['Wake up', 'brush teeth', 'Read Bible', 'Shower', 'Check Email']

// //Delete 3rd item
// //Add a new item to the end
// //Remove first item from list
// todos.splice(2,1)
// todos.push('Have team meeting')
// todos.shift()



// console.log(`You have ${todos.length} todos!`)
// todos.forEach(function(item, index) {
//     console.log(`${index+1}. ${item}`)
// })
// //console.log(`Todo: ${todos[0]}, and ${todos[todos.length -2]} `)
// console.log('')

// // for(let count = 0; count < todos.length; count++) {
// //     let num = count + 1
// //     let todo = todos[count]
// //     console.log(`${count+1}. ${todos[count]}`)
// // }
