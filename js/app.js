const playBoard = document.querySelector(".play-board");

let appleX, appleY;
let snakeX = 5, snakeY = 10;

const changeApplePosition = () => {

    //Passing a random 0 - 30 value as food postion
    appleX = Math.floor(Math.random() * 30) + 1;
    appleY = Math.floor(Math.random() * 30) + 1;
}

const ControlDirection = (e) => {
    //Changing Velocity value based ok key press
    if(e.key === "ArrowUp")  {
        velocityX = 0;
        velocityY = -1;
    }else if(e.key === "Arrowleft") {
        velocityX = -1;
        velocityY = 0;
    }else if(e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
}

const startGame = () => {
    let htmlMarkup = `<div class="apple" style="grid-area: ${appleY} / ${appleX}"></div>`;
    htmlMarkup += `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeApplePosition();
startGame();