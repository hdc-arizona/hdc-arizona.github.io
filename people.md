---
layout: main
title: "HDC people"
---

## Members ([Alumni](/alumni/))

<style>
  table.four-columns td {
    width: 25%;
  }
</style>


<table class="four-columns" width="100%">
{% assign student_order = 'PhD|MSc|BSc|Postdoc' | split: '|' %}
{% assign students = site.students | sort:'name' | sort_by_index: 'role', student_order %}

{% tablerow member in students cols:4 %}
  <img src="{{ member.photo | default: 'headshots/placeholder.png' }}" alt="{{ member.name }}" style="padding-right:0.75em">
  <br>
  <div style="text-align:center;">
  {% if member.website %}
    <a href="{{ member.website }}">{{ member.name }}</a>
  {% else %}
    {{ member.name }}
  {% endif %}
  <br>
  {{ member.role }}
  </div>
{% endtablerow %}
</table>

<p><br></p>

<table class="four-columns" width="100%">
{% assign faculty_order = 'Assistant Professor|Professor' | split: '|' %}
{% assign faculty = site.faculty | sort:'name' | sort_by_index: 'role', faculty_order %}
{% tablerow member in faculty cols:4 %}
  <img src="{{ member.photo | default: 'headshots/placeholder.png' }}" alt="{{ member.name }}" style="padding-right:0.75em"><br>
  <div style="text-align:center;">
  {% if member.website %}
    <a href="{{ member.website }}">{{ member.name }}</a>
  {% else %}
    {{ member.name }}
  {% endif %}
  <br>
  {{ member.role }}
  </div>
{% endtablerow %}
</table>
<br>
