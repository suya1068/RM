import isSymbol from 'type/isSymbol';

describe('isSymbol', () => {
    it('return false if input type is not symbol', () => {
        const given = [undefined, null, '', 1, new RegExp(), new Date(), function () {}, new Map(), new Set()];
        given.forEach(type => expect(isSymbol(type)).toBe(false));
    });
});
