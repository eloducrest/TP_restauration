// SET BG NAV WHEN SCROLL
var menuIsOpen = false;
function bgNav() {
    let nav = document.getElementById('myNavbar');

    if (window.scrollY > 150) {
        nav.classList.add('bg-nav-lt', 'navbar-light');
        nav.classList.remove('navbar-dark');
    } else {
        nav.classList.remove('bg-nav-lt', 'navbar-light');
        nav.classList.add('navbar-dark');
    }
}

document.addEventListener('scroll', bgNav)