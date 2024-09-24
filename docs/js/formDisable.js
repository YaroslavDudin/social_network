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
// forminfo

// labels
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const label4 = document.getElementById('label4');
const label5 = document.getElementById('label5');
const label6 = document.getElementById('label6')
const label7 = document.getElementById('label7')
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