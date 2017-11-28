var mock = require('../mock/mock.js');
for (var i = 0; i < 10; i++) {
    test('random number', () => {
        expect(mock.getRandomNum(10, 20)).toBeGreaterThan(9);
        expect(mock.getRandomNum(10, 20)).toBeLessThan(21);
    });
}
for (var i = 0; i < 10; i++) {
    test('random code len', () => {
        expect(mock.getRandomCode(i).length).toBe(i);
    });
}
for (var i = 0; i < 10; i++) {
    test('random code', () => {
        expect(mock.getRandomCode(10)).toMatch(/[a-z]/);
    });
}
for (var i = 0; i < 10; i++) {
    test('random code and number', () => {
        expect(mock.getRandomCode(10, 1)).toMatch(/[0-9]/);
    });
}
for(var i=0;i<10;i++){
    console.log(mock.getMobile(187));
    console.log(mock.getEmail());
    console.log(mock.getBirthday());
    console.log(mock.getSex());
    console.log(mock.getUrl());
}