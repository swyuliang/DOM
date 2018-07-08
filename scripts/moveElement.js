//
// function moveMessage() {
//     if(!document.getElementById) return false;
//     if(!document.getElementById("message")) return false;
//     var elem = document.getElementById("message");
//     elem.style.position = "absolute";
//     var xpos = parseInt(elem.style.left);
//     var ypos = parseInt(elem.style.top);
//
//     if(xpos == 200 && ypos == 100){
//         return true;
//     }
//     if(xpos < 200){
//         xpos++;
//     }
//     if(xpos > 200){
//         xpos--;
//     }
//     if(ypos < 100){
//         ypos++;
//     }
//     if(ypos > 100){
//         ypos--;
//     }
//     elem.style.left = xpos + "px";
//     elem.style.top = ypos + "px";
//     movement = setTimeout("moveMessage()",10);
// }
//函数抽象
function moveElement(elementID,final_x,final_y,interval) {
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    // elem.style.position = "absolute";
    if(!elem.style.left){
        elem.style.left = "0px"
    }
    if(!elem.style.top){
        elem.style.top = "0px"
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);

    var dist = 0;

    if(xpos == final_x && ypos == final_y){
        return true;
    }
    if(xpos < final_x){
        dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if(xpos > final_x){
        dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist
    }
    if(ypos < final_y){
        dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos +dist;
    }
    if(ypos > final_y){
        dist = Math.ceil((ypos - final_y)/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";

    elem.movement = setTimeout(repeat,interval);
}