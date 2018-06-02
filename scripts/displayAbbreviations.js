/**
 * Created by Administrator on 2018/5/29.
 */
function displayAbbreviations() {
    //检测是否支持一下浏览器几个DOM方法
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    //取得所有缩略词
    var abbreviatons = document.getElementsByTagName("abbr");
    if(abbreviatons.length < 1 ) return false;
    var defs = new Array();
    //遍历所有缩略词
    for(var i=0 ; i < abbreviatons.length ; i++){
        var current_abbr =abbreviatons[i];
        //如果当前元素没有子节点，就立刻开始下一次循环
        if(current_abbr.childNodes.length < 1) continue;
        var definition =current_abbr.getAttribute("title");
        var key = abbreviatons[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表
    var dlist = document.createElement("dl");

    for (key in defs){
        var definition = defs[key];
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_txt = document.createTextNode(key);
        dtitle.appendChild(dtitle_txt);
        //创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_txt =document.createTextNode(definition);
        ddesc.appendChild(ddesc_txt);
        //把它们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length < 1) return false;
    //创建标题
    var header =document.createElement("h2");
    var header_txt =document.createTextNode("Abbreviations");
    header.appendChild(header_txt);
    //把标题添加到页面主体
    document.getElementsByTagName("body")[0].appendChild(header);
    //把定义列表添加到页面主体
    document.getElementsByTagName("body")[0].appendChild(dlist);
}

addLoadEvent(displayAbbreviations);

