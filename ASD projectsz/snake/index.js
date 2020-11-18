/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAMES_PER_SECOND_INTERVAL = 1000 / 60;
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
    

  
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
 /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
     function newFrame() {
    repositiongameItem();
    redrawgameItem();
  };
  
  /* 
  Called in response to events.
  */
  
   //reposition gameItem useing WASD inputs
function handleKeyDown(event) {  
 
   var keyPressed = event.which;
   var goingUp = speedy === -10;
   var goingDown = speedy === 10;
   var goingRight = speedx === 10;  
   var goingLeft = speedx === -10;
 
     if (event.which === key.left && !goingRight)
     {    
          speedx = -5;
          speedy = 0;  
     }
 
     if (event.which === key.up && !goingDown)
     {    
          speedx = 0;
          speedy = -5;
     }
 
     if (event.which === key.right && !goingLeft)
     {    
          speedx = 5;
          speedy = 0;
     }
 
     if (event.which === key.down && !goingUp)
     {    
          speedx = 0;
          speedy = 5;
     }
    
};
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositiongameItem() {
    positionx += speedx;
    positiony += speedy;

};
  function redrawgameItem() {
     $('#gameItem').css("left",positionx);
     $('#gameItem').css("top",positiony);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
}};