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


// addLoadEvent(showPic);

function prepareGallery() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links =gallery.getElementsByTagName("a");
    //console.log(links);
    for(var i = 0;i<links.length;i++ ){
        links[i].onclick = function () {
            // return showPic(this) ? false : true;
            return showPic(this);
        }
        links[i].onkeypress = links[i].onclick;
    }
}


function showPic(whichpic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");

    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}


function preparePlaceholder() {
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/comic.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    // var body = document.getElementsByTagName("body")[0];
    // body.appendChild(placeholder);
    // body.appendChild(description);
    var gallery = document.getElementById("imagegallery");
    // gallery.parentNode.insertBefore(placeholder,gallery);
    // gallery.parentNode.insertBefore(description,gallery);
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}


function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentElement;   //  获取目标元素的父元素
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);




