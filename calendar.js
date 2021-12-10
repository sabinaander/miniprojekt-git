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

  const dayBlocks = []

  if (startDay != 1) {
    let blankDayBlocks = startDay == 0 ? 7 : startDay
    console.log(blankDayBlocks)
    for (let i = 1; i < blankDayBlocks; i++) {
      dayBlocks.push("b")
    }
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dayBlocks.push(i)
  }

  if (endDay != 0) {
    let blankDayBlocks = endDay == 6 ? 1 : 7 - endDay
    for (let i = 1; i < blankDayBlocks; i++) {
      dayBlocks.push("b")
    }
  }

  const calContainer = document.querySelector("#calendar-container ol")
  calContainer.innerHTML = ""
  let total = dayBlocks.length
  for (let i = 0; i < total; i++) {
    const li = document.createElement("li")
    if (dayBlocks[i] === "b") {
      li.innerHTML = ""
    } else {
      li.innerHTML = dayBlocks[i]
    }
    calContainer.append(li)
  }

  console.log({ daysInMonth, startDay, endDay, dayBlocks })
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
