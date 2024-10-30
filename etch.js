

main = document.querySelector(".flex-container");

for (let i = 0; i < 16; i++) {
    let containerNum = "";
    if (i == 0 || (i + 1) % 4 == 0) {
        container = document.createElement("div");
        container.setAttribute("id", "box" + i);
        main.appendChild(container);
    }
    const box = document.createElement("div");
    box.textContent = i + 1;
    box.classList.add("box");
    container.appendChild(box);
}

