

let notification = document.querySelector('.hidden2');

const bookBtn = document.querySelector('.notify');
const openNav = document.querySelector('.fa-bars');
const closeNav = document.querySelector('.hide-nav');
const navBar = document.querySelector('.nav');
const overlayWindow = document.querySelector('.overlay');


openNav.addEventListener('click', function () {
    navBar.classList.remove('hidden');
})

closeNav.addEventListener('click', function () {
    navBar.classList.add('hidden');
})

bookBtn.addEventListener('click', function () {
    notification.classList.remove('hidden2');
    overlayWindow.classList.remove('hidden2');
})

notification.addEventListener('click', function () {
    notification.classList.add('hidden2');
    overlayWindow.classList.add('hidden2');
})