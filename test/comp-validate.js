import test from 'ava';
import validate, {
  checkLeng,
  checkSymbols,
  checkMixed,
  returnState,
  resetState
} from '../src/components/validate';

test('Validate Component - Check the length of a small password', t => {
  resetState(); // Reset the strength value
  checkLeng('pass');

  const { leng } = returnState();

  t.false(leng, 'length is not enough');
});

test('Validate Component - Check the length of a long password', t => {
  resetState(); // Reset the strength value
  checkLeng('passwordthatisreallylong');

  const { leng } = returnState();

  t.true(leng, 'Length is enough');
});

test('Validate Component - Check password for symbols - no symbols', t => {
  resetState(); // Reset the strength value
  checkSymbols('passwordthatisreallylong');

  const { symbols } = returnState();

  t.false(symbols, 'Password has no symbols');
});

test('Validate Component - Check password for symbols - 3 symbols', t => {
  resetState(); // Reset the strength value
  checkSymbols('password!thatisreally@long!');

  const { symbols } = returnState();

  t.true(symbols, 'Password has symbols');
});

test('Validate Component - Check mixed passwords for upper and lower case - not mixed', t => {
  resetState(); // Reset the strength value
  checkMixed('thispasswordisonlylowercase');

  const { caps, lowercase, numb } = returnState();

  t.false(caps);
  t.true(lowercase);
  t.false(numb);
});

test('Validate Component - Check mixed passwords for upper and lower case - mixed', t => {
  resetState(); // Reset the strength value
  checkMixed('HelloIAmMixedAnd!@lo1ng!');

  const { caps, lowercase, numb } = returnState();

  t.true(caps);
  t.true(lowercase);
  t.true(numb);
});

test('Validate Component - Check mixed passwords for upper and lower case - all caps', t => {
  resetState(); // Reset the strength value
  checkMixed('ALLCAPS');

  const { caps, lowercase, numb } = returnState();

  t.true(caps);
  t.false(lowercase);
  t.false(numb);
});

test('Validate Component - Check Password Strengths - high', t => {
  resetState(); // Reset the strength value
  checkMixed('HelloIAmMixedAnd!@lo1ng!');
  checkSymbols('HelloIAmMixedAnd!@lo1ng!');
  checkLeng('HelloIAmMixedAnd!@lo1ng!');

  const { strength } = returnState();

  t.is(strength, 5);
});
