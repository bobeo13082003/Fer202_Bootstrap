const email = document.querySelector('#email');
const password = document.querySelector('#password');

const message = document.querySelector('.message');

const accounts = JSON.parse(localStorage.getItem('accounts'));

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const checkAccount = (e, p) => {
    return accounts.some(a => (a.email === e && a.password === p));
}

const login = () => {
    console.log(email.value)
    if (!validateEmail(email.value)) {
        alert('Email invalid');
    } else {
        if (checkAccount(email.value, password.value)) {
            const h5 = document.createElement('h5');
            h5.innerText = 'Login Success';
            message.appendChild(h5);
            window.location.href = 'index.html';
        } else {
            alert('Email or Password invalid');
        }
    }
}