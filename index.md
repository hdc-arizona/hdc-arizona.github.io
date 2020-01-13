---
layout: main
title: "The Humans, Data, and Computers Lab"
---

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

## Members ([Alumni](/alumni/))

<style>
  table.four-columns td {
    width: 25%;
    font-size: 90%;
  }
</style>

<table class="four-columns" width="100%">
{% assign student_order = 'PhD|MSc|BSc|Postdoc' | split: '|' %}
{% assign students = site.students | sort:'name' | sort_by_index: 'role', student_order %}

{% tablerow member in students cols:4 %}
  <img src="{{ member.photo | default: 'headshots/placeholder.png' }}" alt="{{ member.name }}" style="padding-right:0.75em">
  <br>
  {% if member.website %}
    <a href="{{ member.website }}">{{ member.name }}</a>
  {% else %}
    {{ member.name }}
  {% endif %}
  <br>
  {{ member.role }}
{% endtablerow %}
</table>

<p><br></p>

<table class="four-columns" width="100%">
{% assign faculty_order = 'Assistant Professor|Professor' | split: '|' %}
{% assign faculty = site.faculty | sort:'name' | sort_by_index: 'role', faculty_order %}
{% tablerow member in faculty cols:4 %}
  <img src="{{ member.photo | default: 'headshots/placeholder.png' }}" alt="{{ member.name }}" style="padding-right:0.75em"><br>
  {% if member.website %}
    <a href="{{ member.website }}">{{ member.name }}</a>
  {% else %}
    {{ member.name }}
  {% endif %}
  <br>
  {{ member.role }}
{% endtablerow %}
</table>
<br>

## Funding and Projects

Our group is funded through the gracious support of many sponsors,
including the Arizona Board of Regents, AT&T, LLNL, DTIC, NSF, and DOE:

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



# Software

We host our software at our [GitHub organization page](http://github.com/hdc-arizona/).

# Logistics

You can find more information about how we run our group [here](logistics.html).
