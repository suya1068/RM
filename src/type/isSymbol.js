/**
 * determine if type is symbol.
 * @param {*} data
 * @returns {boolean}
 */
function isSymbol(data) {
    return typeof data === 'symbol';
}

export default isSymbol;
