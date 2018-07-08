/**
 * Created by Administrator on 2018-7-8.
 */
function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentElement;   //  获取目标元素的父元素
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

//addLoadEvent(insertAfter);