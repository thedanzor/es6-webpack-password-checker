import { viewInit, viewTemplate } from './utils/templateMap'; // Template mapping
import templates from './views'; // Templates
import { init } from './utils/setupState';

import validate from './components/validate'; // Main component

// Snippet starts here
export default function(container, config) {
	viewInit(templates); // Setup templates / views

	const { lang } = config; // Set the language
	const passwordField = container.querySelector('input'); // Set the inputfield

	if (passwordField) {
		// Build the initial view
		const template = viewTemplate('defaultView');
		const view = template(lang);

		// We build a node element that we can write views too
		// For demo purposes we will use innerHTML in a 'scoped' way.
		//
		// InnerHTML is best used inside the memory and not on the document
		// This is because InnerHTML is very brute-force way of writing which
		// changes the node tree, this affect can cause iframes to clear and for
		// other things to break.
		const constructedContainer = document.createElement('div');
		constructedContainer.innerHTML = view;

		// Append the container to the form
		container.appendChild(constructedContainer);

		// Build the state for the app to easily access information
		init({
			container: constructedContainer,
			passwordInput: passwordField,
			config
		});

		// Start validating
		validate();
	}
}
