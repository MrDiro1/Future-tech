import pixToRem from './utils/pixToRem.js'

const rootSelector = '[data-js-expandable-content]'

class ExpandableContent {
	selectors = {
		root: rootSelector,
		button: '[data-js-expandable-content-button]',
	}

	stateClasses = {
		isExpanded: 'is-expanded',
	}

	animationParams = {
		duration: 500,
		easing: 'ease',
	}

	constructor(rootElement) {
		this.rootElement = rootElement
		this.buttonElement = rootElement.querySelector(this.selectors.button)
		this.bindEvents()
	}

	expand() {
		const { offsetHeight, scrollHeight } = this.rootElement

		this.rootElement.classList.add(this.stateClasses.isExpanded)
		this.rootElement.animate(
			[
				{
					maxHeight: `${pixToRem(offsetHeight)}rem`,
				},
				{
					maxHeight: `${pixToRem(scrollHeight)}rem`,
				},
			],
			this.animationParams
		)
	}

	onButtonClick = () => {
		this.expand()
	}

	bindEvents() {
		this.buttonElement.addEventListener('click', this.onButtonClick)
	}
}

class ExpandableContentCollection {
	constructor() {
		this.init()
	}

	init() {
		document.querySelectorAll(rootSelector).forEach(element => {
			new ExpandableContent(element)
		})
	}
}

export default ExpandableContentCollection
