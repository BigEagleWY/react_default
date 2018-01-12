if (!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}
window.onload = function () {

    var videoPanelMenu = $(".vjs-fullscreen-control");
    videoPanelMenu.before(
        '<div class="vjs-subs-caps-button  vjs-menu-button vjs-menu-button-popup vjs-control vjs-button"  aria-live="polite" aria-expanded="false" aria-haspopup="true">' +
        '<div class="vjs-menu" role="presentation">' +
        '<ul class="vjs-menu-content" role="menu">' +
        '<li class="vjs-menu-item" tabindex="-1" role="menuitemcheckbox"  onclick="changeVideo(1)">普通</li><br/>' +
        '<li class="vjs-menu-item" tabindex="-1" role="menuitemcheckbox"  onclick="changeVideo(2)">标清 </li><br/>' +
        '<li class="vjs-menu-item" tabindex="-1" role="menuitemcheckbox"  onclick="changeVideo(3)">高清 </li><br/>' +
        '</ul></div>' +
        '  <button class="vjs-subs-caps-button vjs-control vjs-button" type="button" aria-live="polite" title="清晰度切换" aria-disabled="false">' +
        '      <span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text">清晰度切换</span>' +
        '  </button>' +
        '</div>'
    );

    var obj = {
        tag: false,
        ctime: 0
    };
    window.obj = obj;
    var myPlayer = videojs.getPlayers()['my_video_1'];
    myPlayer.on("timeupdate", function () {

        if (window.obj.tag) {
            videojs("my_video_1").currentTime(window.obj.ctime)
            videojs("my_video_1").play();
            window.obj.tag = false;
        }

        //视频打点  
        var ctime_ = videojs("my_video_1").currentTime();
        if (ctime_ == 60) {
            videojs("my_video_1").currentTime(ctime_ + 1);
            //do something  
        }


    });

    window.changeVideo=function(type) {

        var ctime = videojs("my_video_1").currentTime();

        if (type == 1) {
            videojs("my_video_1").src([{
                type: "video/mp4",
                src: "http://obukb5fdy.bkt.clouddn.com/icevideo/video/nayuta.mp4"
            }]);
            videojs("my_video_1").play();


        }
        if (type == 2) {
            videojs("my_video_1").src([{
                type: "video/mp4",
                src: "http://video.vmceshi.com/5d25d6f16a2e4b70ad4836cd0d500867/9a0de28e4a404b579ddd96877c51df76-4f0c74d88fd098a4cdde91670b2a02a2.mp4?auth_key=1515575471-0-0-e73a204c6d9ee11a81c438153f65d99a"
            }]);
            videojs("my_video_1").play();

        }
        if (type == 3) {
            videojs("my_video_1").src([{
                type: "video/mp4",
                src: "http://video.vmceshi.com/5d25d6f16a2e4b70ad4836cd0d500867/9a0de28e4a404b579ddd96877c51df76-2503e62b93af7aecd63a499c4749458f.mp4?auth_key=1515575471-0-0-1fbf1efb25bd5dd31eab5b56596ff408"
            }]);
            videojs("my_video_1").play();
        }
        window.obj.ctime = ctime;
        window.obj.tag = true;

    }

}