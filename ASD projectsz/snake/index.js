/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAMES_PER_SECOND_INTERVAL = 100;

    var gameOver = {
        
    }

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

// apple object
var applex = 0
var appley = 0
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
    var BOARD_WIDTH = $('#board').width();
    var BOARD_HEIGHT = $('#board').height();

  
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
   var goingUp = speedy === -20;
   var goingDown = speedy === 20;
   var goingRight = speedx === 20;  
   var goingLeft = speedx === -20;
 
     if (event.which === key.left && !goingRight)
     {    
          speedx = -20;
          speedy = 0;  
     }
 
     if (event.which === key.up && !goingDown)
     {    
          speedx = 0;
          speedy = -20;
     }
 
     if (event.which === key.right && !goingLeft)
     {    
          speedx = 20;
          speedy = 0;
     }
 
     if (event.which === key.down && !goingUp)
     {    
          speedx = 0;
          speedy = 20;
     }
    
};
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
 
  function doCollide() {
     if (positionx >= BOARD_WIDTH()) {
         endGame();
     }
     else if (positiony >= BOARD_HEIGHT()) {
         endGame();
     };
 };
  
  
  function repositiongameItem() {
    positionx += speedx;
    positiony += speedy;

};

   function doCollide(gameItem, apple) {
    // TODO: calculate and store the remaining
    // sides of the gameItem
    gameItem.leftX = gameItem.x;
    gameItem.topY = gameItem.y;
    gameItem.rightX = gameItem.width;
    gameItem.bottomY = gameItem.height;

    // TODO: Do the same for apple
    apple.leftX = apple.x;
    apple.topY = apple.y;
    apple.rightX = apple.width;
    apple.bottomY = apple.height;
    // TODO: Return true if they are overlapping, false otherwise
    if (gameItem.x <apple.x + apple.width && gameItem.x + gameItem.width > apple.x && gameItem.y < apple.y + apple.height && gameItem.y + gameItem.height > apple.y){
      console.log('true')
    }
}
function redrawgameItem() {
     $('#gameItem').css("left",positionx);
     $('#gameItem').css("top",positiony);  
  };

  function redrawapple(){
      $('#apple').css("left",applex);
      $('#apple').css("top",appley);
  };
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
}};