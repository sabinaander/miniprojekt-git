// this JS file is for all scripts in the footer.
// getting the footer
const footer = document.querySelector('#footer')


// focus, onlick toggle class .calendar to :focus
// two separate buttons, daily view and calendar view
function renderFooter() {
    const footerContainer = document.createElement('DIV')
    footerContainer.id = 'footerContainer'
    footer.appendChild(footerContainer)
    // createDailyViewButton()
    // createCalendarViewButton()

    // create button element with "day" icon to access daily-todos
    // function createDailyViewButton() {
        const dayButton = document.createElement('BUTTON')
        dayButton.classList.add('fa-solid', 'fa-calendar-day')
        dayButton.innerText = 'View daily'
        dayButton.title = 'click here to access daily todo view'
        footerContainer.appendChild(dayButton)
        // onclick event for dayButton
        dayButton.addEventListener('click', function () {
            document.body.classList.replace('showCalendarView', 'showDailyView')
        })
    // }

    // function createCalendarViewButton() {
        // create button element with "calendar" icon to access calendar view
        const calendarButton = document.createElement('BUTTON')
        calendarButton.classList.add('fa-solid', 'fa-calendar-alt')
        calendarButton.innerText = 'View Calendar'
        calendarButton.title = 'click here to access calendar view'
        footerContainer.appendChild(calendarButton)
        // onclick event for calendarButton
        calendarButton.addEventListener('click', function () {
            document.body.classList.replace('showDailyView', 'showCalendarView')
        })
    // }
}