var year = 0;
document.getElementById("render").addEventListener("click", render);
document.getElementById("left").addEventListener('click', prevYear);
document.getElementById("right").addEventListener('click', nextYear);
var rType = 0

function render(e) {
    rType = document.getElementById("dataType").value;
    console.log(rType)
    displayBar()
    document.getElementById("displayedYear").innerText = 2010
    bruh(data[0][rType])
    year = 0
}
function clear(){
    c = document.getElementById("chart")
    while (c.lastChild) {
        c.removeChild(c.lastChild)
    }
}

function displayBar() {
    document.getElementById('bar').style.visibility = "visible"
}

function prevYear() {
    if (year > 0) {
        year -= 1;
        document.getElementById("displayedYear").innerText = (year + 2010)
        bruh(data[year][rType])
    }
}

function nextYear() {
    if (year < 8) {
        year += 1;
        document.getElementById("displayedYear").innerText = (year + 2010)
        bruh(data[year][rType])
    }
}

function bruh(data) {
        clear()
        console.log(data);
        var margin = {
            top: 15,
            right: 25,
            bottom: 15,
            left: 120
        };
        var width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
        var svg = d3.select("#chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var x = d3.scale.linear()
            .range([0, width])
            .domain([0, d3.max(data, function (d) {
                return d.value;
            })]);
        var y = d3.scale.ordinal()
            .rangeRoundBands([height, 0], .1)
            .domain(data.map(function (d) {
                return d.name;
            }));
        var yAxis = d3.svg.axis()
            .scale(y)
            .tickSize(0)
            .orient("left");
        var gy = svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g")
        bars.append("rect")
            .attr("class", "bar")
            .attr("y", function (d) {
                return y(d.name);
            })
            .attr("height", y.rangeBand())
            .attr("x", 0)
            .attr("width", function (d) {
                return x(d.value);
            });
        bars.append("text")
            .attr("class", "label")

            .attr("y", function (d) {
                return y(d.name) + y.rangeBand() / 2 + 4;
            })

            .attr("x", function (d) {
                return x(d.value) + 3;
            })
            .text(function (d) {
                return d.value;
            });
}
