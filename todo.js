// This is meant to be the script file to create all objects for a to-do.
// Add/create to-do
// Edit to-do
// View the to-do's in calendar

// getting the sideBar
let sideBar = document.querySelector('.sideBar')

// create button and add text
let toDoBtn = document.createElement('BUTTON')
toDoBtn.innerHTML = 'ADD TO-DO'

// appending toDoBtn to divs
sideBar.appendChild(toDoBtn)

// create div container for todos/todo/edit todo
toDoBtn.onclick = function () {
    // if (!toDoContainer){
    let toDoContainer = document.createElement('DIV')
    toDoContainer.classList.add('toDoContainer')
    // toDoContainer.innerHTML = 'ADD TO-DO'
    document.body.appendChild(toDoContainer)
    console.log (toDoContainer)

    // toDoForm = function () {

        // create CLOSE button and add text
        

        let toDoForm = document.createElement('FORM')
        toDoForm.setAttribute('id', 'toDoForm')
        toDoContainer.appendChild(toDoForm)

        // let closeContainerBtn = document.createElement('BUTTON')
        // submitToDoBtn.innerHTML = 'CLOSE'
        // document.getElementById('toDoForm').appendChild(closeContainerBtn)

        let toDoInput = document.createElement('INPUT')
        toDoInput.setAttribute('type','text')
        toDoForm.innerHTML = ''
        document.getElementById('toDoForm').appendChild(toDoInput)

        // create button and add text
        let submitToDoBtn = document.createElement('BUTTON')
        submitToDoBtn.innerHTML = 'SUBMIT'
        document.getElementById('toDoForm').appendChild(submitToDoBtn)
    //  }
 }

 


    
//     toDoContainer = document.createElement('')
    
// }


// Stuff that comes from teacher..

// create a todo
//  const toDo = [{
//     title: '',
//     text: '',
//     date: '',
//  }]

 // Display all todos for a date

//  const dailyToDo = toDo.filter({toDo} == toDo.date === 'date')