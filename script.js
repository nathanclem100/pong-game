const ball = document.getElementById('ball');
const leftPaddle = document.getElementById('leftPaddle');
const rightPaddle = document.getElementById('rightPaddle');
const gameContainer = document.querySelector('.game-container');

let ballX = 400;
let ballY = 200;
let ballSpeedX = 5;
let ballSpeedY = 2;

let leftPaddleY = 150;
let rightPaddleY = 150;
const paddleSpeed = 5;

gameContainer.addEventListener('mousemove', (event) => {
  leftPaddleY = event.clientY - gameContainer.getBoundingClientRect().top - 50;
});

function update() {
  // Update ball position
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Ball collision with top and bottom walls
  if (ballY <= 0 || ballY >= 380) {
    ballSpeedY *= -1;
  }

  // Ball collision with paddles
  if (ballX <= 15 && ballY >= leftPaddleY && ballY <= leftPaddleY + 100) {
    ballSpeedX *= -1;
  }

  if (ballX >= 775 && ballY >= rightPaddleY && ballY <= rightPaddleY + 100) {
    ballSpeedX *= -1;
  }

  // Move paddles
  if (rightPaddleY < ballY) {
    rightPaddleY += paddleSpeed;
  } else {
    rightPaddleY -= paddleSpeed;
  }

  // Update elements on screen
  ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
  leftPaddle.style.transform = `translateY(${leftPaddleY}px)`;
  rightPaddle.style.transform = `translateY(${rightPaddleY}px)`;

  requestAnimationFrame(update);
}

update();
