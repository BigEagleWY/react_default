var get=require('../app/common/get.js');

describe('multi', () => {
    for (let i = 0; i < 10; i++) {
        it('multi', () => {
            expect(get.multi(i, 10)).toEqual(i * 10);
        });
    }
});
