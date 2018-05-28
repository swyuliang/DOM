/**
 * Created by Administrator on 2018/5/27.
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function"){
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
