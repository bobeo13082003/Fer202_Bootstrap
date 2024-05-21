const rEmail = document.querySelector('#remail');
const fullname = document.querySelector('#fullname');
const rpassword = document.querySelector('#rpassword');

const message = document.querySelector('.message');

const accounts = JSON.parse(localStorage.getItem('accounts')) || [{
    'email': 'phamichbo132003@gmail.com',
    'fullname': 'pham ich bo',
    'password': '1234'
}];
localStorage.setItem('accounts', JSON.stringify(accounts))

const validateEmail = (email) => {

    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const addAccount = (acc) => {
    accounts.push(acc);
    localStorage.setItem('accounts', JSON.stringify(accounts));
    rEmail.value = fullname.value = rpassword.value = '';
}

const register = () => {
    if (!validateEmail(rEmail.value)) {
        alert('Email Error');

    } else {
        const newAccounts = {
            email: rEmail.value,
            fullname: fullname.value,
            password: rpassword.value
        }
        const h5 = document.createElement('h5')
        h5.innerText = 'Register Successfull'
        addAccount(newAccounts);
        message.appendChild(h5);
        window.location.href = 'login.html';
    }
}
