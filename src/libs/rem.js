// 设置 rem 函数
const baseSize = 37.5;
function setRem() {
    const scale = document.documentElement.clientWidth / 750;
    let htmlDom = document.getElementsByTagName('html')[0];
    //设置根元素字体大小    
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px';
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}
