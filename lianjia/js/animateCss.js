//jquery扩展animate.css插件扩展
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});

// 动画函数

//侧边导航函数
function mouseFun() {
    $(".aside-menu li").on("mouseover", function () {
        // console.log(this);//dom对象
        $(this).children("div").css("display","block").animateCss("slideInLeft");
    });
    $(".aside-menu li").on("mouseout",function () {
        $(this).children("div").css("display","none");
    });
}
mouseFun();
