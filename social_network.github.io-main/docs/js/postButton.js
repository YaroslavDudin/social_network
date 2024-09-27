import { postIdArr} from "./classes.js"
import { currentUser, userData } from "./script.js";

let postTextArr = [];
let postInfoArr = [];
export {postInfoArr}
const userPosts = document.getElementById('user-posts');
const postText = document.getElementById('posts-text')
 postText.style.display = "none"

 const infoPostText = document.getElementById('info-post-text')
 infoPostText.style.display = "none"

 const postsButton = document.getElementById('post-button')
 postsButton.style.display = "none"
 
export function posts() {
    postsButton.addEventListener('click', (e) => {
    e.preventDefault();
    userData.forEach(user => {
      if(user.id == currentUser[0].id) {
        console.log(user.post(postText.value));
        postTextArr.push(postText.value)
        infoPostText.innerHTML = `User ${user.name},posted: ${postText.value} `
        
        postInfoArr.push({
          idPost: postIdArr[postIdArr.length - 1],
          text: postTextArr[postTextArr.length - 1],
          author: user.name,
          userId: user.id})
        }
        
      
        
    })
    userPosts.innerHTML = ""
    let postses =  postInfoArr.forEach(post => {
      userPosts.innerHTML += `<div class="post"><p>${post.text}</p><p class="post-info">Posted by: ${post.author} (ID: ${post.idPost})</p></div>`
    })
  
    postText.value = ""
    console.log(postInfoArr);
    
  })  

}

