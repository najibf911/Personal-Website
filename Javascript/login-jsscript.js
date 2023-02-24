const form = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const buttonInput = document.querySelector('#login-button');

function HandleLogin(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'najib' && password === 'zxc') {
        window.location.href = 'index.html';
    } else {
        alert('Username atau Password salah')
    }
}

form.addEventListener('submit', HandleLogin);
buttonInput.addEventListener('click', HandleLogin);