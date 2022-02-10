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

  button.addEventListener("click", function () {
    const bgColor = generatorRGBColor();
    root.style.backgroundColor = bgColor;
  });
}
//Step - 2
// Random Color Generator Function
function generatorRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

//Step - 3
//
