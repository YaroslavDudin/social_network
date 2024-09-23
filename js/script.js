import { checkAll} from "./checkAll.js";
import { disableForm } from "./formDisable.js";
import { posts } from "./postButton.js";
export let userData = [];
 
 
 document.addEventListener("DOMContentLoaded", function () {

 checkAll()

 disableForm()

 posts()
})