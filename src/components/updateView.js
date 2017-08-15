import { getState } from '../utils/setupState';
import { viewTemplate } from '../utils/templateMap';

export default function(results) {
	const state = getState();
	const { container, config } = state;
	const { lang } = config;
	const { leng, symbols, caps, lowercase, numb, empty, strength } = results;
	const messageTemplate = viewTemplate('message');
	const defaultTemplate = viewTemplate('defaultView');
	const statusTemplate = viewTemplate('status');

	container.innerHTML = '';
	// Build new messages
	const div = document.createElement('div');
	div.className = 'password-feedback';

	if (strength > 0) {
		const strengthView = statusTemplate(lang, strength);
		div.innerHTML += strengthView;
	}

	if (leng === false) {
		const lengMessage = messageTemplate(lang, 'leng', '12');
		div.innerHTML += lengMessage;
	}

	if (symbols === false) {
		const symbolMessage = messageTemplate(lang, 'symbols');
		div.innerHTML += symbolMessage;
	}

	if (caps === false) {
		const capsMessage = messageTemplate(lang, 'caps');
		div.innerHTML += capsMessage;
	}

	if (lowercase === false) {
		const lowerCaseMsg = messageTemplate(lang, 'lowerCase');
		div.innerHTML += lowerCaseMsg;
	}

	if (numb === false) {
		const numbMessage = messageTemplate(lang, 'numb');
		div.innerHTML += numbMessage;
	}

	if (empty === true) {
		const emptyMessage = defaultTemplate(lang, 'initial');
		div.innerHTML = emptyMessage;
	}

	container.appendChild(div);
}
