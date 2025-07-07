chrome.storage.local.get('savedPGN', (data) => {
	// console.log(data);
	const pgn = data.savedPGN

	if (pgn) {
		// Find the unique textarea on the page
		const textarea = document.querySelector('textarea')
		if (textarea) {
			textarea.value = pgn // Set the textarea value to the saved PGN

			// Remove the PGN from storage after pasting
			chrome.storage.local.remove('savedPGN', () => {
				console.log('PGN removed from storage after pasting.')
			})

			document.querySelector<HTMLElement>('#form3-analyse')?.click()
			document.querySelector<HTMLElement>('main [type=submit]')?.click()
		} else {
			console.log('Textarea not found on the Lichess page.')
		}
	} else {
		console.log('No PGN found in storage.')
	}
})
