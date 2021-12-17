// getting the sideBar
let sideBar = document.querySelector('.sideBar')


/** create button and add text
 * @type {HTMLButtonElement} todoBtn
 */
let todoBtn = document.createElement('BUTTON')
todoBtn.innerHTML = 'ADD TO-DO'
todoBtn.type = 'button'

// appending todoBtn to divs
sideBar.appendChild(todoBtn)

function renderSideBarContainer() {
    let todosForDayContainer = document.createElement('DIV')
    todosForDayContainer.id = 'todosForDayContainer'
    sideBar.appendChild(todosForDayContainer)

    // create UL to store all LI's with todo's
    let listOfTodos = document.createElement('UL')
    listOfTodos.id = 'listOfTodos'
    todosForDayContainer.appendChild(listOfTodos)
    renderTodos()
}

function renderTodos() {

    let todosForDayContainer = document.getElementById('todosForDayContainer')
    let listOfTodos = document.getElementById('listOfTodos')
    listOfTodos.innerHTML = ''

    // get the selected/current date
    const dayString = `${calendar.selectedYear}-${calendar.selectedMonth}-${calendar.selectedDay}`

    const todosForDay = todos.filter((todo) => todo.date === dayString)

    // create h2 element to show selected date
    let displaySelectedDate = document.createElement('SPAN')
    listOfTodos.appendChild(displaySelectedDate)
    listOfTodos.innerText = dayString

    // loop though all todo's for selected day, create li with all info from array for each todo
    for (let todo of todosForDay) {
        // create li for a todo
        let todoListItem = document.createElement('LI')
        listOfTodos.appendChild(todoListItem)
        // create li for title of todo
        let todoTitle = document.createElement('H2')
        todoTitle.innerHTML = `${todo.title}`

        // create li for description of todo
        let todoDescription = document.createElement('P')
        todoDescription.innerHTML = `${todo.description}`

        // create button element with pen icon to access selected todo
        const penButton = document.createElement('BUTTON')
        penButton.classList.add('fa-solid', 'fa-pen')
        penButton.title = 'click here to view, edit or remove your todo'
        // onclick event for penbutton, run openTodo()
        penButton.addEventListener('click', function () {
            renderTodoForm(todo)
        })

        todoListItem.appendChild(todoTitle)
        todoTitle.appendChild(penButton)
        todoListItem.appendChild(todoDescription)
    }
}


