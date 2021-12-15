// State of calendar
const calendar = {
  month: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  selectedMonth: 0,
  selectedYear: 0,
  holidays: [],
}

function renderCalendar() {
  const monthValue = document.querySelector('#calendar-month').value

  calendar.selectedMonth =
    monthValue < 10 ? monthValue.padStart(2, 0) : parseInt(monthValue, 10)

  calendar.selectedYear = parseInt(
    document.querySelector('#calendar-year').value
  )

  const today = new Date().getDate()
  const thisMonth = new Date().getMonth()
  const thisYear = new Date().getFullYear()

  const daysInMonth = new Date(
    calendar.selectedYear,
    calendar.selectedMonth,
    0
  ).getDate()

  const startDay = new Date(
    calendar.selectedYear,
    calendar.selectedMonth - 1,
    1
  ).getDay()

  const endDay = new Date(
    calendar.selectedYear,
    calendar.selectedMonth,
    daysInMonth
  ).getDay()

  const dayBlocks = []

  if (startDay != 1) {
    let blankDayBlocks = startDay == 0 ? 7 : startDay
    for (let i = 1; i < blankDayBlocks; i++) {
      dayBlocks.push('b')
    }
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dayBlocks.push(i)
  }

  if (endDay != 0) {
    let blankDayBlocks = endDay == 6 ? 1 : 7 - endDay
    for (let i = 1; i < blankDayBlocks; i++) {
      dayBlocks.push('b')
    }
  }

  const calContainer = document.querySelector('#calendar-container ol')
  calContainer.innerHTML = ''
  let total = dayBlocks.length

  for (let i = 0; i < total; i++) {
    const li = document.createElement('li')
    const span = document.createElement('span')

    // highlights todays date in calendar
    if (dayBlocks[i] !== 'b') {
      if (
        dayBlocks[i] === today &&
        calendar.selectedMonth === thisMonth &&
        calendar.selectedYear === thisYear
      ) {
        li.style = 'background-color: tomato;'
      }

      const dayString = `${calendar.selectedYear}-${calendar.selectedMonth}-${
        dayBlocks[i] < 10 ? '0' + dayBlocks[i] : dayBlocks[i]
      }`

      if (calendar.holidays.some((day) => day.datum === dayString)) {
        li.style.backgroundColor = 'red'
      }

      const todosForDay = toDos.filter((todo) => todo.date === dayString)
      li.innerHTML = dayBlocks[i]
      span.innerHTML = todosForDay.length > 0 ? todosForDay.length : null
      span.style.background = 'blue'
      span.style.color = 'white'
    }
    calContainer.append(li)
    li.append(span)
  }
}

/**Renders the options for month & year */
function renderDateSelectors() {
  const date = new Date()
  const dateMonth = date.getMonth()
  const dateYear = parseInt(date.getFullYear())

  const monthSel = document.querySelector('#calendar-month')

  for (let i = 1; i <= 12; i++) {
    let optionEl = document.createElement('option')
    optionEl.value = i < 10 ? '0' + i : i
    optionEl.innerHTML = calendar.month[i - 1]
    if (i - 1 === dateMonth) {
      optionEl.selected = true
    }
    monthSel.append(optionEl)
  }

  const yearSel = document.querySelector('#calendar-year')

  for (let i = dateYear - 3; i <= dateYear + 3; i++) {
    let optionEl = document.createElement('option')
    optionEl.value = i
    optionEl.innerHTML = i
    if (i === dateYear) {
      optionEl.selected = true
    }
    yearSel.append(optionEl)
  }
}

// Render the selected month & year calendar after user clicks set button
function dateSelectListener() {
  const setBtn = document.querySelector('#calendar-set')
  setBtn.addEventListener('click', () => {
    getHolidays()
    renderCalendar()
  })
}
