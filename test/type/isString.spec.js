describe('isString', () => {
    function isString(data) {
        return typeof data === 'string';
    }

    it('return false, if input value is not string type.', () => {
        expect(isString(1)).toBe(false);
    });
});
