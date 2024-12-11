$(document).ready(function() {
    // 创建并添加树干
    for (let i = 1; i <= 8; i++) {
        let tree = $('<div></div>');
        tree.addClass('trees');
        tree.css('width', (i * 60) + 'px');
        $('.tree').append(tree);
    }

    // 随机分配颜色给盒子
    const colors = ["#f4d348", "#37799e", "#bb3e39", "#e388b1"];
    const colorCount = {};
    $('.box').each(function() {
        let randomColor;
        do {
            randomColor = colors[Math.floor(Math.random() * colors.length)];
        } while (colorCount[randomColor] >= 2);
        $(this).css('background-color', randomColor);
        colorCount[randomColor] = (colorCount[randomColor] || 0) + 1;
    });

    $('.box').transition({
        perspective: '0.5px',
        rotateY: '360deg'
    }, 1000); // 动画持续时间
});