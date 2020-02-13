// Clement Chan & Henry Liu
// SoftDev1 pd1
// K07 -- They lock us in the tower whenever we get caught
// 2020-02-13

var c = document.getElementById("slate")
var ctx = c.getContext("2d");
var timeStart = 0;
var reqId
var offset = 0;
var running = false;

ctx.strokeRect(0,0,600,600);
document.getElementById("start").addEventListener("click", (e) => {
    if (running == false){
        timeStart = e.timeStamp;
        console.log(timeStart);
        console.log("start");
        requestAnimationFrame(drawCircle);
        running = true;
    }
    else{
        console.log("already running")
    }
});

document.getElementById("stop").addEventListener("click", (e) => {
    console.log("stop")
    cancelAnimationFrame(reqId)
    offset = (e.timeStamp + offset - timeStart)
    running = false;
});

function clear(){
    ctx.clearRect(0,0,600,600);
    ctx.strokeRect(0,0,600,600);
}
function drawCircle(timeNow){
    clear();
    if(timeNow + offset > timeStart) {
        r = ((timeNow + offset - timeStart) % 4000) / (4000 / 600)
    }
    else{
        r = 0
    }
    if(r > 300){
        r = 600 - r
    }
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(300, 300, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    reqId = requestAnimationFrame(drawCircle)
};






