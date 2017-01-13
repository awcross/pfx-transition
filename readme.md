# pfx-transition [![Build Status](https://travis-ci.org/awcross/pfx-transition.svg?branch=master)](https://travis-ci.org/awcross/pfx-transition)

> Browser prefix helper for transition event


## Install

```
$ npm install --save pfx-transition
```


## Usage

```js
const transition = require('pfx-transition');

const slides = document.querySelectorAll('.slide');
slides.addEventListener(transition.end, () => {
	// the transition has finished
}, false);
```


## API

### transition

Object containing two properties, `start` and `end`, that map to [transitionstart](https://developer.mozilla.org/en-US/docs/Web/Events/transitionstart) and [transitionend](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend), respectively, and include the correct vendor transition prefix (if needed).


## License

MIT © [Alex Cross](https://alexcross.io)
