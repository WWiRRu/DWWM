/**
 * @param {string} str
 * @returns {number}
 */
function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    return str.split("").filter(letter => vowels.includes(letter)).length;
}
/**
 * @param {number[]} numbers
 * @returns {number[]}
 */
function removeSmallest(numbers) {
    const minNote = Math.min(...numbers);
    const indexToRemove = numbers.findIndex(value => value === minNote);
    const filteredNotes = [...numbers];
    filteredNotes.splice(indexToRemove, 1);
    return filteredNotes;
}
/**
 * @param {string} s
 * @returns {string}
 */
function getMiddle(s) {
    let middle = Math.floor(s.length / 2);
    if(s.length % 2 === 0){
        return s[middle - 1] + s[middle];
    } else {
        return s[middle];
    }
}
/**
 * @returns {string}
 */
String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
};
/**
 * @param {string} str
 * @returns {string}
 */
function disemvowel(str) {
    return str.split('').filter(letter => !['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase())).join('');
}
/**
 * @param {number} num
 * @returns {number}
 */
function squareDigits(num){
    return Number(num.toString().split('').map((n) => Math.pow(Number(n), 2)).join(''));
}
/**
 * @param {string} s
 * @returns {number}
 */
function findShort(s){
    return Math.min(...s.split(' ').map(word => word.length));
}
/**
 * @param {Array} l
 * @returns {number[]}
 */
function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'});
}

/**
 * @param {string} cc
 * @returns {string}
 */
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
/**
 * @param {Array.<Array.<number>>} data
 * @returns {string[]}
 */
function openOrSenior(data){
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
}
/**
 * @param {number[]} integers
 * @returns {number}
 */
function findOutlier(integers){
    return integers.filter(n => n % 2 === 0).length === 1 ? integers.filter(n => n % 2 === 0)[0] : integers.filter(n => n % 2 !== 0)[0];
}

console.log(findOutlier([0, 1, 2, 4, 6, 8, 10]));