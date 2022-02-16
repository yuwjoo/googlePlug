let sbtn = null;
var t = setInterval(() => {
    if ((sbtn = document.querySelector(".s-btn--m"))) {
        switch (sbtn.innerHTML) {
            case "签到":
                sbtn.click();
                var date = new Date();
                console.log(`本次签到时间：%c${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`, "color:red;font-size:14px");
            case "确定":
                sbtn.click();
                break;
            default:
                console.log('不认识的操作，请手动操作');
        }
    }
}, 1000);
alert(`正在帮您监视所以签到任务！！`);