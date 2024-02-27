const submitBtn = document.querySelector('#submit-button');
const username = document.querySelector('#username');
const blogTitle = document.querySelector('#blog-title');
const blogContent = document.querySelector('#blog-content');

// let blogPosts = [JSON.parse(localStorage.getItem('tempStorage'))];

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

submitBtn.addEventListener('click', function () {
	blog = {
		title: blogTitle.value,
		content: blogContent.value,
		author: username.value,
	};

	blogPosts.push(blog);

	updateLocalStorage();
});

window.onload = loadFromLocalStorage;
