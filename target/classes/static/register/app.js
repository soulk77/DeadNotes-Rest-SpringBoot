const submit = document.querySelector('.btn');
const form = document.querySelector('form');
const alert1 = document.querySelector('.al1');



submit.addEventListener('click', (e) => {
    e.preventDefault();
    let pass1 = document.getElementById('password').value
    let pass2 = document.querySelector('#password2').value;
    console.log(pass1);
    console.log(pass2);
    if (pass1 === pass2) {
        viewModel.doLogin();

    } else {
        alert1.classList.toggle("d-none");
    }

})