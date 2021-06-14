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


  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  //this is where the paddles are made
  
  
  var paddle2 = factoryPlayer (('#gameItem2'));
  var paddle1 = factoryPlayer (('#gameItem'));
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
      player.speedY = -6;
    }
    if (event.which ===KEY.S) {
      console.log("S")
      player.speedY = 6;
    }
    /// this handleKeyUp function stops the position of x or y when we let go of our wasd keys
}function handleKeyUp(event) {
  if (event.which ===KEY.W) {
    console.log("W")
    player.speedY = 0;
  }
  if (event.which ===KEY.S) {
    console.log("S")
    player.speedY = 0;
  }
}//This handleKeyDown function uses our KEY object 
  //to corispond position x and y using our wasd keys
  function handleKeyDown2(event) {
    if (event.which ===KEY.UP) {
      console.log("UP")
      player.speedY = -6;
    }
    if (event.which ===KEY.DOWN) {
      console.log("DOWN")
      player.speedY = 6;
    }
    /// this handleKeyUp function stops the position of x or y when we let go of our wasd keys
  }
  function handleKeyUp2(event) {
    if (event.which ===KEY.UP) {
      console.log("UP")
      player.speedY = 0;
    }
    if (event.which ===KEY.DOWN) {
      console.log("DOWN")
      player.speedY = 0;
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
  function factoryPlayer (id) {
    var player = {};
    player.id = id;
    player.X= parseFloat($(id).css('left'));
    player.Y= parseFloat($(id).css('top'));
    player.width =($(id).width);
    player.height = ($(id).height);
    player.speedX = 0;
    player.speedY = 0;
    return players;
  }
  function repositionGameItem(){
    player.Y += player.speedY
  }
  function repositionGameItem2(){
    player.Y += player.speedY
  }
  //Sidney: this tells the css to redraw the box based off of the position.
  function redrawGameItem(){
    $(player.id).css("left",player.X);
    $(player.id).css("top",player.Y);
  }
  function redrawGameItem2() {
    $(player.id).css("left",player.X);
    $(player.id).css("top",player.Y);
  }
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
