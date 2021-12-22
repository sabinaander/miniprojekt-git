window.addEventListener('load', main)

/**
 * @type {Array<{ title: string, description: string, date: string }>} todos
 */
let todos = getTodosFromStorage()

/**
 * Gets todos from localStorage
 *  @return {Array<{ title: string, description: string, date: string }>}
 */
function getTodosFromStorage() {
  return JSON.parse(localStorage.getItem('todos')) || []
}

/**
 * Starts the program
 */
function main() {
  getTodosFromStorage()
  initCalendar()
  getHolidays()
  renderSideBarContainer()
  renderFooter()
}
