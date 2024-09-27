import { toggleForm , disableForm } from "./formDisable.js";
import {userData} from "./script.js";
import {User} from "./classes.js"
import {posts} from "./postButton.js"
const img = document.getElementById('avatar');

const registerComplete = document.getElementById("register-complete-button");
registerComplete.style.display = "none";

const registerCompleteText = document.getElementById('register-complete-text')
const postsButton = document.getElementById('post-button')
const postText = document.getElementById('posts-text')
const a = document.getElementById('form-container');
const infoPostText = document.getElementById('info-post-text')
// ERRORS
 const passwordError = document.getElementById('password-error')
 const emailError = document.getElementById('email-error')
 const usernameError = document.getElementById('username-error')
 const genderError = document.getElementById('gender-error')
// forminfo
 const usernameInput = document.getElementById('username');
 const email_or_phone_Input = document.getElementById('email_or_phone');
 const genderInput = document.getElementById('genderSelect');
 export const passwordInput = document.getElementById('password');
 export const checkPasswords = document.getElementById('passwordCheck');
 const submitButton = document.getElementById('submit');
//  const checkGenders = document.getElementsByName('gender')
 const genderStyles = document.getElementById('genderSelect');
 const loginButton = document.getElementById('login-button'); 
 const registerButton = document.getElementsByClassName('btn-register')[0];

 const switchToLoginButton = document.getElementById('switch-to-login-button');
const switchToRegisterButton = document.getElementById('switch-to-register-button');
const back_to_register = document.getElementById('back-to-register');



export function toggleFormButtons() {
  switchToLoginButton.style.display = "block";
  switchToRegisterButton.style.display = "none";

  switchToLoginButton.addEventListener('click', () => {
    toggleForm();
    loginButton.style.display = "block";
    registerButton.style.display = "none";
    switchToLoginButton.style.display = "none";
    switchToRegisterButton.style.display = "block";
  });

  switchToRegisterButton.addEventListener('click', () => {
    toggleForm();
    loginButton.style.display = "none";
    registerButton.style.display = "block";
    switchToLoginButton.style.display = "block";
    switchToRegisterButton.style.display = "none";
  });

  loginButton.style.display = "none";
  registerButton.style.display = "block";
}


 export function checkGender () {
  if (genderInput.value === "male")  {
    genderStyles.style.border = '2px solid green'

    genderError.innerHTML = ""
    return true
  }
  else if (genderInput.value === "female") {
    genderStyles.style.borderColor = 'green'
    genderStyles.style.border = '2px solid green'
    genderError.innerHTML = ""
    return true
  }
  else {
    genderStyles.style.border = '2px solid red'
    genderError.innerHTML = "Please select your gender"
    return false
  }
}
function checkPhoneandEmail() {
  const inputValue = email_or_phone_Input.value.trim();

  // Проверка на телефонный номер
  if (inputValue.match(/^\+?\d{10,15}$/)) {
    // Проверка на более типичные форматы телефонных номеров (дополнительно)
    if (!inputValue.match(/^\+?\d{10,15}$/)) {
      email_or_phone_Input.style.border = '2px solid red';
      emailError.innerHTML = "Введите корректный номер телефона.";
      return false;
    }

    // Проверка пройдена, если телефонный номер в правильном формате
    email_or_phone_Input.style.border = '2px solid green';
    emailError.innerHTML = "";
    return true;
  } else {
    // Проверка на email
    if (inputValue.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu)) {
      // Проверка на домен (дополнительно)
      if (!inputValue.match(/@([a-z0-9]+\.)+[a-z]{2,}/i)) {
        email_or_phone_Input.style.border = '2px solid red';
        emailError.innerHTML = "Введите корректный email.";
        return false;
      }

      // Проверка пройдена, если email в правильном формате
      email_or_phone_Input.style.border = '2px solid green';
      emailError.innerHTML = "";
      return true;
    } else {
      // Ошибка: неверный телефонный номер и неверный email
      email_or_phone_Input.style.border = '2px solid red';
      emailError.innerHTML = "Введите корректный email или телефонный номер.";
      return false;
    }
  }
}

