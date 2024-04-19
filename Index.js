window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#777'; // Change background color on scroll
    } else {
      navbar.style.backgroundColor = '#333'; // Change back to original color
    }
  });
  