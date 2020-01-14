---
layout: main
title: "People"
---

{% comment %}
## Members ([Alumni](/alumni/))
{% endcomment %}
## Members

<style>
  table.four-columns td {
    width: 25%;
    text-align: center;
  }
</style>


<table class="four-columns" width="100%">
{% assign student_order = 'PhD|MSc|BSc|Postdoc' | split: '|' %}
{% assign students = site.students | sort:'name' | sort_by_index: 'role', student_order %}

{% tablerow member in students cols:4 %}
  <img src="{{ member.photo | replace: "headshots","headcircs" | default: 'headcircs/placeholder.png' }}" alt="{{ member.name }}"><br>
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
  <img src="{{ member.photo | replace: "headshots","headcircs" | default: 'headcircs/placeholder.png' }}" alt="{{ member.name }}"><br>
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



## Alumni

{% assign alumni = site.alumni | sort:'name' %}

{% for alum in alumni %}


{% unless alum.skip %}
  <img src="{{ alum.photo | replace: "headshots","headcircs" | default: 'headcircs/placeholder.png' }}" alt="{{ alum.name }}" style="padding-right:0.5em; height:50px; float:left;">
  {% if alum.website %}[{{ alum.name }}]({{ alum.website }}){% else %}{{ alum.name }}{% endif %}, {{ alum.last }}.
<br style="clear:both" />
{% endunless %}

{% endfor %}


