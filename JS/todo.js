// create div container for todos/todo/edit todo
toDoBtn.onclick = function (event) {
    renderTodoForm()
}

function renderTodoForm(todo) {

    // if (!toDoContainer){
    let toDoContainer = document.createElement('DIV')
    toDoContainer.id = 'toDoContainer'
    // toDoContainer.innerHTML = 'ADD TO-DO'
    document.body.appendChild(toDoContainer)

    let toDoForm = document.createElement('FORM')
    toDoForm.setAttribute('id', 'toDoForm')
    toDoContainer.appendChild(toDoForm)


    /** create CLOSE button and add text (remove element)
     * @type {HTMLButtonElement} closeContainerBtn
     */
    let closeContainerBtn = document.createElement('BUTTON')
    closeContainerBtn.innerHTML = 'CLOSE'
    closeContainerBtn.type = 'button'
    toDoForm.appendChild(closeContainerBtn)

    closeContainerBtn.onclick = function (event) {
        toDoContainer.remove()
    }

    // form title input
    let titleInput = document.createElement('INPUT')
    titleInput.classList.add('titleInput')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('required', 'required')
    titleInput.setAttribute('name', 'title')
    toDoForm.appendChild(titleInput)

    if (todo) {
        titleInput.value = todo.title
    }

    // create div element for big input with description of the todo
    let descriptionInput = document.createElement('INPUT')
    descriptionInput.classList.add('descriptionInput')
    descriptionInput.setAttribute('type', 'text')
    descriptionInput.setAttribute('required', 'required')
    descriptionInput.setAttribute('name', 'description')
    toDoForm.appendChild(descriptionInput)

    if (todo) {
        descriptionInput.value = todo.description
    }

    // form date input
    let dateInput = document.createElement('INPUT')
    dateInput.classList.add('dateInput')
    dateInput.setAttribute('type', 'date')
    dateInput.setAttribute('required', 'required')
    dateInput.setAttribute('name', 'date')
    toDoForm.appendChild(dateInput)

    if (todo) {
        dateInput.value = todo.date
    }

    // create button and add text
    let submitToDoBtn = document.createElement('BUTTON')
    toDoForm.appendChild(submitToDoBtn)


    // onclick edit todo
    if (todo) {
        submitToDoBtn.innerHTML = 'UPDATE TODO'
        toDoForm.addEventListener('submit', (event) => {
            event.preventDefault()
            updateTodo(event.target, todo)
        })

        let removeToDoBtn = document.createElement('BUTTON')
        removeToDoBtn.innerHTML = 'REMOVE TODO'
        toDoForm.appendChild(removeToDoBtn)

        removeToDoBtn.addEventListener('click', (event) =>{
            event.preventDefault()
            removeTodo(todo)
        })



    }

    // onclick save all data from form, remove todocontainer and update sidebar + calendar
    else {
        submitToDoBtn.innerHTML = 'CREATE TODO'
        toDoForm.addEventListener('submit', (event) => {
            event.preventDefault()
            addTodo(event.target)
        })
    }
}

// add a new todo to array
function addTodo(form) {
    const formData = new FormData(form)
    const toDo = Object.fromEntries(formData)

    // push form data to array (toDo)
    toDos.push(toDo)
    saveTodosToLocalStorage()
}

// replace existing todo in array
function updateTodo(form, oldTodo) {
    const formData = new FormData(form)
    const newTodo = Object.fromEntries(formData)

    const oldTodoIndex = toDos.indexOf(oldTodo)
    toDos.splice(oldTodoIndex, 1, newTodo)
    saveTodosToLocalStorage()
}

function removeTodo(oldTodo) {
    const oldTodoIndex = toDos.indexOf(oldTodo)
    // remove todo from ToDos
    toDos.splice(oldTodoIndex, 1)

    saveTodosToLocalStorage()
}

// save all todos
function saveTodosToLocalStorage() {
    const toDoContainer = document.getElementById('toDoContainer')
    localStorage.setItem('toDos', JSON.stringify(toDos))
    renderToDos()
    renderCalendar()
    toDoContainer.remove()
}
