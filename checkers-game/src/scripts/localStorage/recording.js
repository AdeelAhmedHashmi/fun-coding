import goti_Positions from "./positions.js";

class _Recording{
    #frames = []
    
    constructor(){
        this.#frames = []
    }

    update(frame){
        this.#frames.push(frame)
        localStorage.setItem("recap", JSON.stringify(this.#frames))
    }

    get(){
        return JSON.parse(localStorage.getItem("recap"))
    }

    play(){
        const recording = JSON.parse(localStorage.getItem("recap"))

        console.log(recording)
    }
}

const Recording = new _Recording()
export default Recording