class _Kings{
    constructor(){
        this.Kings = {
            player1: [],
            player2: []
        }
    }

    remember(gotiInfo){
        const {goti} = gotiInfo
        const KingID = goti.id
        this.Kings[KingID].push(goti.dataset.playerid)
        localStorage.setItem("kings", JSON.stringify(this.Kings))
    }

    reset(){
        localStorage.removeItem("kings")
    }

    renderKings(){
        let kings = localStorage.getItem("kings")
        if(kings) {
            kings = JSON.parse(kings)
        }
        if(kings && (kings.player1.length > 0 || kings.player2.length > 0)){
            if(kings.player1.length > 0){
                kings.player1.forEach(id => {
                    let king = document.querySelector(`[data-playerid="${Number(id)}"]`)

                    if(!king.classList.contains("king")){
                        king.classList.add("king")
                        king.textContent = "⭐"
                    }
                });
            }

            if(kings.player2.length > 0){
                kings.player2.forEach(id => {
                    let king = document.querySelector(`[data-playerid="${Number(id)}"]`)

                    if(!king.classList.contains("king")){
                        king.classList.add("king")
                        king.textContent = "⭐"
                    }
                });
            }
        }
    }
}

const Kings = new _Kings()
export default Kings