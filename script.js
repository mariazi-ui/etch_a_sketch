const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

function createGrid(gridSize) {
    let container = document.querySelector(".container");

    let rows = gridSize;
    let cols = gridSize;
    let square;

    for (let i = 0; i < (rows * cols); i++) {
        square = document.createElement('div');
        container.appendChild(square).className = "square";
    }

}

createGrid();