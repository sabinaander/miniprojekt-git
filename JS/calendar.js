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
  weekdays: [
    'måndag',
    'tisdag',
    'onsdag',
    'torsdag',
    'fredag',
    'lördag',
    'söndag',
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

  document.getElementById(
    'monthAndYear'
  ).innerText = `${date.toLocaleDateString('sv-se', {
    month: 'long',
  })} ${thisYear}`

  // const dayBlocks = []

  for (let i = 1; i <= fillDays + daysInMonth; i++) {
    const li = document.createElement('li')
    const span = document.createElement('span')
    // lägg till style class för dag

    if (i > fillDays) {
      let dayString = `${calendar.selectedYear}-${calendar.selectedMonth}-${
        i - fillDays < 10 ? '0' + (i - fillDays) : i - fillDays
      }`
      li.innerText = i - fillDays
      li.addEventListener('click', () => console.log('clicked'))

      const todosForDay = toDos.filter((todo) => todo.date === dayString)
      span.innerHTML = todosForDay.length > 0 ? todosForDay.length : null
      span.style.background = 'blue'
      span.style.color = 'white'

      if (calendar.holidays.some((day) => day.datum === dayString)) {
        li.style.backgroundColor = 'red' //ändra till lägga till classlist istället
        // calendar.holidays.forEach(function (element) {
        //   li.innerText += element.helgdag
        // })
      }
    } else {
      // lägg till style class för tom dag
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

// Render the selected month & year calendar after user clicks set button
function dateSelectListener() {
  const setBtn = document.querySelector('#calendar-set')
  setBtn.addEventListener('click', async () => {
    const monthValue = document.querySelector('#calendar-month').value

    calendar.selectedMonth =
      monthValue < 10 ? monthValue.padStart(2, 0) : parseInt(monthValue, 10)

    calendar.selectedYear = parseInt(
      document.querySelector('#calendar-year').value
    )
    await getHolidays()
    renderCalendar(calendar.selectedMonth, calendar.selectedYear)
  })
}
