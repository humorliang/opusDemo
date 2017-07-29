var paint = false;
//鼠标事件监听
cvs.onmousedown = function (e) {
    paint = true;
    var x1 = mosPos(cvs, e).x;
    var y1 = mosPos(cvs, e).y;
    cvs.onmousemove = function (event) {
        if (paint) {
            //    开始绘制
            var x = mosPos(cvs, event).x - x1;
            var y = mosPos(cvs, event).y - y1;
            console.log("x1:" + x1 + " y1:" + y1 + " x:" + x + " y:" + y);
            context.beginPath();
            context.globalCompositeOperation = "copy";
            context.strokeStyle = "red";
            context.strokeRect(x1, y1, x, y);
            context.closePath();
            console.log("1");
        }
    }
}
cvs.onmouseup = function () {
    cvs.onmousemove = function () {
        paint = false;
    }
}