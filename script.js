const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

function createGrid(gridSize) {
    let container = document.querySelector(".container");
    container.innerHTML = '';
    container.style.setProperty("--grid-size", gridSize);

    let square;

    for (let i = 0; i < (gridSize*gridSize); i++) {
        square = document.createElement('div');
        square.className = "square";
        container.appendChild(square);
    
    }
}

createGrid(16);

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
})



