// Containers
//Welcome 
const welcome = document.querySelector('.welcome');
const welcome__title = document.querySelector('.welcome__title');
const welcome__message = document.querySelector('.welcome__message');
//Btns
const containerBtn = document.querySelector('.container-btn');
const sign_in_btn = document.querySelector('.sign_in_btn');
const register_btn = document.querySelector('.register_btn');

//Registro
const registerContainer = document.querySelector('.register-container');
//Btns
const register_btn_form = document.querySelector('.register_btn_form');
const confirm_btn = document.querySelector('.register_to_confirm_btn');

//Login
const loginContainer = document.querySelector('.login-container');
//Btns
const login_btn = document.querySelector('.login_btn');

//Confirm
const confirmContainer = document.querySelector('.confirm-container');
//Btns
const confirmToSignIn = document.querySelector('.confirm_to_signIn_btn');

//Trees
const trees = document.querySelectorAll('.tree');

console.log(trees);

confirmToSignIn.addEventListener('click', evento =>{
    welcome__title.style.display='none',
    welcome__message.style.display='none',
    sign_in_btn.style.display='none',
    loginContainer.style.display='block',
    register_btn.style.display='none',
    confirmContainer.style.display='none'
});

confirm_btn.addEventListener('click', evento =>{
    welcome__title.style.display='none',
    welcome__message.style.display='none',
    sign_in_btn.style.display='none',
    registerContainer.style.display='none',
    register_btn.style.display='none',
    confirmContainer.style.display='block'
});

register_btn.addEventListener("click", evento =>{
    welcome__title.style.display='none',
    welcome__message.style.display='none',
    sign_in_btn.style.display='none',
    registerContainer.style.display='block',
    register_btn.style.display='none'
});

sign_in_btn.addEventListener("click", evento =>{
    welcome__title.style.display='none',
    welcome__message.style.display='none',
    sign_in_btn.style.display='none',
    loginContainer.style.display='block',
    register_btn.style.display='none'
});
