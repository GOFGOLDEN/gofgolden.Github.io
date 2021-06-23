// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
applyFilter(redify);
applyFilterNoBackGround(decreaseBlue);
applyFilterNoBackGround(increaseGreenByBlue);



    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1 & 3: Create the applyFilter function here
function applyFilter(filterFunction){
    for (var i = 0; i < image.length; i++){ 
        for (var p = 0; p < image[i].length; p++){
            var rgbString = image[i][p];
            
            var rgbNumbers = rgbStringToArray(rgbString);

            filterFunction(rgbNumbers)
            
            var rgbString = rgbArrayToString(rgbNumbers);
            
            image[i][p] = rgbString;

        };
    }
};

function redify(rgbNumbers){
    rgbNumbers[RED] = 255
}
function decreaseBlue(rgbNumbers){
    rgbNumbers[BLUE] = Math.max(0, rgbNumbers[BLUE] - 30)

}
function increaseGreenByBlue(rgbNumbers){
    rgbNumbers[GREEN] = Math.min(255, rgbNumbers[BLUE] + rgbNumbers[GREEN])
}
// TODO 5: Create the applyFilterNoBackground function
function applyFilterNoBackGround(){
    for (var i = 0; i < image.length; i++){ 
        for (var p = 0; p < image[i].length; p++){
    
            
            if (image[i][p] !== image[0]){
                
                applyFilter(filterFunction)
            }

        }
}
}



// TODO 2 & 4: Create filter functions
function filterFunction(){

    
};

// CHALLENGE code goes below here
