import { colors, isBonus, isClicked, KING_POSITIONS, sounds } from "./constants.js";
import { GAME_PATTERN, POSITION_OPTIONS } from "./pattern.js"
import goti_Positions from "./localStorage/positions.js";
import { playSound, resetHighlight, selectElementWithId } from "./utils/utilities.js"
import Kings from "./utils/KingRemember.utils.js";
import DomIntegration from "./utils/domIntegration.utils.js";
// import Recording from "./localStorage/recording.js";

let Highlight = {
    isHighlight: false
}

class GameLogic{
    PositionHighlight(gotiInfo){
        resetHighlight()
        const {goti, positions} = gotiInfo
        // if (Highlight.isHighlight) return
        positions.forEach((id)=>{
            if(selectElementWithId(id).children.length < 1 ){
                if(goti.classList.contains('king')){
                    selectElementWithId(id).style.backgroundColor = colors.valid_position
                    Highlight.isHighlight = true
                }

                else if(
                    (goti.classList.contains('goti1') && goti.parentNode.id < id && !goti.classList.contains('king')) || 
                    (goti.classList.contains('goti2') && goti.parentNode.id > id && !goti.classList.contains('king'))
                ){
                    selectElementWithId(id).style.backgroundColor = colors.valid_position
                    Highlight.isHighlight = true
                }
            }

            const targetId = GAME_PATTERN[goti.parentNode.id][id]
            const targetElement = selectElementWithId(targetId)

            if(selectElementWithId(id).children.length > 0 && goti.id !== selectElementWithId(id).firstElementChild.id && targetElement?.children.length < 1){
                // selectElementWithId(id).style.backgroundColor = colors.detect_goti
            }
        })
        
    }

    ChangeState(gotiInfo){
        const {currentPosition, goti} = gotiInfo;
        let GOTI_POSITIONS = goti_Positions.get()
        GOTI_POSITIONS[goti.id][goti.dataset.playerid] = Number(currentPosition.id)
        goti_Positions.update(GOTI_POSITIONS)
        // Recording.update(GOTI_POSITIONS)
    }

    DetectTarget(goti){
        const detectionPattern = GAME_PATTERN[goti.parentNode.id]
        const positionPattern = POSITION_OPTIONS[goti.parentNode.id] 

        positionPattern.forEach(position => {
            if(detectionPattern[position]){
                const middleGoti = selectElementWithId(position)?.firstElementChild;
                const landingSpot = selectElementWithId(detectionPattern[position]);

                // For Normal Goti
                if(
                    (goti.classList.contains('goti1') && goti.parentNode.id < position && !goti.classList.contains('king')) || 
                    (goti.classList.contains('goti2') && goti.parentNode.id > position && !goti.classList.contains('king')) )
                {
                    if(
                        selectElementWithId(position).children.length > 0 &&
                        landingSpot.children.length < 1 &&
                        goti.id != selectElementWithId(position).firstElementChild.id

                    ){
                        // for next targeted goti
                        landingSpot.style.backgroundColor = colors.valid_position
                        let nextTargetValidPositons = POSITION_OPTIONS[landingSpot]
                    }
                }

                // For King Goti
                
                if(goti.classList.contains("king")){
                    if(
                        selectElementWithId(position).children.length > 0 &&
                        selectElementWithId(detectionPattern[position]).children.length < 1 &&
                        goti.id != middleGoti.id
                    ){
                       landingSpot.style.backgroundColor = colors.valid_position
                    }
                }
            }
        });
    }

    TerminateGoti(gotiInfo){
        const previousPosition = gotiInfo.previousPosition.id
        const currentPosition = gotiInfo.currentPosition.id

        const validPositions = POSITION_OPTIONS[previousPosition]
        const normalTurn = validPositions.some( pos => currentPosition == pos )

        if(!normalTurn){
            const enemyGoti = validPositions.filter((pos)=>{
                const pattern = GAME_PATTERN[previousPosition]
                if( pattern[pos] == currentPosition ){
                    return pos
                }
            })
            console.log("?? ", gotiInfo, enemyGoti)
            if(enemyGoti.length > 0){
                let terminatedGoti = selectElementWithId(enemyGoti[0])?.firstElementChild.id
                let terminatedGotiId = selectElementWithId(enemyGoti[0])?.firstElementChild.dataset.playerid
                
                let gotiPositionMap = goti_Positions.get()
                delete gotiPositionMap[terminatedGoti][terminatedGotiId]
                goti_Positions.update(gotiPositionMap)
                
                selectElementWithId(enemyGoti[0]).firstElementChild.remove()
                
                // this.DetectBounsTurn(gotiInfo)
                playSound(sounds.cut)
            }
        }

        this.DetectKing(gotiInfo)
    }

    // this method is incompleted
    DetectBounsTurn(gotiInfo){
        // this is an incomplete feature 
        const {currentPosition, goti} = gotiInfo
        const gotiPositionBoxId = currentPosition.id
        const selectedGoti = goti
        
        POSITION_OPTIONS[gotiPositionBoxId].forEach((id)=>{
            const targetGoti = selectElementWithId(id).firstElementChild
            if(selectElementWithId(id).children.length > 0 && selectedGoti.id !== targetGoti.id){
                const validPosition = GAME_PATTERN[gotiPositionBoxId][selectElementWithId(id).id]
                if(validPosition){
                    selectElementWithId(validPosition).style.backgroundColor = colors.valid_position
                    isBonus.state = true   
                }
            }
        }) 
    }

    DetectKing(gotiInfo){

        const {goti, currentPosition} = gotiInfo

        if(KING_POSITIONS[goti.id].some((pos) => currentPosition.id == pos)){
            goti.textContent = '⭐'
            goti.classList.add('king')
            Kings.remember(gotiInfo)
            playSound(sounds.king)
        }
    }

    WinLoseDetection(gotiPositionMap){
        const numberOfBlackGoti = Object.keys(gotiPositionMap["player1"]).length
        const numberOfWhiteGoti = Object.keys(gotiPositionMap["player2"]).length
        
        console.log(numberOfWhiteGoti, numberOfBlackGoti)
        if(numberOfBlackGoti == 0 || numberOfWhiteGoti == 0){
            console.log("End!")
            if(numberOfBlackGoti == 0){
                DomIntegration.toggleWinnerPopup("player2")
            }
            else if(numberOfWhiteGoti == 0){
                DomIntegration.toggleWinnerPopup("player1")
            }
        }

    }

    // ResetGame(){
    //     localStorage.removeItem("kings")
    //     localStorage.removeItem("goti_positions")
    // }
}

export{
    GameLogic,
    Highlight
}


