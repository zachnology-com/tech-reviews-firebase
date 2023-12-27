const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
	e.preventDefault();
	isMenuOpen = !isMenuOpen;

	// toggle a11y attributes and active class
	menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
	menu.hidden = !isMenuOpen;
	nav.classList.toggle('nav--open');
});


// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
	// abort if menu isn't open or modifier keys are pressed
	if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
		return;
	}

	// listen for tab press and move focus
	// if we're on either end of the navigation
	const menuLinks = menu.querySelectorAll('.nav__link');
	if (e.keyCode === 9) {
		if (e.shiftKey) {
			if (document.activeElement === menuLinks[0]) {
				menuToggle.focus();
				e.preventDefault();
			}
		} else if (document.activeElement === menuToggle) {
			menuLinks[0].focus();
			e.preventDefault();
		}
	}
});



let scrollpos = window.scrollY
const links = document.getElementsByClassName("defaultnav__link")
const header = document.getElementById("header")
const header_height = header.offsetHeight


const add_class_on_scroll = () => header.classList.add("fade-in")
const add_class_on_scroll_links = () => header.classList.add("fade-in")
const remove_class_on_scroll = () => header.classList.remove("fade-in")


window.addEventListener('scroll', function () {
	scrollpos = window.scrollY

	if (scrollpos >= 50) {
		add_class_on_scroll()
		document.getElementById("defaultnav__link1").classList.add("fade-in")
		document.getElementById("defaultnav__link2").classList.add("fade-in")
		document.getElementById("defaultnav__link3").classList.add("fade-in")
		document.getElementById("defaultnav__link4").classList.add("fade-in")
		document.getElementById("defaultnav__link5").classList.add("fade-in")
	}
	else { 
		remove_class_on_scroll() 
		document.getElementById("defaultnav__link1").classList.remove("fade-in")
		document.getElementById("defaultnav__link2").classList.remove("fade-in")
		document.getElementById("defaultnav__link3").classList.remove("fade-in")
		document.getElementById("defaultnav__link4").classList.remove("fade-in")
		document.getElementById("defaultnav__link5").classList.remove("fade-in")
	}

	console.log(scrollpos)
})