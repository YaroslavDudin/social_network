const registerComplete = document.getElementById("register-complete-button");
registerComplete.style.display = "none";

const registerCompleteText = document.getElementById('register-complete-text')

const postText = document.getElementById('posts-text')
postText.style.display = "none"

const infoPostText = document.getElementById('info-post-text')
infoPostText.style.display = "none"

const postsButton = document.getElementById('post-button')
postsButton.style.display = "none"

// forminfo
const phoneInput = document.getElementById('phone');
const usernameInput = document.getElementById('username');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');
const passwordCheck = document.getElementById('passwordCheck');
const buttonHide = document.getElementById('toggle-password');
// labels
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const label4 = document.getElementById('label4');
const label5 = document.getElementById('label5');
const label6 = document.getElementById('label6')
 function disableForm() {
    registerComplete.addEventListener('click', (e) => {
    e.preventDefault();
    usernameInput.style.display = "none";
    ageInput.style.display = "none";
    emailInput.style.display = "none";
    passwordInput.style.display = "none";
    submitButton.style.display = "none";
    registerComplete.style.display = "none";
    registerCompleteText.style.display = "none";
    phoneInput.style.display = "none";
    passwordCheck.style.display = "none";
    buttonHide.style.display = "none";
    label1.innerHTML = ""
    label2.innerHTML = ""
    label3.innerHTML = ""
    label4.innerHTML = ""
    label5.innerHTML = ""
    label6.innerHTML = ""
    label1.style.display = "none";
    label2.style.display = "none";
    label3.style.display = "none";
    label4.style.display = "none";
    label5.style.display = "none";
    label6.style.display = "none";
    postText.style.display = "block";
    infoPostText.style.display = "block";
    postsButton.style.display = "block";
  })

}
export {disableForm}