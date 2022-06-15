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
 * create flex columns 
 * fill the columns with squares
 * listen for mouse-over event 
 * change square div properties (ie color from white to black)
 * repeat 4 and 5.


 */
// main container for the grid and squares
const container = document.querySelector('#container');
// sub - containers
const controls = document.createElement('div');
const grid = document.createElement('div');
controls.classList.add('controls')
grid.classList.add('main-grid');

/* create divs */

// buttons
const mkGridBtn = document.createElement('button');
const clrGridBtn = document.createElement('button');
mkGridBtn.textContent = "new grid";
clrGridBtn.textContent = "clear grid";
// events
mkGridBtn.addEventListener('click',drawGrid );
clrGridBtn.addEventListener('click', clearGrid);
controls.appendChild(mkGridBtn);
controls.appendChild(clrGridBtn);




// append the grid and control sub-containers last
container.appendChild(controls);
container.appendChild(grid);


/* function definitions */

function getGridSize() {
    var width = prompt("enter width: ");
    // veryfiy the input string can be parsed as a number data type
    width = Math.floor(width - 0);

    if (typeof width === 'number'&& (width > 0) && (width <=100)) {
        
        console.log(width);
    } else {
        alert("invalid width, please enter an int 1->100 ");
        return;
    }
    return width;
}


function drawGrid() {
    const boxLength = getGridSize();

    for (var i=0;i<boxLength;i++) {
        var column = document.createElement('div');
        column.classList.add('col-grid');
        grid.appendChild(column);
        for (var j=0; j<boxLength; j++) {
            var square = document.createElement('div');
            square.classList.add('square');
            
            square.addEventListener('mouseover', function(e) {

                e.target.setAttribute('style','background-color: hotpink;');
            });
            column.appendChild(square);
            
        }
    }

}

function clearGrid() {  
    // select all of the columns
    const cols = document.querySelectorAll('.col-grid');
    cols.forEach((column) => {
        grid.removeChild(column);
    });
}


