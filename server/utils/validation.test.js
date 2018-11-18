const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {

    it('should reject non-string value', () => {
        var res = isRealString(99);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var res = isRealString('     ');
        expect(res).toBe(false);
    });

    it('should allow string with none-space characters', () => {
        var res = isRealString('  Tom   ');
        expect(res).toBe(true);
    });

});