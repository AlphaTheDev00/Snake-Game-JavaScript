const playBoard = document.querySelector(".play-board");

let appleX, appleY;

const changeApplePosition = () => {

    //Passing a random 0 - 30 value as food postion
    appleX = Math.floor(Math.random() * 30) + 1;
    appleY = Math.floor(Math.random() * 30) + 1;
}

const startGame = () => {
    let htmlMarkup = `<div class="apple" style="grid-area: ${appleY} / ${appleX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeApplePosition();
startGame();