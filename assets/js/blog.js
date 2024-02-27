function retrieveFromLocalStorage() {
	let storedData = JSON.parse(localStorage.getItem('blogs'));
	// console.log(storedData);
}

window.onload = retrieveFromLocalStorage;
