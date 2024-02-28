const themeSwitcher = document.querySelector('.dark-light-mode-button');
const body = document.querySelector('#body');

// Loads the theme on page load/refresh
let mode = localStorage.getItem('theme');
body.setAttribute('class', mode);

themeSwitcher.addEventListener('click', function () {
	// If it is dark mode, when the button is pressed, switch to light mode and update it in local storage
	if (mode === 'dark-mode') {
		mode = 'light-mode';
		body.setAttribute('class', 'light-mode');

		themeSwitcher.textContent = '☀️';
		localStorage.setItem('theme', 'light-mode');
	} else {
		// If it is light mode, when the button is pressed, switch to dark mode and update it in local storage
		mode = 'dark-mode';
		body.setAttribute('class', 'dark-mode');

		themeSwitcher.textContent = '🌙';
		localStorage.setItem('theme', 'dark-mode');
	}
});
