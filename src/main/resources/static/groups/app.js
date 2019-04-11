const apply = document.querySelector('.apply');
const input1 = document.querySelector('.input1');

apply.addEventListener('click', (e) => {
    let form = document.querySelector('.mod');
    if (input1.value === '') {
        e.preventDefault();
        let alert = document.querySelector(".alert");
        alert.classList.remove("d-none");
    } else {
        form.submit();
    }
});