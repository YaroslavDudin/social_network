document.addEventListener("DOMContentLoaded", function () {

   const registerComplete = document.getElementById("register-complete-button");
  registerComplete.style.display = "none";

  const registerCompleteText = document.getElementById('register-complete-text')

  const postText = document.getElementById('posts-text')
  postText.style.display = "none"

  const infoPostText = document.getElementById('info-post-text')
  infoPostText.style.display = "none"

  const postsButton = document.getElementById('post-button')
  postsButton.style.display = "none"

  const usernameInput = document.getElementById('username');
  const ageInput = document.getElementById('age');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitButton = document.getElementById('submit');
  
  let userData = [];
  let postIdArr = [];
  let postTextArr = [];
  let postInfoArr = [];
function idGenerate() {
    return Math.random().toString(16).slice(2);
  }

  class Post {
    #idPost = idGenerate()
    constructor(text, author) {
      this.text = text
      this.author = author
    }
    getId() {
      return this.#idPost
    }
  }

  class User {
    id = idGenerate()
    constructor(name, age, email, password) {
      this.name = name
      this.age = age
      this.email = email
      this.password = password
    }
    
    post(text) {
        if(text.length < 1) {
          throw new Error("Text length must be greater than 1")
        };
        
        const newPost = new Post(text)
        console.log(`User ${this.name}, with ID ${this.id} posted: ${newPost.text} (Post ID: ${newPost.getId()})`)
        
        postIdArr.push(newPost.getId())
        return text
      }
  }

  
  
  

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const age = ageInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    function checkPassword() {
      const upperCaseLetters = /[A-Z]/g
      const lowerCaseLetters = /[a-z]/g
      const numbers = /[0-9]/g
      const specialCharacters = /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/g
      if (passwordInput.value.length < 8) {
        passwordInput.style.borderColor = 'red'
        return false
        }
    
      if (passwordInput.value === emailInput.value) {
        passwordInput.style.borderColor = 'red'
        return false
      }
    
      if (passwordInput.value.includes(' ')) {
        passwordInput.style.borderColor = 'red'
        return false
      }
    
      if (!upperCaseLetters.test(passwordInput.value)) {
        passwordInput.style.borderColor = 'red'
        return false
      }
    
      if (!lowerCaseLetters.test(passwordInput.value)) {
        passwordInput.style.borderColor = 'red'
        return false
      }
    
      if (!numbers.test(passwordInput.value)) {
        passwordInput.style.borderColor = 'red'
        return false
      }
    
      if (!specialCharacters.test(passwordInput.value)) {
        passwordInput.style.borderColor = 'red'
        return false
      }
      passwordInput.style.borderColor = 'green'
      return true
    }
    function checkEmail() {
      const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      if (emailInput.value.includes(' ')) {
        emailInput.style.borderColor = 'red'
        return false;
      }
      if (!EMAIL_REGEXP.test(emailInput.value)) {
        emailInput.style.borderColor = 'red'
        return false;
      }
      if (userData.some(user => user.email === emailInput.value)) {
        emailInput.style.borderColor = 'red'
        throw new Error("Email is already registered")

      }
      emailInput.style.borderColor = 'green'
      return true;
    }
    function checkAge() {
      if (ageInput.value < 14) {
        ageInput.style.borderColor = 'red'
        throw new Error("Age must be greater than 14")
      }
      ageInput.style.borderColor = 'green'
        return true
   }
    function checkUsername() {
      if (usernameInput.value.length < 3) {
        usernameInput.style.borderColor = 'red'
        throw new Error("Username must be at least 3 characters long")
      }
      usernameInput.style.borderColor = 'green'
      return true
    }
    if(checkPassword() && checkEmail() && checkAge() && checkUsername()) {
      const user = new User(username, age, email, password)
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