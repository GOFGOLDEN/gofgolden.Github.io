/* global $, sessionStorage */
$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  // sidney: this is for the framerate of our program
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  // sidney: this is for the controlls of our player
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
  // Game Item Objects
var player1 = {
positionX ,
positionY ,
speedX ,
speedY ,
};
var player2 = {
  positionX2 ,
  positionY2 ,
  speedX2 ,
  speedY2,
  };
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);      
  $(document).on('keydown', handleKeyDown2);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp2);   
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem(),  
    redrawGameItem()
      repositionGameItem2(),  
      redrawGameItem2()
    
  }
  
  /* 
  Called in response to events.
  *///This handleKeyDown function uses our KEY object 
  //to corispond position x and y using our wasd keys
  function handleKeyDown(event) {
    if (event.which ===KEY.W) {
      console.log("W")
      player1.speedY = -5;
    }
    if (event.which ===KEY.A) {
      player1.speedX = -5;
      console.log("A")
    }
    if (event.which ===KEY.S) {
      console.log("S")
      player1.speedY = 5;
    }
    if (event.which ===KEY.D) {
      console.log("D")
      player1.speedX = 5;
    }
    /// this handleKeyUp function stops the position of x or y when we let go of our wasd keys
}function handleKeyUp(event) {
  if (event.which ===KEY.W) {
    console.log("W")
    player1.speedY = 0;
  }
  if (event.which ===KEY.A) {
    player1.speedX = 0;
    console.log("A")
  }
  if (event.which ===KEY.S) {
    console.log("S")
    player1.speedY = 0;
  }
  if (event.which ===KEY.D) {
    console.log("D")
    player1.speedX = 0;
  }
}//This handleKeyDown function uses our KEY object 
  //to corispond position x and y using our wasd keys
  function handleKeyDown2(event) {
    if (event.which ===KEY.UP) {
      console.log("UP")
      player2.speedY2 = -5;
    }
    if (event.which ===KEY.RIGHT) {
      player2.speedX2 = -5;
      console.log("RIGHT")
    }
    if (event.which ===KEY.DOWN) {
      console.log("DOWN")
      player2.speedY2 = 5;
    }
    if (event.which ===KEY.LEFT) {
      console.log("LEFT")
      player2.speedX2 = 5;
    }
    /// this handleKeyUp function stops the position of x or y when we let go of our wasd keys
  }
  function handleKeyUp2(event) {
    if (event.which ===KEY.UP) {
      console.log("UP")
      player2.speedY2 = 0;
    }
    if (event.which ===KEY.RIGHT) {
      player2.speedX2 = 0;
      console.log("RIGHT")
    }
    if (event.which ===KEY.DOWN) {
      console.log("DOWN")
      player2.speedY2 = 0;
    }
    if (event.which ===KEY.LEFT) {
      console.log("LEFT")
      player2.speedX2 = 0;
    }}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem(){
    player1.positionX += player1.speedX
    player1.positionY += player1.speedY
  }
  function repositionGameItem2(){
    player2.positionX2 += player2.speedX2
    player2.positionY2 += player2.speedY2
  }
  //Sidney: this tells the css to redraw the box based off of the position.
  function redrawGameItem(){
    $("#gameItem").css("left",player1.positionX);
    $("#gameItem").css("top",player1.positionY);
  }
  function redrawGameItem2() {
    $("#gameItem2").css("left",player2.positionX2);
    $("#gameItem2").css("top",player2.positionY2);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
