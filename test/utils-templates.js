import test from 'ava';
import { viewInit, viewTemplate } from '../src/utils/templateMap';
import templates from '../src/views'; // Templates

test('Template Utility - Setup and validate basic templates', t => {
  viewInit(templates);

  const template = viewTemplate('defaultView');
  const view = template('en');

  t.is(
    view,
    `
			<div class="password-message-wrapper">
				Please enter a secure password
			</div>
		`
  );
});
