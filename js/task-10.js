function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const input = document.querySelector("input[type='number']")
const boxes = document.querySelector("#boxes")


createBtn.addEventListener("click", () => {
  
})

function createBoxes(amount) {

  for (let i = 0; i < amount.length; i++) {
    document.createElement("div[i]");
    console.log(div);
  }
  
  

}