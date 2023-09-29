let isPopupVisible = false;
let isErrorVisible = false;

function togglePopup() {
  let popupElements = document.querySelectorAll(".popupBox");
  let formElements = document.querySelectorAll(".loginForms");
  let redCircle = document.getElementById("redCircle");

  isPopupVisible = !isPopupVisible; // Toggle the state

  // Handling the red circle's visibility

  redCircle.style.visibility = "visible";

  // Handling visibility of other popup elements
  for (let i = 0; i < popupElements.length; i++) {
    popupElements[i].style.visibility = isPopupVisible ? "visible" : "hidden";
  }
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].style.visibility = "hidden";
  }
}

function getNotifications() {
  let redCircle = document.getElementById("redCircle");
  let errorBox = document.querySelectorAll(".errorBox");
  let formElements = document.querySelectorAll(".loginForms");
  document.querySelector("#user input").value = "";
  document.querySelector("#pass input").value = "";

  if (redCircle.style.visibility != "hidden") {
    redCircle.style.visibility = "hidden";
    for (let i = 0; i < errorBox.length; i++) {
      errorBox[i].style.visibility = "visible";
    }
    for (let i = 0; i < formElements.length; i++) {
      formElements[i].style.visibility = "visible";
    }
  }
}

function closeError() {
  let errorBox = document.querySelectorAll(".errorBox");

  for (let i = 0; i < errorBox.length; i++) {
    errorBox[i].style.visibility = "hidden";
  }
}

function removeText() {
  document.querySelector("#user input").value = "";
  document.querySelector("#pass input").value = "";
}

function validateUsername(username) {
  if (username.length < 10 || username.length > 12) {
    return false;
  }

  if (!/^[a-h]/.test(username)) {
    return false;
  }

  // Check last two digits.
  let lastTwoDigits = username.slice(-2);
  if (
    !/^[0-9]{2}$/.test(lastTwoDigits) ||
    !(
      parseInt(lastTwoDigits[0]) % 2 === 0 &&
      parseInt(lastTwoDigits[1]) % 2 !== 0
    )
  ) {
    return false;
  }

  // No vowels after 3rd character.
  if (/[aeiouAEIOU]/.test(username.substring(3))) {
    return false;
  }

  // At least two special characters.
  let specialChars = username.match(/[^\w\s]/g) || [];
  if (specialChars.length < 2) {
    return false;
  }

  // At least one uppercase letter.
  let uppercaseLetters = username.match(/[A-Z]/g) || [];
  if (uppercaseLetters.length < 1) {
    return false;
  }

  // At least two digits.
  let digits = username.match(/\d/g) || [];
  if (digits.length < 2) {
    return false;
  }

  return true;
}

function validatePassword(password, usernameSpecialChars) {
  if (password.length !== 16) {
    return false;
  }

  if (usernameSpecialChars.includes(password[0])) {
    return false;
  }

  // 4th and 12th characters are uppercase letters.
  if (!/[A-Z]/.test(password[3])) {
    return false;
  }
  if (!/[A-Z]/.test(password[11])) {
    return false;
  }

  // At least 1 uppercase letter, 1 lowercase letter, 1 number, and 2 special characters.
  let uppercaseLetters = password.match(/[A-Z]/g) || [];
  let lowercaseLetters = password.match(/[a-z]/g) || [];
  let digits = password.match(/\d/g) || [];
  let specialChars = password.match(/[^\w\s]/g) || [];

  if (
    uppercaseLetters.length < 1 ||
    lowercaseLetters.length < 1 ||
    digits.length < 1 ||
    specialChars.length < 2
  ) {
    return false;
  }

  return true;
}

function validateInputs(userInp, passInp) {
  const usernameIsValid = validateUsername(userInp);
  const usernameSpecialChars = userInp.match(/[^\w\s]|_/g) || [];
  const passwordIsValid = validatePassword(passInp, usernameSpecialChars);

  if (usernameIsValid && passwordIsValid) {
    return true;
  } else {
    if (!usernameIsValid) {
      return false;
    }
    if (!passwordIsValid) {
      return false;
    }
  }
}

function submitForm() {
  const username = document.getElementById("user_inp").value;
  const password = document.getElementById("pass_inp").value;

  let result = validateInputs(username, password);

  if (result) {
    console.log("poggers");
  } else {
    togglePopup();
  }
}
