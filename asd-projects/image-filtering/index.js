// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
applyFilter(redify);




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

            rgbNumbers[RED] = 255;
            
            filterFunction(rgbNumbers)
            
            image[i][p] = rgbString;

        };
    }
};

function redify(){
    rgbNumbers[RED] = 255
}

// TODO 5: Create the applyFilterNoBackground function


// TODO 2 & 4: Create filter functions
function filterFunction(){
    
}

// CHALLENGE code goes below here
