
const span = document.querySelector(".color");
const button = document.querySelector(".change-color");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", callback);  
function callback() {
  span.textContent = getRandomHexColor();
  document.body.style.backgroundColor = span.textContent;
}
