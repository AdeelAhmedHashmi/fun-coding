import DOM_ELEMENTS from "../Dom.js"
import {time, gameSettings, colors} from "../constants.js"

function showNumbers(){
  Array.from(document.querySelectorAll(".column:not(.w)")).forEach((e)=>{
  e.innerHTML = `<span style="position:absolute;">${e.id}</span> `
  })
}

function showGotiId(){
  DomToArray("goti","class").forEach((goti)=>{
    let playerid = goti.dataset.playerid
    goti.textContent = playerid
  })
}

function timer(){
    setInterval(()=>{
      if(time.sec >= 59){
        time.min++
        time.sec = -1
      }
      if(time.min >= 99){
        time.min = 0
      }
      time.sec++
      DOM_ELEMENTS.min.textContent = `${time.min < 10 ? `0${time.min}`: `${time.min}`}`
      DOM_ELEMENTS.sec.textContent = `${time.sec < 10 ? `0${time.sec}`: `${time.sec}`}`
    },1000)
}

function selectElementWithId(id){
  return document.getElementById(id)
}

function DomToArray(selector, type = "class"){
  if(type === "id"){
    return Array.from(document.querySelectorAll(`#${selector}`))
  }
  else if(type === "tag"){
    return Array.from(document.querySelectorAll(`${selector}`))
  }
  else if(type === "class"){
    return Array.from(document.querySelectorAll(`.${selector}`))
  }
}

function resetHighlight(){
  DomToArray("w").forEach((e)=>{
    if(
      e.style.backgroundColor === colors.valid_position ||
      e.style.backgroundColor === colors.detect_goti
    ){
      e.style.backgroundColor = colors.dark_normal_color
    }
  })  
}

function playSound(source){
  if(!gameSettings.sound.mute){
    DOM_ELEMENTS.moveAudioSound.src = source
    DOM_ELEMENTS.moveAudioSound.play()
  }
}

function debug(){
  showGotiId()
  showNumbers()
}

export{
    timer,
    selectElementWithId,
    playSound,
    resetHighlight,
    showNumbers,
    showGotiId,
    debug,
    DomToArray,
}