const main = document.querySelector(".flex-container");
let gridSize = 16;
gridSize = 4;
const gridArea = gridSize * gridSize;
const boxSize = (720 / gridSize).toString() + "px";

function makegrid() {
    for (let i = 0; i < gridArea; i++) {
        let gridbox = document.createElement("div");
        gridbox.classList.add("box");
        gridbox.textContent = (i+1).toString();
        main.appendChild(gridbox);
    };
};

makegrid();

let box = document.querySelectorAll(".box");

for (let i = 0; i < box.length; i++) {
    let rgbValue = Math.round(i / box.length * 256).toString();
    let rgb = "rgb(" + rgbValue + ", " + rgbValue + ", " + rgbValue + ")";
    box[i].style.backgroundColor = rgb;
    box[i].style.height = boxSize;
    box[i].style.width = boxSize;
}