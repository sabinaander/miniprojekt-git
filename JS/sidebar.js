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
    let listOfToDos = document.createElement('UL')
    listOfToDos.id ='listOfTodos'
    toDosForDayContainer.appendChild(listOfToDos) 
    renderToDo()
}

function renderToDo() {
    let toDosForDayContainer = document.getElementById('toDosForDayContainer')

    let listOfToDos = document.getElementById('listOfTodos')
    listOfToDos.innerHTML=''
    
    
    const dayString = `${calendar.selectedYear}-${calendar.selectedMonth}-${calendar.selectedDay}`

    const todosForDay = toDos.filter((todo) => todo.date === dayString)

    
    for (let todo of todosForDay) {
        let displayToDo = document.createElement('LI')
        console.log(todo)
        
        displayToDo.innerHTML = `${todo.title} ${todo.description} ${todo.date}` 

        listOfToDos.appendChild(displayToDo)

    }
}
