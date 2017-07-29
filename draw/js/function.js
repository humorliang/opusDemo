
/* 获取鼠标在元素内的坐标 */
function mosPos(elem,e) {
    var x, y;
    var e = e || window.event;
    return {
        x:e.clientX-elem.getBoundingClientRect().left,
        y:e.clientY-elem.getBoundingClientRect().top
    }
}
