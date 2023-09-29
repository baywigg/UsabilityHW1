function generateCaptcha() {
  const length = 9;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

document.addEventListener("DOMContentLoaded", function () {
  const captchaDiv = document.querySelector(".captcha-image");
  const captchaCode = generateCaptcha();
  captchaDiv.textContent = captchaCode;

  // Store the CAPTCHA code in a hidden field or in sessionStorage for later use.
  sessionStorage.setItem("captchaCode", captchaCode);
});
// Make sure user cannot just go back and grab the captcha
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    reloadPage();
  }
});

let noCopyPasteField = document.getElementById("captcha");

noCopyPasteField.addEventListener("copy", preventAction);
noCopyPasteField.addEventListener("cut", preventAction);
noCopyPasteField.addEventListener("paste", preventAction);
noCopyPasteField.addEventListener("contextmenu", preventAction);

function preventAction(e) {
  e.preventDefault();
  alert("This action is not allowed!");
}

function submitCaptcha() {
  const captcha = sessionStorage.getItem("captchaCode");
  const inputtedCaptcha = document.getElementById("captcha").value;
  let result = verifyCaptcha(captcha, inputtedCaptcha);

  if (result) {
    toggleSuccess();
  }
}

function verifyCaptcha(captcha, inputtedCaptcha) {
  if (captcha == inputtedCaptcha) {
    return true;
  }
  return false;
}

function toggleSuccess(reload = false) {
  let successbox = document.getElementById("successBox");

  if (successbox.style.visibility == "visible") {
    successbox.style.visibility = "hidden";
  } else {
    successbox.style.visibility = "visible";
  }
  if (reload) {
    reloadPage();
  }
}

function reloadPage() {
  location.reload();
}
