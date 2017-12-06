import mock from '../common/mock.js';

mock();

export const GETDATA = 'GETDATA';

export function getData() {
    return function (dispatch) {

        fetch('/hello/')
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(function (data) {
                console.log(data);
                dispatch({type: GETDATA});
            });
    }
}
export function getData2() {
    return function (dispatch) {

        fetch('/hello/world/')
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(function (data) {
                console.log(data);
                dispatch({type: GETDATA});
            });
    }
}


