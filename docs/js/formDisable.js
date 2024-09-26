


const registerComplete = document.getElementById("register-complete-button");
registerComplete.style.display = "none";
const img = document.getElementById('avatar');

const registerCompleteText = document.getElementById('register-complete-text')
const switchToLoginButton = document.getElementById('switch-to-login-button');
const loginButton = document.getElementsByClassName('btn-login')[0]; 
const registerButton = document.getElementsByClassName('btn-register')[0];

const postText = document.getElementById('posts-text')
postText.style.display = "none"

const infoPostText = document.getElementById('info-post-text')
infoPostText.style.display = "none"

const postsButton = document.getElementById('post-button')
postsButton.style.display = "none"
const a = document.getElementById('form-container');
const formLogin = document.querySelectorAll('.login-disable-age, .login-disable-age-label, .login-disable-phone, .login-disable-phone-label, .login-disable-sex-select, .login-disable-sex-select-label');
const submitButton = document.getElementById('submit');
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



  function disableFormLogin() {
      switchToLoginButton.addEventListener('click', (e) => {
        e.preventDefault();
        formLogin.forEach((element) => {
          element.style.display = "none";
        });
        registerButton.style.display = "none";
        loginButton.style.display = "block";
        registerComplete.style.display = "none";
        registerCompleteText.style.display = "none";

      })
    }

export {disableForm , disableFormLogin}