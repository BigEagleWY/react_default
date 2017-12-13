var util = require('../app/common/util.js');

test('delete all blank',function(){
    expect(util.trim('  abc  def  ',1)).toBe('abcdef');
});
test('delete front and behind blank',function(){
    expect(util.trim('  abc  def  ',2)).toBe('abc  def');
});
test('delete front blank',function(){
    expect(util.trim('  abc  def  ',3)).toBe('abc  def  ');
});
test('delete behind blank',function(){
    expect(util.trim('  abc  def  ',4)).toBe('  abc  def');
});

test('begin up case',function(){
    expect(util.changeCase('abcdef',1)).toBe('Abcdef');
});
test('begin low case',function(){
    expect(util.changeCase('abcdef',2)).toBe('aBCDEF');
});
test('toggle case',function(){
    expect(util.changeCase('abCDef',3)).toBe('ABcdEF');
});
test('all up case',function(){
    expect(util.changeCase('abcdef',4)).toBe('ABCDEF');
});
test('all low case',function(){
    expect(util.changeCase('ABCDEF',5)).toBe('abcdef');
});

test('repeat string',function(){
    expect(util.repeatStr('abc',3)).toBe('abcabcabc');
});

test('replace all',function(){
    expect(util.replaceAll('abcdef','cd','123')).toBe('ab123ef');
});

test('remove repeat item in array',function(){
    expect(util.removeRepeatArray(['1',2,3,1,2,6])).toEqual(['1',2,3,1,6]);   
});