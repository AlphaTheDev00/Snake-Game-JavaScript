const playBoard = document.querySelector(".play-board");

let appleX, appleY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;

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
    }else if(e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    }else if(e.key === "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    }else if(e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }

}

const StarGame = () => {
    let htmlMarkup = `<div class="apple" style="grid-area: ${appleY} / ${appleX}"></div>`;
    
    // Checking if the snake Head in the same grid as the apple.
    if(snakeX === appleX && snakeY === appleY) {
        changeApplePosition();
        snakeBody.push([appleX, appleY]);
        console.log(snakeBody);
       
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        //Shifting forward the values of the elements om the snake body by one
        snakeBody[i] = snakeBody[i - 1];
    }

   snakeBody[0] = [snakeX, snakeY]; //Setting first Element of snake body to current snake position
    
    // Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    for (let i = 0; i < snakeBody.length; i++) {
        //adding a div for each part of the snake's snakeBody
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

    }
    playBoard.innerHTML = htmlMarkup;
}
changeApplePosition();
setInterval(StarGame, 125);
document.addEventListener("keydown", ControlDirection);




// if(snakeX === appleX && snakeY === appleY) {
//     changeApplePosition()
// }