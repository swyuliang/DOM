function displayCitations() {
    var quotes = document.getElementsByTagName('blockquote');
    for (var i = 0 ; i < quotes.length ; i++){
        //检测获取的blockquote是否含有cite属性
        if(!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        var quoteChildren = quotes[i].getElementsByTagName("*");
        if(quoteChildren.length < 1) continue;
        console.log(quoteChildren);
        var elem = quoteChildren[quotes.length - 1];
        var link = document.createElement("a");
        var link_txt =document.createTextNode("source");
        link.appendChild(link_txt);
        link.setAttribute("href",url);

        var superscript = document.createElement("sup");
        superscript.appendChild(link);

        elem.appendChild(superscript);
    }
}

addLoadEvent(displayCitations);