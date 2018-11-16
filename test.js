var request = new XMLHttpRequest();

request.onload = function () {
	console.log('XHR onload');
	try {
		console.log('HTTP code:', request.status);
		var element = document.getElementById('status');
		element.textContent = 'XHR Loaded!'
	} catch (error) {
		console.log(error);
	}
}

request.ontimeout = function (event) {
	console.log('XHR ontimedout', event);
};

request.onerror = function (event) {
	console.log('XHR onerror', event);
};

document.addEventListener("turbolinks:load", function() {
	console.log('turbolinks:load');
	request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
	request.send();
});