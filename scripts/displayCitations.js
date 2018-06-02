function displayCitations() {
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    //取得所有引用
    var quotes = document.getElementsByTagName('blockquote');
    //遍历所有引用
    for (var i = 0 ; i < quotes.length ; i++){
        //检测获取的blockquote是否含有cite属性，如果没有cite属性，继续循环
        if(!quotes[i].getAttribute("cite")) continue;
        //保存cite属性
        var url = quotes[i].getAttribute("cite");
        //取得引用中所有元素节点
        var quoteChildren = quotes[i].getElementsByTagName("*");
        //如果没有元素节点，继续循环
        if(quoteChildren.length < 1) continue;
        //取得引用中的最后一个元素节点
        var elem = quoteChildren[quotes.length - 1];
        //创建标记
        var link = document.createElement("a");
        var link_txt =document.createTextNode("source");
        link.appendChild(link_txt);
        link.setAttribute("href",url);
        //把标记添加到引用中到最后一个元素节点
        var superscript = document.createElement("sup");
        superscript.appendChild(link);

        elem.appendChild(superscript);
    }
}

addLoadEvent(displayCitations);