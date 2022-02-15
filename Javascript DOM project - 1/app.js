// Project Requirements
// Change The Background Color By Clicking The Following Button

//Step - 1
// Create Onload Handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-button");
  const copyBtn = document.getElementById("copy-btn");
  const output = document.getElementById("output");
  changeBtn.addEventListener("click", function () {
    const bgColor = generatorHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
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
