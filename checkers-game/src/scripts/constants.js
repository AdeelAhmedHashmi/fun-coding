let delayTime = 2000

function checkIfGameTypeValid(){
  const gameType = localStorage.getItem("game_type") 
  const isValid = ["OneRow", "TwoRows", "ThreeRows"].some((valid) => gameType === valid)
  
  if(isValid) return true
  else return false
}

let film = '[{"player1":{"1":2,"2":4,"3":6,"4":8,"5":18,"6":11,"7":13,"8":15},"player2":{"1":57,"2":59,"3":61,"4":63,"5":50,"6":52,"7":54,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"5":18,"6":11,"7":13,"8":15},"player2":{"1":57,"2":59,"3":61,"4":63,"5":50,"6":43,"7":54,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"5":27,"6":11,"7":13,"8":15},"player2":{"1":57,"2":59,"3":61,"4":63,"5":50,"6":43,"7":54,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"5":27,"6":11,"7":13,"8":15},"player2":{"1":57,"2":59,"3":61,"4":63,"5":50,"6":36,"7":54,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"5":45,"6":11,"7":13,"8":15},"player2":{"1":57,"2":59,"3":61,"4":63,"5":50,"7":54,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"6":11,"7":13,"8":15},"player2":{"1":57,"2":59,"3":61,"4":63,"5":50,"7":36,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"6":20,"7":13,"8":15},"player2":{"1":57,"2":59,"3":61,"4":63,"5":50,"7":36,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"6":20,"7":13,"8":15},"player2":{"1":57,"2":59,"3":61,"4":63,"5":50,"7":27,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"6":34,"7":13,"8":15},"player2":{"1":57,"2":59,"3":61,"4":63,"5":50,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"6":34,"7":13,"8":15},"player2":{"1":57,"2":59,"3":61,"4":63,"5":43,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"6":52,"7":13,"8":15},"player2":{"1":57,"2":59,"3":61,"4":63,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"7":13,"8":15},"player2":{"1":57,"2":59,"3":43,"4":63,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"7":20,"8":15},"player2":{"1":57,"2":59,"3":43,"4":63,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"7":20,"8":15},"player2":{"1":57,"2":59,"3":36,"4":63,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"7":27,"8":15},"player2":{"1":57,"2":59,"3":36,"4":63,"8":56}},{"player1":{"1":2,"2":4,"3":6,"4":8,"8":15},"player2":{"1":57,"2":59,"3":18,"4":63,"8":56}},{"player1":{"1":11,"2":4,"3":6,"4":8,"8":15},"player2":{"1":57,"2":59,"3":18,"4":63,"8":56}},{"player1":{"1":11,"2":4,"3":6,"4":8,"8":15},"player2":{"1":57,"2":59,"3":9,"4":63,"8":56}},{"player1":{"1":18,"2":4,"3":6,"4":8,"8":15},"player2":{"1":57,"2":59,"3":9,"4":63,"8":56}},{"player1":{"1":18,"2":4,"3":6,"4":8,"8":15},"player2":{"1":57,"2":59,"3":2,"4":63,"8":56}},{"player1":{"1":27,"2":4,"3":6,"4":8,"8":15},"player2":{"1":57,"2":59,"3":2,"4":63,"8":56}},{"player1":{"1":27,"2":4,"3":6,"4":8,"8":15},"player2":{"1":57,"2":50,"3":2,"4":63,"8":56}},{"player1":{"1":36,"2":4,"3":6,"4":8,"8":15},"player2":{"1":57,"2":50,"3":2,"4":63,"8":56}},{"player1":{"1":36,"2":4,"3":6,"4":8,"8":15},"player2":{"1":57,"2":43,"3":2,"4":63,"8":56}},{"player1":{"1":50,"2":4,"3":6,"4":8,"8":15},"player2":{"1":57,"3":2,"4":63,"8":56}},{"player1":{"2":4,"3":6,"4":8,"8":15},"player2":{"1":43,"3":2,"4":63,"8":56}},{"player1":{"2":13,"3":6,"4":8,"8":15},"player2":{"1":43,"3":2,"4":63,"8":56}},{"player1":{"2":13,"3":6,"4":8,"8":15},"player2":{"1":36,"3":2,"4":63,"8":56}},{"player1":{"2":20,"3":6,"4":8,"8":15},"player2":{"1":36,"3":2,"4":63,"8":56}},{"player1":{"2":20,"3":6,"4":8,"8":15},"player2":{"1":29,"3":2,"4":63,"8":56}},{"player1":{"2":38,"3":6,"4":8,"8":15},"player2":{"3":2,"4":63,"8":56}},{"player1":{"2":38,"3":6,"4":8,"8":15},"player2":{"3":2,"4":63,"8":47}},{"player1":{"2":56,"3":6,"4":8,"8":15},"player2":{"3":2,"4":63}},{"player1":{"2":56,"3":6,"4":8,"8":15},"player2":{"3":2,"4":54}},{"player1":{"2":63,"3":6,"4":8,"8":15},"player2":{"3":2,"4":54}},{"player1":{"2":63,"3":6,"4":8,"8":15},"player2":{"3":2,"4":45}},{"player1":{"2":63,"3":6,"4":8,"8":22},"player2":{"3":2,"4":45}},{"player1":{"2":63,"3":6,"4":8,"8":22},"player2":{"3":2,"4":36}},{"player1":{"2":63,"3":6,"4":8,"8":29},"player2":{"3":2,"4":36}},{"player1":{"2":63,"3":6,"4":8},"player2":{"3":2,"4":22}},{"player1":{"2":63,"3":13,"4":8},"player2":{"3":2,"4":22}},{"player1":{"2":63,"4":8},"player2":{"3":2,"4":4}},{"player1":{"2":63,"4":15},"player2":{"3":2,"4":4}},{"player1":{"2":63,"4":15},"player2":{"3":2,"4":13}},{"player1":{"2":63,"4":22},"player2":{"3":2,"4":13}},{"player1":{"2":63,"4":22},"player2":{"3":2,"4":4}},{"player1":{"2":54,"4":22},"player2":{"3":2,"4":4}},{"player1":{"2":54,"4":22},"player2":{"3":2,"4":13}},{"player1":{"2":45,"4":22},"player2":{"3":2,"4":13}},{"player1":{"2":45,"4":22},"player2":{"3":2,"4":20}},{"player1":{"2":36,"4":22},"player2":{"3":2,"4":20}},{"player1":{"2":36,"4":22},"player2":{"3":2,"4":29}},{"player1":{"2":36,"4":31},"player2":{"3":2,"4":29}},{"player1":{"2":36,"4":31},"player2":{"3":2,"4":38}},{"player1":{"2":45,"4":31},"player2":{"3":2,"4":38}},{"player1":{"2":45,"4":31},"player2":{"3":2,"4":29}}]'
const convertedFilm = JSON.parse(film)

