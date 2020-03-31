document.getElementById('clear').addEventListener("click", clear);
document.getElementById('move').addEventListener("click", startAnim);
document.getElementById('xtra').addEventListener("click", crazy);
document.getElementById('stop').addEventListener("click", stopAnim);
var pic = document.getElementById('vimage');
pic.addEventListener("click", plot);
var running = false;
var timeStart = 0;
var reqId
var offset = 0;

function plot(e) {
    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    if (e.target.getAttribute("id") == "vimage") {
        var tx = e.clientX - 8;
        var ty = e.clientY - 8;
        if (tx > 20 && tx < 480 && ty > 20 && ty < 480) {
            dot.setAttribute("cx", tx);
            dot.setAttribute("cy", ty);
            dot.setAttribute("r", 20);
            dot.setAttribute("fill", "blue");
            dot.setAttribute('dx', 1);
            dot.setAttribute('dy', 1);
            dot.addEventListener("click", doot);
            pic.appendChild(dot);
        }
    }
};
function doot(e) {
    if (this.getAttribute('fill') == 'blue') {
        this.setAttribute('fill', 'cyan');
    } else if (this.getAttribute('fill') == 'cyan') {
        createRandom(e);
        this.remove();
    }
};
function clear(e) {
    while (pic.lastChild) {
        pic.removeChild(pic.lastChild);
    }
};
function createRandom(e) {
    rx = Math.floor((Math.random() * 458)) + 21;
    ry = Math.floor((Math.random() * 458)) + 21;
    var dot = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    dot.setAttribute("cx", rx);
    dot.setAttribute("cy", ry);
    dot.setAttribute("r", 20);
    dot.setAttribute("fill", "blue");
    dot.setAttribute('dx', 1);
    dot.setAttribute('dy', 1);
    dot.addEventListener("click", doot);
    pic.appendChild(dot);
};
function startAnim(e) {
    if (running == false) {
        document.getElementById('stop').style.visibility = "visible";
        timeStart = e.timeStamp;
        console.log(timeStart);
        console.log("start");
        requestAnimationFrame(propulsion);
        running = true;
    } else {
        console.log("already running")
    }
}
function stopAnim(e) {
    if (running == true) {
        document.getElementById('stop').style.visibility = "hidden";
        console.log("stop");
        cancelAnimationFrame(reqId)
        offset = (e.timeStamp + offset - timeStart)
        running = false;
    } else {
        console.log('already stopped')
    }
}
function propulsion(e) {
    var dots = pic.childNodes;
    for (var i = 1; i <= pic.childElementCount; i++) {
        var x = parseInt(dots[i].getAttribute("cx"));
        var y = parseInt(dots[i].getAttribute("cy"));
        if (x === 20 || x === parseInt(pic.getAttribute("width")) - 20) {
            // inc_x *= -1;
            dots[i].setAttribute('dx', parseInt(dots[i].getAttribute('dx')) * -1);
        }
        if (y === 20 || y === parseInt(pic.getAttribute("height")) - 20) {
            // inc_y *= -1;
            dots[i].setAttribute('dy', parseInt(dots[i].getAttribute('dy')) * -1);
        }
        // console.log("");
        // console.log(x);
        // console.log(dots[i].getAttribute('dx'));
        x += parseInt(dots[i].getAttribute('dx'));
        y += parseInt(dots[i].getAttribute('dy'));
        dots[i].setAttribute("cx", x);
        dots[i].setAttribute("cy", y);
        // console.log(x);
    }
    reqId = window.requestAnimationFrame(propulsion);
}
function crazy(e){
    if (running == false) {
        document.getElementById('stop').style.visibility = "visible";
        timeStart = e.timeStamp;
        console.log(timeStart);
        console.log("start");
        requestAnimationFrame(mario);
        running = true;
    } else {
        console.log("already running")
    }
}
function mario(e){
    reqId = window.requestAnimationFrame(mario);
}
function rollCall() {
    var dots = pic.childNodes;
    for (var i = 1; i <= pic.childElementCount; i++) {
        console.log(i);
        console.log(dots[i]);
    }
}