const main = document.querySelector(".flex-container");

function makeGrid(gridSize) {

    let box = document.querySelectorAll(".box");
    box.forEach((box) => box.remove());
    const gridArea = gridSize * gridSize;
    const boxSize = (720 / gridSize).toString() + "px";
    for (let i = 0; i < gridArea; i++) {
        let gridbox = document.createElement("div");
        gridbox.classList.add("box");
        gridbox.textContent = (i+1).toString();
        gridbox.style.height = boxSize;
        gridbox.style.width = boxSize;
        main.appendChild(gridbox);
    };
};

makeGrid(16);



