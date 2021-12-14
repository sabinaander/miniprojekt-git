window.addEventListener("load", main)

/**
 * @type {Array<{ title: String, description: String, date: String }>} asdas
 */
let toDos = [
  {
    title: "test todo1",
    description: "some text",
    date: "2021-12-01",
  },
  {
    title: "test todo1",
    description: "some text",
    date: "2021-12-13",
  },
]

function getToDosFromStorage(){
  toDos = JSON.parse(localStorage.getItem('toDos'))
}

// Starts the program
function main() {
  getToDosFromStorage()
  renderDateSelectors()
  renderCalendar()
  dateSelectListener()
}
