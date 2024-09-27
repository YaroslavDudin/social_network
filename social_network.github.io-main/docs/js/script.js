import { checkAll, toggleFormButtons, checkLogin} from "./checkAll.js";
import { disableForm,  toggleForm } from "./formDisable.js";
import { posts } from "./postButton.js";
import { hidePassword } from "./hidePassword.js";
export let userData = [];
 
 
 document.addEventListener("DOMContentLoaded", function () {

 checkAll()

 disableForm()

 posts()

 hidePassword()

 toggleFormButtons()

 checkLogin()

})