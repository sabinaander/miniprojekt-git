// this JS file is for all scripts in the footer.
// getting the footer
const footer = document.querySelector('#footer')

/** 
 * Adds a div to footer with two buttons to toggle between calendar/daily view
 * @returns {void}
 */
function renderFooter() {
    /**
     * @type {HTMLButtonElement} dayButton
     * @type {HTMLButtonElement} calendarButton
     * @type {HTMLDivElement} footerContainer
     */
    const footerContainer = document.createElement('DIV')
    footerContainer.id = 'footerContainer'
    footer.appendChild(footerContainer)

    // adds button to footer with icon and text
    const dayButton = document.createElement('BUTTON')
    dayButton.classList.add('fa-solid', 'fa-calendar-day')
    dayButton.innerText = 'View daily'
    dayButton.title = 'click here to access daily todo view'
    footerContainer.appendChild(dayButton)

    // onclick event for dayButton, remove class showCalenderView (m in CSS grids) replace with showDailyView (s in CSS grids)
    dayButton.addEventListener('click', function () {
        document.body.classList.replace('showCalendarView', 'showDailyView')
    })

    // adds button to footer with icon and text
    const calendarButton = document.createElement('BUTTON')
    calendarButton.classList.add('fa-solid', 'fa-calendar-alt')
    calendarButton.innerText = 'View Calendar'
    calendarButton.title = 'click here to access calendar view'
    footerContainer.appendChild(calendarButton)

    // onclick event for calendarButton remove class showDailyView (s in CSS grids) replace with  showCalenderView (m in CSS grids) 
    calendarButton.addEventListener('click', function () {
        document.body.classList.replace('showDailyView', 'showCalendarView')
    })
}