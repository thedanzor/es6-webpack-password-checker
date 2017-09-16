import test from 'ava';
import { viewInit, viewTemplate } from '../src/utils/templateMap';
import templates from '../src/views';
import { init, getState } from '../src/utils/setupState';
import app from '../src/App';

test('Execute application - Encourage users to enter password', t => {
	viewInit(templates); // Initialize the views

	// Build the container
	const constructedContainer = document.createElement('div');
	const inputField = document.createElement('input');
	inputField.setAttribute('type', 'password');
	inputField.setAttribute('placeholder', 'Enter your password....');

	constructedContainer.appendChild(inputField);

	app(constructedContainer, {
		lang: 'en'
	});

	// Check the DOM for changes to test against
	const initialMessageWrapper = constructedContainer.querySelector(
		'.password-message-wrapper'
	);
	const text = initialMessageWrapper.innerHTML.replace(/^\s+|\s+$/g, '');

	// Run the tests
	t.is(text, 'Please enter a secure password');
});

test('Execute application - If there is no input field given', t => {
	viewInit(templates); // Initialize the views

	// Build the container
	const constructedContainer = document.createElement('div');

	app(constructedContainer, {
		lang: 'en'
	});

	// Check the DOM for changes to test against
	const initialMessageWrapper = constructedContainer.querySelector(
		'.password-message-wrapper'
	);

	// Run the tests
	t.is(initialMessageWrapper, null);
});
