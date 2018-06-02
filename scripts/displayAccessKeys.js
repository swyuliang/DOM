function displayAccesskeys() {
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    //取得文档中的所有链接
    var links = document.getElementsByTagName("a");
    //创建一个数组，保存访问键
    var akeys = new Array();
    //遍历链接
    for(var i =0; i < links.length; i++){
        var current_link = links[i];
        //如果没有accesskey属性，继续循环
        if(!current_link.getAttribute("accesskey")) continue;
        //取得accesskey的值
        var key = current_link.getAttribute("accesskey");
        //取得链接文本
        var text = current_link.lastChild.nodeValue;
        //添加到数组
        akeys[key] = text;
    }
    //创建列表
    var list = document.createElement("ul");
    //遍历访问键
    for(key in akeys){
        var text = akeys[key];
    //创建放到列表项中到字符串
        var str = key + ":" + text;
     //创建列表项
        var item =document.createElement("li");
        var item_txt = document.createTextNode(str);
        item.appendChild(item_txt);
     //把列表项添加到列表中
        list.appendChild(item);
    }
    //创建标题
    var header = document.createElement("h2");
    var header_txt = document.createTextNode("Accesskeys");
    header.appendChild(header_txt);
    //把标题添加到页面主体
    document.getElementsByTagName("body")[0].appendChild(header);
    //把列表添加到页面主体
    document.getElementsByTagName("body")[0].appendChild(list);
}

addLoadEvent(displayAccesskeys);