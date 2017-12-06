import fetchMock from 'fetch-mock';
import Mock from 'mockjs';
var data =  Mock.mock({
    'list|1-10': [{
        'id|+1': 1,
        'name|1-5':'da'
    }]
});
var data2 =  Mock.mock({
    'list|1-10': [{
        'id|+1': 10
    }]
});
var mockMain = function () {
    fetchMock.get('/hello/', data);
    fetchMock.get('/hello/world/', data2);
}

module.exports = mockMain;