let gameSettings = {
    gameType : checkIfGameTypeValid() ? localStorage.getItem("game_type") : "ThreeRows",
    sound: {
      mute: JSON.parse(localStorage.getItem("mute")) || false
    },
    OneRow: {
      player1: {
        "1": 2, "2": 4, "3": 6, "4": 8
      },
      player2: {
        "1": 57, "2": 59, "3": 61, "4": 63
      }
    },
    TwoRows: {
      player1: {
        "1": 2, "2": 4, "3": 6, "4": 8,
        "5": 9, "6": 11, "7": 13, "8": 15
      },
      player2: {
        "1": 57, "2": 59, "3": 61, "4": 63,
        "5": 50, "6": 52, "7": 54, "8": 56
      }
    },
    ThreeRows: {
      player1: {
        "1": 2, "2": 4, "3": 6, "4": 8,
        "5": 9, "6": 11, "7": 13, "8": 15,
        "9": 18, "10": 20, "11": 22, "12": 24
      },
      player2: {
        "1": 57, "2": 59, "3": 61, "4": 63,
        "5": 50, "6": 52, "7": 54, "8": 56,
        "9": 41, "10": 43, "11": 45, "12": 47
      }
    },

}

let messages = {
  letsPlay: [
    "Time to write your legend.",
    "Let’s goooo! You got this.",
    "Only the brave dare to play.",
    "Power up. Lock in. Game on.",
    "Headphones in. Focus on. Let’s get it.",
    "Strap in, it’s game time.",
    "Your journey starts now — make it epic.",
    "No pressure... but everyone’s watching."
  ],
  gameOver: [
    "You fought with honor... but fate had other plans.",
    "Defeat isn’t the end — it’s the start of a comeback.",
    "You died faster than my phone battery.",
    "Even heroes fall. Ready to rise again?",
    "Well, that went great... said no one ever.",
    "Maybe gaming’s not for you... just kidding (maybe).",
    "A valiant effort, warrior. The world will remember.",
    "So close. Yet so not close.",
    "If rage quitting was an Olympic sport, you'd be gold.",
    "Your enemies laugh... prove them wrong."
  ]
}
let time = {
    min: 0,
    sec: 0
}

let isClicked = {
  state: false
}

let isBonus = {
  state: false
}
let colors = {
    valid_position: "rgb(255, 215, 0)",
    detect_goti: "rgba(255, 26, 26, 0.6)",
    dark_normal_color: "rgb(75, 54, 33)",
}
const sounds = {
    move: "./public/asserts/sounds/move.mp3",
    cut: "./public/asserts/sounds/eatGoti.mp3",
    king: "./public/asserts/sounds/king.mp3"
}

const GOTI_HTML_TEMPLATES = {
    GOTI1_HTML: `<div id="player1" class="goti goti1"></div>`,
    GOTI2_HTML: `<div id="player2" class="goti goti2"></div>`,
}

const KING_POSITIONS = {
    player1: [57, 59, 61, 63],
    player2: [2, 4, 6, 8]
}


export {
    time,
    delayTime,
    sounds,
    KING_POSITIONS,
    GOTI_HTML_TEMPLATES,
    colors,
    gameSettings,
    convertedFilm,
    messages,
    isClicked,
    isBonus
}