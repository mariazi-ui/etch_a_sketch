const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

function createGrid(gridSize) {
    let container = document.querySelector(".container");
    container.style.setProperty("--grid-size",gridSize)

    let square;

    for (let i = 0; i < (gridSize*gridSize); i++) {
        square = document.createElement('div');
        container.appendChild(square).className = "square";
    }

}

createGrid(16);