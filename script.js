"use strict";
const inputField = document.querySelector(".inputField");
const button = document.querySelector(".submitBtn");
let vowels = 0;

// learn how javascript allocates memory or executes arrow/no name functions
button.addEventListener("click", function () {
  const input = inputField.value.toUpperCase();
  if (input === "") {
    alert("Please Enter your text into the Input Field");
    return 1;
  }
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] === "A" ||
      input[i] === "E" ||
      input[i] === "I" ||
      input[i] === "O" ||
      input[i] === "U"
    ) {
      vowels++;
    }
  }
  alert(`Your text has ${vowels} Vowels in it!`);
  inputField.value = "";
  vowels = 0;
});

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.querySelector(".submitBtn").click();
  }
});
