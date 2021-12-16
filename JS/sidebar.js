// getting the sideBar
let sideBar = document.querySelector('.sideBar')

// create button and add text
let toDoBtn = document.createElement('BUTTON')
toDoBtn.innerHTML = 'ADD TO-DO'


// appending toDoBtn to divs
sideBar.appendChild(toDoBtn)

function renderSideBarContainer() {
    let toDosForDayContainer = document.createElement('DIV')
    toDosForDayContainer.id = 'toDosForDayContainer'
    sideBar.appendChild(toDosForDayContainer)

    // create UL to store all LI's with todo's
    let listOfToDos = document.createElement('UL')
    listOfToDos.id ='listOfTodos'
    toDosForDayContainer.appendChild(listOfToDos) 
    renderToDos()
}

function renderToDos() {

    let toDosForDayContainer = document.getElementById('toDosForDayContainer')
    let listOfToDos = document.getElementById('listOfTodos')
    listOfToDos.innerHTML=''
    
    // get the selected/current date
    const dayString = `${calendar.selectedYear}-${calendar.selectedMonth}-${calendar.selectedDay}`

    const todosForDay = toDos.filter((todo) => todo.date === dayString)

    // loop though all todo's for selected day, create li with all info from array for each todo
    for (let todo of todosForDay) {
        // create li for a todo
        let todoListItem = document.createElement('LI')
        listOfToDos.appendChild(todoListItem)
         // create li for title of todo
         let todoTitle = document.createElement('h2')
         todoTitle.innerHTML = `${todo.title}`

         // create li for description of todo
         let todoDescription = document.createElement('p')
         todoDescription.innerHTML = `${todo.description}`
 
         todoListItem.appendChild(todoTitle)
         todoListItem.appendChild(todoDescription)

    }
}

