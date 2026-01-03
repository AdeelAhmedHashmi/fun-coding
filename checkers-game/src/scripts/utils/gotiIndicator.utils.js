import { DomToArray } from "../utils/utilities.js"
import playerState from "../localStorage/player.js"

function gotiIndicator(isActive){
  if(isActive){

    DomToArray("goti", "class").forEach((element)=>{
      element.classList.remove("active")
    })
    
    DomToArray(playerState.get(), "id").forEach((element)=>{
      element.classList.add("active")
    })
  }
}

export default gotiIndicator