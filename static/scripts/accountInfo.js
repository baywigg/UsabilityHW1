const savedCaptcha = sessionStorage.getItem("captchaCode");
let hasCalculatedAge = false;

function verifyCaptchaAgain(captchaInp) {
  if (captchaInp == savedCaptcha) {
    return true;
  }
  return false;
}

function calculateBirthDateAndAge() {
  const websiteCreationDate = new Date("2023-09-28");
  const daysSinceBirth = parseInt(
    document.getElementById("daysInput").value,
    10
  );
  const birthDate = new Date(
    websiteCreationDate - daysSinceBirth * 24 * 60 * 60 * 1000
  );
  const age = websiteCreationDate.getFullYear() - birthDate.getFullYear();

  if (!daysSinceBirth) {
    togglePopup();
    return;
  }

  document.getElementById("result").innerHTML =
    "Your birthdate is approximately " +
    (birthDate.getMonth() + 1) +
    "/" +
    birthDate.getDate() +
    "/" +
    birthDate.getFullYear() +
    " and you are roughly " +
    age +
    " years old!";
  hasCalculatedAge = true;
}

function submitForm() {
  let captchaInp = document.getElementById("confirmCaptcha").value;
  let capResult = verifyCaptchaAgain(captchaInp);
  let formResult = validateForm();

  if (capResult && formResult) {
    toggleSuccess();
  } else {
    openError();
  }
}

function closeError() {
  let errorBox = document.querySelectorAll(".errorBox");

  for (let i = 0; i < errorBox.length; i++) {
    errorBox[i].style.visibility = "hidden";
  }
}

function openError() {
  let errorBox = document.querySelectorAll(".errorBox");
  let formElements = document.querySelectorAll(".loginForms");

  for (let i = 0; i < errorBox.length; i++) {
    errorBox[i].style.visibility = "visible";
  }
}

function validateForm() {
  var fields = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "address",
    "city",
    "state",
    "zipcode",
    "country",
    "daysInput",
  ];
  var isValid = true;

  for (var i = 0; i < fields.length; i++) {
    var input = document.getElementById(fields[i]).value.trim();
    if (input === "") {
      isValid = false;
      break;
    }
  }

  if (!isValid) {
    return false;
  }

  return isValid;
}

function toggleSuccess() {
  let successbox = document.getElementById("successBox");

  if (successbox.style.visibility == "visible") {
    successbox.style.visibility = "hidden";
  } else {
    successbox.style.visibility = "visible";
  }
}
