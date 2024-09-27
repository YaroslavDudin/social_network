const registerComplete = document.getElementById("register-complete-button");
registerComplete.style.display = "none";
const img = document.getElementById('avatar');

const registerCompleteText = document.getElementById('register-complete-text')

const loginButton = document.getElementsByClassName('btn-login')[0]; 
const registerButton = document.getElementsByClassName('btn-register')[0];

const postText = document.getElementById('posts-text')
postText.style.display = "none"

const infoPostText = document.getElementById('info-post-text')
infoPostText.style.display = "none"

const postsButton = document.getElementById('post-button')
postsButton.style.display = "none"
const a = document.getElementById('form-container');
const formLogin = document.querySelectorAll('.login-disable-phone, .login-disable-phone-label, .login-disable-sex-select, .login-disable-sex-select-label, .login-disable-password-check, .login-disable-password-check-label');
const submitButton = document.getElementById('submit');

const label1 = document.getElementById('label1');
const userName = document.getElementById('username');
 
function disableForm() {
    registerComplete.addEventListener('click', (e) => {
    e.preventDefault();
    a.style.display = "none";
    postText.style.display = "block";
    infoPostText.style.display = "block";
    postsButton.style.display = "block";
    registerCompleteText.style.display = "none";
    registerComplete.style.display = "none";
    img.style.display = "block"

  })
}

// функция переключения между экранами входа и регистраций
function toggleForm() {
  if (loginButton.style.display === "block") {
    // показать экран регистрации
    formLogin.forEach((element) => {
      element.style.display = "block";
    });

    registerButton.style.display = "block";
    loginButton.style.display = "none";
    registerComplete.style.display = "none";
    registerCompleteText.style.display = "none";
    userName.style.display = "block";
    label1.style.display = "block";
  } else {
    // показать экран входа
    formLogin.forEach((element) => {
      element.style.display = "none";
    });
    registerButton.style.display = "none";
    loginButton.style.display = "block";
    registerComplete.style.display = "none";
    registerCompleteText.style.display = "none";
    userName.style.display = "none";
    label1.style.display = "none";
  }
}


export {disableForm , toggleForm}