$(document).ready(function() {
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top <= $(window).height()
        );
    }

    function checkItemsInView() {
        $('.recent-post-item').each(function() {
            if (isInViewport(this)) {
                $(this).addClass('active'); // 添加.active类以放大元素
                console.log("chuxian!");
            } else {
                $(this).removeClass('active'); // 移除.active类以缩小元素
            }
        });
    }

    $(window).on('scroll', checkItemsInView); // 监听滚动事件
    checkItemsInView(); // 初始化时检查元素是否在视口中
});