// This is a JS file for the header section by Jim

// Today's date

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let today = year + "-" + month + "-" + day;

document.getElementById("currentDate").innerHTML = today;
