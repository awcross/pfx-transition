'use strict';

var pfx = require('pfx');

var prefixedEvents = {
	WebkitTransition: {
		start: 'webkitTransitionStart',
		end: 'webkitTransitionEnd'
	},

	MozTransition: {
		start: 'transitionstart',
		end: 'transitionend'
	},

	OTransition: {
		start: 'oTransitionStart otransitionstart',
		end: 'oTransitionEnd otransitionend'
	},

	transition: {
		start: 'transitionstart',
		end: 'transitionend'
	}
};

module.exports = function () {
	return prefixedEvents[pfx('transition')];
};

