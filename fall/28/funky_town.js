

var factBut = document.getElementById("a")
var fibBut = document.getElementById("b")


var fact = (n) => {
    if (n < 2) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
};


var fibonacci = function (n) {
    return (Math.round(
    (1 / Math.sqrt(5)) *
    (Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n))
    ));
}

var gcd = (a, b) => {
    while (b) {
        var t = b;
        b = a % b;
        a = t;
    }
    return a
};
