import {toast} from 'toastit';
import {getElement} from 'html-vision';

const BOARD_SELECTOR = 'wc-chess-board';

async function main() {
	const board = (await getElement(BOARD_SELECTOR, {timeoutMs: -1})) as any;

	board.game.on('Load', () => {
		toast('New game loaded.');
		board.game.setOptions({animationType: 'medium'});
	});
}

main();
