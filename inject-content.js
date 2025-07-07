const script = document.createElement('script');
script.type = 'module';
script.src = chrome.runtime.getURL('./content.js');

script.onload = function () {
	this.remove(); // Remove the script element after it has loaded
};

(document.head || document.documentElement).appendChild(script);
