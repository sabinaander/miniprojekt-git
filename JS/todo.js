/**
 * Adds todocontainer to body with form
 * If called with a todo, this form is used to edit or delete that todo
 * @param {{ title: string, description: string, date: string }} [todo]
 */
function renderTodoForm(todo) {
    /**
     * add todocontainer to body
     * @type {HTMLDivElement} todoContainer
     */
    let todoContainer = document.createElement('DIV')
    todoContainer.id = 'todoContainer'
    document.body.appendChild(todoContainer)

    /** 
     * add toform to todocontainer
     * @type {HTMLFormElement} todoForm
     */
    let todoForm = document.createElement('FORM')
    todoForm.setAttribute('id', 'todoForm')
    todoContainer.appendChild(todoForm)

    /** 
     * add CLOSE button to todoform
     * @type {HTMLButtonElement} closeContainerBtn
     */
    let closeContainerBtn = document.createElement('BUTTON')
    closeContainerBtn.innerHTML = 'CLOSE'
    closeContainerBtn.type = 'button'
    todoForm.appendChild(closeContainerBtn)

    /* add click event for removing form */
    closeContainerBtn.onclick = function (event) {
        todoContainer.remove()
    }

    /** 
     * add title input to todoform
     * @type {HTMLInputElement} titleInput
     */
    let titleInput = document.createElement('INPUT')
    titleInput.classList.add('titleInput')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('required', 'required')
    titleInput.setAttribute('name', 'title')
    todoForm.appendChild(titleInput)

    /** if a todoitem was passed to rendertodoform */
    if (todo) {
        /** use todos title as default value */
        titleInput.value = todo.title
    }

    /** 
     * add description input to todoform
     * @type {HTMLInputElement} descriptionInput
     */
    let descriptionInput = document.createElement('INPUT')
    descriptionInput.classList.add('descriptionInput')
    descriptionInput.setAttribute('type', 'text')
    descriptionInput.setAttribute('required', 'required')
    descriptionInput.setAttribute('name', 'description')
    todoForm.appendChild(descriptionInput)

    /** if a todoitem was passed to rendertodoform */
    if (todo) {
        /** use todos description as default value */
        descriptionInput.value = todo.description
    }

    /** 
     * add date input to todoform
     * @type {HTMLInputElement} dateInput
     */
    let dateInput = document.createElement('INPUT')
    dateInput.classList.add('dateInput')
    dateInput.setAttribute('type', 'date')
    dateInput.setAttribute('required', 'required')
    dateInput.setAttribute('name', 'date')
    todoForm.appendChild(dateInput)

    /** if a todoitem was passed to rendertodoform */
    if (todo) {
        /** use todos date as default value */
        dateInput.value = todo.date
    }

    /** 
     * add 'sumbit' button to todoform
     * @type {HTMLButtonElement} submitTodoBtn
     */
    let submitTodoBtn = document.createElement('BUTTON')
    todoForm.appendChild(submitTodoBtn)

    /** if a todoitem was passed to rendertodoform */
    if (todo) {
        /** add edit button text */
        submitTodoBtn.innerHTML = 'UPDATE TODO'

        /** onsubmit event, edit/update todo */
        todoForm.addEventListener('submit', (event) => {
            event.preventDefault()
            updateTodo(event.target, todo)
        })

        /** 
         * add 'remove' button to todoform
         * @type {HTMLButtonElement} removeTodoBtn
        */
        let removeTodoBtn = document.createElement('BUTTON')
        removeTodoBtn.innerHTML = 'REMOVE TODO'
        todoForm.appendChild(removeTodoBtn)

        /** onclick event, remove todo */
        removeTodoBtn.addEventListener('click', (event) => {
            event.preventDefault()
            removeTodo(todo)
        })
    }

    /** If no todoitem was passed */

    else {
        /** add create todo text */
        submitTodoBtn.innerHTML = 'CREATE TODO'

        /** onsubmit event, run addTodo */
        todoForm.addEventListener('submit', (event) => {
            event.preventDefault()
            addTodo(event.target)
        })
    }
}

/**
 * add a new todo to array
 * @param {HTMLFormElement} form 
 */
function addTodo(form) {
    /** convert form element to form data */
    const formData = new FormData(form)

    /** get form values as todo */
    const todo = Object.fromEntries(formData)

    /** push new todo to todos */
    todos.push(todo)

    /** save all todos to local storage */
    saveTodosToLocalStorage()

    /** update calendar, sidebar and remove form */
    updateView()
}

/**
 * replace existing todo in todos
 * @param {HTMLFormElement} form 
 * @param {{ title: string, description: string, date: string }} oldTodo 
 */
function updateTodo(form, oldTodo) {
    /** convert form element to form data */
    const formData = new FormData(form)

    /** get form values as todo */
    const newTodo = Object.fromEntries(formData)

    /** find index of old todo */
    const oldTodoIndex = todos.indexOf(oldTodo)

    /** replace old todo with newtodo in todos */
    todos.splice(oldTodoIndex, 1, newTodo)

    /** save all todos to local storage */
    saveTodosToLocalStorage()

    /** update calendar, sidebar and remove form */
    updateView()
}

/**
 * remove existing todo from todos
 * @param {{ title: string, description: string, date: string }} oldTodo 
 */
function removeTodo(oldTodo) {
    /** find index of todo */
    const oldTodoIndex = todos.indexOf(oldTodo)

    /** remove todo from todos */
    todos.splice(oldTodoIndex, 1)

    /** save all todos to local storage */
    saveTodosToLocalStorage()

    /** update calendar, sidebar and remove form */
    updateView()
}

/** save all todos to local storage */
function saveTodosToLocalStorage() {   
    localStorage.setItem('todos', JSON.stringify(todos))
}

/** update calendar, sidebar and remove form */
function updateView() {
    /** remove form */
    const todoContainer = document.getElementById('todoContainer')
    todoContainer.remove()

    /** update views */
    renderTodos()
    renderCalendar()  
}
