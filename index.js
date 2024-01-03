function generatePalette() {
  const palette = document.getElementById("palette");
  palette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const colour = generateRandomColor();
    const colorBox = document.createElement("div");
    colorBox.classList.add("colour");
    colorBox.style.backgroundColor = colour;
    palette.appendChild(colorBox);
  }
}

function generateRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

window.addEventListener("keydown", ({ key }) => {
  if (key === " ") {
    generatePalette();
  }
});

generatePalette();
