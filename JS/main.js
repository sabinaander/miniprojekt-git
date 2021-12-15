window.addEventListener('load', main)

/**
 * @type {Array<{ title: String, description: String, date: String }>} asdas
 */
let toDos = []

function getToDosFromStorage() {
  toDos = JSON.parse(localStorage.getItem('toDos')) || []
}

// Starts the program
function main() {
  getToDosFromStorage()
  renderDateSelectors()
  renderCalendar()
  dateSelectListener()
  getHolidays()
  renderSideBarContainer()
}
