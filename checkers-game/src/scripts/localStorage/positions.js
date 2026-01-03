import { gameSettings } from "../constants.js"

class Goti_Positions {
  #playerPositions
  #gameType
  constructor(){
    this.#init()
    this.#set()
  }
  
  #init(){
    this.#playerPositions = gameSettings[gameSettings.gameType]
    this.#gameType = gameSettings.gameType
  }

  #set(){
    function isPositionsStored(){
      if(localStorage.getItem("goti_positions") == null && localStorage.getItem("goti_positions") == undefined ){
        return false
      }
      else if(localStorage.getItem("goti_positions")){
        return true
      }  
    }


    if(!isPositionsStored()){
      localStorage.setItem("goti_positions", JSON.stringify(this.#playerPositions))
      localStorage.setItem("game_type", this.#gameType)
    }
    else{
      this.#playerPositions = JSON.parse(localStorage.getItem("goti_positions"))
    }
  }

  get(){
    return JSON.parse(localStorage.getItem("goti_positions")) 
  }

  update(updated_positions){
    localStorage.removeItem('goti_positions')
    localStorage.setItem('goti_positions', JSON.stringify(updated_positions))

  }

  reset(gameType){
    if(gameType == "OneRow" || gameType == "TwoRows" || gameType == "ThreeRows"){
      gameSettings.gameType = gameType
    }
    localStorage.removeItem("game_type")
    localStorage.removeItem('goti_positions');
    localStorage.removeItem('kings')
    this.#init()
    this.#set()
  }
}

const goti_Positions = new Goti_Positions()
export default goti_Positions