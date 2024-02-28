const submitBtn = document.querySelector('#submit-button');
const username = document.querySelector('#username');
const blogTitle = document.querySelector('#blog-title');
const blogContent = document.querySelector('#blog-content');

// let blogPosts = [JSON.parse(localStorage.getItem('tempStorage'))];

let blogPosts = [];
let blog = {};

function loadFromLocalStorage(event) {
	let storedData = JSON.parse(localStorage.getItem('blogs'));

	if (storedData) {
		blogPosts = storedData;
	}
}

function updateLocalStorage() {
	localStorage.setItem('blogs', JSON.stringify(blogPosts));
}

submitBtn.addEventListener('click', function (event) {
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
