const registerComplete = document.getElementById("register-complete-button");
registerComplete.style.display = "none";
const registerCompleteText = document.getElementById('register-complete-text')

const postText = document.getElementById('posts-text')
postText.style.display = "none"


const infoPostText = document.getElementById('info-post-text')
infoPostText.style.display = "none"

const postsButton = document.getElementById('post-button')
postsButton.style.display = "none"


const form = document.getElementById('form-container');

 function disableForm() {
    registerComplete.addEventListener('click', (e) => {
    e.preventDefault();
    form.style.display = "none";
    registerComplete.style.display = "none";
    registerCompleteText.style.display = "none";
    postText.style.display = "block";
    infoPostText.style.display = "block";
    postsButton.style.display = "block";
  })

}
export {disableForm}