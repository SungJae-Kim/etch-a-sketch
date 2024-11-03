const main = document.querySelector(".flex-container");

const header = document.querySelector("#button-container");
const sizeInput = document.createElement("input");
sizeInput.setAttribute("onchange", "makeGrid(this.value)");
const sizeButton = document.createElement("button");
sizeButton.textContent = "size button js"
header.appendChild(sizeInput);
header.appendChild(sizeButton);


function makeGrid(gridSize) {
    if (gridSize >= 1 && gridSize <= 100) {
        let box = document.querySelectorAll(".box");
        box.forEach((box) => box.remove());
        const gridArea = gridSize * gridSize;
        const boxSize = (800 / gridSize).toString() + "px";
        for (let i = 0; i < gridArea; i++) {
            let newbox = document.createElement("div");
            newbox.classList.add("box");
            //newbox.textContent = (i+1).toString();
            newbox.style.height = boxSize;
            newbox.style.width = boxSize;
            newbox.addEventListener("mouseover", (event) => {newbox.style.backgroundColor = "green";})
            main.appendChild(newbox);
        }
    }
}

makeGrid(16);



