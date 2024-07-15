const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

function isValidPhoneNumber(phoneNumber) {
  return phoneRegex.test(phoneNumber);
}

checkBtn.addEventListener("click", () => {
  if (userInput.value.trim() === "") {
    alert("Please provide a phone number");
  } else {
    if (isValidPhoneNumber(userInput.value)) {
      results.textContent = `Valid US number: ${userInput.value}`;
    } else {
      results.textContent = `Invalid US number: ${userInput.value}`;
    }
  }
});

clearBtn.addEventListener("click", () => {
  results.textContent = "";
  userInput.value = ""; 
});