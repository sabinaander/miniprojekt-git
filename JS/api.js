async function fetchDateData(year, month) {
  let yearIn = year
  let monthIn = month
  const stringDate = [yearIn, monthIn].join('/')
  // let day = 24
  const URL = `http://sholiday.faboul.se/dagar/v2.1/${stringDate}/`
  try {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    return data.dagar
  } catch (error) {
    console.error(error)
  }
}

async function getHolidays() {
  const days = await fetchDateData(
    calendar.selectedYear,
    calendar.selectedMonth
  )
  calendar.holidays = days.filter((day) => day.helgdag)
  renderCalendar()
}
