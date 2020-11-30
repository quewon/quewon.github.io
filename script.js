function createWindow(name, width, height) {
    width = width || 300;
    height = height+20 || 300;
    width += "px";
    height += "px";

    var w = document.createElement("div");
    w.className = "window";
    var header = document.createElement("div");
    header.className = "header";
    w.appendChild(header);
    dragElement(w);
    w.style.width = width;
    w.style.height = height;
    document.body.appendChild(w);

    var red = document.createElement("div");
    var yellow = document.createElement("div");
    var green = document.createElement("div");
    red.className = "button red";
    yellow.className = "button yellow";
    green.className = "button green";
    header.appendChild(red);
    header.appendChild(yellow);
    header.appendChild(green);

    var content = document.createElement("p");
    content.textContent = name;
    header.appendChild(content);

    var frame = document.createElement("iframe");
    //frame.src = "/"+name+".html";
    name.replace(" ", "%20");
    frame.src = "file:///C:/Users/Quewon/Desktop/site/" + name + ".html";
    if (name.includes("https://")) {
        frame.src = name;
    } else if (name.includes("/")) {
        frame.src = "/" + name;
    }
    w.appendChild(frame);
}

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    elmnt.childNodes[0].onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        document.onmouseout = elementDrag;
        const all = document.getElementsByClassName('window');
        for (var i = 0; i < all.length; i++) {
          all[i].style.zIndex = '-1';
        }
        elmnt.style.zIndex = "1";
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        document.onmouseout = null;
    }
}