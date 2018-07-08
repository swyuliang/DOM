/**
 * Created by Administrator on 2018-7-8.
 */
function prepareSlideshow() {
    // 确保浏览器兹磁DOM方法
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    //确保元素存在
    if(!document.getElementById("linklist")) return false;
    // if(!document.getElementById("preview")) return false;

    //为图片应用样式
    // var preview = document.getElementById("preview");
    // preview.style.position ="absolute";
    // // preview.style.left = "0px";
    // // preview.style.top = "0px";
    // //取得列表中的所有连接
    // var list = document.getElementById("linklist");
    // console.log(list);
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow")
    var preview = document.createElement("img");
    preview.setAttribute("src","images/topics.gif");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    var list = document.getElementByid("linklist");
    insertAfter(slideshow,list);
    var link = list.getElementsByTagName("a");
    //为mouseover事件添加动画效果
    link[0].onmouseover = function () {
        moveElement("preview",-100,0,10);
    }
    link[1].onmouseover = function () {
        moveElement("preview",-200,0,10);
    }
    link[2].onmouseover = function () {
        moveElement("preview",-300,0,10);
    }

}
addLoadEvent(prepareSlideshow);