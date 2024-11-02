main = document.querySelector(".flex-container");

for (let i = 0; i < 16; i++) {
    row = document.createElement("div");
    for (let j = 0; j < 16; j++) {
        col = document.createElement("div");
        col.classList.add("box");
        col.textContent = "test";
        row.appendChild(col);
    }
    main.appendChild(row);
}

 