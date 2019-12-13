
var changeHeading = function(e){
    var h = document.getElementById("h");
    var text = this.innerHTM
    h.innerHTML=text;
}

var removeItem = function(e){
    this.parentNode.removeChild(this)
    document.getElementById("h").innerHTML = "Hello World!"
}



var lis = document.getElementsByTagName("li")
for (var i = 0; i<lis.length; i++){
    lis[i].addEventListener('mouseover', changeHeading);
    lis[i].addEventListener('mouseout', function(e) {document.getElementById("h").innerHTML = "Hello World!"});
    lis[i].addEventListener('click', removeItem)
}



var addItem = function(e){
    var list = document.getElementById("thelist")
    var item = document.createElement("li")
    item.innerHTML = "WORD";
    item.addEventListener('mouseover', changeHeading);
    item.addEventListener('mouseout', function(e) {document.getElementById("h").innerHTML = "Hello World!"});
    item.addEventListener('click', removeItem)
    list.appendChild(item);
}


var button = document.getElementById("b");
button.addEventListener('click',addItem);

var fib = function(n){
    if (n<2){
	return 1;
    }
    else{
        return fib(n-1) + fib(n-2)
    }
}


var addFib = function(e){
    var list = document.getElementById("fiblist")
    var n = list.childElementCount;
    var item = document.createElement("li")
    item.innerHTML = fib(n)
    list.appendChild(item)
}


var fb = document.getElementById("fb");
fb.addEventListener("click",addFib);

