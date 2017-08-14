import translate from '../lang';

export default function(lang, messageType) {
	const text = messageType || 'initial';
	const message = translate(lang, text);

	const view = `
			<div class="password-message-wrapper">
				${message}
			</div>
		`;
	return view;
}
