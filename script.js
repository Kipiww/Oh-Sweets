// JavaScript to toggle menu visibility
document.querySelector('[data-collapse-toggle="navbar-sticky"]').addEventListener('click', function() {
    var navbar = document.getElementById('navbar-sticky');
    if (navbar.style.display === 'none') {
      navbar.style.display = 'block';
    } else {
      navbar.style.display = 'none';
    }
  });
  