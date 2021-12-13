window.addEventListener("load", main)

/**
 * @type {Array<{ title: String, description: String, date: String }>} asdas
 */
const toDos = [
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

// Starts the program
function main() {
  renderDateSelectors()
  renderCalendar()
  dateSelectListener()
}
