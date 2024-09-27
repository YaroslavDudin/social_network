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
 
// export function posts() {
//     postsButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     userData.forEach(user => {
//       console.log(user.post(postText.value));
//       postTextArr.push(postText.value)
//       infoPostText.innerHTML = `User ${user.name},posted: ${postText.value} `
      
//       postInfoArr.push({
//         idPost: postIdArr[postIdArr.length - 1],
//         text: postTextArr[postTextArr.length - 1],
//         author: user.name,
//         userId: user.id})
        
//     })
//     console.log(postInfoArr);
    
//   })  

// }

export function posts() {
  postsButton.addEventListener('click', (e) => {
    e.preventDefault();
    const currentUserId = localStorage.getItem("currentUserId");
    const currentUser = userData.find(user => user.id === currentUserId);
    if (currentUser) {
      // create a new post from the current user's account
      const postTextValue = postText.value;
      const newPost = {
        text: postTextValue,
        userId: currentUserId
      };
      postInfoArr.push(newPost);
      console.log(`New post created by ${currentUser.name}: ${postTextValue}`);
      console.log(postInfoArr);
    }
  });
}