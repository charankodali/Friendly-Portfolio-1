const mobileMenuButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const navbarSticky = document.getElementById('navbar-sticky');

mobileMenuButton.addEventListener('click', () => {
    const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';

    // Toggle the aria-expanded attribute
    mobileMenuButton.setAttribute('aria-expanded', !expanded);

    // Toggle the visibility of the navigation menu
    navbarSticky.classList.toggle('hidden');
});





    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement; // Select the <html> element

    // Function to toggle dark mode
    function toggleDarkMode() {
        if (darkModeToggle.checked) {
            htmlElement.classList.remove('dark'); // Remove 'dark' class to enable light mode
        } else {
            htmlElement.classList.add('dark'); // Add 'dark' class to enable dark mode (default)
        }
    }

    // Set the initial state of the checkbox based on the default dark mode
    darkModeToggle.checked = false; // Initially unchecked for light mode

    // Event listener for the dark mode toggle switch
    darkModeToggle.addEventListener('change', toggleDarkMode);

    // Initial call to set dark mode based on user preference
    toggleDarkMode();


