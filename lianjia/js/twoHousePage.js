//地铁区域数据
function subWay() {
    // 获取数据
    var oPosAreaData = tData.model1.posArea;
    var oSubWayData = tData.model1.subway;
    // 获取元素
    var oSelect = document.querySelectorAll(".select-con-pos div a");
    // console.log(oSelect);
    var oSelectCon = document.querySelector(".select-con .select-con-posDes");
    for (var i = 0; i < oSelect.length; i++) {
        oSelect[0].className = "sele";
        var newUl = document.createElement("ul");
        newUl.className = "cf";
        if (i == 0) {
            for (var j = 0; j < oPosAreaData.length; j++) {
                var newLiA1 = "<li><a href='#'>" + oPosAreaData[j] + "</a></li>";
                newUl.innerHTML += newLiA1;
            }
        } else if (i == 1) {
            for (var a = 0; a < oSubWayData.length; a++) {
                var newLiA = "<li><a href='#'>" + oSubWayData[a] + "</a></li>";
                newUl.innerHTML += newLiA;
            }
            newUl.style.display = "none";
            // console.log(newUl);
        }
        oSelectCon.appendChild(newUl);
    }
    //点击事件
    //重置函数
    function resetStye(eleArr, ele2Arr) {
        for (var i = 0; i < eleArr.length; i++) {
            eleArr[i].className = "";
            ele2Arr[i].style.display = "none";
        }
    }
    var oSelectConUl = document.querySelectorAll(".select-con .select-con-posDes ul");
    for (var k = 0; k < oSelect.length; k++) {
        oSelect[k].k = k;
        oSelect[k].onclick = function () {
            resetStye(oSelect, oSelectConUl);
            this.className = "sele";
            oSelectConUl[this.k].style.display = "block";
        }
    }
}
subWay();

// 条件筛选项
function selectList() {
    //获取元素数据 
    //标题数据
    var oTermData = tData.model2.term;
    //标题内容数据
    var oTermConData = tData.model2.termCon;
    // 前两个数据
    var seleConP2 = document.getElementsByClassName('select-con-p2');
    var sCName = document.getElementsByClassName('s-c-pName');
    var sUl = document.querySelectorAll(".select-con-p2 ul");
    for (var i = 0; i < 2; i++) {
        sCName.innerHTML = oTermConData[i];
        for (var j = 0; j < oTermConData[i].length; j++) {
            var newLabel = "<li><label><input type='checkbox'>" + oTermConData[i][j] + "</label></li>"
            sUl[i].innerHTML += newLabel;
        }
    }
    /* 获取外层容器 */
    var oSelectCon = document.getElementsByClassName('select-con')[0];
    for (var m = 2; m < oTermData.length; m++) {
        var newDiv = document.createElement("div");
        newDiv.className = "select-con-p2";
        newDiv.style.display = "block";
        if (m >= 3) {
            newDiv.style.display = "none";
        }
        var newDiv2 = document.createElement("div");
        newDiv2.className = "s-c-pName";
        newDiv2.innerHTML = oTermData[m];
        newDiv.appendChild(newDiv2);
        var newUl = document.createElement("ul");
        newUl.className = "cf";
        for (var n = 0; n < oTermConData[m].length; n++) {
            var newLabel = "<li><label><input type='checkbox'>" + oTermConData[m][n] + "</label></li>"
            newUl.innerHTML += newLabel;
        }
        newDiv.appendChild(newUl);
        oSelectCon.appendChild(newDiv);
    }
    //点击事件
    var oSelectP = document.getElementsByClassName('select-con-p2');
    var oBtnMore = document.getElementsByClassName('btn-more')[0];
    oBtnMore.onclick = function () {
        if (this.innerHTML == "收起选项<i></i>") {
            this.innerHTML = "更多选项<i></i>";
        } else {
            this.innerHTML = "收起选项<i></i>";
        }
        for (var k = 3; k < oSelectP.length; k++) {
            if (oSelectP[k].style.display == "block") {
                oSelectP[k].style.display = "none";
                console.log(1);
            } else {
                oSelectP[k].style.display = "block";
            }
        }
    }
}
selectList();
/* 信息筛选 */

function selectInfo() {
    //数据
    var oData = tData.model3.termList;
    //获取元素
    var oLabelCon = document.querySelector(".hdl-filter ul");
    for (var i = 0; i < oData.length; i++) {
        var newLabel = "<li><label><input type='checkbox'>" + oData[i] + "</label></li>"
        oLabelCon.innerHTML += newLabel;
    }
}
selectInfo();

/* 具体信息 */
function houseInfo() {
    var oData = tData.model4.item;
    var oUlCon = document.querySelector(".hdl-list ul")
    for (var j = 0; j < oData.length; j++) {
        var newItem =
            "<li>" +
            "<div class='hdl-list-item cf'>" +
            "<div class='hdl-item-pic lf'>" +
            "<img src='img2/818acc02-eb78-4bd5-b222-7fd3c76ea745.jpg.232x174.jpg' alt=''>" +
            "</div>" +
            "<div class='hdl-item-mid lf'>" +
            "<div class='title'>" +
            "<a href='#'>" + oData[j].title + "</a>" +
            "</div>" +
            "<div class='addres fontStyle'><i></i><a href='#'>" + oData[j].des + "</a></div>" +
            "<div class='flood fontStyle'><i></i><a href='#'>" + oData[j].floor + "</a></div>" +
            "<div class='followInfo fontStyle'><i></i><a href='#'>" + oData[j].follow + "</a></div>" +
            "<div class='tag'>" +
            "<span class='tag1'>" + oData[j].tag[0] + "</span>" +
            "<span class='tag2'>" + oData[j].tag[1] + "</span>" +
            "</div>" +
            "</div>" +
            "<div class='hdl-item-rg'>" +
            "<div class='priceInfo'>" +
            "<div class='priceInfo1'><span>" + oData[j].price + "</span>万</div>" +
            "<div class='priceInfo2'>" + oData[j].area + "</div>" +
            "</div>" +
            "</div>" +
            "<div class='hdl-follow-btn'>" +
            "<span>加入对比</span>" +
            "<span>关注</span>" +
            "</div>" +
            "</div>" +
            "</li>";
        oUlCon.innerHTML += newItem;
    }
}
houseInfo();

// 热点回答数据
function hotAns() {
    var oData = tData.model5.question;
    var oUl = document.querySelector(".hot-ans ul");
    for (var i = 0; i < oData.length; i++) {
        var oLi = "<li><a href='#'>" + oData[i].problm + "</a><span>" + oData[i].ans + "</span></li>"
        oUl.innerHTML += oLi;
    }
}
hotAns();

// 热门百科
function hotRuq() {
    var oData = tData.model6.problem;
    var oUl = document.querySelector(".baike ul");
    for (var i = 0; i < oData.length; i++) {
        var oLi = "<li><a href='#'>" + oData[i] + "</a><i></i></li>";
        oUl.innerHTML += oLi;
    }
}
hotRuq();
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