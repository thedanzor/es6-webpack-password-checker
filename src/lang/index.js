export default function(lang, key, value) {
	const translations = {
		nl: {
			initial: `${value} ......`,
			leng: `Your password is atleast ${value} in length`,
			caps: `Your password contains no Capitals`,
			lowerCase: `Your password does not contain lower-case letters`,
			numb: `Your password does not contain numbers`,
			symbols: `Your password does not contain symbols`
		},
		en: {
			initial: `Please enter a secure password`,
			leng: `Your password is atleast ${value} in length`,
			caps: `Your password contains no Capitals`,
			lowerCase: `Your password does not contain lower-case letters`,
			numb: `Your password does not contain numbers`,
			symbols: `Your password does not contain symbols`
		}
	};

	return translations[lang][key];
}
