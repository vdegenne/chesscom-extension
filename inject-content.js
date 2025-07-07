const script = document.createElement('script')
script.type = 'module'
script.src = chrome.runtime.getURL('./content.js')

script.onload = function () {
	this.remove() // Remove the script element after it has loaded
}
;(document.head || document.documentElement).appendChild(script)

// Listen for messages from the injected script
window.addEventListener('message', (event) => {
	// Check if the message is from the injected script
	if (event.source !== window) return // Ignore messages from other sources
	if (event.data.type === 'STORE_PGN') {
		// Store the PGN in chrome storage
		chrome.storage.local.set({savedPGN: event.data.pgn}, () => {
			// console.log("PGN has been stored in storage.");
		})
		chrome.runtime.sendMessage({action: 'openLichessTab'})
	}
})
