var pic = document.getElementById("vimage");
pic.addEventListener('click', draw);
var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

c.setAttribute("cx", 0);
c.setAttribute("cy", 0);
c.setAttribute("r", 100);
c.setAttribute("fill", "rect");
c.setAttribute("stroke", "black");


var counter=0;
var clickedDot = false;

function draw(e) {
    console.log(clickedDot);
    x=e.clientX-8;
    y=e.clientY-8;
    console.log(x + ",", y);
    console.log(clickedDot);
    if(!clickedDot){
        addDot(x,y)
    }
}

function boop(e){
    clickedDot=true;
    console.log(this.getAttribute("id"));
    if(this.getAttribute('fill') == 'blue'){
        this.setAttribute('fill','lightBlue');
    }
    else if(this.getAttribute('fill') == 'lightBlue'){
        addDotRand(e);
        this.remove();
    }
}

function addDot(x,y){
    var dot = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    dot.setAttribute("cx",x);
    dot.setAttribute("cy",y);
    dot.setAttribute("r",20);
    dot.setAttribute("fill","blue");
    dot.setAttribute("id",counter);
    pic.appendChild(dot);
    counter++;
    dot.addEventListener('click',boop);
}
function addDotRand(e){
    x=Math.floor((Math.random() * 500));
    y=Math.floor((Math.random() * 500));
    var dot = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    dot.setAttribute("cx",x);
    dot.setAttribute("cy",y);
    dot.setAttribute("r",20);
    dot.setAttribute("fill","blue");
    dot.setAttribute("id",counter);
    pic.appendChild(dot);
    counter++;
    dot.addEventListener('click',boop);
}

