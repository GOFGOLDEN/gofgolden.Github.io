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
  //this is our position and speed variables. we will use this to communicate to other functions to make movment in the players
 
  var positionX2 = 0;
  var positionY2 = 0;
  var speedX2 = 0;
  var speedY2 = 0;

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  function player($element,positionX,positionY,width,height,) {
    player.id = $element;
    player.X = positionX;
    player.Y = positionY;
    player.width = width;
    player.height = height;
    player.speedY = 0;
    player.speedX = 0;
  }
  var player1 = ($('#gameItem'),0,0,50,50);
  
  // one-time setup
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
      player1.speedY = -5;
    }
    if (event.which ===KEY.S) {
      console.log("S")
      player1.speedY = 5;
    }
    /// this handleKeyUp function stops the position of x or y when we let go of our wasd keys
}function handleKeyUp(event) {
  if (event.which ===KEY.W) {
    console.log("W")
    player1.speedY = 0;
  }
  if (event.which ===KEY.S) {
    console.log("S")
    player1.speedY = 0;
  }
}//This handleKeyDown function uses our KEY object 
  //to corispond position x and y using our wasd keys
  function handleKeyDown2(event) {
    if (event.which ===KEY.UP) {
      console.log("UP")
      speedY2 = -5;
    }
    if (event.which ===KEY.DOWN) {
      console.log("DOWN")
      speedY2 = 5;
    }
    /// this handleKeyUp function stops the position of x or y when we let go of our wasd keys
  }
  function handleKeyUp2(event) {
    if (event.which ===KEY.UP) {
      console.log("UP")
      speedY2 = 0;
    }
    if (event.which ===KEY.DOWN) {
      console.log("DOWN")
      speedY2 = 0;
    }
}

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
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem(){
    player.Y += player.speedY
  }
  function repositionGameItem2(){
    positionX2 += speedX2
    positionY2 += speedY2
  }
  //Sidney: this tells the css to redraw the box based off of the position.
  function redrawGameItem(){
    $(player.id).css("left",player.X);
    $(player.id).css("top",player.Y);
  }
  function redrawGameItem2() {
    $("#gameItem2").css("left",positionX2);
    $("#gameItem2").css("top",positionY2);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
