const mobileMenuButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const navbarSticky = document.getElementById('navbar-sticky');

mobileMenuButton.addEventListener('click', () => {
    const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';

    // Toggle the aria-expanded attribute
    mobileMenuButton.setAttribute('aria-expanded', !expanded);

    // Toggle the visibility of the navigation menu
    navbarSticky.classList.toggle('hidden');
});







