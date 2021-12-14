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
  calendar.selectedMonth = parseInt(
    document.querySelector('#calendar-month').value
  )
  calendar.selectedYear = parseInt(
    document.querySelector('#calendar-year').value
  )

  const today = new Date().getDate()
  const thisMonth = new Date().getMonth()

  const daysInMonth = new Date(
    calendar.selectedYear,
    calendar.selectedMonth + 1,
    0
  ).getDate()

  // const daysInMonth = getNumberOfDays(
  //   calendar.selectedYear,
  //   calendar.selectedMonth + 1
  // )

  const startDay = new Date(
    calendar.selectedYear,
    calendar.selectedMonth,
    1
  ).getDay()

  const endDay = new Date(
    calendar.selectedYear,
    calendar.selectedMonth,
    daysInMonth
  ).getDay()
  console.log(endDay)

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

    if (dayBlocks[i] !== 'b') {
      if (dayBlocks[i] === today && calendar.selectedMonth === thisMonth) {
        li.style = 'background-color: tomato;'
      }
      const dayString = `${calendar.selectedYear}-${
        calendar.selectedMonth + 1
      }-${dayBlocks[i] < 10 ? '0' + dayBlocks[i] : dayBlocks[i]}`

      if (calendar.holidays.some((day) => day.datum === dayString)) {
        li.style.backgroundColor = 'red'
      }

      const todosForDay = toDos.filter((todo) => todo.date === dayString)
      console.log(calendar.holidays, dayString)
      li.innerHTML = dayBlocks[i]
      span.innerHTML = todosForDay.length > 0 ? todosForDay.length : null
      span.style.background = 'blue'
      span.style.color = 'white'
    }
    calContainer.append(li)
    li.append(span)
  }

  console.log({ daysInMonth, startDay, endDay, dayBlocks })
}

/**Renders the options for month & year */
function renderDateSelectors() {
  const date = new Date()
  const dateMonth = date.getMonth()
  const dateYear = parseInt(date.getFullYear())

  const monthSel = document.querySelector('#calendar-month')
  for (let i = 0; i < 12; i++) {
    let optionEl = document.createElement('option')
    optionEl.value = i
    optionEl.innerHTML = calendar.month[i]
    if (i === dateMonth) {
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
  setBtn.addEventListener('click', renderCalendar)
}
