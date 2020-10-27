/* global $ */

// this is a program that I made useing javascript it is a  refractoring of a bouncing box project I mad ein the past
        'use strict'
 $(document).ready(function() {

  /////////////////////////////////////////////////
  /////////////////// SETUP ///////////////////////
  /////////////////////////////////////////////////
  
// Every 50 milliseconds, call the update Function (see below)
			setInterval(update, 50);

			// Every time the box is clicked, call the handleBoxClick Function (see below)
			  $('#box').on('click', handleBoxClick);

        /* variables and other one-time set up code for the program */

        /////////////////////////////////////////////////
        //////////////// CORE LOGIC /////////////////////
        /////////////////////////////////////////////////
        var BOARD_WIDTH = $('#board').width();
      

			var positionX = 0;
			var speedX = 10;
			var point = 0;    
        
              function updatePosition(){
                positionX += speedX;
				$('#box').css("left", positionX);

            }
            function positionBW(){
                if (positionX > BOARD_WIDTH) {
					speedX = -speedX;
				}
				else if (positionX < 0) {
					speedX = -speedX;
				}
            }
            function update() {
            positionBW();
            updatePosition();
            
            }
			/* 
			This Function will be called each time the box is clicked. Each time it is called,
			it should increase the points total, increase the speed, and move the box to
			the left side of the screen.
			*/
			function handleBoxClick() {
            positionBW();
            resetPosition();
            updatePoints();
			}
            /* main logic of the program: the update / handleBoxClick functions */

            /////////////////////////////////////////////////
            ////////////// HELPER FUNCTIONS /////////////////
            /////////////////////////////////////////////////
            /* 	This Function will be called each time the box is clicked. Each time it is called,	it should increase the points total, increase the speed, and move the box to
            the left side of the screen.	*/
            function updatePoints(){
                points += 1;
                $('#box').text(points);
            }
            function updateSpeed(){
                if (speedX >= 0) {
                speedX += 3;
                } 
                    else if (speedX < 0) {
                }
            }
            function resetPosition(){
                positionX = 0;
            }
          
            /* functions for executing sub-tasks of the core logic */

});