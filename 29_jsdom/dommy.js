
var changeHeading = function(e){
    var h = document.getElementById("h");
    var text = e.srcElement.innerHTML
    //console.log(text)
    h.innerHTML=text;
}

var removeItem = function(e){
    var elem = e.srcElement
    elem.parentNode.removeChild(elem)
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

