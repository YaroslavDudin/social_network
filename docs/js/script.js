import { checkAll, disableLoginButton} from "./checkAll.js";
import { disableForm, disableFormLogin } from "./formDisable.js";
import { posts } from "./postButton.js";
import { hidePassword } from "./hidePassword.js";
export let userData = [];
 
 
 document.addEventListener("DOMContentLoaded", function () {

 checkAll()

 disableForm()

 disableFormLogin()

 posts()

 hidePassword()

 disableLoginButton()


 
})