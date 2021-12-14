async function fetchDateData(a = 2021, b = 12) {
  let year = a
  let month = b
  // let day = 24
  const URL = `http://sholiday.faboul.se/dagar/v2.1/${year}/${month}/`
  try {
    const response = await fetch(URL)
    const data = await response.json()
    return data.dagar
  } catch (error) {
    console.error(error)
  }
}

async function getHolidays() {
  const days = await fetchDateData(
    calendar.selectedYear,
    calendar.selectedMonth + 1
  )
  calendar.holidays = days.filter((day) => day.helgdag)
  renderCalendar()
}
