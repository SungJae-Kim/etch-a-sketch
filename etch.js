const main = document.querySelector(".flex-container");
const gridSize = 16;
const gridArea = gridSize * gridSize;
const boxSize = (700 / gridSize).toString() + "px";

for (let i = 0; i < gridArea; i++) {
    let gridbox = document.createElement("div");
    gridbox.classList.add("box");
    gridbox.textContent = i.toString();
    main.appendChild(gridbox);
}

let box = document.querySelectorAll(".box");

for (let i = 0; i < box.length; i++) {
    box[i].style.color = "red";
    box[i].style.height = boxSize;
    box[i].style.width = boxSize;
}