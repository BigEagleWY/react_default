var util = require('../app/common/util.js');

describe('add', () => {
    for (let i = 0; i < 10; i++) {
        it('add', () => {
            expect(util.add(i, 10)).toEqual(i + 10);
        })

    }
});