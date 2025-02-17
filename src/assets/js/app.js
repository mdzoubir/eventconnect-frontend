function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');

    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}
