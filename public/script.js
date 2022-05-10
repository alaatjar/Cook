
// home
let form = document.querySelector("#form-timer");
let title = document.createElement("h3");
setTimeout(() => {
  form.prepend(title);
  title.setAttribute("Id", "welcome");
  title.innerText = "WELCOME ♥";
}, 5000);



// Donation - buy

const DonationBuy = document.querySelectorAll(".Donation-buy");///
const buyCard = document.querySelector(".container-card");///

DonationBuy.forEach((allBuy) => {
  allBuy.addEventListener("click", (eo) => {
    eo.preventDefault();

    buyCard.style.display = "block";
  });
});




//change Color
const chColor = document.getElementById("color");
const bodyOne = document.getElementById("body-page");

chColor.addEventListener("click", (e) => {
  bodyOne.classList.toggle("chColor");
});

//changeSize
const size = document.getElementById("big-size");
const zoom = document.getElementById("body-page");

size.addEventListener("click", (eo) => {
  zoom.classList.toggle("font");
});



//clock
function renderTime(){
  let currentTime = new Date();
  let diem = "AM";
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();
    
  if(h == 0){
    h = 12;
  }else if(h > 12){
    h = h - 12;
    diem = "PM"
  }
  if(h < 10){
    h = "0" + h;
  }
  if(m < 10){
    m = "0" + m;
  }
  if(s < 10){
    s = "0" + s;
  }
  let myClock = document.getElementById('clockDisplay');
  myClock.textContent = h + ":" + m + ":" + s + " " + diem;
  setTimeout('renderTime()', 1000); 
}
renderTime();



// Contact us

let contactForm = document.querySelector(".contact-us");

let nameCon = document.getElementById("name-con");
let emailCon = document.getElementById("email-con");
let subjectCon = document.getElementById("subject-con");
let messageCon = document.getElementById("message-con");

contactForm.addEventListener("submit", (eo) => {
  eo.preventDefault();

  let formData = {
    name: nameCon.value,
    email: emailCon.value,
    subject: subjectCon.value,
    message: messageCon.value,
  };

  // Set up our HTTP request
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");

  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email sent");
      nameCon.value = "";
      emailCon.value = "";
      subjectCon.value = "";
      messageCon.value = "";
    } else {
      alert("Something went wrong!");
    }
  };
  xhr.send(JSON.stringify(formData));
});




//Calculator

function insert(num) {
  const myString = document.form.textView.value;
  const lastChar = myString[myString.length - 1];
  if (myString.length < 30) {
    if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
      document.form.textView.value = myString + num;
    } else if (num != lastChar) {
      document.form.textView.value = myString.replace(lastChar, num);
    }
  }
}
function equal() {
  const sum = document.form.textView.value;
  if (sum) {
    document.form.textView.value = eval(sum);
  }
}
function clean() {
  document.form.textView.value = "";
}
function back() {
  const exp = document.form.textView.value;
  document.form.textView.value = exp.substring(0, exp.length - 1);
}














// register

function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message--success",
    "form__message--error"
  );
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Perform your AJAX/Fetch login

    setFormMessage(loginForm, "error", "Invalid username/password combination");
  });

  document.querySelectorAll(".form__input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupUsername" &&
        e.target.value.length > 0 &&
        e.target.value.length < 10
      ) {
        setInputError(
          inputElement,
          "Username must be at least 10 characters in length"
        );
      }
    });

    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
});