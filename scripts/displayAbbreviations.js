/**
 * Created by Administrator on 2018/5/29.
 */
function displayAbbreviations() {
    var abbreviatons = document.getElementsByTagName("abbr");
    if(abbreviatons.length < 1 ) return false;
    var defs = new Array();
    for(var i=0 ; i < abbreviatons.length ; i++){
        var current_abbr =abbreviatons[i];
        var definition =current_abbr.getAttribute("title");
        var key = abbreviatons[i].lastChild.nodeValue;
        defs[key] = definition;
    }

    var dlist = document.createElement("dl");

    for (key in defs){
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_txt = document.createTextNode(key);
        dtitle.appendChild(dtitle_txt);
        var ddesc = document.createElement("dd");
        var ddesc_txt =document.createTextNode(definition);
        ddesc.appendChild(ddesc_txt);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    var header =document.createElement("h2");
    var header_txt =document.createTextNode("Abbreviations");
    header.appendChild(header_txt);
    document.getElementsByTagName("body")[0].appendChild(header);
    document.getElementsByTagName("body")[0].appendChild(dlist);
}

addLoadEvent(displayAbbreviations);

