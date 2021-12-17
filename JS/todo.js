// create div container for todos/todo/edit todo
todoBtn.onclick = function (event) {
    renderTodoForm()
}

function renderTodoForm(todo) {

    
    let todoContainer = document.createElement('DIV')
    todoContainer.id = 'todoContainer'
    
    document.body.appendChild(todoContainer)

    let todoForm = document.createElement('FORM')
    todoForm.setAttribute('id', 'todoForm')
    todoContainer.appendChild(todoForm)


    /** create CLOSE button and add text (remove element)
     * @type {HTMLButtonElement} closeContainerBtn
     */
    let closeContainerBtn = document.createElement('BUTTON')
    closeContainerBtn.innerHTML = 'CLOSE'
    closeContainerBtn.type = 'button'
    todoForm.appendChild(closeContainerBtn)

    closeContainerBtn.onclick = function (event) {
        todoContainer.remove()
    }

    // form title input
    let titleInput = document.createElement('INPUT')
    titleInput.classList.add('titleInput')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('required', 'required')
    titleInput.setAttribute('name', 'title')
    todoForm.appendChild(titleInput)

    if (todo) {
        titleInput.value = todo.title
    }

    // create div element for big input with description of the todo
    let descriptionInput = document.createElement('INPUT')
    descriptionInput.classList.add('descriptionInput')
    descriptionInput.setAttribute('type', 'text')
    descriptionInput.setAttribute('required', 'required')
    descriptionInput.setAttribute('name', 'description')
    todoForm.appendChild(descriptionInput)

    if (todo) {
        descriptionInput.value = todo.description
    }

    // form date input
    let dateInput = document.createElement('INPUT')
    dateInput.classList.add('dateInput')
    dateInput.setAttribute('type', 'date')
    dateInput.setAttribute('required', 'required')
    dateInput.setAttribute('name', 'date')
    todoForm.appendChild(dateInput)

    if (todo) {
        dateInput.value = todo.date
    }

    // create button and add text
    let submitTodoBtn = document.createElement('BUTTON')
    todoForm.appendChild(submitTodoBtn)


    // onclick edit todo
    if (todo) {
        submitTodoBtn.innerHTML = 'UPDATE TODO'
        todoForm.addEventListener('submit', (event) => {
            event.preventDefault()
            updateTodo(event.target, todo)
        })

        let removeTodoBtn = document.createElement('BUTTON')
        removeTodoBtn.innerHTML = 'REMOVE TODO'
        todoForm.appendChild(removeTodoBtn)

        removeTodoBtn.addEventListener('click', (event) =>{
            event.preventDefault()
            removeTodo(todo)
        })



    }

    // onclick save all data from form, remove todocontainer and update sidebar + calendar
    else {
        submitTodoBtn.innerHTML = 'CREATE TODO'
        todoForm.addEventListener('submit', (event) => {
            event.preventDefault()
            addTodo(event.target)
        })
    }
}

// add a new todo to array
function addTodo(form) {
    const formData = new FormData(form)
    const todo = Object.fromEntries(formData)

    // push form data to array (todo)
    todos.push(todo)
    saveTodosToLocalStorage()
}

// replace existing todo in array
function updateTodo(form, oldTodo) {
    const formData = new FormData(form)
    const newTodo = Object.fromEntries(formData)

    const oldTodoIndex = todos.indexOf(oldTodo)
    todos.splice(oldTodoIndex, 1, newTodo)
    saveTodosToLocalStorage()
}

function removeTodo(oldTodo) {
    const oldTodoIndex = todos.indexOf(oldTodo)
    // remove todo from Todos
    todos.splice(oldTodoIndex, 1)

    saveTodosToLocalStorage()
}

// save all todos
function saveTodosToLocalStorage() {
    const todoContainer = document.getElementById('todoContainer')
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos()
    renderCalendar()
    todoContainer.remove()
}
