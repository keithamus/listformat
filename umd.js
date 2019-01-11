(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.listFormat = factory());
}(this, function () { 'use strict';

	const ListFormat = typeof Intl === 'object' && typeof Intl.ListFormat === 'function' && Intl.ListFormat('en');
	const listFormatItem = (o, x, i, xs) => !i ? o + x : i && xs.length === 2 ? o + ' and ' + x : i === xs.length -1 ? o + ', and ' + x : o + ', ' + x;
	const listFormat = xs => ListFormat ? ListFormat.format(xs) : xs.reduce(listFormatItem, '');

	return listFormat;

}));
