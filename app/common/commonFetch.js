function commonFetch(url, callback) {
    fetch(url)
        .then(function (response) {
            console.log(response);
            if (response.status == 200) {
                return response.json();
            } else if (response.status == 401) {
                goToLogin();
            } else {
                catchError(response);
            }
        })
        .then(function (data) {
            if (callback) {
                callback(data);
            }
        });
}

function goToLogin() {}

function catchError(response) {}

module.exports = commonFetch;