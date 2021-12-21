function initCalendar() {
  renderDateSelectors()
  renderCalendar()
  renderWeekdays()
  dateSelectListener()
}

// State of calendar
const calendar = {
  month: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Maj',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  weekdays: [
    'måndag',
    'tisdag',
    'onsdag',
    'torsdag',
    'fredag',
    'lördag',
    'söndag',
  ],
  selectedDay: '',
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

  const calContainer = document.querySelector('#calendar-container ol')
  calContainer.innerHTML = ''

  const date = new Date()

  date.setMonth(calendar.selectedMonth - 1)
  date.setFullYear(calendar.selectedYear)

  const day = date.getDate()
  const thisMonth = date.getMonth()
  const thisYear = date.getFullYear()

  const firstDayOfMonth = new Date(thisYear, thisMonth, 1)

  const daysInMonth = new Date(thisYear, thisMonth + 1, 0).getDate()

  const dateString = firstDayOfMonth.toLocaleDateString('sv-se', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })

  const fillDays = calendar.weekdays.indexOf(dateString.split(', ')[0])

  // Update head of calendar to match selected month and year
  document.getElementById(
    'monthAndYear'
  ).innerText = `${date.toLocaleDateString('sv-se', {
    month: 'long',
  })} ${thisYear}`

  for (let i = 1; i <= fillDays + daysInMonth; i++) {
    // create elements
    const li = document.createElement('li')
    const pElDay = document.createElement('p')
    const pElHoliday = document.createElement('p')
    const span = document.createElement('span')

    li.className = 'day' // style for calendar days

    if (i > fillDays) {
      let dayString = `${calendar.selectedYear}-${calendar.selectedMonth}-${
        i - fillDays < 10 ? '0' + (i - fillDays) : i - fillDays
      }`

      pElDay.innerText = i - fillDays
      pElDay.className = 'dd'

      li.addEventListener('click', getDay)

      // Handle todos in calendar
      const todosForDay = todos.filter((todo) => todo.date === dayString)
      span.innerHTML = todosForDay.length > 0 ? todosForDay.length : null
      span.className = 'todoBadge'

      // Handle holidays in calendar
      calendar.holidays.forEach(function (day) {
        if (day.datum === dayString) {
          pElHoliday.innerText = day.helgdag
          pElHoliday.className = 'holiday'
        }
      })
    } else {
      li.className = 'emptyDay'
    }

    calContainer.append(li)
    li.append(pElHoliday)
    li.prepend(pElDay)
    li.append(span)
  }
}

function getDay(event) {
  let content = event.currentTarget.querySelector('.dd').innerText
  calendar.selectedDay = content.toString().padStart(2, '0')
  console.log(calendar.selectedDay)
  renderTodos()
}

/**Renders the options for month & year select elements */
function renderDateSelectors() {
  const date = new Date()
  const dateMonth = date.getMonth()
  const dateYear = parseInt(date.getFullYear())

  calendar.selectedMonth = dateMonth.toString().padStart(2, '0')
  calendar.selectedYear = dateYear.toString()
  calendar.selectedDay = date.getDate().toString().padStart(2, '0')

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

// Render the selected month & year calendar
function dateSelectListener() {
  const selectElements = document.querySelectorAll('#calendar-date select')

  selectElements.forEach((element) =>
    element.addEventListener('change', async () => {
      const monthValue = document.querySelector('#calendar-month').value

      calendar.selectedMonth =
        monthValue < 10 ? monthValue.padStart(2, 0) : parseInt(monthValue, 10)

      calendar.selectedYear = parseInt(
        document.querySelector('#calendar-year').value
      )
      await getHolidays()
      renderCalendar()
    })
  )
}

function renderWeekdays() {
  const wdContainer = document.querySelector('#calendar-container ul')
  let html = calendar.weekdays.map((weekday) => `<li>${weekday}</li>`).join('')
  wdContainer.innerHTML = html
}
