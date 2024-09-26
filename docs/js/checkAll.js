import { toggleForm } from "./formDisable.js";
import {userData} from "./script.js";
import {User} from "./classes.js"
const img = document.getElementById('avatar');

const registerComplete = document.getElementById("register-complete-button");
registerComplete.style.display = "none";

const registerCompleteText = document.getElementById('register-complete-text')

// ERRORS
 const passwordError = document.getElementById('password-error')
 const emailError = document.getElementById('email-error')
 const usernameError = document.getElementById('username-error')
 const phoneError = document.getElementById('phone-error')
 const genderError = document.getElementById('gender-error')
// forminfo
 const phoneInput = document.getElementById('phone');
 const usernameInput = document.getElementById('username');
 const emailInput = document.getElementById('email');
 const genderInput = document.getElementById('genderSelect');
 export const passwordInput = document.getElementById('password');
 export const checkPasswords = document.getElementById('passwordCheck');
 const submitButton = document.getElementById('submit');
//  const checkGenders = document.getElementsByName('gender')
 const genderStyles = document.getElementById('genderSelect');
 const loginButton = document.getElementsByClassName('btn-login')[0]; 
 const registerButton = document.getElementsByClassName('btn-register')[0];

 const switchToLoginButton = document.getElementById('switch-to-login-button');
const switchToRegisterButton = document.getElementById('switch-to-register-button');


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
 export function checkPhone() {
    const PHONE_REGEXP = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!PHONE_REGEXP.test(phoneInput.value)) {
      phoneInput.style.border = '2px solid red'
      phoneError.innerHTML = "Phone number is not valid"
      return false
    }

    if (phoneInput.value.includes(' ')) {
      phoneInput.style.border = '2px solid red'
      phoneError.innerHTML = "Phone number cannot contain spaces"
      return false
    }
    phoneInput.style.border = '2px solid green'
    phoneError.innerHTML = ""
    return true
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
  
    if (passwordInput.value === emailInput.value) {
      passwordInput.style.border = '2px solid red'
      checkPasswords.style.border = '2px solid red'

      passwordError.innerHTML = "Password cannot be the same as email"
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
    if (passwordInput.value !== passwordCheck.value) {
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
  export function checkEmail() {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (emailInput.value.includes(' ')) {
      emailInput.style.border = '2px solid red'
      emailError.innerHTML = "Email cannot contain spaces"
      return false;
    }
    if (!EMAIL_REGEXP.test(emailInput.value)) {
      emailInput.style.border = '2px solid red'
      emailError.innerHTML = "Email is not valid"
      return false;
    }
    if (userData.some(user => user.email === emailInput.value)) {
     emailInput.style.border = '2px solid red'
     emailError.innerHTML = "Email is already registered";
     return false; 
   }
   emailError.innerHTML = ""
    emailInput.style.border = '2px solid green'
    
    return true;
  }
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
  export function checkAll () {
    
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value;

    const email = emailInput.value;
    const password = passwordInput.value;
    const phone = phoneInput.value;
    const gender = genderInput.value;
    if(checkPassword() && checkEmail() && checkUsername() && checkPhone() && checkGender()) {
     const user = new User(username, gender, email, password,phone)
     submitButton.disabled = true
     user.generationAvatar()
     img.style.display = "none"
     userData.push(user)
     console.log(userData);
     registerCompleteText.innerHTML = `User ${user.name}, with ID ${user.id} registered`
     registerComplete.style.display = "block";

   }
   
  }
  )
 
}


  
