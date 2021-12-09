// This is meant to be the script file to create all objects for a to-do.
// Add/create to-do
// Edit to-do
// View the to-do's in calendar

// getting the sideBar
let sideBar = document.querySelector('.sideBar')

// create button and add text
let toDoBtn = document.createElement('BUTTON')
toDoBtn.innerHTML = 'ADD TO-DO'

// appending toDoBtn to divs
sideBar.appendChild(toDoBtn)

// create div
toDoBtn.onclick = function () {
    let toDoContainer = document.createElement('DIV')
    toDoContainer.innerHTML = 'ADD TO-DO'
    console.log (toDoContainer)
 }

