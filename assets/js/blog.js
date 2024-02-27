const blogList = document.querySelector('#blog-list');

let storedData;

function retrieveFromLocalStorage() {
	storedData = JSON.parse(localStorage.getItem('blogs'));
	// console.log(storedData);
	renderBlogs();
}

function renderBlogs() {
	// resets the blogList div
	// blogList.innerHTML = '';
	// Loop through the blog list and render it to the page

	for (i = 0; i < storedData.length; i++) {
		// Get content in index in storedData array
		const blog = storedData[i];
		// Creates new div element
		const div = document.createElement('div');
		// Adds an index to the new div element
		div.setAttribute('data-index', i);
		// Adds class to the div element
		div.setAttribute('class', 'blog-card');
		// Append the div with the index to the blogList
		blogList.appendChild(div);

		// const blogTitle = blog.title;
		// console.log(blogTitle);
		// Creates new h2 element
		const h2 = document.createElement('h2');
		// Edits the content of the h2
		h2.textContent = blog.title;
		// Adds the h2 to the new div element
		div.appendChild(h2);

		// Creates an inner div for the content and the author
		const innerDiv = document.createElement('div');
		// Adds the div to the outer div (parent) element
		div.appendChild(innerDiv);

		//Creates a new p element for content
		const pContent = document.createElement('p');
		// Gives the new p element the class of content
		pContent.setAttribute('class', 'content');
		//Edits the content of pContent
		pContent.textContent = blog.content;
		// Adds the pContent to the inner div
		innerDiv.appendChild(pContent);

		// Creates new p element for author
		const pAuthor = document.createElement('p');
		// Gives the new p element the class of author
		pAuthor.setAttribute('class', 'author');
		//Edits the content of pAuthor
		pAuthor.textContent = `Posted by: ${blog.author}`;
		// Adds the pAuthor to the inner div
		innerDiv.appendChild(pAuthor);
	}
}

window.onload = retrieveFromLocalStorage;
