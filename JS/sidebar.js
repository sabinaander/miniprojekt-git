// getting the sideBar
let sideBar = document.querySelector('.sideBar')

// create button and add text
let toDoBtn = document.createElement('BUTTON')
toDoBtn.innerHTML = 'ADD TO-DO'


// appending toDoBtn to divs
sideBar.appendChild(toDoBtn)

function renderSideBarContainer() {
    
    let toDosForDayContainer = document.createElement('DIV')
    sideBar.id = 'toDosForDayContainer'
    sideBar.appendChild(toDosForDayContainer)
    renderToDo()
}

function renderToDo() {
    let toDosForDayContainer = document.getElementById('toDosForDayContainer')

    let listOfToDos = document.createElement('UL')
    toDosForDayContainer.appendChild(listOfToDos)
    
    const dayString = `${calendar.selectedYear}-${calendar.selectedMonth}-${calendar.selectedDay}`

    const todosForDay = toDos.filter((todo) => todo.date === dayString)

    for (let i = 0; i < toDos.length; i++) {
        let displayToDo = document.createElement('LI')
        displayToDo.appendChild(listOfToDos)
        displayToDo.innerHTML= 'hej'
        
    }
}

// /**
//  *
//  * @param {string} toDo
//  * @param {string} toDos
//  * @returns
//  */
// function fetchToDos(toDo, toDos){
//     getToDosFromStorage()

//     for (let i=0; i< toDos.length; i++){
//             (toDos[i].dateSelectListener === toDo)
//             return toDos[i]
//         }
//     }
