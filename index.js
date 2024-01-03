function generatePalette() {
  const palette = document.getElementById("palette");
  palette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const colour = generateRandomColor();

    // create colorbox
    const colorBox = document.createElement("div");
    colorBox.classList.add("colour");
    colorBox.style.backgroundColor = colour;

    // create colour text
    const colourText = document.createElement("div");
    colourText.innerHTML = colour;

    // Create a color input element
    const colorInput = document.createElement("input");
    colorInput.classList.add("colour-input");
    colorInput.type = "color";
    colorInput.value = colour;

    colorInput.addEventListener("input", function () {
      colorBox.style.backgroundColor = this.value;
      colourText.innerHTML = this.value;
    });

    // Append the color input to the color box
    colorBox.appendChild(colorInput);
    colorBox.appendChild(colourText);

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
