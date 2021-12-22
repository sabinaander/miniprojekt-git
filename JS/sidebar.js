// getting the sideBar
let sideBar = document.querySelector('.sideBar')


/** add button to create todos with text to Sidebar
 * @type {HTMLButtonElement} todoBtn
 */
let todoBtn = document.createElement('BUTTON')
todoBtn.innerHTML = 'Lägg till todo'
todoBtn.classList.add('todoBtn')
todoBtn.type = 'button'
sideBar.appendChild(todoBtn)

// on click render todoform
todoBtn.onclick = function (event) {
    renderTodoForm()
}

/**
 * renders sidebarcontainer to show all the selected todos for a date
 */
function renderSideBarContainer() {
    /**
     * Adds DIV - todosForDayContainer to sidebar
     * @type {HTMLDivElement} todosForDayContainer
     */
    let todosForDayContainer = document.createElement('DIV')
    todosForDayContainer.id = 'todosForDayContainer'
    sideBar.appendChild(todosForDayContainer)

    /**
    * Adds UL to store all LI's with todo's to todosForDayContainer
    * @type {HTMLUListElement} listOfTodos
    */
    let listOfTodos = document.createElement('UL')
    listOfTodos.id = 'listOfTodos'
    todosForDayContainer.appendChild(listOfTodos)
    
    // renders all todos for selected date
    renderTodos()
}
/**
 * adds all todos for a selected date to todosForDayContainer
 */
function renderTodos() {

    // gets containers
    let todosForDayContainer = document.getElementById('todosForDayContainer')
    let listOfTodos = document.getElementById('listOfTodos')

    // empty listOfTodos element
    listOfTodos.innerHTML = ''

    // get the selected/current date
    const dayString = `${calendar.selectedYear}-${calendar.selectedMonth}-${calendar.selectedDay}`

    // get selected days todos
    const todosForDay = todos.filter((todo) => todo.date === dayString)

    /**
    * Adds span with selected date to listOfTodos
    * @type {HTMLSpanElement} displaySelectedDate 
    */
    let displaySelectedDate = document.createElement('SPAN')
    listOfTodos.appendChild(displaySelectedDate)
    listOfTodos.innerText = dayString

    // loop over all todo's for selected day, create li with all info from array for each todo
    for (let todo of todosForDay) {
        /**
        * Create list item for for todo and add it to listOfTodos
        * @type {HTMLLIElement} todoListItem 
        */
        let todoListItem = document.createElement('LI')
        listOfTodos.appendChild(todoListItem)
        
        /**
        * Adds h2 with todo title to todoListItem 
        * @type {HTMLHeadingElement} todoTitle 
        */
        let todoTitle = document.createElement('H2')
        todoTitle.innerHTML = `${todo.title}`
        todoListItem.appendChild(todoTitle)

        /**
        * Adds paragraph with todo description to todoListItem 
        * @type {HTMLParagraphElement} todoDescription 
        */
        let todoDescription = document.createElement('P')
        todoDescription.innerHTML = `${todo.description}`
        todoListItem.appendChild(todoDescription)

        /**
        * Adds editbutton to todoListItem 
        * @type {HTMLButtonElement} penButton 
        */
        const penButton = document.createElement('BUTTON')
        penButton.classList.add('fa-solid', 'fa-pen')
        penButton.title = 'Klicka här för att ändra eller radera en todo.'
        todoTitle.appendChild(penButton)

        /** adds click event to edit button that renders the todoform */
        penButton.addEventListener('click', function () {
            renderTodoForm(todo)
        })  
    }
}


