'use strict';

const pfx = require('pfx');

const prefixedEvents = {
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

module.exports = () => prefixedEvents[pfx('transition')];
