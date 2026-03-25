const changeSize = document.querySelector('button');
const container = document.querySelector(".container");

function createGrid(gridSize) {
    container.innerHTML = '';
    container.style.setProperty("--grid-size", gridSize);

    for (let i = 0; i < (gridSize*gridSize); i++) {
        let square = document.createElement('div');
        square.className = "square";

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);

    }
}

createGrid(16);

changeSize.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter a number to change the size of the grid.", 16));

    if (!Number.isInteger(newSize) || newSize < 2) {
        alert("The input has to be a number between 2 and 100, please try again.");
    } else if (newSize >= 100) {
        alert("Grid size is too high! Enter a number between 2 and 100.");
    } else {
        createGrid(newSize);
    }
});

