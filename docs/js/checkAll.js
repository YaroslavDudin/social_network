import {userData} from "./script.js";
import {User} from "./classes.js"
const img = document.getElementById('avatar');
import { disableForm , disableFormLogin } from "./formDisable.js";


const registerComplete = document.getElementById("register-complete-button");
registerComplete.style.display = "none";

const registerCompleteText = document.getElementById('register-complete-text')

// ERRORS
 const passwordError = document.getElementById('password-error')
 const emailError = document.getElementById('email-error')
 const ageError = document.getElementById('age-error')
 const usernameError = document.getElementById('username-error')
 const phoneError = document.getElementById('phone-error')
// forminfo
 const phoneInput = document.getElementById('phone');
 const usernameInput = document.getElementById('username');
 const ageInput = document.getElementById('age');
 const emailInput = document.getElementById('email');
 const genderInput = document.getElementById('genderSelect');
 export const passwordInput = document.getElementById('password');
 export const checkPasswords = document.getElementById('passwordCheck');
 const submitButton = document.getElementById('submit');
//  const switchToLoginButton = document.getElementById('switch-to-login-button');
//  const checkGenders = document.getElementsByName('gender')
 const genderStyles = document.getElementById('genderSelect');
 
 export function checkGender () {zz
   if (genderInput.value === "male")  {
     return true
   }
   else if (genderInput.value === "female") {
     return true
   }
   else {
     genderStyles.style.borderColor = 'red'
     genderStyles.innerHTML = "Please select your gender"
     return false
   }
 }
 export function checkPhone() {
    const PHONE_REGEXP = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!PHONE_REGEXP.test(phoneInput.value)) {
      phoneInput.style.borderColor = 'red'
      phoneError.innerHTML = "Phone number is not valid"
      return false
    }
    phoneInput.style.borderColor = 'green'
    phoneError.innerHTML = ""
    return true
  }
export function checkPassword() {
    const upperCaseLetters = /[A-Z]/g
    const lowerCaseLetters = /[a-z]/g
    const numbers = /[0-9]/g
    const specialCharacters = /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/g
    if (passwordInput.value.length < 8) {
      passwordInput.style.borderColor = 'red'
      checkPasswords.style.borderColor = 'red'

      passwordError.innerHTML = "Password must be at least 8 characters long"
      return false
      }
  
    if (passwordInput.value === emailInput.value) {
      passwordInput.style.borderColor = 'red'
      checkPasswords.style.borderColor = 'red'

      passwordError.innerHTML = "Password cannot be the same as email"
      return false
    }
  
    if (passwordInput.value.includes(' ')) {
      passwordInput.style.borderColor = 'red'
      checkPasswords.style.borderColor = 'red'

      passwordError.innerHTML = "Password cannot contain spaces"
      return false
    }
  
    if (!upperCaseLetters.test(passwordInput.value)) {
      passwordInput.style.borderColor = 'red'
      checkPasswords.style.borderColor = 'red'

      passwordError.innerHTML = "Password must contain at least one uppercase letter"
      return false
    }
  
    if (!lowerCaseLetters.test(passwordInput.value)) {
      passwordInput.style.borderColor = 'red'
      checkPasswords.style.borderColor = 'red'

      passwordError.innerHTML = "Password must contain at least one lowercase letter"
      return false
    }
  
    if (!numbers.test(passwordInput.value)) {
      passwordInput.style.borderColor = 'red'
      checkPasswords.style.borderColor = 'red'

      passwordError.innerHTML = "Password must contain at least one number"
      return false
    }
  
    if (!specialCharacters.test(passwordInput.value)) {
      passwordInput.style.borderColor = 'red'
      checkPasswords.style.borderColor = 'red'

      passwordError.innerHTML = "Password must contain at least one special character"
      return false
    }
    if (passwordInput.value !== passwordCheck.value) {
      passwordInput.style.borderColor = 'red'
      checkPasswords.style.borderColor = 'red'
      passwordError.innerHTML = "Passwords do not match"
      return false
    }
   
    passwordInput.style.borderColor = 'green'
    checkPasswords.style.borderColor = 'green'
    passwordError.innerHTML = ""
    return true
  }
  export function checkEmail() {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (emailInput.value.includes(' ')) {
      emailInput.style.borderColor = 'red'
      emailError.innerHTML = "Email cannot contain spaces"
      return false;
    }
    if (!EMAIL_REGEXP.test(emailInput.value)) {
      emailInput.style.borderColor = 'red'
      emailError.innerHTML = "Email is not valid"
      return false;
    }
    if (userData.some(user => user.email === emailInput.value)) {
     emailInput.style.borderColor = 'red';
     emailError.innerHTML = "Email is already registered";
     return false; 
   }
   emailError.innerHTML = ""
    emailInput.style.borderColor = 'green'
    
    return true;
  }
  export function checkAge() {
    if (ageInput.value < 14) {
      ageInput.style.borderColor = 'red'
      ageError.innerHTML = "Age must be greater than 14"
      return false
    }
    if (ageInput.value > 90) {
      ageInput.style.borderColor = 'red'
      ageError.innerHTML = "I think you know what's wrong with your age"
      return false
    }
    if (ageInput.value.includes(' ')) {
      ageInput.style.borderColor = 'red'
      ageError.innerHTML = "Age cannot contain spaces"
      return false
    }
    let words = /[a-zA-Zа-яА-ЯöÖüÜäÄß]/g
    if (words.test(ageInput.value)) {
  ageInput.style.borderColor = 'red'
  ageError.innerHTML = "Age cannot contain letters"
  return false
}
    ageInput.style.borderColor = 'green'
    ageError.innerHTML = ""
      return true
 }
 export function checkUsername() {
    if (usernameInput.value.length < 3) {
      usernameInput.style.borderColor = 'red'
      usernameError.innerHTML = "Username must be at least 3 characters long"
      return false
    }
    usernameInput.style.borderColor = 'green'
    usernameError.innerHTML = ""
    return true
  }
  export function checkAll () {
    
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const age = ageInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const phone = phoneInput.value;
    const gender = genderInput.value;
    if(checkPassword() && checkEmail() && checkAge() && checkUsername() && checkPhone()) {
     const user = new User(username, age, gender, email, password,phone)
     submitButton.disabled = true
     userData.push(user)
     console.log(userData);
     registerCompleteText.innerHTML = `User ${user.name}, with ID ${user.id} registered`
     registerComplete.style.display = "block";

   }
   
  }
  )
 
}


  
