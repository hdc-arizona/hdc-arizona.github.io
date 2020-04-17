d3.select("body").on("mousemove", function() {
    let mouse = d3.mouse(d3.select("#clippy").node());

    function adjust_eyeball(eyeball, pupil) {
        let cx = Number(eyeball.attr("cx")), cy = Number(eyeball.attr("cy"));
        let dx = mouse[0] - cx, dy = mouse[1] - cy;
        let d = Math.sqrt(dx * dx + dy * dy);
        let l = Math.atan(d / 100) * 5;
        let nx = dx / d, ny = dy / d;
        
        pupil.attr("cx", Number(eyeball.attr("cx")) + nx * l)
            .attr("cy", Number(eyeball.attr("cy")) + ny * l);
    }
    adjust_eyeball(d3.select("#left_eyeball"), d3.select("#left_pupil"));
    adjust_eyeball(d3.select("#right_eyeball"), d3.select("#right_pupil"));
});

function deliverClippy()
{
    let txt = advice[~~(Math.random() * advice.length)];
    d3.select("#speech-text").text(txt[0]).style("font-size", txt[1]);
    
    d3.select("#clippy")
        .transition()
        .duration(2000)
        .style("bottom", "0px")
        .on("end", function() {
            d3.select("#speech-bubble")
                .transition().duration(500)
                .style("opacity", 1);
            d3.select("#speech-text")
                .transition().duration(500)
                .style("opacity", 1);
        });
}

let prevKeys = [];
d3.select("body").on("keypress", function() {
    prevKeys.push(window.event.code);
    if (prevKeys.length > 3) {
        prevKeys = prevKeys.slice(prevKeys.length - 3);
    }
    
    let combo = ["KeyH", "KeyD", "KeyC"];

    let match = true;
    for (let i=0; i<3; ++i) {
        if (combo[i] !== prevKeys[i])
            match = false;
    }
    if (match) {
        deliverClippy();
    }
});

// With apologies to Tamara! it's 2020 and I'm reaching unexplored
// procrastination heights

let advice = [
    ["Don't validate a new design by providing only performance measurements"],
    ["Many significant coding efforts do not lead to a systems paper"],
    ["Papers that try to straddle multiple categories often fail to succeed in any of them"],
    ["An infovis design study paper must carefully justify why the visual encoding chosen is appropriate for the problem at hand"],
    ["If you simply propose a nifty new technique with no discussion of who might ever need it, it’s difficult to judge its worth"],
    ["The use of 3D rather than 2D for the spatial layout of an abstract dataset requires careful justification that the benefits outweigh the costs"],
    ["An infovis paper loses credibility when you make design decisions with blatant disregard for basic color perception facts"],
    ["The standard rainbow colormap is perceptually nonlinear"],
    ["Do not simply enumerate all activities that required effort when writing a paper"],
    ["Do not try to squeeze too many papers out of the same project"],
    ["Do not try to cram many papers worth of content and contributions into one"],
    ["Do not leave your contributions implicit or unsaid"],
    ["Do not ignore previous work when writing up your paper"],
    ["Simply citing the previous work is necessary but not sufficient"],
    ["A research paper should not contain sweeping unattributed assertions"],
    ["No work is perfect"],
    ["Do not omit time performance from your writeup, because it is almost always interesting and worth documenting"],
    ["Avoid using only tiny toy datasets in technique papers that refine previously proposed visual encodings"],
    ["When comparing your technique to previous work, compare against state-of-the-art approaches rather than outdated work"],
    ["Positive informal evaluation of a new infovis system by a few of your infovis-expert labmates is not very compelling evidence"],
    ["Beware of running a user study where the tasks are not justified"],
    ["When writing a paper, do not simply dump out all the details and declare victory"],
    ["Avoid using a single brusque sentence fragment as your caption text"],
    ["You should talk the reader through how your visual representation exposes meaningful structure in the dataset"],
];
