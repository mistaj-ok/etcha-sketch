/**
 * Filename: myscript.js
 * title: Etcha-Sketchy
 * Discription: User "draw" on a grid of square tiles using their mouse.  
 * Grid size can be specified by the user.
 * 
 * etch a sketch simulation 
 * 
 * “Algorithm” 
 * determine size of grid
 * create squares using divs
 * fill the grid with the squares
 * listen for mouse-over event 
 * change square div properties (ie color from white to black)
 * repeat 4 and 5.


 */
// main container for the grid and squares
const container = document.querySelector('#container');
// sub - containers
const controls = document.createElement('div');
const grid = document.createElement('div');

/* create divs */
controls.classList.add('controls')
grid.classList.add('main-grid');
//squares
const square = document.createElement('div');
square.classList.add('square');
const square2 = document.createElement('div');
square2.classList.add('square');

grid.appendChild(square);
grid.appendChild(square2);

// buttons


const mkGridBtn = document.createElement('button');
mkGridBtn.textContent = "new grid";
const clrGridBtn = document.createElement('button');
clrGridBtn.textContent = "clear grid";

mkGridBtn.addEventListener('click',drawGrid );

controls.appendChild(mkGridBtn);
controls.appendChild(clrGridBtn);




// append the grid and control sub-containers last
container.appendChild(controls);
container.appendChild(grid);


/* function definitions */

function getGridSize() {
    var width = prompt("enter width: ");
    var height = prompt("enter height: ");
    // veryfiy the input string can be parsed as a number data type
    width = Math.floor(width - 0);
    height = Math.floor(height - 0);

    if (typeof width === 'number'&& (width > 0) && (width <=100)) {
        
        console.log(width);
    } else {
        alert("invalid width, please enter an int 1->100 ");
        return;
    }
    if (typeof height === 'number'&& (height > 0) && (height <=100)) {
        
        console.log(height);
    } else {
        alert("invalid height, please enter an int 1->100 ");
        return;
    }

    return {height: height, width: width};
}
function drawGrid() {
    const coords = getGridSize();
    var height = coords.height;
    var width = coords.width;

    console.log(width + " " + height);


}

