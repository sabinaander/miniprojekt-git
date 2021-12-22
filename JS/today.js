// This is a JS file for the header section by Jim

// Time and date assets, as well as displaying date and weekday

let date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let today = year + '-' + month + '-' + day


let time = new Date()
let hour = time.getHours()
let min = time.getMinutes()
let sec = time.getSeconds()

document.getElementById('currentDate').innerHTML = time.toLocaleDateString(

  'sv-se',
  {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
)

// Clock
setInterval(tellTime, 1000)
function tellTime() {
  let time = new Date()
  let hour = time.getHours()
  let min = time.getMinutes()
  let sec = time.getSeconds()
  hour = hour < 10 ? '0' + hour : hour
  min = min < 10 ? '0' + min : min
  sec = sec < 10 ? '0' + sec : sec

  let currentTime = hour + ':' + min + ':' + sec

  document.getElementById('clock').innerHTML = currentTime
}

// Dynamic welcome message, changes depending on time of day and season of the year

function setWelcomeMessage() {
  const welcomeMessageElement = document.getElementById('welcomeMessage')
  const gridContainer = document.querySelector('.gridContainer')
  console.log('hour', hour)
  if (hour >= 4 && hour < 12) {
    welcomeMessageElement.innerText = 'Good morning!'
    if (month <= 2 || month === 12) {
      gridContainer.style.backgroundImage = "url('/media/winter-morning.jpg')"
    } else if (month >= 3 && month <= 5) {
      gridContainer.style.backgroundImage = "url('/media/spring-morning.jpg')"
    } else if (month >= 6 && month <= 8) {
      gridContainer.style.backgroundImage = "url('/media/summer-morning.jpg')"
    } else if (month >= 9 && month <= 11) {
      gridContainer.style.backgroundImage = "url('/media/autumn-morning.jpg')"
    }
  } else if (hour >= 12 && hour < 17) {
    welcomeMessageElement.innerText = 'Good afternoon!'
    if (month <= 2 || month === 12) {
      gridContainer.style.backgroundImage = "url('/media/winter-day.jpg')"
    } else if (month >= 3 && month <= 5) {
      gridContainer.style.backgroundImage = "url('/media/spring-day.jpg')"
    } else if (month >= 6 && month <= 8) {
      gridContainer.style.backgroundImage = "url('/media/summer-day.jpg')"
    } else if (month >= 9 && month <= 11) {
      gridContainer.style.backgroundImage = "url('/media/autumn-day.jpg')"
    }
  } else if (hour >= 17 || (hour >= 0 && hour <= 4)) {
    welcomeMessageElement.innerText = 'Good evening!'
    if (month <= 2 || month === 12) {
      gridContainer.style.backgroundImage = "url('/media/winter-evening.jpg')"
    } else if (month >= 3 && month <= 5) {
      gridContainer.style.backgroundImage = "url('/media/spring-evening.jpg')"
    } else if (month >= 6 && month <= 8) {
      gridContainer.style.backgroundImage = "url('/media/summer-evening.jpg')"
    } else if (month >= 9 && month <= 11) {
      gridContainer.style.backgroundImage = "url('/media/autumn-evening.jpg')"
    }
  }
}

setWelcomeMessage()
