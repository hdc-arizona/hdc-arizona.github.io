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
[novel ways to characterize data-driven discrimination](http://fairness.haverford.edu).

When human concerns and our modern technological society overlap, we
strive to advance computer science in order to help people lead better lives.

We are part of the
[Department of Computer Science](http://www.cs.arizona.edu) at the
[University of Arizona](http://www.arizona.edu)'s
[College of Science](http://cos.arizona.edu/).

## Members

<table width="100%">
{% assign student_order = 'PhD|MSc|BSc|Postdoc' | split: '|' %}
{% assign students = site.students | sort:'name' | sort_by_index: 'role', student_order %}

{% tablerow member in students cols:4 %}
  <img src="{{ member.photo | default: 'headshots/placeholder.png' }}" alt="{{ member.name }}"><br>
  {% if member.website %}
    <a href="{{ member.website }}">{{ member.name }}</a>
  {% else %}
    {{ member.name }}
  {% endif %}
  <br>
  {{ member.role }}
  <td width="2%"></td>
{% endtablerow %}
</table>

<p><br></p>

<table width="100%">
{% assign faculty_order = 'Assistant Professor|Professor' | split: '|' %}
{% assign faculty = site.faculty | sort:'name' | sort_by_index: 'role', faculty_order %}
{% tablerow member in faculty cols:4 %}
  <img src="{{ member.photo | default: 'headshots/placeholder.png' }}" alt="{{ member.name }}"><br>
  {% if member.website %}
    <a href="{{ member.website }}">{{ member.name }}</a>
  {% else %}
    {{ member.name }}
  {% endif %}
  <br>
  {{ member.role }}
  <td width="2%"></td>
{% endtablerow %}
</table>
<br>

## News

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

### Collaborators

* Abhinav Bhatele, Harsh Bhatia, Peer-Timo Bremer, Todd Gamblin: LLNL

* [Gautham Narayan](http://ast.noao.edu/about/people/narayan): NOAO

* Martin Schulz: TU Munich

* [Joao Comba](http://www.inf.ufrgs.br/~comba/), Cicero Pahins: UFRGS

* [Julien Tierny](http://www-pequan.lip6.fr/~tierny/): CNRS/UPMC

* [Valerio Pascucci](http://www.pascucci.org/), [Bei Wang](http://www.sci.utah.edu/~beiwang): University of Utah

* [Paul Rosen](http://www.cspaul.com/wordpress/): University of South Florida

* [Adam Bargteil](https://www.csee.umbc.edu/~adamb/): University of Maryland, Baltimore County

* Lauro Lins, Jim Klosowski, Simon Urbanek, Gordon Woodhull, Horace Yip: AT&T Research

* Stephen North: InfoVisible LLC

* [Mihai Surdeanu](http://www.surdeanu.info/mihai/): University of Arizona

* [Jawaherul Alam](http://www.cs.arizona.edu/~mjalam/)

### [Alumni](/alumni/)

### Support and Acknowledgments

We acknowledge the gracious support of our sponsors. Our work is
supported in part by the University of Arizona Board of Regents,
the NSF (under awards
[III-1513651](http://www.nsf.gov/awardsearch/showAward?AWD_ID=1513651)
[[project webpage](http://www.sci.utah.edu/~beiwang/networktdav/networktdav.html)],
[III-1656958](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1656958) [[project
webpage](http://hdc-arizona.github.io/projects/dependencies)],
and IIA-1344024), and AT&T Labs.

# Software

We host our software at our [GitHub organization page](http://github.com/hdc-arizona/).

# Logistics

You can find more information about how we run our group [here](logistics.html).
