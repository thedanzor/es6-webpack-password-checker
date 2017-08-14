import translate from '../lang';

export default function(lang, messageType, value) {
	const text = messageType || 'initial';
	const message = translate(lang, text, value);

	const view = `
			<div class="password-message-wrapper warning">
				${message}
			</div>
		`;
	return view;
}
