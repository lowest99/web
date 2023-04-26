// toggle class active
const NavList = document.querySelector('.nav-list');

document.querySelector('#menu-icon').onclick = () => {
	NavList.classList.toggle('active');
};

const MenuIcon = document.querySelector('#menu-icon');

document.addEventListener('click', function (e) {
	if(!MenuIcon.contains(e.target) && !NavList.contains(e.target)) {
		NavList.classList.remove('active');
	}
});