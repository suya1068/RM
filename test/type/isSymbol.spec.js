import isSymbol from 'type/isSymbol';

describe('isSymbol', () => {
    it('return false if input type is not Symbol type.', () => {
        const given = [undefined, null, '', 1, {}, new RegExp(), new Date(), function () {}, new Map()];
        given.forEach(type => {
            expect(isSymbol(type)).toBe(false);
        });
    });

    it('return true if input type is symbol', () => {
        const symbol = Symbol('symbol');
        expect(isSymbol(symbol)).toBe(true);
    });
});
