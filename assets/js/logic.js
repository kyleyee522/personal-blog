const themeSwitcher = document.querySelector('.dark-light-mode-button');
const body = document.querySelector('#body');
// const themeButton = document.getElementById('dark-light-mode');
// const test = document.querySelector('.test');

let mode = localStorage.getItem('theme');
body.setAttribute('class', mode);

themeSwitcher.addEventListener('click', function () {
	if (mode === 'dark-mode') {
		mode = 'light-mode';
		body.setAttribute('class', 'light-mode');
		// themeSwitcher.textContent = '🌙';
		themeSwitcher.textContent = '☀️';
		localStorage.setItem('theme', 'light-mode');
	} else {
		mode = 'dark-mode';
		body.setAttribute('class', 'dark-mode');
		// themeSwitcher.textContent = '☀️';
		themeSwitcher.textContent = '🌙';
		localStorage.setItem('theme', 'dark-mode');
	}
});
