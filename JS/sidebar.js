// getting the sideBar
let sideBar = document.querySelector('.sideBar')

// create button and add text
let toDoBtn = document.createElement('BUTTON')
toDoBtn.innerHTML = 'ADD TO-DO'


// appending toDoBtn to divs
sideBar.appendChild(toDoBtn)

function renderSideBarContainer(){
//checks the date to render in sidebar
dateSelectListener()
console.log(toDos)

// const todosForDay = toDos.filter((todo) => todo.date === dayString)
let toDosForDayContainer = document.createElement('DIV')
sideBar.classList.add('toDosForDayContainer')
sideBar.appendChild(toDosForDayContainer)
}

function renderToDo(){
    let listOfToDos = document.createElement('UL')
    todosForDay.appendChild(listOfToDos)
    
    if (fetchToDos){
        let displayToDo = document.createElement('LI')
        displayToDo.appendChild(dailyToDos)
        // li.innerHTML = dayBlocks[i]
        // span.innerHTML = todosForDay.length > 0 ? todosForDay.length : null
        span.style.background = 'blue'
        span.style.color = 'white'
    }     
}

/**
 * 
 * @param {string} toDo 
 * @param {string} toDos 
 * @returns
 */
function fetchToDos(toDo, toDos){
    getToDosFromStorage()

    for (let i=0; i< toDos.length; i++){
            (toDos[i].dateSelectListener === toDo)
            return toDos[i]
        }
    }
