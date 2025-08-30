import {getElement} from 'html-vision'
import {toast} from 'toastit'

const BOARD_SELECTOR = 'wc-chess-board'

let board: Board
let keydownEventListener = async (event: KeyboardEvent) => {
	const target = event.target as HTMLElement
	if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
		return
	}

	if (event.altKey) {
		return
	}

	switch (event.key) {
		case 'l':
			analyzeInLichess()
			break
		case 'r':
			board.game.resign()
			break
		case 'a':
			const analysisButton = await getElement('[aria-label="Self Analysis"]')
			analysisButton?.click()
			break
	}
}

async function main() {
	board = await getElement(BOARD_SELECTOR, {timeoutMs: -1})

	board.game.on('Load', () => {
		// toast('New game loaded.')

		board.game.setOptions({animationType: 'medium'})

		window.removeEventListener('keydown', keydownEventListener)
		window.addEventListener('keydown', keydownEventListener)
	})
}

function analyzeInLichess() {
	if (board) {
		const pgn = board.game.getPGN()
		window.postMessage({type: 'STORE_PGN', pgn}, '*')
	} else {
		console.log('Game object not found or does not have getPGN() method.')
	}
}

main()
