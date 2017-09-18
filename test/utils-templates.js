import test from 'ava';
import { viewInit, viewTemplate } from '../src/utils/templateMap';
import templates from '../src/views'; // Templates

test('Template Utility - Setup and validate basic templates', t => {
	viewInit(templates);

	const defaultTemplate = viewTemplate('defaultView');
	const defaultView = defaultTemplate('en');

	// Show the status template with a completed template
	const statusTemplate = viewTemplate('status');
	const statusView = statusTemplate('en', 5);

	// Show the status template with a completed template
	const messageTemplate = viewTemplate('message');
	const messageView = messageTemplate('en', 'caps');

	// Test default view
	t.is(
		defaultView,
		`
			<div class="password-message-wrapper">
				Please enter a secure password
			</div>
		`
	);

	// Test status view
	t.is(
		statusView,
		`
			<div
				class="password-status-wrapper"
				data-status="5"
				data-tooltip="You should aim to be in the green">
				<div class="status-one"></div>
				<div class="status-two"></div>
				<div class="status-three"></div>
				<div class="status-four"></div>
				<div class="status-five"></div>
			</div>
		`
	);

	// Test message view
	t.is(
		messageView,
		`
			<div class="password-message-wrapper warning">
				Your password contains no Capitals
			</div>
		`
	);
});
