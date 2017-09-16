import test from 'ava';
import { viewInit, viewTemplate } from '../src/utils/templateMap';
import templates from '../src/views';
import { init, getState } from '../src/utils/setupState';
import updateView from '../src/components/updateView';

test('Update View Component - Update a view with a bad password', t => {
  viewInit(templates); // Initialize the views

  // Build the container
  const constructedContainer = document.createElement('div');
  const inputField = document.createElement('input');
  inputField.setAttribute('type', 'password');
  inputField.setAttribute('placeholder', 'Enter your password....');

  constructedContainer.appendChild(inputField);

  // Initialize the application state
  init({
    container: constructedContainer,
    passwordInput: inputField,
    config: {
      lang: 'en'
    }
  });

  // Build a password config that is near empty
  const status = {
    leng: false,
    symbols: false,
    caps: false,
    lowercase: true,
    numb: false,
    empty: false,
    strength: 1
  };

  // Execute the Component
  updateView(status);

  // Check the DOM for changes to test against
  const numbOfMessages = constructedContainer.querySelectorAll('.warning');

  // Run the tests
  t.is(numbOfMessages.length, 4);
});

test('Update View Component - Update a view with a good password', t => {
  viewInit(templates); // Initialize the views

  // Build the container
  const constructedContainer = document.createElement('div');
  const inputField = document.createElement('input');
  inputField.setAttribute('type', 'password');
  inputField.setAttribute('placeholder', 'Enter your password....');

  constructedContainer.appendChild(inputField);

  // Initialize the application state
  init({
    container: constructedContainer,
    passwordInput: inputField,
    config: {
      lang: 'en'
    }
  });

  // Build a password config that is near empty
  const status = {
    leng: true,
    symbols: true,
    caps: true,
    lowercase: true,
    numb: true,
    empty: false,
    strength: 5
  };

  // Execute the Component
  updateView(status);

  // Check the DOM for changes to test against
  const numbOfMessages = constructedContainer.querySelector('.warning');

  // Run the tests
  t.is(numbOfMessages, null);
});
