
// thanks, Mike https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle...
  while (m) {

    // Pick a remaining element...
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


// http://stackoverflow.com/questions/14167863/how-can-i-bring-a-circle-to-the-front-with-d3
d3.selection.prototype.moveToFront = function() {
    return this.each(function() {
        this.parentNode.appendChild(this);
    });
};

function createSvg(papers)
{
    let width = 960;
    let bricksPerRow = 7;
    let brickWidth = width / (bricksPerRow - 1);
    let brickHeight = brickWidth / 2;
    let height = brickHeight * 3;
    let screenRatio = 1600 / width;

    var mainGroup = d3.select("#bricks-hero")
        .style("position", "relative")
        .style("height", `${height * screenRatio}px`)
        .append("div")
        .style("position", "relative")
        .style("left", "-260px")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("width", width * screenRatio)
        .attr("height", height * screenRatio)
        .append("g");
    let fillScale = d3.scaleLinear().domain([0, papers.length]).range(["brown", "orange"]);

    function makeBrick(sel)
    {
        sel.attr("transform", (d, i) => {
            let row = ~~(i / bricksPerRow);
            let col = ~~(i % bricksPerRow);
            let y = (row - 0.5) * brickHeight;
            let x = (col - (row % 2 ? 0.3 : 0.8)) * brickWidth;
            console.log(row, col, x, y);
            return `translate(${x}, ${y})`;
        });
        
        // sel.append("rect")
        //     .attr("width", brickWidth)
        //     .attr("height", brickHeight)
        //     .attr("stroke", "black")
        //     .attr("fill", (d, i) => fillScale(i));

        function hoverInto(d) {
            d3.select(this.parentNode)
                .moveToFront();
            d3.select(this)
                .attr("transform", "scale(1 1)")
                .attr("transform-origin", `${brickWidth / 2} ${brickHeight / 2}`)
                .transition()
                .duration(1000)
                .attr("transform", `scale(1.2 1.2)`);
        }
        function hoverOut(d) {
            d3.select(this)
                .transition()
                .duration(500)
                .attr("transform", `scale(1 1)`);
        }
        
        sel.append("image")
            .attr("width", `${brickWidth}px`)
            .attr("height",`${brickHeight}px`)
            .attr("href", d => d.image)
            .style("cursor", "pointer")
            .on("mouseover", hoverInto)
            .on("mouseout", hoverOut)
            .on("click", d => window.location.href = d.link)
        ;
    }
    
    mainGroup.selectAll("g")
        .data(papers)
        .enter()
        .append("g")
        .call(makeBrick);
}

d3.json("/papers.json")
    .then(papers => {
        shuffle(papers.papers);
        createSvg(papers.papers);
    });
