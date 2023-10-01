const mobileMenuButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const navbarSticky = document.getElementById('navbar-sticky');

mobileMenuButton.addEventListener('click', () => {
    const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';

    // Toggle the aria-expanded attribute
    mobileMenuButton.setAttribute('aria-expanded', !expanded);

    // Toggle the hidden attribute on the navbar
    navbarSticky.classList.toggle('hidden');
});



//Dark-Mode

const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');


const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

const iconToggle = () => {
    sunIcon.classList.toggle('display-none');
    moonIcon.classList.toggle('display-none');
};


const themeCheck = () =>{
    if(userTheme === 'dark' || (!userTheme && systemTheme)){
        document.documentElement.classList.add('dark');
        moonIcon.classList.add("display-none");
        return;
}
sunIcon.classList.add("display-none");
};



const themeSwitch = () => {
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        iconToggle();
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'light');
    iconToggle();
};

sunIcon.addEventListener('click',() => {
    themeSwitch();
});

moonIcon.addEventListener('click',() => {
    themeSwitch();
});

themeCheck();
