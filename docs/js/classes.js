let postIdArr = [];
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
  }
  export {Post, User , postIdArr}