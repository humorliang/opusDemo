$(function () {
    $(".header-seach-rg p").on("mouseover",function () {
       $(".header-seach-rg-pic").css("display","block");
    });
    $(".header-seach-rg p").on("mouseout",function () {
       $(".header-seach-rg-pic").css("display","none");
    });
});