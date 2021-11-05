/**
 * 
 * @param val is number 
 * @returns number formated
 * 
 * 3678123 -> 3,678,123 
 * 1 -> 1
 * 100 -> 100
 * 1234 -> 1,234
 * 'sd12' -> 'sd12'
 */

module.exports = function numberFormat (val) {
	return typeof val !== 'number' ? val : new Intl.NumberFormat().format(val);
};
