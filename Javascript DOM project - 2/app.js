// Project Requirements
// Change The Background Color By Clicking The Following Button

//Step - 1
// Create Onload Handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const button = document.getElementById("button");
  const output = document.getElementById("output");

  button.addEventListener("click", function () {
    const bgColor = generatorHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
}
//Step - 2
// Generate Hexadecimal Color Function
function generatorHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

//Step - 3
//
