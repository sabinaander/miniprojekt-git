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
toDoBtn.onclick = function (event) {
    
  // if (!toDoContainer){
  let toDoContainer = document.createElement("DIV")
  toDoContainer.classList.add("toDoContainer")
  // toDoContainer.innerHTML = 'ADD TO-DO'
  document.body.appendChild(toDoContainer)
  console.log(toDoContainer)

  let toDoForm = document.createElement("FORM")
  toDoForm.setAttribute("id", "toDoForm")
  toDoContainer.appendChild(toDoForm)

  // create CLOSE button and add text
  // let closeContainerBtn = document.createElement('BUTTON')
  // closeContainerBtn.innerHTML = 'CLOSE'
  // toDoForm.appendChild(closeContainerBtn)

  let titleInput = document.createElement("INPUT")
  titleInput.classList.add("titleInput")
  titleInput.setAttribute("type", "text")
  titleInput.setAttribute("name", "title")
  toDoForm.appendChild(titleInput)

  // create div element for big input with description of the todo
  let descriptionInput = document.createElement("INPUT")
  descriptionInput.classList.add("descriptionInput")
  descriptionInput.setAttribute("type", "text")
  descriptionInput.setAttribute("name", "description")
  toDoForm.appendChild(descriptionInput)

  let dateInput = document.createElement("INPUT")
  dateInput.classList.add("dateInput")
  dateInput.setAttribute("type", "date")
  dateInput.setAttribute("name", "date")
  toDoForm.appendChild(dateInput)

  // create button and add text
  let submitToDoBtn = document.createElement("BUTTON")

  submitToDoBtn.innerHTML = "SUBMIT"
  toDoForm.appendChild(submitToDoBtn)

  toDoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const toDo = Object.fromEntries(formData)
    toDos.push(toDo)
    toDoForm.reset() //empties the form after submit
    renderCalendar()
    console.log(toDos)
  })
>>>>>>> 26af8e2e519fbae99a78c255cae2159923e33181
}

// }

//  Display all todos for a date

//  const dailyToDo = toDo.filter({toDo} == toDo.date === 'date')
