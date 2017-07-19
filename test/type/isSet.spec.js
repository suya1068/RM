import isSet from 'type/isSet';

describe('isSet', () => {
    it('return false if input type is not Set type.', () => {
        const given = [undefined, null, '', 1, {}, new RegExp(), new Date(), function () {}, new Map(), Symbol('symbol')];
        given.forEach(type => {
            expect(isSet(type)).toBe(false);
        });
    });

    it('return true if input type is Set type.', () => {
        expect(isSet(new Set())).toBe(true);
    });
});
