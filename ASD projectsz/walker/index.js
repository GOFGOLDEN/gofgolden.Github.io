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
var positionx = 0;
var positiony = 0;
var speedx = 0;
var speedy = 0;
 // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyup);                                // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  };
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {   
    if (event.which === key.down){
       console.log("up")
        speedy += 5;
    }
    if (event.which === key.up){
        console.log("down")
        speedy += -5;
    }
    if (event.which === key.left){
        console.log("right")
        speedx += -5;
    }
    if (event.which === key.right){
        console.log("left")
        speedx += 5;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionGameItem() {
    positionx += speedx;
    positiony += speedy;

};
  function redrawGameItem() {
     $('#gameItem').css("left",positionx);
     $('#gameItem').css("top",positiony);

  };
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
 };
};