let postIdArr = [];
let avatar = document.getElementById('avatar');
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
    avatar = this.generationAvatar()
    constructor(name, age,gender, email, password, phone) {
      this.name = name
      this.age = age
      this.email = email
      this.password = password
      this.phone = phone
      this.gender = gender
      
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
      async generationAvatar() {
        if(this.gender === "male") {
        fetch('https://avatar.iran.liara.run/public/boy')
        .then(response => response.blob())
        .then(blob => {
          const objectURL = URL.createObjectURL(blob)
          avatar.src = objectURL
        
        })
      }
      else if(this.gender === "female") {
        fetch('https://avatar.iran.liara.run/public/girl')
        .then(response => response.blob())
        .then(blob => {
          const objectURL = URL.createObjectURL(blob)
          avatar.src = objectURL
        })
      }
    }
  }
  export {Post, User , postIdArr}