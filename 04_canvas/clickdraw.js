

var clearButton = document.getElementById('clearB');
var toggleButton = document.getElementById('toggleB');
var canv= document.getElementById('slate');
var contx=canv.getContext('2d');
var brushMode=0;

contx.strokeRect(0,0,600,600);

clearButton.addEventListener('click',clear);
toggleButton.addEventListener('click',function(e){toggle()});

function clear(){
    console.log('clear');
    contx.clearRect(0,0,600,600);
    contx.strokeRect(0,0,600,600);
}
function toggle(){
    console.log('toggle')
    if(brushMode){
        brushMode = 0
    }
    else{
        brushMode = 1
    }
}

canv.addEventListener("click", draw);
function draw(event) {
    var r = 10;
    console.log(event.clientX +",",event.clientY);
    if (brushMode){
        contx.beginPath();
        contx.arc(event.clientX - 8, event.clientY - 8, r, 0, 2 * Math.PI);
        contx.fill();
    }
    else{
        contx.fillRect(event.clientX - r - 8, event.clientY - r - 8, 2*r, 2*r);
        console.log( (event.clientX - r - 8) + "," + (event.clientY - r - 8) + "," + 2*r+","+ 2*r);
    }
}

