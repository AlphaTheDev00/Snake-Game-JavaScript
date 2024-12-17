const playBoard = document.querySelector(".play-board");

let gameOver = false;
let appleX, appleY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let setIntervalId;

const changeApplePosition = () => {

    //Passing a random 0 - 30 value as food postion
    appleX = Math.floor(Math.random() * 30) + 1;
    appleY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    // Clearing the timer and reloading the page on game over
    alert("Game Over! Press OK to replay...");
    location.reload();
}

const ControlDirection = (e) => {
    //Changing Velocity value based ok key press
    if(e.key === "ArrowUp" && velocityY != 1)  {
        velocityX = 0;
        velocityY = -1;
    }else if(e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }else if(e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }else if(e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }

}

const StartGame = () => {
    if(gameOver) return handleGameOver(); 
    let htmlMarkup = `<div class="apple" style="grid-area: ${appleY} / ${appleX}"></div>`;
    
    // Checking if the snake Head in the same grid as the apple.
    if(snakeX === appleX && snakeY === appleY) {
        changeApplePosition();
        snakeBody.push([...snakeBody[snakeBody.length - 1]]);

        // snakeBody.push([appleX, appleY]);
        // console.log(snakeBody);
       
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        //Shifting forward the values of the elements om the snake body by one
        snakeBody[i] = snakeBody[i - 1];
    }

   snakeBody[0] = [snakeX, snakeY]; //Setting first Element of snake body to current snake position
    
    // Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    // Checking of the snake's head is out of the wall, if so getting GamOver to true
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        //adding a div for each part of the snake's snakeBody
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        // Cheking if snake head hit the body, if so set gameOver to true
        if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }

    }
    playBoard.innerHTML = htmlMarkup;
}
changeApplePosition();
setIntervalId = setInterval(StartGame, 125);
document.addEventListener("keydown", ControlDirection);




// if(snakeX === appleX && snakeY === appleY) {
//     changeApplePosition()
// }