/**
 * @file  鏂囨。鍔犺浇绫�
 * @author zhangzhe(zhangzhe@baidu.com)
 */
(function () {

    var HTTP_PROTO = 'http://';
    var HTTPS_PROTO = 'https://';

    var pcReaderJsUrl_v1 = 'http://img.baidu.com/img/iknow/wenku/kaifangyun/api.min.js';
    var wapReaderJsUrl_v1 = 'http://img.baidu.com/img/iknow/wenku/kaifangyun/mobile/api.min.js';
    var wapReaderCssUrl_v1 = 'http://img.baidu.com/img/iknow/wenku/kaifangyun/mobile/api.min.css';

    var pcXReaderUrlV2 = 'static.bcedocument.com/reader/v2/pc/xreader/xreader.html';
    var pcReaderJsUrlV2 = 'static.bcedocument.com/reader/v2/pc/api/api.min.js';
    var pcReaderCssUrlV2 = 'static.bcedocument.com/reader/v2/pc/api/api.min.css';
    var wapXReaderUrlV2 = 'static.bcedocument.com/reader/v2/wap/xreader/index.html';
    var wapReaderJsUrlV2 = 'static.bcedocument.com/reader/v2/wap/api/api.min.js';
    var wapReaderCssUrlV2 = 'static.bcedocument.com/reader/v2/wap/api/api.min.css';

    function doError(err) {
        console.log(err);
        alert(err);
    }
    function checkCommonOption(option) {
        var err = "";
        if (!option.host) {
            err = "缂哄皯host閰嶇疆";
            doError(err);
            return false;
        }else if (!option.token) {
            err = "缂哄皯token閰嶇疆";
            doError(err);
            return false;
        }else if (!option.docId) {
            err = "缂哄皯docId鍙傛暟";
            doError(err);
            return false;
        }
        return true;
    }

    function checkPcOption(option) {
        if (!checkCommonOption(option)) {
            return false;
        }
        if (!option.toolbarConf) {
            var err = "缂哄皯toolbarConf閰嶇疆";
            doError(err);
            return false;
        } else if (typeof option.toolbarConf.full == "undefined") {
            var err = "缂哄皯toolbarConf.full閰嶇疆";
            doError(err);
            return false;
        }
        return true;
    }

    function checkMobileOption(option) {
        return checkCommonOption(option);
    }

    function loadV1Document(container, option) {
        if (isMobile()) {
            if (!checkMobileOption(option)) {
                return;
            }
            option.container = container;
            loadCss(wapReaderCssUrl_v1);
            // 鎵嬫満涓婄敱浜庡姞杞介€熷害姣旇緝鎱紝涓€瀹氳鐢ㄥ紓姝ユ柟寮忓姞杞絡s
            loadScript(wapReaderJsUrl_v1, function () {
                window.wenku.reader(option);
            });
        }
        else {
            if (!checkPcOption(option)) {
                return;
            }
            loadScript(pcReaderJsUrl_v1);
            option.doc_id = option.docId;
            option.contanier = container; // 瑙ｅ喅pc涓婄殑鎷煎啓閿欒
            window.Wenku = option;
        }
    }
    function getProtoByHost(option) {
        if (option.serverHost.substr(0, 5) === 'https') {
            return HTTPS_PROTO;
        } else {
            return HTTP_PROTO;
        }
    }

    function loadV2Document(container, option) {
        if (!option.serverHost) {
            option.serverHost = 'http://doc.baidubce.com';
        }
        var PROTO = HTTP_PROTO;
        PROTO = getProtoByHost(option);
        option.apiPath = '/v2/reader?';
        option.tokenPath = 'gettoken';                                 // 鑾峰彇token锛屾病鏈塼oken鏃堕渶瑕佸～鍐�
        option.docInfoPath = 'getdocinfo';                              // 鑾峰彇鏂囨。淇℃伅
        option.powerPath = 'getpower';                                 // 鑾峰彇宸ュ叿鏍忓姛鑳�
        if (isMobile()) {
            if (!checkMobileOption(option)) {
                return;
            }
            option.getcontentPath = 'getcontent';                         // 鑾峰彇鏂囨。鍐呭
            option.JS_URL = PROTO + wapReaderJsUrlV2;
            option.CSS_URL = PROTO + wapReaderCssUrlV2;
            option.container = container;
            option.apiUrl = PROTO + wapXReaderUrlV2;
            option.tag = 'opencloud';
            console.log(option);
            loadCss(option.CSS_URL);
            loadScript(option.JS_URL);
            window.Wenku=option;
        }
        else {
            if (!checkPcOption(option)) {
                return 
            }
            option.downloadPath = 'download';
            option.checkquotaPath = 'checkquota';
            option.contentPath = 'getcontent';
            option.bcsUrlPath = 'gethtml';
            option.JS_URL = PROTO + pcReaderJsUrlV2;
            option.CSS_URL = PROTO + pcReaderCssUrlV2;
            option.apiUrl = PROTO + pcXReaderUrlV2;
            option.doc_id = option.docId;
            option.container = container; // 瑙ｅ喅pc涓婄殑鎷煎啓閿欒
            console.log(option);
            loadScript(option.JS_URL);
            window.Wenku = option;
        }
    }

    function Document(container, option) {
        if (option.width && option.width < 500) {
            option.width = 500;
        }
        if (option.host == "BCEDOC") {
            console.log("use v2");
            loadV2Document(container, option);
        } else {
            console.log("use v1");
            loadV1Document(container, option);
        }
    }

    function loadScript(scriptUrl, callback) {
        var script = document.createElement('script');
        script.src = scriptUrl + '?' + (new Date() - 0);
        document.getElementsByTagName('head')[0].appendChild(script);
        if (!callback) {
            return false;
        }
        // 鍔犺浇瀹屾垚鍚庤鎵ц鐨勬柟娉�
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState === 'loaded'
                   || script.readyState === 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        }
        else {
            script.onload = function () {
                callback();
            };
        }
    }

    function loadCss(cssUrl) {
        var link = document.createElement('link');
        link.href = cssUrl;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    function isMobile() {
        var agent = navigator.userAgent.toLowerCase();
        var isIOS = agent.match(/iP(hone|ad|od)/i);
        var isAndroid = agent.match(/Android/i);
        return isIOS || isAndroid;
    }

    window.Document = Document;
})();