const changeSize = document.querySelector(".changeSize");
const container = document.querySelector(".container");
const reset = document.querySelector(".resetGrid");

function getRandomRBG() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;
}

function createGrid(gridSize) {
    container.innerHTML = '';
    container.style.setProperty("--grid-size", gridSize);

    for (let i = 0; i < (gridSize*gridSize); i++) {
        let square = document.createElement('div');
        square.className = "square";

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomRBG();
        });

        container.appendChild(square);
    }
}

window.addEventListener("load", () => {
    createGrid(16);

    changeSize.addEventListener("click", () => {
        let newSize = parseInt(prompt("Enter a number to change the size of the grid.", "Number has to be between 2 - 100."));

        if (!Number.isInteger(newSize) || (newSize < 2 || newSize > 100)) {
            alert("ERROR! The input has to be a number between 2 and 100, please try again.");
        } else {
            createGrid(newSize);
        }
    });

    reset.addEventListener("click", () => {
        createGrid(16);
    })
});
