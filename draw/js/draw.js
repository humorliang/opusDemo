var canvasObj = {
    drawReact: function () {
        //获取绘制元素的上下文
        var cvs = document.getElementById("myCan");
        var context = cvs.getContext("2d");
        // 定义索引层
        var layerIndex = 0;
        // 定义索引名称
        var layerName = "layer";
        //点击时鼠标位置保存变量
        var x = 0,
            y = 0;
        //鼠标按下准备绘画
        cvs.onmousedown = function (e) {
            // 点击时鼠标位置坐标
            x = mosPos(cvs, e).x;
            y = mosPos(cvs, e).y;

            // 图层索引增加
            layerIndex++;
            layerName += layerIndex;

            //图层绘制
            $(cvs).addLayer({
                type: "rectangle",
                strokeStyle: "red",
                strokeWidth: "1",
                name: layerName,
                // 坐标是否中心开始
                fromCenter: false,
                x: x,
                y: y,
                width: 1,
                height: 1
            });

            $(cvs).drawLayers();
            $(cvs).saveCanvas();
            // 鼠标移动画图
            cvs.onmousemove = function (ev) {
                var x1 = mosPos(cvs, ev).x - x;
                var y1 = mosPos(cvs, ev).y - y;

                // 移除点击画布层
                $(cvs).removeLayer(layerName);

                $(cvs).addLayer({
                    type: "rectangle",
                    strokeStyle: "red",
                    strokeWidth: "1",
                    name: layerName,
                    // 坐标是否中心开始
                    fromCenter: false,
                    x: x,
                    y: y,
                    width: x1,
                    height: y1
                });
                $(cvs).drawLayers();
            }
        }
        cvs.onmouseup = function (eve) {
            var x2 = mosPos(cvs, eve).x - x;
            var y2 = mosPos(cvs, eve).y - y;

            // 清除鼠标移动事件
            cvs.onmousemove = null;
            $(cvs).removeLayer(layerName);

            $(cvs).addLayer({
                type: "rectangle",
                strokeStyle: "red",
                strokeWidth: "1",
                name: layerName,
                // 坐标是否中心开始
                fromCenter: false,
                x: x,
                y: y,
                width: x2,
                height: y2
            });
            $(cvs).drawLayers();
            $(cvs).saveCanvas();
        }
    },
    drawCirle: function () {
        //获取绘制元素的上下文
        var cvs = document.getElementById("myCan");
        var context = cvs.getContext("2d");
        // 定义索引层
        var layerIndex2 = 0;
        // 定义索引名称
        var layerName2 = "layerTwo";
        //点击时鼠标位置保存变量
        var x = 0,
            y = 0;
        //鼠标按下准备绘画
        cvs.onmousedown = function (e) {
            // 点击时鼠标位置坐标
            x = mosPos(cvs, e).x;
            y = mosPos(cvs, e).y;

            // 图层索引增加
            layerIndex2++;
            layerName2 += layerIndex2;

            //图层绘制
            $(cvs).addLayer({
                type: "arc",
                strokeStyle: "red",
                strokeWidth: "1",
                name: layerName2,
                x: x,
                y: y,
                radius: 1
            });

            $(cvs).drawLayers();
            $(cvs).saveCanvas();
            // 鼠标移动画图
            console.log("1");
            cvs.onmousemove = function (ev) {
                var x1 = mosPos(cvs, ev).x - x;
                var y1 = mosPos(cvs, ev).y - y;
                var radius1 = Math.sqrt(x1 * x1 + y1 * y1);
                // 移除点击画布层
                $(cvs).removeLayer(layerName2);

                $(cvs).addLayer({
                    type: "arc",
                    strokeStyle: "red",
                    strokeWidth: "1",
                    name: layerName2,
                    x: x,
                    y: y,
                    radius: radius1
                });
                $(cvs).drawLayers();
                console.log("2");
            }
        }
        cvs.onmouseup = function (eve) {
            var x2 = mosPos(cvs, eve).x - x;
            var y2 = mosPos(cvs, eve).y - y;
            var radius2 = Math.sqrt(x2 * x2 + y2 * y2);
            // 清除鼠标移动事件
            cvs.onmousemove = null;
            $(cvs).removeLayer(layerName2);

            $(cvs).addLayer({
                type: "arc",
                strokeStyle: "red",
                strokeWidth: "1",
                name: layerName2,
                x: x,
                y: y,
                radius: radius2
            });
            $(cvs).drawLayers();
            $(cvs).saveCanvas();
        }
    },
    drawPen: function () {
        //获取绘制元素的上下文
        var cvs = document.getElementById("myCan");
        var context = cvs.getContext("2d");
        // 定义索引层
        var layerIndex3 = 0;
        // 定义索引名称
        var layerName3 = "layerThr";
        //点击时鼠标位置保存变量
        var x = 0,
            y = 0;
        //鼠标按下准备绘画
        cvs.onmousedown = function (e) {
            // 点击时鼠标位置坐标
            x = mosPos(cvs, e).x;
            y = mosPos(cvs, e).y;


            //图层绘制
            $(cvs).addLayer({
                type: "arc",
                fillStyle: 'black',
                x: x,
                y: y,
                name: layerName3,
                radius: 3,
                start: 0,
                end: Math.PI * 2,
                ccw: true,
                inDegrees: false
            });

            $(cvs).drawLayers();
            $(cvs).saveCanvas();
            // 鼠标移动画图
            console.log("1");
            cvs.onmousemove = function (ev) {
                var x1 = mosPos(cvs, ev).x;
                var y1 = mosPos(cvs, ev).y;
                // 图层索引增加
                layerIndex3++;
                layerName3 += layerIndex3;
                $(cvs).addLayer({
                    type: "arc",
                    fillStyle: 'black',
                    x: x1,
                    y: y1,
                    name: layerName3,
                    radius: 3,
                    start: 0,
                    end: Math.PI * 2,
                    ccw: true,
                    inDegrees: false
                });
                $(cvs).drawLayers();
                // $(cvs).saveCanvas();
                // console.log("x1:" + x1 + "y1:" + y1);
            }
        }
        cvs.onmouseup = function (eve) {
            // 清除鼠标移动事件
            cvs.onmousemove = null;
        }
    },
    drawClear: function () {
        //获取绘制元素的上下文
        var cvs = document.getElementById("myCan");
        var context = cvs.getContext("2d");
        //重加载
        window.location.reload();
        //$(cvs).removeLayers();

    }
    // drawPen: function () {
    //     //获取绘制元素的上下文
    //     var cvs = document.getElementById("myCan");
    //     var context = cvs.getContext("2d");
    //     //鼠标按下准备绘画
    //     var paint = false;
    //     //鼠标事件监听
    //     cvs.onmousedown = function (e) {
    //         paint = true;
    //         // var x1 = mosPos(cvs, e).x;
    //         // var y1 = mosPos(cvs, e).y;
    //         cvs.onmousemove = function (event) {
    //             if (paint) {
    //                 //    开始绘制
    //                 var x1 = mosPos(cvs, event).x;
    //                 var y1 = mosPos(cvs, event).y;
    //                 context.beginPath();
    //                 context.globalCompositeOperation = "source-over";
    //                 context.fillStyle = "red";
    //                 context.arc(x1, y1, 3, 0, Math.PI * 2);
    //                 context.fill();
    //                 context.closePath();
    //                 console.log("1");
    //             }
    //         }
    //     }
    //     cvs.onmouseup = function () {
    //         cvs.onmousemove = function () {
    //             paint = false;
    //         }
    //     }
    // }
}

function drawReact() {
    canvasObj.drawReact();
}

function drawCirle() {
    canvasObj.drawCirle();
}

function drawPen() {
    canvasObj.drawPen();
}

function drawClear() {
    canvasObj.drawClear();
}
$(".btnRect").click(function () {
    drawReact();
});
$(".btnCirle").click(function () {
    drawCirle();
});
$(".btnPen").click(function () {
    drawPen();
});
$(".btnClear").click(function () {
    drawClear();
});
