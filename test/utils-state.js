import test from 'ava';
import { init, getState } from '../src/utils/setupState';

test('State Utility - Setup and validate a basic state', t => {
	init({
		name: 'scott',
		lastname: 'jones',
		email: 'check github'
	});

	const { name, lastname, email } = getState();
	t.is(name, 'scott');
	t.is(lastname, 'jones');
	t.is(email, 'check github');
});
