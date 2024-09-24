import { postIdArr} from "./classes.js"
import { userData } from "./script.js";
let postTextArr = [];
let postInfoArr = [];
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

}