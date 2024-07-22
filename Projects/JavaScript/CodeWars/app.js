/**
 * @param {string} str
 * @returns {number}
 */
const getCount = str => (str.match(/[aeiou]/gi) || []).length;

/**
 * @param {number[]} numbers
 * @returns {number[]}
 */
const removeSmallest = numbers => numbers.filter((_, i) => i !== numbers.indexOf(Math.min(...numbers)));

/**
 * @param {string} s
 * @returns {string}
 */
const getMiddle = s => s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);

/**
 * @returns {string}
 */
String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

/**
 * @param {string} str
 * @returns {string}
 */
const disemvowel = str => str.replace(/[aeiou]/gi, '');

/**
 * @param {number} num
 * @returns {number}
 */
const squareDigits = num => +num.toString().split('').map(n => n ** 2).join('');

/**
 * @param {string} s
 * @returns {number}
 */
const findShort = s => Math.min(...s.split(' ').map(word => word.length));

/**
 * @param {Array} l
 * @returns {number[]}
 */
const filter_list = l => l.filter(v => typeof v === 'number');

/**
 * @param {string} cc
 * @returns {string}
 */
const maskify = cc => cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);

/**
 * @param {Array.<Array.<number>>} data
 * @returns {string[]}
 */
const openOrSenior = data => data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');

/**
 * @param {number[]} integers
 * @returns {number}
 */
const findOutlier = integers => {
    return integers.filter(n => n % 2 === 0).length === 1 ? integers.filter(n => n % 2 === 0)[0] : integers.filter(n => n % 2 !== 0)[0];
};