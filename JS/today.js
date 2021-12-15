// This is a JS file for the header section by Jim

// Date assets

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let today = year + "-" + month + "-" + day;

// Time assets
let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();

document.getElementById("currentDate").innerHTML = today;
// Clock
setInterval(tellTime, 1000);
function tellTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec;

  document.getElementById("clock").innerHTML = currentTime;
}

// Dynamic welcome message, changes depending on time of day

function setWelcomeMessage() {
  console.log("hour", hour);
  if (hour >= 4 && hour < 12) {
    document.getElementById("welcomeMessage").innerText = "Good morning!";
  } else if (hour >= 12 && hour < 17) {
    document.getElementById("welcomeMessage").innerText = "Good afternoon!";
  } else {
    document.getElementById("welcomeMessage").innerText = "Good evening!";
  }
}

setWelcomeMessage();
