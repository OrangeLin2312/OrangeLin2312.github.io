// $(document).ready(function () {
//     const follower1 = $('#banner-bg .banner-bg1');
//     const follower2 = $('#banner-bg .banner-bg2');
//     const follower3 = $('#banner-bg .banner-bg3');
//
//     $(document).mousemove(function (event) {
//         const mouseX = event.pageX;
//         const mouseY = event.pageY;
//
//         // 更新 div 的 left 和 top 属性，使其跟随鼠标移动
//         // follower1.css({
//         //     left: mouseX - follower1.outerWidth() / 2,
//         // });
//         follower2.css({
//             left: mouseX - follower2.outerWidth() / 80,
//         });
//         follower3.css({
//             left: mouseX - follower3.outerWidth() / 160,
//         });
//     });
// });
$(document).ready(function() {
    const follower2 = $('#banner-bg .banner-bg2');
    const follower3 = $('#banner-bg .banner-bg3');
    var mouseX = 0;
    var divOffsetX = 0;
    var originalPosition = follower2.position();

    follower2.hover(
        function() {
            $(document).mousemove(function(event) {
                mouseX = event.pageX;
                mouseY = event.pageY;

                divOffsetX = (mouseX - follower2.offset().left)/4;
                console
                var newOffsetX = Math.max(Math.min(divOffsetX, 10), -10);

                follower2.css("left", originalPosition.left + newOffsetX + "px");
            });
        },
        function() {
            $(document).off("mousemove");
            follower2.css("left", originalPosition.left + "px");
        }
    );
});