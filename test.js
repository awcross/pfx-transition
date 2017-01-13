const test = require('tape');
const m = require('./');

test(t => {
	t.is(typeof m, 'object');
	t.is(m.start, 'transitionstart');
	t.is(m.end, 'transitionend');
	t.end();
});
