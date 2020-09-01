// **************************************************************************
// **************************************************************************
// *** This program is a pixel art maker designed to create pixelated art ***
// *** on a grid where the size and color are determined by the user.     ***
// *** The table, size picker and submit variables are set to gain access ***
// *** to their respective HTML elements in the index. The size picker    ***
// *** receives the user based height and width input while using         ***
// *** a preventDefault function to keep the page from refreshing upon    ***
// *** the user pressing submit with the data. This activates the         ***
// *** createGrid function which creates the grid using a nested loop     ***
// *** where the rows are are created first and the columns that create   ***
// *** those rows follow. Lastly, an event listener is added with the     ***
// *** target event being to change the cell on the table when the cell   ***
// *** is clicked based on the user selected color.                       ***
// **************************************************************************
// ***          code inspired by various Knowledge forum posts            ***
// **************************************************************************

// Set variables
const table = document.getElementById("pixelCanvas"); // linking table element to pixelCanvas
const size = document.getElementById('sizePicker'); // linking size variable to sizePicker element id to call the size picker

// Code to access submit form when user inputs specified data
size.addEventListener("submit", function() {
    event.preventDefault(); // prevents page from refreshing when submit is pressed, so the grid can appear based on user input
    let height = document.getElementById('inputHeight').value; // receive height input; link height variable to height HTML element
    let width = document.getElementById('inputWidth').value; // receive width input; link width variable to width HTML element
    const submit = document.getElementById("submit"); // linking submit to submit input field 
    createGrid(height, width) // createGrid input fields
})

// Create user specified number of rows and columns for the table
function createGrid(height, width) { // input parameters
    table.innerHTML = ""; // resets the grid after user presses submit with new input

    // starts cells that create columns
    for (let b=0; b < height; b++) {
        const column = table.insertRow(b);

            // adds horizontal cells to the columns
            for (let a=0; a < width; a++) {
                const row = column.insertCell(a); 

                // Add the click listener and set the event (click) to take place 
                // when the mouse is clicked
                column.addEventListener('click', function(event) {
                    // cell receives the color
                    let color = document.getElementById('colorPicker');
                    // paint the cell
                    event.target.style.backgroundColor = color.value;
                });
            }
    }
}

// ***************************** End of module ******************************
