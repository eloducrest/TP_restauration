// SET BG NAV WHEN SCROLL
// SET BG NAV WHEN SCROLL
// SET BG NAV WHEN SCROLL
function bgNav() {
    let nav = document.getElementById('myNavbar');

    if (window.scrollY > 150 || menuIsOpen === true) {
        nav.classList.add('bg-nav-lt', 'navbar-light');
        nav.classList.remove('navbar-dark');
    } else {
        nav.classList.remove('bg-nav-lt', 'navbar-light');
        nav.classList.add('navbar-dark');
    }
}

document.addEventListener('scroll', bgNav)



// SET BG NAV ON MOBILE
// SET BG NAV ON MOBILE
// SET BG NAV ON MOBILE
var menuIsOpen = false;
var burgerButton = document.getElementById('burger-buttom');

function bgNavMobile() {
    let nav = document.getElementById('myNavbar');

    if (menuIsOpen === true) {
        nav.classList.add('bg-nav-lt', 'navbar-light');
        nav.classList.remove('navbar-dark');
    } else {
        nav.classList.remove('bg-nav-lt', 'navbar-light');
        nav.classList.add('navbar-dark');
    }
}

burgerButton.addEventListener('click', bgNavMobile)



// ACTIVE CLASS WHEN SECTION IS REACH
// ACTIVE CLASS WHEN SECTION IS REACH
// ACTIVE CLASS WHEN SECTION IS REACH
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container-xl ul > li a");

function setHighLight() {
    console.log(sections[0].offsetTop)
    console.log(window.scrollY)
    if ((window.scrollY + 86 >= sections[0].offsetTop) && (window.scrollY + 86 < sections[1].offsetTop)) {
        navLi[0].classList.add('active-nav');
    } else {
        navLi[0].classList.remove('active-nav');
    }

    if ((window.scrollY + 86 >= sections[1].offsetTop) && (window.scrollY + 86 < sections[2].offsetTop)) {
        navLi[1].classList.add('active-nav');
    } else {
        navLi[1].classList.remove('active-nav');
    }

    if ((window.scrollY + 86 >= sections[2].offsetTop) && (window.scrollY + 86 < sections[3].offsetTop)) {
        navLi[2].classList.add('active-nav');
    } else {
        navLi[2].classList.remove('active-nav');
    }

    if ((window.scrollY + 86 >= sections[3].offsetTop) && (window.scrollY + 86 < sections[4].offsetTop)) {
        navLi[3].classList.add('active-nav');
    } else {
        navLi[3].classList.remove('active-nav');
    }

    if (window.scrollY + 86 >= sections[4].offsetTop) {
        navLi[4].classList.add('active-nav');
    } else {
        navLi[4].classList.remove('active-nav');
    }
}

window.addEventListener('scroll', setHighLight);

