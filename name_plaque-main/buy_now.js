// defined variables

const buySubmit = document.querySelector(".buy-submit");
// const userInput = document.querySelector(".field-input");
// const userLeterPreview = document.querySelector(".plaque-prev");
const form = document.querySelector(".form");
console.log(form);
let message = document.createElement("p");
form.appendChild(message);

// function buyNow
const buyNow = () => {
  if (userInput.value === "") {
    message.textContent = "Enter a set of letters.";
    message.style.backgroundColor = "red";
    message.style.marginLeft = "10px";
    alert("Enter a set of letters.");
  } else if (userInput.value.toUpperCase() === "YOUR NAME") {
    message.textContent = "Enter a new text.";
    message.style.backgroundColor = "red";
    message.style.marginLeft = "10px";
  } else if (userInput.value.length <= 15) {
    message.textContent = "Transaction successful, thank you!";
    message.style.backgroundColor = "green";
    message.style.marginLeft = "10px";
  } else if (userInput.value.length > 15) {
    message.textContent =
      "We have 15 letters left in stock, and you have exceeded the limit.";
    message.style.backgroundColor = "red";
    message.style.marginLeft = "10px";
  }
};

// adding eventListener to the buy button
buySubmit.onclick = buyNow;
