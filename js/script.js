import { checkAge, checkEmail, checkPassword, checkPhone, checkUsername } from "./checkAll.js";
import {User, postIdArr} from "./classes.js"
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
// labels
 const label1 = document.getElementById('label1');
 const label2 = document.getElementById('label2');
 const label3 = document.getElementById('label3');
 const label4 = document.getElementById('label4');
 const label5 = document.getElementById('label5');
 
 let userData = [];
 let postTextArr = [];
 let postInfoArr = [];
 export default userData
 document.addEventListener("DOMContentLoaded", function () {



 

 submitButton.addEventListener('click', (e) => {
   e.preventDefault();
   const username = usernameInput.value;
   const age = ageInput.value;
   const email = emailInput.value;
   const password = passwordInput.value;
   const phone = phoneInput.value;
   
   if(checkPassword() && checkEmail() && checkAge() && checkUsername() && checkPhone()) {
    const user = new User(username, age, email, password,phone)
    submitButton.disabled = true
    userData.push(user)
    console.log(userData);
    registerCompleteText.innerHTML = `User ${user.name}, with ID ${user.id} registered`
    registerComplete.style.display = "block";
  }

   
 }
 )
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
   label1.innerHTML = ""
   label2.innerHTML = ""
   label3.innerHTML = ""
   label4.innerHTML = ""
   label5.innerHTML = ""
   label1.style.display = "none";
   label2.style.display = "none";
   label3.style.display = "none";
   label4.style.display = "none";
   label5.style.display = "none";
   postText.style.display = "block";
   infoPostText.style.display = "block";
   postsButton.style.display = "block";
 })

 postsButton.addEventListener('click', (e) => {
   e.preventDefault();
   userData.forEach(user => {
     console.log(user.post(postText.value));
     postTextArr.push(postText.value)
     infoPostText.innerHTML = `User ${user.name},posted: ${postText.value} `
     
     postInfoArr.push({
       idPost: postIdArr[postIdArr.length - 1],
       text: postTextArr[postTextArr.length - 1],
       author: user.name,
       userId: user.id})
       
   })
   console.log(postInfoArr);
   
 })  
})