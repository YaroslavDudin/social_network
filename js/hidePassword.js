import { passwordInput } from "./checkAll.js";

const togglePasswordButton = document.getElementById('toggle-password');

export function hidePassword() {

    togglePasswordButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordButton.innerHTML = 'Скрыть пароль'
        } else {
            togglePasswordButton.innerHTML = 'Показать пароль'
            passwordInput.type = 'password';
        }
    })
}