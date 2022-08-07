const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");
input.addEventListener("blur", () => {
    if (+inputLength === input.value.length) {
          input.classList.remove("invalid")
        input.classList.add("valid")
    }
    else if (input.value.length === 0) {
        input.classList.remove("invalid")
          input.classList.remove("valid")
    }
    else {
          input.classList.remove("valid")
        input.classList.add("invalid")
    }
})
   