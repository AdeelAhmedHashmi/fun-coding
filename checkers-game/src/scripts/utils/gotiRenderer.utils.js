import { GOTI_HTML_TEMPLATES } from "../constants.js"
import { selectElementWithId } from "./utilities.js"

class Renderer{

  gotiRenderer(GOTI_POSITIONS){
    
    let PLAYER1_POSITIONS = GOTI_POSITIONS["player1"]
    let PLAYER2_POSITIONS = GOTI_POSITIONS["player2"]
    
    Object.keys(PLAYER1_POSITIONS).forEach((position) => {

    let boardCell = selectElementWithId(PLAYER1_POSITIONS[position])
    boardCell.innerHTML = GOTI_HTML_TEMPLATES.GOTI1_HTML
    
    let goti = selectElementWithId(PLAYER1_POSITIONS[position]).firstElementChild
    goti.setAttribute("data-playerid",position)

    })

    Object.keys(PLAYER2_POSITIONS).forEach((position) => {

      let boardCell = selectElementWithId(PLAYER2_POSITIONS[position])
      boardCell.innerHTML = GOTI_HTML_TEMPLATES.GOTI2_HTML
    
      let goti = selectElementWithId(PLAYER2_POSITIONS[position]).firstElementChild
      goti.setAttribute("data-playerid",position)

    })
  }

  clearBoard(){
    for (let i = 1; i < 65; i++) {
      selectElementWithId(i).innerHTML = ""
    }
  }
}

const renderer = new Renderer()
const gotiRenderer = renderer.gotiRenderer
const clearBoard = renderer.clearBoard
export { 
  gotiRenderer,
  clearBoard
}