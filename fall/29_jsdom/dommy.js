//Clement Chan & Kelvin Ng
//SoftDev1 pd1
//K29 -- Sequential Progression III: Season of the Witch
//2019-12-13


//replaces heading with the content of the element
var changeHeading = function(e){
    var h = document.getElementById("h");
    var text = this.innerHTML
    h.innerHTML=text;
}

var removeItem = function(e){
    this.parentNode.removeChild(this)
    document.getElementById("h").innerHTML = "Hello World!" //resets heading
}

var lis = document.getElementsByTagName("li")
for (var i = 0; i<lis.length; i++){
    lis[i].addEventListener('mouseover', changeHeading);
    lis[i].addEventListener('mouseout', function(e) {document.getElementById("h").innerHTML = "Hello World!"});
    //changes heading back to Hello World!
    lis[i].addEventListener('click', removeItem)
}

var addItem = function(e){
    var list = document.getElementById("thelist")
    var item = document.createElement("li")
    item.innerHTML = "WORD";
    list.appendChild(item);
    //add same event listeners to added element
    item.addEventListener('mouseover', changeHeading);
    item.addEventListener('mouseout', function(e) {document.getElementById("h").innerHTML = "Hello World!"});
    item.addEventListener('click', removeItem)
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
    var item = document.createElement("li")
    var n = list.childElementCount;//finds num of fib numbers already displayed
    item.innerHTML = fib(n)
    list.appendChild(item)
}


var fb = document.getElementById("fb");
fb.addEventListener("click",addFib);

