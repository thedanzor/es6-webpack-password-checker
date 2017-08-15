import translate from '../lang';

export default function(lang, strength) {
	const message = translate(lang, 'tooltip');

	const view = `
			<div
				class="password-status-wrapper"
				data-status="${strength}"
				data-tooltip="${message}">
				<div class="status-one"></div>
				<div class="status-two"></div>
				<div class="status-three"></div>
				<div class="status-four"></div>
				<div class="status-five"></div>
			</div>
		`;
	return view;
}