function checkRegister() {
  if (userData.some(user => user.email_or_phone === email_or_phone_Input.value)) {
    email_or_phone_Input.style.border = '2px solid red';
    emailError.innerHTML = "Email or phone number already registered";
    return false;
  }

  email_or_phone_Input.style.border = '2px solid green';
  emailError.innerHTML = "";
  return true;
}

export function checkPassword() {
    const upperCaseLetters = /[A-Z]/g
    const lowerCaseLetters = /[a-z]/g
    const numbers = /[0-9]/g
    const specialCharacters = /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/g
    if (passwordInput.value.length < 8) {
      passwordInput.style.border = '2px solid red'
      checkPasswords.style.border = '2px solid red'

      passwordError.innerHTML = "Password must be at least 8 characters long"
      return false
      }
  
  
    if (passwordInput.value.includes(' ')) {
      passwordInput.style.border = '2px solid red'
      checkPasswords.style.border = '2px solid red'

      passwordError.innerHTML = "Password cannot contain spaces"
      return false
    }
  
    if (!upperCaseLetters.test(passwordInput.value)) {
      passwordInput.style.border = '2px solid red'
      checkPasswords.style.border = '2px solid red'

      passwordError.innerHTML = "Password must contain at least one uppercase letter"
      return false
    }
  
    if (!lowerCaseLetters.test(passwordInput.value)) {
      passwordInput.style.border = '2px solid red'
      checkPasswords.style.border = '2px solid red'

      passwordError.innerHTML = "Password must contain at least one lowercase letter"
      return false
    }
  
    if (!numbers.test(passwordInput.value)) {
      passwordInput.style.border = '2px solid red'
      checkPasswords.style.border = '2px solid red'

      passwordError.innerHTML = "Password must contain at least one number"
      return false
    }
  
    if (!specialCharacters.test(passwordInput.value)) {
      passwordInput.style.border = '2px solid red'
      checkPasswords.style.border = '2px solid red'

      passwordError.innerHTML = "Password must contain at least one special character"
      return false
    }
    if (passwordInput.value !== checkPasswords.value) {
      passwordInput.style.border = '2px solid red'
      checkPasswords.style.border = '2px solid red'
      passwordError.innerHTML = "Passwords do not match"
      return false
    }
   
    passwordInput.style.border = '2px solid green'
    checkPasswords.style.border = '2px solid green'
    passwordError.innerHTML = ""
    return true
  }
  
  // export function checkEmail() {
  //   const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  //   if (emailInput.value.includes(' ')) {
  //     emailInput.style.border = '2px solid red'
  //     emailError.innerHTML = "Email cannot contain spaces"
  //     return false;
  //   }
  //   if (!EMAIL_REGEXP.test(emailInput.value)) {
  //     emailInput.style.border = '2px solid red'
  //     emailError.innerHTML = "Email is not valid"
  //     return false;
  //   }
  //   if (userData.some(user => user.email === emailInput.value)) {
  //    emailInput.style.border = '2px solid red'
  //    emailError.innerHTML = "Email is already registered";
  //    return false; 
  //  }
  //  emailError.innerHTML = ""
  //   emailInput.style.border = '2px solid green'
    
  //   return true;
  // }
