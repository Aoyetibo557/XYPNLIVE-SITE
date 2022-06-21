const hamburgerMenu = document.querySelector('.hamburger');
const landingUl = document.querySelector(".landing__ul");

const menuIsActive = () => {
    hamburgerMenu.classList.toggle('active');
    landingUl.classList.toggle('active');
}
hamburgerMenu.addEventListener('click', menuIsActive)