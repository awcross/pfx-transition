const test = require('tape');
const m = require('./');

test(t => {
	const result = m('transition');

	t.is(typeof result, 'object');
	t.is(result.start, 'transitionstart');
	t.is(result.end, 'transitionend');
	t.end();
});
