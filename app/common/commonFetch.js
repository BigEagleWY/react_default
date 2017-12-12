function commonFetch(url, callback) {
    fetch(url)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })
        .then(function (data) {
           if(callback){
               callback(data);
           }
        });
}
module.exports = commonFetch;