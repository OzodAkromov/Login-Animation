const username = document.querySelector(".username");
const passWord = document.querySelector(".password");
const passwordBtn = document.querySelector(".password-button");
const submit = document.querySelector(".login-button");
const face = document.querySelector(".face");
const tongue = document.querySelector(".tongue");
const hands = document.querySelectorAll(".hand");

// Name

username.addEventListener("input", faceRotation);
username.addEventListener("focus", faceRotation);
username.addEventListener(
  "blur",
  () => (face.style.transform = `rotate(0deg)`)
);

function faceRotation() {
  let length = username.value.length;

  if (length < 40) {
    face.style.transform = `rotate(${20 - length}deg)`;
  }
}

// Password
passWord.addEventListener("focus", () => {
  tongue.classList.remove("breath");
  hands.forEach((hand) => hand.classList.add("hide"));
});

passWord.addEventListener("blur", () => {
  tongue.classList.add("breath");
  hands.forEach((hand) => hand.classList.remove("hide"));
});

// Password Btn
passwordBtn.addEventListener("mousedown", () => {
  hands.forEach((hand) => hand.classList.add("peek"));
  passWord.type = "text";
  tongue.classList.remove("breath");
});

passwordBtn.addEventListener("mouseup", () => {
  hands.forEach((hand) => hand.classList.remove("peek"));
  passWord.type = "password";
  tongue.classList.add("breath");
});

// Submit
submit.addEventListener("click", () => {
  let usernameValue = username.value;
  let passwordValue = passWord.value;

  if (usernameValue === "" || passwordValue === "") {
    console.log("Inputs are empty");
  } else {
    console.log("🔒 username: " + usernameValue);
    console.log("🔑 password: " + passwordValue);
    passWord.value = null;
    username.value = null;
  }
});
