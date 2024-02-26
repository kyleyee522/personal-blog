const themeSwitcher = document.querySelector('.dark-light-mode');
const body = document.querySelector('#body');
// const themeButton = document.getElementById('dark-light-mode');
// const test = document.querySelector('.test');

let mode = 'light-mode';

themeSwitcher.addEventListener('click', function () {
	if (mode === 'light-mode') {
		mode = 'dark-mode';
		body.setAttribute('class', 'dark-mode');
		// themeButton.textContent = '&#127769;';
		themeSwitcher.textContent = '🌙';
		test.textContent('');
	} else {
		mode = 'light-mode';

		body.setAttribute('class', 'light-mode');
		// themeButton.textContent = '&#9728;&#65039;';
		// themeButton.textContent('asdfasdfasdf ');
		themeSwitcher.textContent = '☀️';
		// test.textContent('');
	}
});
