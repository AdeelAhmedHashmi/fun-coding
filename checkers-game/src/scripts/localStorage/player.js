import randomChoice from "../utils/randomChoice.utils.js"
class Player_State {
    #playerStates
    constructor() {
        this.#playerStates = ["player1", "player2"]
        this.#set()
    }

    #set(){
        let playerState = localStorage.getItem("playerState")
        if(!playerState){
            localStorage.setItem("playerState", randomChoice(this.#playerStates))
        }
    }

    get(){
        return localStorage.getItem("playerState")
    }

    toggle(){
        let playerState = localStorage.getItem("playerState")
        if(playerState === "player1"){
            localStorage.setItem("playerState", "player2")
        } else{
            localStorage.setItem("playerState", "player1")
        }
    }

    reset(){
        localStorage.removeItem("playerState")
        localStorage.setItem("playerState", randomChoice(this.#playerStates))
    }

    animate(){
        
    }
}

const playerState = new Player_State()
export default playerState