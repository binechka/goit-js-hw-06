const input = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");
input.addEventListener("input", () => {
    inputText.style.fontSize = input.value + "px";
})