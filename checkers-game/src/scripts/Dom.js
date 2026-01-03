const DOM_ELEMENTS = {
    gameContainer: document.querySelector(".container"),
    min: document.querySelector('.timer .min'),
    sec: document.querySelector('.timer .sec'),
    moveAudioSound: document.querySelector('#moveAudio'),
    blackCount: document.querySelector(".black p"),
    whiteCount: document.querySelector(".white p"),
    turnPlayerIcon: document.querySelector(".gotiindicator .sign"),
    turnPlayerName: document.querySelector(".gotiindicator .gotiName"),
    soundDiv: document.querySelector("#volumn"),
    settingIcon: document.querySelector(".setting"),
    settingPanel: document.querySelector(".setting-panel"),
    winnerPopup: document.querySelector(".gameover-popup"),
    winnerPopupMessage: document.querySelector(".gameover-popup .message"),
    winnerPlayer : document.querySelector(".gameover-popup .title"),
    retryBtn: document.querySelector("#retry"),
    resetBtn: document.querySelector("#reset"),
    closePopupIcon: document.querySelector(".setting-panel #title img")
}

export default DOM_ELEMENTS