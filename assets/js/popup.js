const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const formContainer = $$('.auth-form__container');

const loginModal = $$('.header__navbar-item--strong');

const modal = $('.modal');
const modalOverlay = $('.modal__overlay');
const formActive = $('.auth-form__container.active');
const formLogin = $('.auth-form__login');
const formRegister = $('.auth-form__register');

const btnReg = formLogin.querySelector('.auth-form__switch-btn');
btnReg.onclick = () => {
    formActive.classList.remove('active');

    formRegister.classList.add('active');
}

const btnLog = formRegister.querySelector('.auth-form__switch-btn');
btnLog.onclick = () => {
    formRegister.classList.remove('active');

    formLogin.classList.add('active');
}

loginModal.forEach( (item, index) => {
    item.onclick = (e) => {
        modal.classList.add('show');
        if (e.target.classList.length > 2) {
            formActive.classList.remove('active');

            formRegister.classList.add('active');
        } else {
            formRegister.classList.remove('active');

            formLogin.classList.add('active');
        }
    }
})

modalOverlay.onclick = (e) => {
    modal.classList.remove('show');
}