//   export function checkAge() {
//     if (ageInput.value < 14) {
//       ageInput.style.border = '2px solid red'
//       ageError.innerHTML = "Age must be greater than 14"
//       return false
//     }
//     if (ageInput.value > 90) {
//       ageInput.style.border = '2px solid red'
//       ageError.innerHTML = "I think you know what's wrong with your age"
//       return false
//     }
//     if (ageInput.value.includes(' ')) {
//       ageInput.style.border = '2px solid red'
//       ageError.innerHTML = "Age cannot contain spaces"
//       return false
//     }
//     let words = /[a-zA-Zа-яА-ЯöÖüÜäÄß]/g
//     if (words.test(ageInput.value)) {
//   ageInput.style.border = '2px solid red'
//   ageError.innerHTML = "Age cannot contain letters"
//   return false
// }
//     ageInput.style.border = '2px solid green'
//     ageError.innerHTML = ""
//       return true
//  }
 export function checkUsername() {
    if (usernameInput.value.length < 3) {
      usernameInput.style.border = '2px solid red'
      usernameError.innerHTML = "Username must be at least 3 characters long"
      return false
    }
    usernameInput.style.border = '2px solid green'
    usernameError.innerHTML = ""
    return true
  }
  

//register function
//   export function checkAll () {
    
//   submitButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const username = usernameInput.value;
//     const email_or_phone = email_or_phone_Input.value;
//     const password = passwordInput.value;
//     const gender = genderInput.value;
//     if(checkPassword() && checkPhoneandEmail() && checkUsername()  && checkGender() && checkRegister()) {
//      const user = new User(username, gender, email_or_phone, password,)
//      submitButton.disabled = false
//      user.generationAvatar()
//      img.style.display = "none"
//      userData.push(user)
//      console.log(userData);
//      registerCompleteText.innerHTML = `User ${user.name}, with ID ${user.id} registered`
//      registerComplete.style.display = "block";

//    }
   
//   }
//   )
  
 
// }

export function checkAll() {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const email_or_phone = email_or_phone_Input.value;
    const password = passwordInput.value;
    const gender = genderInput.value;
    if (checkPassword() && checkPhoneandEmail() && checkUsername() && checkGender() && checkRegister()) {
      const user = new User(username, gender, email_or_phone, password);
      submitButton.disabled = false;
      user.generationAvatar();
      img.style.display = "none";
      userData.push(user);
      console.log(userData);
      registerCompleteText.innerHTML = `User ${user.name}, with ID ${user.id} registered`;
      registerComplete.style.display = "block";
    }
  });
}


export function checkLogin () {
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(userData.some(user => user.email_or_phone === email_or_phone_Input.value && user.password === passwordInput.value)) {
      saveUserIdOnLogin();       // Save logged in user ID in local storage
      email_or_phone_Input.style.border = '2px solid green'
      passwordInput.style.border = '2px solid green'
      loginButton.disabled = false
      console.log("login successful");
      a.style.display = "none";
    postText.style.display = "block";
    infoPostText.style.display = "block";
    postsButton.style.display = "block";
    registerCompleteText.style.display = "none";
    registerComplete.style.display = "none";
    img.style.display = "block"
    back_to_register.style.display = "block";

    back_to_register.addEventListener('click', (e) => {
      a.style.display = "block";
      postText.style.display = "none";
      infoPostText.style.display = "none";
      postsButton.style.display = "none";
      img.style.display = "none"
      back_to_register.style.display = "none";
    })
    } else {
      console.log("login failed");
    }
  })
}


function saveUserIdOnLogin() {
  const emailOrPhone = email_or_phone_Input.value;
  const user = userData.find(user => user.email_or_phone === emailOrPhone);
  if (user) {
    saveUserId(user.id);
  } else {
    console.log("User not found");
  }
}

export function saveUserId(userId) {
  localStorage.setItem("currentUserId", userId);
}


function saveCurrentUserIdOnRegisterComplete() {
  const emailOrPhone = email_or_phone_Input.value;
  const user = userData.find(user => user.email_or_phone === emailOrPhone);
  if (user) {
    saveUserId(user.id);
  } else {
    console.log("User not found");
  }
}

registerComplete.addEventListener('click', () => {
  saveCurrentUserIdOnRegisterComplete();
});



function removeCurrentUserIdFromLocalStorage() { //function that removes current user id from local storage
  localStorage.removeItem("currentUserId");
}

back_to_register.addEventListener('click', () => { //calling function that removes current user id from local storage
  removeCurrentUserIdFromLocalStorage();
});

