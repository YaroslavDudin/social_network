import { passwordInput, checkPasswords } from "./checkAll.js";

const togglePasswordButton = document.getElementById('toggle-password');

export function hidePassword() {

    togglePasswordButton.addEventListener('click', (e) => {
        // checkPasswords.value=""
        e.preventDefault();
        if (passwordInput.type === 'password' && checkPasswords.type === 'password') {
            passwordInput.type = 'text';
            checkPasswords.type = 'text';
            togglePasswordButton.innerHTML = 'Скрыть пароль'
        } else {
            togglePasswordButton.innerHTML = 'Показать пароль'
            passwordInput.type = 'password';
            checkPasswords.type = 'password';
        }

    })
}