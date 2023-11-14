
//Toggle Hamburger icon
const toggleNav = () => {
    // JavaScript using classList.toggle() to toggle menu visibility
    document.querySelector('[data-collapse-toggle="navbar-sticky"]').addEventListener('click', function() {
    var navbar = document.getElementById('navbar-sticky');
    navbar.classList.toggle('hidden'); // Toggle the 'hidden' class
  });
}
  