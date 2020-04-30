const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-check');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // function checks inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (username === '') { // shows error message
    setErrorFor(username, "Please enter username")

  } else {
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, "Please enter email")
  } else if (ValidateEmail) {
    setErrorFor(email, 'Please enter a correct email');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, "Please enter password")
  } else {
    setSuccessFor(password);
  }

  if (password2Value === '') {
    setErrorFor(password2, "Please enter password as above")
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2Value, "Please enter same password as above")
  } else {
    setSuccessFor(password2);
  }


}


function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form control
  const small = formControl.querySelector('small');

  small.innerText = message;
  //error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function ValidateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);


}