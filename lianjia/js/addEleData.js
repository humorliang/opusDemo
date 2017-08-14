// 城市遮罩层函数
function addMaskData() {
    /* 加载地点城市列表数据 */
    /* 获取遮罩层 */
    var oMasks = document.querySelector(".h-pos-mask");
    /* 遮罩关闭按钮 */
    var oMasksClose = document.querySelector(".h-pos-mask .close");
    /* 获取元素 */
    var oPosLi = document.querySelector(".h-pos-mask .city-list li");
    //获取到字母数据对象
    var oCityChar = Data.city.char;
    var oCityCharName = Data.city.name;
    //获取遮罩层里的城市
    var oHeaderPos = document.querySelector(".wrap .header-pos-city span");
    for (var i = 0; i < oCityChar.length; i++) {
        var newDiv = document.createElement("div");
        var newSpan = document.createElement("span");
        newDiv.appendChild(newSpan);
        newSpan.innerHTML = oCityChar[i];
        for (var j = 0; j < oCityCharName[i].length; j++) {
            var newA = document.createElement("a");
            /* a元素创建hover样式 */
            newA.onmouseover = function () {
                this.style.color = "green";
            }
            newA.onmouseout = function () {
                this.style.color = "black";
            }
            newA.href = "#";
            newA.innerHTML = oCityCharName[i][j];
            newDiv.appendChild(newA);
        }
        oPosLi.appendChild(newDiv);
    }
    // 更改页面的地点
    var oMasksA = document.querySelectorAll(".masks-wrap a");
    for (var j = 0; j < oMasksA.length; j++) {
        oMasksA[j].onclick = function () {
            oHeaderPos.innerHTML = this.innerHTML;
        }
    }
    // 关闭按钮事件
    oMasksClose.onclick = function () {
        oMasks.style.display = "none";
    }
    // 选项按钮
    oHeaderPos.onclick = function () {
        oMasks.style.display = "block";
    }
}
addMaskData();
// 住房信息轮播
function houseInfoSlider() {
    //住房轮播信息
    var houseData = Data.model1;
    //top
    var oTop = 0;
    //获取住房信息轮播
    var houseNum = document.querySelector(".house-num ul");
    for (var i = 0; i < houseData.length; i++) {
        var newLi = document.createElement("li");
        newLi.innerHTML = houseData[i];
        houseNum.appendChild(newLi);
    }
    // 轮播样式
    var timer = setInterval(function () {
        if (oTop >= -70) {
            houseNum.style.transition = "2s";
            houseNum.style.top = oTop + "px";
            oTop -= 35;
        } else {
            if (oTop == -105) {
                houseNum.style.transition = "0s";
            }
            oTop = 0;
            houseNum.style.top = oTop + "px";
        }
    }, 2000);

}
houseInfoSlider();
// 搜索框的点击改placehodlder
function searchPlaceholder() {
    /* 获取搜索提示数据 */
    var plahoData = Data.model2;
    // 获取搜索选项
    var oSearchLi = document.querySelectorAll(".search-box ul li");
    //获取输入框
    var oSearchInp = document.querySelector(".search-box .search-input input");
    //获取小三角
    var oSearchTool = document.querySelector(".search-box .search-tool");
    for (var i = 0; i < oSearchLi.length; i++) {
        oSearchLi[i].i = i;
        oSearchLi[i].onclick = function () {
            oSearchInp.placeholder = plahoData[this.i];
            oSearchTool.style.left = (20 + (this.i) * 67) + "px";
        }
    }
}
searchPlaceholder();
/* 新房数据函数 */
function newHouseData() {
    // 获取元素
    var oTitle = document.querySelectorAll(".new-house-item .nh-item-ms-title");
    //获取数据
    var oData = Data.model4;
    for (var i = 0; i < oData.title.length; i++) {
        var newDiv = oData.title[i] + "<div>" + oData.price[i] + "</div>";
        oTitle[i].innerHTML = newDiv;
    }
}
newHouseData();
/* 二手房数据*/
function twoHouse() {
    //价格
    var oPrice = document.querySelectorAll(".ershou-house-item .price");
    var oPriceData = Data.model5.price;
    //二手房标题
    var oTitle = document.querySelectorAll(".ershou-house-item .btom-p01");
    var oTitleData = Data.model5.name;
    //二手房名字
    var oName = document.querySelectorAll(".ershou-house-item .btom-tip1");
    var oNameData = Data.model5.name;
    //房型
    var oHouse = document.querySelectorAll(".ershou-house-item .btom-tip2");
    var oHouseData = Data.model5.roomType;
    //面积
    var oArea = document.querySelectorAll(".ershou-house-item .btom-tip3");
    var oAreaData = Data.model5.area;

    for (var i = 0; i < Data.model5.title.length; i++) {
        oTitle[i].innerHTML = oTitleData[i];
        oName[i].innerHTML = oNameData[i];
        oHouse[i].innerHTML = oHouseData[i];
        oArea[i].innerHTML = oAreaData[i];
        oPrice[i].innerHTML = oPriceData[i];
    }
}
// 二手房数据
twoHouse();
/* 底部数据 */
function housePosTab() {
    //大类别
    var oTab = document.querySelector(".footer-con .ft-tab");
    var oTabData = Data.model6.tab;
    //列表项
    var oList = document.querySelector(".footer-con .ft-list");
    var oListData = Data.model6.Info;

    //数据的添加
    for (var i = 0; i < oTabData.length; i++) {
        var newSpan = document.createElement("span");
        newSpan.innerHTML = oTabData[i];
        oTab.appendChild(newSpan);
        var newDiv = document.createElement("div");
        newDiv.style.display = "none";
        // 初始化样式
        if (i == 1) {
            newDiv.style.display = "block";
        }
        for (var j = 0; j < oListData[i].length; j++) {
            var newA = document.createElement("a");
            newA.href = "#";
            newA.innerHTML = oListData[i][j];
            newDiv.appendChild(newA);
        }
        oList.appendChild(newDiv);
    };
    // 重置函数
    /*
    元素ele2的style 
    元素ele1类名的移出
    */
    function resetStyle(eleArr, ele2Arr, className) {
        for (var i = 0; i < eleArr.length; i++) {
            if (eleArr[i].className == className) {
                eleArr[i].className = "";
            }
        }
        for (var j = 0; j < ele2Arr.length; j++) {
            ele2Arr[j].style.display = "none";
        }
    }
    // 事件
    var oTabSpan = document.querySelectorAll(".footer-con .ft-tab span");
    var oListDiv = document.querySelectorAll(".footer-con .ft-list div");
    for (var k = 0; k < oTabSpan.length; k++) {
        oTabSpan[k].k = k;
        oTabSpan[k].onmouseenter = function () {
            resetStyle(oTabSpan, oListDiv, "hover");
            this.className = "hover";
            oListDiv[this.k].style.display = "block";
        }
    }
}
housePosTab();