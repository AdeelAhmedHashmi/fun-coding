import { gameSettings, messages, sounds } from "../constants.js"
import DOM_ELEMENTS from "../Dom.js"
import goti_Positions from "../localStorage/positions.js"
import { POSITION_OPTIONS } from "../pattern.js"
import randomChoice from "./randomChoice.utils.js"

class Dom {
    constructor(){
        this.toggleVolumn()
        this.toggleSettingPopUp()
        this.retryGameButton()
        this.displayCurrentGotiCounts(goti_Positions.get())
    }
    
    displayCurrentGotiCounts(gotiPositionsMap){
        const numberOfBlackGoti = Object.keys(gotiPositionsMap["player1"]).length
        const numberOfWhiteGoti = Object.keys(gotiPositionsMap["player2"]).length

        DOM_ELEMENTS.blackCount.textContent = numberOfBlackGoti
        DOM_ELEMENTS.whiteCount.textContent = numberOfWhiteGoti
    }

    displayCurrentPlayerTurn(player){
        DOM_ELEMENTS.turnPlayerName = player
        if(player === "player1"){
            DOM_ELEMENTS.turnPlayerIcon.style.backgroundColor = "rgb(26, 25, 25)"
        } else {
            DOM_ELEMENTS.turnPlayerIcon.style.backgroundColor = "rgb(231, 216, 191)"
        }
    }

    toggleVolumn(){
        if(JSON.parse(localStorage.getItem("mute")) && gameSettings.sound.mute) {
            DOM_ELEMENTS.soundDiv.src = "./public/asserts/icons/mute.svg"
        } else {
            DOM_ELEMENTS.soundDiv.src = "./public/asserts/icons/volumn.svg"
        }

        DOM_ELEMENTS.soundDiv.addEventListener("click",(e)=>{
            gameSettings.sound.mute = !gameSettings.sound.mute
            if(gameSettings.sound.mute){
                e.target.src = "./public/asserts/icons/mute.svg"
            } else {
                e.target.src = "./public/asserts/icons/volumn.svg"
            }
            localStorage.setItem("mute", gameSettings.sound.mute)
        })
    }

    toggleSettingPopUp(){
        DOM_ELEMENTS.settingIcon.addEventListener("click", ()=>{
            if(DOM_ELEMENTS.settingPanel.classList.contains("hide")){
                DOM_ELEMENTS.settingPanel.classList.remove("hide")
            } else{
                DOM_ELEMENTS.settingPanel.classList.add("hide")
            }
        })
        DOM_ELEMENTS.closePopupIcon.addEventListener("click", ()=>{
            if(DOM_ELEMENTS.settingPanel.classList.contains("hide")){
                DOM_ELEMENTS.settingPanel.classList.remove("hide")
            } else{
                DOM_ELEMENTS.settingPanel.classList.add("hide")
            }
        })
    }

    toggleWinnerPopup(winner){
        const {winnerPlayer, winnerPopupMessage, winnerPopup} = DOM_ELEMENTS
        
        if(winnerPopup.classList.contains("hide")){
            winnerPopup.classList.remove("hide")
            if(winner){
                winnerPopupMessage.textContent = randomChoice(messages.gameOver)
                winnerPlayer.textContent = `${winner} wins!`
                goti_Positions.reset()
            }
        }
        else{
            winnerPopup.classList.add("hide")
        }
    }

    retryGameButton(){
        DOM_ELEMENTS.retryBtn.addEventListener("click",()=>{
            goti_Positions.reset()
        })
        DOM_ELEMENTS.resetBtn.addEventListener("click", ()=>{
            goti_Positions.reset()
        })
    }
}

const DomIntegration = new Dom()
export default DomIntegration