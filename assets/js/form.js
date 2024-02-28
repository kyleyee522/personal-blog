const submitBtn = document.querySelector('#submit-button');
const username = document.querySelector('#username');
const blogTitle = document.querySelector('#blog-title');
const blogContent = document.querySelector('#blog-content');

let blogPosts = [];
let blog = {};

function loadFromLocalStorage() {
	let storedData = JSON.parse(localStorage.getItem('blogs'));

	if (storedData) {
		blogPosts = storedData;
	}
}

function updateLocalStorage() {
	localStorage.setItem('blogs', JSON.stringify(blogPosts));
}

submitBtn.addEventListener('click', function (event) {
	// Checks if the form is filled out and if it isn't, keep the user on the same page and their inputs
	if (username.value === '') {
		alert('Please enter your username');
		event.preventDefault();
	} else if (blogTitle.value === '') {
		alert('Please enter a title');
		event.preventDefault();
	} else if (blogContent.value === '') {
		alert('Please enter something to say');
		event.preventDefault();
	} else {
		// Add the values to the blog object and append to the blogPosts array
		blog = {
			title: blogTitle.value,
			content: blogContent.value,
			author: username.value,
		};
		blogPosts.push(blog);

		updateLocalStorage();
	}
});

window.onload = loadFromLocalStorage;
