import test from 'ava';
import validate, {
	checkLeng,
	checkSymbols,
	checkMixed,
	returnState,
	resetState
} from '../src/components/validate';

test.beforeEach(t => {
	resetState(); // Reset the strength value
});

test('Validate Component - Check the length of a small password', t => {
	checkLeng('pass');

	const { leng } = returnState();

	t.false(leng, 'length is not enough');
});

test('Validate Component - Check the length of a long password', t => {
	checkLeng('passwordthatisreallylong');

	const { leng } = returnState();

	t.true(leng, 'Length is enough');
});

test('Validate Component - Check password for symbols - no symbols', t => {
	checkSymbols('passwordthatisreallylong');

	const { symbols } = returnState();

	t.false(symbols, 'Password has no symbols');
});

test('Validate Component - Check password for symbols - 3 symbols', t => {
	checkSymbols('password!thatisreally@long!');

	const { symbols } = returnState();

	t.true(symbols, 'Password has symbols');
});

test('Validate Component - Check mixed passwords for upper and lower case - not mixed', t => {
	checkMixed('thispasswordisonlylowercase');

	const { caps, lowercase, numb } = returnState();

	t.false(caps);
	t.true(lowercase);
	t.false(numb);
});

test('Validate Component - Check mixed passwords for upper and lower case - mixed', t => {
	checkMixed('HelloIAmMixedAnd!@lo1ng!');

	const { caps, lowercase, numb } = returnState();

	t.true(caps);
	t.true(lowercase);
	t.true(numb);
});

test('Validate Component - Check mixed passwords for upper and lower case - all caps', t => {
	checkMixed('ALLCAPS');

	const { caps, lowercase, numb } = returnState();

	t.true(caps);
	t.false(lowercase);
	t.false(numb);
});

test('Validate Component - Check Password Strengths - high', t => {
	checkMixed('HelloIAmMixedAnd!@lo1ng!');
	checkSymbols('HelloIAmMixedAnd!@lo1ng!');
	checkLeng('HelloIAmMixedAnd!@lo1ng!');

	const { strength } = returnState();

	t.is(strength, 5);
});
