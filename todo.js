// This is meant to be the script file to create all objects for a to-do.
// Add/create to-do
// Edit to-do
// View the to-do's in calendar

// getting the sideBar
let sideBar = document.querySelector(".sideBar")

// create button and add text
let toDoBtn = document.createElement("BUTTON")
toDoBtn.innerHTML = "ADD TO-DO"

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

  let toDoInput = document.createElement("INPUT")
  toDoInput.setAttribute("type", "text")
  toDoInput.setAttribute("name", "description")
  toDoForm.appendChild(toDoInput)

  // create button and add text
  let submitToDoBtn = document.createElement("BUTTON")

  submitToDoBtn.innerHTML = "SUBMIT"
  toDoForm.appendChild(submitToDoBtn)

  toDoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const toDo = Object.fromEntries(formData)
    toDos.push(toDo)

    console.log(toDos)
  })
}

// }

//  Display all todos for a date

//  const dailyToDo = toDo.filter({toDo} == toDo.date === 'date')
