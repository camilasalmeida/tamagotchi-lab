/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
//Our global state object
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}

let timer, gameOver; //this will assign the `timer` AND `gameOver` a value of undefined.

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepinessStatEl = document.querySelector('#sleepiness-stat')

const playBtnEl = document.querySelector("#play")
const feedBtnEl = document.querySelector("#feed")
const sleepBtnEl = document.querySelector("#play")

const gameMessageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#restart')

console.log({
    boredomStatEl,
    hungerStatEl,
    sleepinessStatEl,
    playBtnEl,
    feedBtnEl,
    sleepBtnEl,
    gameMessageEl,
    resetBtnEl
})
/*-------------------------------- Functions --------------------------------*/

init()// the function call 

//Function declarations
function init(){
    console.log("Init working")
    gameOver = false;
    timer = setInterval(runGame, 2000)
    render()
}


function runGame(){  
    //console.log("game running")
    updateStates()
}

function render(){
    console.log('content rendering')
}

//step 4 ----
function updateStates() {
// we need to target the global state properties

    state.boredom += randomInt()
    state.hunger += randomInt()
    state.sleepiness += randomInt()
    console.log(state)

}


function randomInt(){
    return Math.floor(Math.random() *4)
}


/*----------------------------- Event Listeners -----------------------------*/



