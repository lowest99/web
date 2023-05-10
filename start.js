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

    const searchInput = document.getElementById('src-box');
    const boxes = document.querySelectorAll('.box a');

    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.toLowerCase();

      boxes.forEach(box => {
        const heading = box.querySelector('h1');
        const text = heading.textContent.toLowerCase();

        if (text.includes(searchValue)) {
          box.style.display = 'flex';
        } else {
          box.style.display = 'none';
        }
      });
    });
