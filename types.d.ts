declare global {
	type BoardGameEvent =
		| 'all'
		| 'CheatDetectionError'
		| 'CreateGame'
		| 'CreateContinuation'
		| 'DeletePosition'
		| 'Load'
		| 'Move'
		| 'MoveBackward'
		| 'MoveForward'
		| 'MoveVariation'
		| 'PromoteVariation'
		| 'SelectLineEnd'
		| 'SelectLineStart'
		| 'SelectNode'
		| 'Reload'
		| 'ResetToMainLine'
		| 'Undo'
		| 'UpdateOptions'
		| 'UpdateECO'
		| 'ErrorECO'
		| 'LineUpdated'
		| 'NodeUpdated'
		| 'SetBoardPosition'
		| 'ModeChanged'
		| 'Create'
		| 'AnalysisStart'
		| 'AnalysisEnd'

	interface Board extends HTMLElement {
		game: {
			getOptions(): any
			setOptions(opts: any): void
			on(event: BoardGameEvent, handler: () => void): void
			listeners: Array<{type: BoardGameEvent; handler: Function}>
			getPGN: () => string
			resign: () => void
		}
		state: any
		init(): void
	}
}

export {}
