import test from 'ava';
import lang from '../src/lang';

test('Language Support - Give the language module 2 languages', t => {
  const english = lang('en', 'leng', 5);
  const dutch = lang('nl', 'initial', 5);

  t.is(english, `Your password is not atleast 5 in length`);
  t.is(dutch, `5 ......`);
});
