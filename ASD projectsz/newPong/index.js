/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAMES_PER_SECOND_INTERVAL = 1000 / 60;
   var key = {
      "up": 87,
      "down":83,
      "left":65,
      "right":68,
  }
  // Game Item Objects
var ball =('#ball')
var paddle1 =('#paddle1')
var paddle2 = ('#paddle2')
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
   $(document).on('keydown', handleKeyDown);                     // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  //postion/speed
  var positionx = 0;
  var positiony = 0;
  var speedX = 0;
  var speedY = 0;
  
  //update paddle position/speed  
  function updatePaddles(){
    $('#paddle2').css("left",positionx);
    $('#paddle2').css("top",positiony);
    $('#paddle1').css("left",positionx);
    $('#paddle1').css("top",positiony);
    }
  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function handleKeyDown(event) {   
    if (event.which === key.down){
       console.log("down")
        speedY += 5;
    }
    if (event.which === key.up){
        console.log("up")
        speedY += -5;
    }
    if (event.which === key.left){
        console.log("right")
        speedX += -5;
    }
    if (event.which === key.right){
        console.log("left")
        speedX += 5;
    }
  }

  function newFrame() {
    repositionGameItem();
    updatePaddles();

  }
  
  function repositionGameItem() {
    positiony += speedY 
  };
  /* 
  Called in response to events.
  */
 
  function handleEvent(event) {
   
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
  
}
