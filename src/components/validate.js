import translate from '../lang';
import updateView from './updateView';
import { getState } from '../utils/setupState';

let pwCritria = {
	leng: false,
	symbols: false,
	caps: false,
	lowercase: false,
	numb: false,
	empty: false
};

export function checkLeng(value) {
	value.length > 12 ? (pwCritria['leng'] = true) : (pwCritria['leng'] = false);
	value.length === 0
		? (pwCritria['empty'] = true)
		: (pwCritria['empty'] = false);
}

export function checkSymbols(value) {
	const criteria = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

	criteria.test(value)
		? (pwCritria['symbols'] = true)
		: (pwCritria['symbols'] = false);
}

export function checkMixed(value) {
	const lowerCase = /[a-z]/;
	const upperCase = /[A-Z]/;
	const numbers = /[0-9]/;

	lowerCase.test(value)
		? (pwCritria['lowercase'] = true)
		: (pwCritria['lowercase'] = false);

	upperCase.test(value)
		? (pwCritria['caps'] = true)
		: (pwCritria['caps'] = false);

	numbers.test(value)
		? (pwCritria['numb'] = true)
		: (pwCritria['numb'] = false);
}

export default function() {
	const state = getState();
	const { container, passwordInput } = state;

	if (passwordInput) {
		passwordInput.addEventListener('input', ({ target }) => {
			if (target) {
				const { value } = target;

				checkLeng(value);
				checkSymbols(value);
				checkMixed(value);

				updateView(pwCritria);
			}
		});
	}
}