let isPopupVisible = false;
let isErrorVisible = false;

function togglePopup() {
  let popupElements = document.querySelectorAll(".popupBox");
  let redCircle = document.getElementById("redCircle");

  isPopupVisible = !isPopupVisible; // Toggle the state

  // Handling the red circle's visibility
  if (!isPopupVisible) {
    redCircle.style.visibility = "visible";
  } else {
    redCircle.style.visibility = "visible";
  }

  // Handling visibility of other popup elements
  for (let i = 0; i < popupElements.length; i++) {
    popupElements[i].style.visibility = isPopupVisible ? "visible" : "hidden";
  }
}

function getNotifications() {
  let redCircle = document.getElementById("redCircle");
  let errorBox = document.querySelectorAll(".errorBox");

  if (redCircle.style.visibility == "hidden") {
    console.log("ur gay");
  } else {
    redCircle.style.visibility = "hidden";
    for (let i = 0; i < errorBox.length; i++) {
      errorBox[i].style.visibility = "visible";
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
