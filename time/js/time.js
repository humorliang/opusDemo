var DivHour1=document.querySelector(".hour1 img");
var DivHour2=document.querySelector(".hour2 img");
var DivMinute1=document.querySelector(".minute1 img");
var DivMinute2=document.querySelector(".minute2 img");
var DivSecond1=document.querySelector(".second1 img");
var DivSecond2=document.querySelector(".second2 img");
// console.log(DivHour1);


function getTime() {
    var oDate=new Date();
    // 获取小时0~23
    var hours=oDate.getHours();
    // console.log(hours);
    // 获取分钟0~59
    var minutes=oDate.getMinutes();
    // console.log(minutes);
    // 获取秒0~59
    var seconds=oDate.getSeconds();
    // console.log(hours+":"+minutes+":"+seconds);
    var hourNum2=Math.floor(hours/10);
    var hourNum1=hours%10;
    var minuteNum2=Math.floor(minutes/10);
    var minuteNum1=minutes%10;
    var secondNum2=Math.floor(seconds/10);
    var secondNum1=seconds%10;

   function changeSrc(elem,num) {
       switch (num) {
           case 0:
               elem.src="img/0.png";
               break;
           case 1:
               elem.src="img/1.png";
               break;
           case 2:
               elem.src="img/2.png";
               break;
           case 3:
               elem.src="img/3.png";
               break;
           case 4:
               elem.src="img/4.png";
               break;
           case 5:
               elem.src="img/5.png";
               break;
           case 6:
               elem.src="img/6.png";
               break;
           case 7:
               elem.src="img/7.png";
               break;
           case 8:
               elem.src="img/8.png";
               break;
           case 9:
               elem.src="img/9.png";
               break;
           default:
               break;
       }
   }
    changeSrc(DivHour1,hourNum1);
    changeSrc(DivHour2,hourNum2);
    changeSrc(DivMinute1,minuteNum1);
    changeSrc(DivMinute2,minuteNum2);
    changeSrc(DivSecond1,secondNum1);
    changeSrc(DivSecond2,secondNum2);
}
getTime(); 
var timer=setInterval("getTime()",500);
