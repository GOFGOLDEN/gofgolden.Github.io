/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  //this will hold out key inputs that we will use to move the players
  var KEY = {
    "W":87,
    "A":65,
    "S":83,
    "D":68,
    "UP":38,
    "RIGHT":37,
    "DOWN":40,
    "LEFT":39,
  } 
  //this defines our board width and hight as well as the ball size. this will be used to identify when the ball bounces
  var BOARD_WIDTH = 1500;
  var BOARD_HEIGHT = 800;
  var BALL_SIZE = 40; 

  var BALL_MAX = {
    "LEFT": 0,
    "RIGHT": BOARD_WIDTH - BALL_SIZE,
    "TOP": 0,
    "BOTTOM": BOARD_HEIGHT - BALL_SIZE
}


  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  //this is where the paddles and ball are made and defined
  var paddle2 = player('#gameItem2');
  var paddle1 = player('#gameItem');
  var ball = player('#ball');
  // one-time setup
  // this variable will be used to update new frames as well as keep our new frame function continuesly working
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)                        // change 'eventType' to the type of event you want to handle
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);      
  $(document).on('keydown', handleKeyDown2);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp2);   
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function handleKeyDown(event) {
    if (event.which ===KEY.W) {
      console.log("W")
      paddle1.speedY = -7;
    }
    if (event.which ===KEY.S) {
      console.log("S")
      paddle1.speedY = 7;
    }
    /// this handleKeyUp function stops the position of x or y when we let go of our wasd keys
}function handleKeyUp(event) {
  if (event.which ===KEY.W) {
    console.log("W")
    paddle1.speedY = 0;
  }
  if (event.which ===KEY.S) {
    console.log("S")
    paddle1.speedY = 0;
  }
}//This handleKeyDown function uses our KEY object 
  //to corispond position x and y using our wasd keys
  function handleKeyDown2(event) {
    if (event.which ===KEY.UP) {
      console.log("UP")
      paddle2.speedY = -7;
    }
    if (event.which ===KEY.DOWN) {
      console.log("DOWN")
      paddle2.speedY = 7;
    }
    /// this handleKeyUp function stops the position of x or y when we let go of our wasd keys
  }
  function handleKeyUp2(event) {
    if (event.which ===KEY.UP) {
      console.log("UP")
      paddle2.speedY = 0;
    }
    if (event.which ===KEY.DOWN) {
      console.log("DOWN")
      paddle2.speedY = 0;
    }
}
// this moveball function takes the css of the ball and the speed (x/y) to redraw the ball based on its position/speed
function moveBall(ball) {
// repositioning
  ball.x += ball.speedX;
  ball.y += ball.speedY;

// redrawing
  $(ball.id).css("left", ball.x);
  $(ball.id).css("top", ball.y);
}
// like it is said this function detects the bounce of the ball and returns the speed in the other direction
function detectBounce(ball) {
  if (ball.x > BALL_MAX.RIGHT) {
      ball.x = BALL_MAX.RIGHT;
      ball.speedX *= -1;
  }
  else if (ball.x < BALL_MAX.LEFT) {
      ball.x = BALL_MAX.LEFT;
      ball.speedX *= -1;
  }
  else if (ball.y < BALL_MAX.TOP) {
      ball.y = BALL_MAX.TOP;
      ball.speedY *= -1;
  }}

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()
    repositionGameItem2() 
    redrawGameItem2()
    redrawBall()
    repositionGameItem2()
    repositionBall()
    moveBall(ball)
    detectBounce(ball)
  }
  
  /* 
  Called in response to events.
  */
  


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  // this is our factory function that we use to create player 1 and 2 (as well as the ball)
  function player (id) {
    var player = {};
    player.id = id;
    player.X= parseFloat($(id).css('left'));
    player.Y= parseFloat($(id).css('top'));
    player.width =($(id).width);
    player.height = ($(id).height);
    player.speedX = 0;
    player.speedY = 0;
    console.log(player);
    return player;
  }
  //these update the position of both player one and two as well as the ball. 
  function repositionGameItem(){
    paddle1.Y += paddle1.speedY
  }
  function repositionGameItem2(){
    paddle2.Y += paddle2.speedY
  }
  function repositionBall() {
    ball.X += ball.speedX;
    ball.Y += ball.speedY;
  }
  
  function redrawGameItem(){
    $(paddle1.id).css("left",paddle1.X);
    $(paddle1.id).css("top",paddle1.Y);
  }
  function redrawGameItem2() {
    $(paddle2.id).css("left",paddle2.X);
    $(paddle2.id).css("top",paddle2.Y);
  }
  function redrawBall() {
    $(ball.id).css("left",ball.X);
    $(ball.id).css("top",ball.Y);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
