export default function(lang, key, value) {
	const translations = {
		nl: {
			initial: `${value} ......`,
			leng: `Your password is not atleast ${value} in length`,
			caps: `Your password contains no Capitals`,
			lowerCase: `Your password does not contain lower-case letters`,
			numb: `Your password does not contain numbers`,
			symbols: `Your password does not contain symbols`,
			tooltip: `You should aim to be in the green`
		},
		en: {
			initial: `Please enter a secure password`,
			leng: `Your password is not atleast ${value} in length`,
			caps: `Your password contains no Capitals`,
			lowerCase: `Your password does not contain lower-case letters`,
			numb: `Your password does not contain numbers`,
			symbols: `Your password does not contain symbols`,
			tooltip: `You should aim to be in the green`
		}
	};

	return translations[lang][key];
}
