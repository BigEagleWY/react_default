var getRandomNum = function (begin, end) {
    begin = parseInt(begin);
    end = parseInt(end);
    var num = begin + Math.round(Math.random() * (end - begin));
    return num;
}
var getRandomCode = function (len, type) {
    if (!type) {
        type = 0;
    }
    var resource = '';
    var str = 'abcdefghijklmnopqrstuvwxyz';
    var strAndNum = 'abcdefghijklmnopqrstuvwxyz012345678901234567890123456789';
    var num = '0123456789';
    var result = [];
    switch (type) {
        case 0:
            resource = str;
            break;
        case 1:
            resource = strAndNum;
            break;
        case 2:
            resource = num;
            break;
        default:
            resource = str;
    }
    var temp = '';
    for (var i = 0; i < len; i++) {
        temp = resource[Math.floor(Math.random() * resource.length)];
        result.push(temp);
    }
    return result.join('');
}
var mock = {
    getRandomCode: getRandomCode,
    getRandomNum: getRandomNum,
    getEmail: function () {
        return getRandomCode(8) + "@" + getRandomCode(5) + ".com";
    },
    getMobile: function (befThree) {
        return befThree + getRandomCode(8, 2);
    },
    getBirthday:function(){
        return getRandomNum(1980,2017)+'-'+getRandomNum(1,12)+'-'+getRandomNum(1,30);
    },
    getSex:function(){
        return Math.round(Math.random())==1?'男':'女';
    },
    getUrl:function(){
        return 'www.'+getRandomCode(10)+'.com';
    }
}
module.exports = mock;