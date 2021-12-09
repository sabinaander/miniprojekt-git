const calendar = {
  month: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  days: [],
  selectedMonth: 0,
  selectedYear: 0,
}

function calenderlist() {
  calendar.selectedMonth = parseInt(
    document.querySelector("#calendar-month").value
  )
  calendar.selectedYear = parseInt(
    document.querySelector("#calendar-year").value
  )
  const daysInMonth = new Date(
    calendar.selectedYear,
    calendar.selectedMonth + 1,
    0
  ).getDate()

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

  console.log({ daysInMonth, startDay, endDay })
}

/**Renders the options for month & year */
function renderDateSelectors() {
  const date = new Date()
  const dateMonth = date.getMonth()
  const dateYear = parseInt(date.getFullYear())

  const monthSel = document.querySelector("#calendar-month")
  for (let i = 0; i < 12; i++) {
    let optionEl = document.createElement("option")
    optionEl.value = i
    optionEl.innerHTML = calendar.month[i]
    if (i === dateMonth) {
      optionEl.selected = true
    }
    monthSel.append(optionEl)
  }

  const yearSel = document.querySelector("#calendar-year")
  for (let i = dateYear - 3; i <= dateYear + 3; i++) {
    let optionEl = document.createElement("option")
    optionEl.value = i
    optionEl.innerHTML = i
    if (i === dateYear) {
      optionEl.selected = true
    }
    yearSel.append(optionEl)
  }
}

function renderCalendar() {
  const setBtn = document.querySelector("#calendar-set")
  setBtn.addEventListener("click", calenderlist)
}
