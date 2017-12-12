import mock from '../common/mock.js';
import Fetch from '../common/commonFetch.js';

mock();

export const GETDATA = 'GETDATA';

export function getData() {
    return function (dispatch) {
        Fetch('/hello/', function (data) {
            console.log(data);
            dispatch({type: GETDATA});
        });
    }
}
export function getData2() {
    return function (dispatch) {
        Fetch('/hello/world/', function (data) {
            console.log(data);
            dispatch({type: GETDATA});
        });
    }
}
