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
  } 
  // Game Item Objects
  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedY = 0;

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);      
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
  }
  
  /* 
  Called in response to events.
  */
    function handleKeyDown(event) {
      if (event.which ===KEY.W) {
        console.log("W")
        speedY = -5;
      }
      if (event.which ===KEY.A) {
        speedX = -5;
        console.log("A")
      }
      if (event.which ===KEY.S) {
        console.log("S")
        speedY = 5;
      }
      if (event.which ===KEY.D) {
        console.log("D")
        speedX = 5;
      }
  }function handleKeyUp(event) {
    if (event.which ===KEY.W) {
      console.log("W")
      speedY = 0;
    }
    if (event.which ===KEY.A) {
      speedX = 0;
      console.log("A")
    }
    if (event.which ===KEY.S) {
      console.log("S")
      speedY = 0;
    }
    if (event.which ===KEY.D) {
      console.log("D")
      speedX = 0;
    }
}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem(){
    positionX += speedX
    positionY += speedY
  }
  //Sidney: this tells the css to redraw the box based off of the position.
  function redrawGameItem(){
    $("#gameItem").css("left",positionX);
    $("#gameItem").css("top",positionY);
    
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
