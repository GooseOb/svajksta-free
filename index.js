// ==UserScript==
// @name         Svajksta free
// @namespace    https://greasyfork.org/ru/users/901750-gooseob
// @version      1.0.0
// @description  Allows text selecting on svajksta
// @author       GooseOb
// @license      MIT
// @match        https://svajksta.by/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=svajksta.by
// ==/UserScript==

(function() {
	const {body, html} = document;

	[
		'-webkit-touch-callout',
		'-webkit-user-select',
		'-khtml-user-select',
		'-moz-user-select',
		'user-select',
		'-webkit-tap-highlight-color'
	].forEach(style => {
		html.style[style] = 'unset';
	});
	body.style.cursor = 'unset';

	const listener = e => {e.stopPropagation()};
	const options = {capture: true};
	[
		'selectstart',
		'contextmenu',
		'click',
		'mousedown'
	].forEach(eventType => {
		body.addEventListener(eventType, listener, options);
	});
})();