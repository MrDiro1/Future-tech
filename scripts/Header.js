function initHeader() {
	const selectors = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burgerButton: '[data-js-header-burger-button]',
	}

	const stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock',
	}

	const rootElement = document.querySelector(selectors.root)
	const overlayElement = rootElement.querySelector(selectors.overlay)
	const burgerButtonElement = rootElement.querySelector(selectors.burgerButton)

	const onBurgerButtonClick = () => {
		burgerButtonElement.classList.toggle(stateClasses.isActive)
		overlayElement.classList.toggle(stateClasses.isActive)
		document.documentElement.classList.toggle(stateClasses.isLock)
	}

	burgerButtonElement.addEventListener('click', onBurgerButtonClick)
}

export default initHeader
