// Clement Chan & Henry Liu
// SoftDev1 pd1
// K08 -- They lock us in the tower whenever we get caught
// 2020-02-13

var c = document.getElementById("slate")
var ctx = c.getContext("2d");
var timeStart = 0;
var reqId
var offset = 0;
var running = false;

var logo = new Image();
logo.src = "logo_dvd.png";

const logoWidth = 120;
const logoHeight = 100;
var movieX = Math.floor(Math.random() * 300);
var movieY = Math.floor(Math.random() * 300);
var deltaX = 2;
var deltaY = 2;


function clear(){
    ctx.clearRect(0,0,600,600);
    ctx.strokeRect(0,0,600,600);
}


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

function movie(){
  clear();
  ctx.drawImage(logo, movieX, movieY, logoWidth, logoHeight);
  movieX += deltaX;
  movieY += deltaY;
  if(movieX === 0 || movieX === 600 - logoWidth){
    deltaX *= -1;
  }
  if(movieY === 0|| movieY === 600 - logoHeight){
    deltaY *= -1;
  }
  animationID = window.requestAnimationFrame(movie);
}

document.getElementById("movie").addEventListener("click", (e) => {
  movieX = Math.floor(Math.random() * 5);
  movieY = Math.floor(Math.random() * 5) + 100;
  window.requestAnimationFrame(movie);

});

document.getElementById("stop").addEventListener("click", (e) => {
  if (running == true) {
      console.log("stop")
      cancelAnimationFrame(reqId)
      offset = (e.timeStamp + offset - timeStart)
      running = false;
  }
  else{
      console.log('already stopped')
  }

});
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