document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navbar links
    const navbarLinks = document.querySelectorAll('.navbar-nav a');

    for (let link of navbarLinks) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    }
});
