password = document.getElementById('password');
confirmPassword = document.getElementById('confirm_password');
errorMSG = document.getElementById('error_msg');

document.querySelector('button').addEventListener('click', () => {
    console.log(errorMSG);
    if (password.value != confirm_password.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMSG.style.opacity = 1;
    } else {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        errorMSG.style.opacity = 0;
    }
});