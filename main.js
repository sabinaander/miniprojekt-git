window.addEventListener("load", main)

const toDos = []

// Starts the program
function main() {
  renderDateSelectors()
  renderCalendar()
  dateSelectListener()
}
