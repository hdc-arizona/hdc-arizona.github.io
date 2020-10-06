---
layout: main
title: "The Humans, Data, and Computers Lab"
---

<script src="/js/d3.v5.js"></script>

<svg style="position:fixed; bottom:-180px; left:0px;" id="clippy" width="108" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 180"><defs><style>.cls-1{fill:#939598;}.cls-2{fill:#e6e7e8;}.cls-3{fill:#231f20;}</style></defs><g id="Layer_1" data-name="Layer 1"><rect class="cls-1" x="30.78" y="75.7" width="6.84" height="64.25" rx="1.44"/><path class="cls-1" d="M54,174a37.48,37.48,0,0,1-37.44-37.44V37.68a1.33,1.33,0,0,1-.08-.45A30.36,30.36,0,0,1,46.61,6.72h.19A30.19,30.19,0,0,1,77.07,35.44a1.36,1.36,0,0,1,.14.6V138.51A1.44,1.44,0,0,1,75.77,140h-4a1.43,1.43,0,0,1-1.44-1.44V37.35a1.13,1.13,0,0,1-.09-.45A23.49,23.49,0,0,0,46.8,13.6h-.14a23.44,23.44,0,0,0-23.3,23.59,1.46,1.46,0,0,1-.11.55v98.55a1.64,1.64,0,0,1,0,.22,30.73,30.73,0,1,0,61.46,0,1.45,1.45,0,0,1,.23-.77V75.14A1.45,1.45,0,0,1,86.4,73.7H90a1.45,1.45,0,0,1,1.44,1.44v61.37A37.48,37.48,0,0,1,54,174Z"/><path class="cls-1" d="M54,160.74a23.15,23.15,0,0,1-23.16-22.12,1.48,1.48,0,0,1,.4-1.06,1.46,1.46,0,0,1,1-.45h4a1.44,1.44,0,0,1,1.44,1.36,16.36,16.36,0,0,0,32.67,0,1.44,1.44,0,0,1,1.43-1.36h4a1.46,1.46,0,0,1,1,.45,1.48,1.48,0,0,1,.4,1.06A23.15,23.15,0,0,1,54,160.74Z"/><circle class="cls-2" cx="67.09" cy="50.56" id="left_eyeball" r="16"/><circle class="cls-2" cx="24.05" cy="50.56" id="right_eyeball" r="16"/><path class="cls-3" d="M18.85,25.72A26.51,26.51,0,0,1,30,24.93a9.11,9.11,0,0,1,5.21,1.89c1.39,1.26,1.9,3.65.6,5s-3.65,1-5.57.63A36.72,36.72,0,0,0,3.73,37.75C9.09,33.58,11.89,28,18.85,25.72Z"/><path class="cls-3" d="M71,25.82a26.43,26.43,0,0,0-11.2-.53,9.17,9.17,0,0,0-5.16,2c-1.36,1.29-1.81,3.7-.49,5s3.68.91,5.59.49a36.7,36.7,0,0,1,26.65,4.67C80.91,33.45,78,27.89,71,25.82Z"/></g><g id="left_eye"><circle class="cls-3" cx="66.77" cy="52.75" r="6.38" id="left_pupil"/></g><g id="right_eye"><circle id="right_pupil" class="cls-3" cx="24.81" cy="52.75" r="6.38"/></g></svg>
<svg id="speech-bubble" style="position:fixed; left:100px; bottom:190px; opacity:0.000000001" xmlns="http://www.w3.org/2000/svg" width="300" height="150" viewBox="0 0 287.47 148.38"><defs><style>.cls-1{fill:#939598;}.cls-2{fill:#f1f2f2;stroke:#231f20;stroke-miterlimit:10;}</style></defs><g id="Layer_1" data-name="Layer 1"><path class="cls-1" d="M-26.6,299.49A37.48,37.48,0,0,1-64,262.05V163.22a1.33,1.33,0,0,1-.08-.45A30.35,30.35,0,0,1-34,132.26h.19A30.19,30.19,0,0,1-3.53,161a1.36,1.36,0,0,1,.14.6V264.05a1.44,1.44,0,0,1-1.44,1.44h-4a1.43,1.43,0,0,1-1.44-1.44V162.89a1.13,1.13,0,0,1-.09-.45,23.5,23.5,0,0,0-23.44-23.3h-.14a23.27,23.27,0,0,0-16.54,7,23.28,23.28,0,0,0-6.76,16.62,1.46,1.46,0,0,1-.11.55v98.55a1.64,1.64,0,0,1,0,.22A30.77,30.77,0,0,0-26.6,292.79,30.77,30.77,0,0,0,4.13,262.05a1.45,1.45,0,0,1,.23-.77v-60.6a1.44,1.44,0,0,1,1.44-1.44H9.4a1.45,1.45,0,0,1,1.44,1.44v61.37A37.48,37.48,0,0,1-26.6,299.49Z"/></g><g id="Speech"><path class="cls-2" d="M142.11,6.76C66.81,6.76,5.76,37.07,5.76,74.47c0,17.9,14,34.18,36.84,46.29-.41,1.06-.86,2.11-1.37,3.13C37.35,131.64,30.15,138,21.6,139.43a117.1,117.1,0,0,0,47.61-7.73c21.09,6.64,46.09,10.49,72.9,10.49,75.31,0,136.35-30.32,136.35-67.72S217.42,6.76,142.11,6.76Z"/></g></svg>
<style>
  .left-shape {
  shape-outside: polygon(0 0, 220px 0, 130px 37.5px, 120px 75px, 150px 110px, 220px 130px, 300px 130px, 300px 150px, 0 150px);
  float: left;
  width: 300px;
  height: 150px;
  }
  .right-shape {
  shape-outside: polygon(0px 130px, 0px 150px, 300px 150px, 300px 0px, 0 0px, 70px 37.5px, 85px 75px, 60px 105px);
  float: right;
  width: 300px;
  height: 150px;
  }
</style>
<div style="position:fixed; bottom: 180px; left: 0px; max-width: 600px; width: 600px; height: 150px"><div class="left-shape"></div><div class="right-shape"></div><span id="speech-text" style="opacity:0.0000001"></span></div>
<script src="nothing_to_see_here.js"></script>

<div style="padding:0.5em"></div>
<div id="bricks-hero"></div>
<div style="padding:1em"></div>

At the HDC Lab, we study how computer science interacts with human
experiences, at all levels. We specialize in novel algorithms for
interactive visualization and exploratory data analysis. This ranges
from creating
[mathematical foundations for the evaluation of visualization designs](http://algebraicvis.net),
to
[novel data structures and systems for interactive data analysis at scale](http://nanocubes.net),
to
[novel ways to characterize data-driven discrimination](http://fairness.haverford.edu), 
to 
[topological analysis in visualization](https://topology-tool-kit.github.io/).

When human concerns and our modern technological society overlap, we
strive to advance computer science in order to help people lead better lives.

We are part of the
[Department of Computer Science](http://www.cs.arizona.edu) at the
[University of Arizona](http://www.arizona.edu)'s
[College of Science](http://cos.arizona.edu/).



## News

* 2019-07-29: Congratulations to Zhe Wang, who successfully defended his PhD and is now a Senior Design Engineer at [ASML](https://www.asml.com/en)!

* Congrats to [2018-2019 Department Award](https://www.cs.arizona.edu/about/awards) winners [Kate](http://hdc.cs.arizona.edu/people/kisaacs/) and [Josh](https://jalevine.bitbucket.io/) (who received the Outstanding Faculty Research Award) as well as [Becca](https://rjfaust.github.io/) (who received the Graduate Student Research Award) and [Jixian](https://jixianli.github.io/) (who received Galileo Circle Scholarship)!!

* Congratulations to [Kate](https://hdc.cs.arizona.edu/people/kisaacs/) for
  being awarded and [NSF CAREER](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1844573)!

* We're thrilled to share with you that [Josh](http://www.cs.arizona.edu/~josh) was one of the [2018 DOE Early Career](https://www.energy.gov/articles/department-energy-selects-84-scientists-receive-early-career-research-program-funding) awardees. Congratulations, Josh!

* Congratulations to [Sabin](https://devkotasabin.github.io/) and [Becca](https://rjfaust.github.io/), who received the Galileo Circle Scholarship 2018!

* Congratulations to [Becca](https://rjfaust.github.io/), who was selected for a NIST Graduate Student fellowship!

* Congratulations to [Matt](https://matthewberger.github.io/), who has decided to accept a faculty position at Vanderbilt University's Department of Electrical Engineering and Computer Science in Nashville, TN!

* Welcome new Fall 2017 students Jixian, Kairong, Katy!

* [TTK](https://topology-tool-kit.github.io/) was awarded the [Best Paper Honorable Mention Award](http://ieeevis.org/year/2017/info/papers) at IEEE VIS 2017!

* Congrats to Sabrina Nusrat, who successfully defended her PhD in Summer 2017!

* We're excited to share the news that Prof. Joshua Levine and Benafsh
  Husain will be joining the Department of Computer Science and HDC
  Lab in the Fall 2016 semester!

* Congratulations to Laura, who accepted a PhD position at University
  of Washington's Computer Science and Engineering department starting
  in the fall of 2016!

* Congratulations to Youhao and Sean, who
  [won two categories in Hack Arizona 2016](http://hackarizona.org/2016/winners/),
  the biggest hackathon in the Southwest. Together with collaborators
  Ben Gaska and Nick DeJaco, they took both the "Data Science and
  Visualization" and the "Best Transportation Hack" categories!





## Funding and Projects

Our group is funded through the gracious support of many sponsors,
including the Arizona Board of Regents, AT&T, LLNL, DTIC, NSF, and DOE:

* NSF [IIS-2006710](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2006710): [Neural Volume Visualization](https://matthewberger.github.io/projects/nvv/).  PI: Prof. Joshua Levine.

* NSF [IIS-1844573](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1844573):
  [CAREER: Comprehensive Techniques and Design for Flexible Graph Visualization of Software and Systems](https://hdc.cs.arizona.edu/people/kisaacs/projects/gvss/). PI: Prof. Katherine Isaacs.

* NSF [III-1815238](http://www.nsf.gov/awardsearch/showAward?AWD_ID=1815238):
  [III: Small: An end-to-end pipeline for interactive visual analysis of big data](/projects/end-to-end-visual-big-data/). PI: Prof. Carlos Scheidegger.

* DOE [DE-SC0019039](https://pamspublic.science.energy.gov/WebPAMSExternal/Interface/Common/ViewPublicAbstract.aspx?rv=9ffa1ab7-a138-4855-b6cb-a3d9e60f8679&rtc=24&PRoleId=10): [ECRP: Analyzing Multifaceted Scientific Data with Topological Analytics](https://jalevine.bitbucket.io/). PI: Prof. Joshua Levine.

* DTIC: [Phylanx Engine Enhancement and Visualization Development](https://hdc.cs.arizona.edu/people/kisaacs/). PI: Prof. Katherine Isaacs.

* LLNL: [CFGExplorer Focus on Visualizing Compiler Optimization](https://hdc.cs.arizona.edu/people/kisaacs/)). PI: Prof. Katherine Isaacs.

* NSF [III-1656958](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1656958): [CRII: III: Scalable and Interactive Dependency Visualization to Accelerate Parallel Program Analysis](http://hdc-arizona.github.io/projects/dependencies). PI: Prof. Katherine Isaacs.

* NSF [III-1513651](http://www.nsf.gov/awardsearch/showAward?AWD_ID=1513651):
  [III: Medium: Collaborative Research: Topological Data Analysis for Large Network Visualization](http://www.sci.utah.edu/~beiwang/networktdav/networktdav.html). PI: Prof. Carlos Scheidegger.

{% comment %}
* NSF [IIS-1654221](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1654221): [CGV: Large: Collaborative Research: Coupling Simulation and Mesh Generation using Computational Topology](https://cal.cs.umbc.edu/SimulationMeshingTopology/). PI: Prof. Joshua Levine.
{% endcomment %}


# Software

We host our software at our [GitHub organization page](http://github.com/hdc-arizona/).

# Logistics

You can find more information about how we run our group [here](logistics.html).

<script src="bricks_hero.js"></script>
