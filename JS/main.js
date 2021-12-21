window.addEventListener('load', main)

/**
 * @type {Array<{ title: String, description: String, date: String }>} asdas
 */
let todos = []

function getTodosFromStorage() {
  todos = JSON.parse(localStorage.getItem('todos')) || []
}

// Starts the program
function main() {
  getTodosFromStorage()
  initCalendar()
  getHolidays()
  renderSideBarContainer()
  renderFooter()
}
