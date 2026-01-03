import { POSITION_OPTIONS } from "./pattern.js"
import DOM_ELEMENTS from "./Dom.js"
import { delayTime, sounds, colors, isClicked, isBonus } from "./constants.js"
import { GameLogic, Highlight } from "./gamelogic.js"
import goti_Positions from "./localStorage/positions.js"
import playerState from "./localStorage/player.js"
import {clearBoard, gotiRenderer} from "./utils/gotiRenderer.utils.js"
import gotiIndicator from "./utils/gotiIndicator.utils.js"
import {
   timer, 
   playSound, 
   resetHighlight,
   debug,
} from "./utils/utilities.js"
import Kings from "./utils/KingRemember.utils.js"
import DomIntegration from "./utils/domIntegration.utils.js"

const Game = new GameLogic()

gotiRenderer(goti_Positions.get())
DomIntegration.displayCurrentPlayerTurn(playerState.get())

gotiIndicator(true)
Kings.renderKings()

let gotiProps = {
  goti: null,
  positions: [],
  previousPosition: null,
  currentPosition: null
}

setTimeout(()=>{
  document.querySelector("h1").remove()
},delayTime)

setTimeout(()=>{
  timer()
},delayTime)

DOM_ELEMENTS.gameContainer.addEventListener("click",(e)=>{
  if(e.target.classList.contains("goti") && e.target.id == playerState.get()){
    isClicked.state = true;
    gotiIndicator(true)

    gotiProps.goti = e.target
    gotiProps.positions = POSITION_OPTIONS[e.target.parentNode.id]
    gotiProps.previousPosition = e.target.parentNode

      Game.PositionHighlight(gotiProps)
      Game.DetectTarget(e.target)
    }
})
  
DOM_ELEMENTS.gameContainer.addEventListener("click",(e)=>{
  if(
    e.target.classList.contains("w") && 
    (isClicked.state === true || isBonus.state === true) && 
    e.target.style.backgroundColor === colors.valid_position
  ){
    e.target.style.backgroundColor = colors.dark_normal_color
    gotiProps.currentPosition = e.target
    playSound(sounds.move)
    isClicked.state = false
      
    // Goti Termination Logic 
    resetHighlight()
    Game.TerminateGoti(gotiProps)


    playerState.toggle()
    DomIntegration.displayCurrentGotiCounts(goti_Positions.get())
    Game.WinLoseDetection(goti_Positions.get())
    DomIntegration.displayCurrentPlayerTurn(playerState.get())

    //move Goti
    e.target.append(gotiProps.goti)
    Game.ChangeState(gotiProps)
    gotiIndicator(true)    
  }
  else{
     console.log(Math.random(),"invalid", e.target.classList.contains("w"), isClicked.state, e.target.style.backgroundColor === colors.valid_position)
  }
})