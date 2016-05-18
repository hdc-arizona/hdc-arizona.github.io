---
title: "Logistics"
layout: page
---

This page describes the day-to-day aspects of working in our group. It
assumes that "you" (the one reading this) is a student, researcher, or
staff member of the group and "us" (the ones who wrote this) are the
faculty members. Even though we created this page, you are welcome to
contribute to it!

# Communication

We use [Slack](https://hdcarizona.slack.com/) for a
catch-all IRC and IM equivalent. We don't require you to be on Slack
at all times but since many of us *are* on Slack We try to have a per-project channel. 

# Software

We keep publicly-available software on our
[GitHub organization](http://github.com/hdc-arizona).

## Reproducibility

During the course of your studies, you will write a lot of
software. Even though our overarching goal is not to be a software
shop, using decent engineering principles will make everyone's lives
easier.

Please try to make your software easy to run and compile for other
people. This means you should try to include build scripts with all
your work. The more you use standard tools, the better. For example,
if you're creating C++ software, please make sure to include either a
[https://cmake.org/](CMake) script or an
[http://www.gnu.org/software/autoconf/autoconf.html](autoconf)
script. At the very least, you should have a
[Makefile](https://www.gnu.org/software/make/).

## Version Control

Learn to use git. We'll help you. (If you've heard about git before
and you read elsewhere that it's terrible, the good news is that it's
not that bad. The bad news is that every other version control
software is *worse* than git in some important way. So even if you
don't like it, we're stuck with it).

Every project of yours should be in a git repository. This will make
it easier for you to send a copy to me. It will make it easier to
release your software as open source later should that make sense. Git
branches will save you a lot of time when you are trying different
things: you can keep different experiments in different branches and
make sure that they are not stepping on each other's toes.

## Web Presence

It is *tremendously* important that you keep a web presence. Even if
you participate in the standard social network websites, we will ask you
to keep an up-to-date personal website. This is important because
*you* get to control the discourse around yourself, and doing so
effectively is 1) an important part of research life 2) a skill: it
can be taught and learned, and learning this is part of our job.

### HDC projects

Ideally, we want to keep a consistent visual theme for projects from
the HDC group. The easiest way for you to achieve it is to use our
[stylesheet](/css/main.css). Note that we also typically use
[Bootstrap](https://getbootstrap.com).

### This website

If you want to suggest changes to this website, we welcome pull
requests in the [main repo](https://github.com/hdc-arizona/hdc-website/).

## Programming Languages

You can use whatever programming language you feel most comfortable
with, but the majority of us speak some mix of C++, Javascript, and
Python.

Since we are all going to be writing a lot of software together, it
makes sense to standardize on the style we use. We try to adhere to
Google's style guides whenever possible. This means, mostly that we'll use:

* [Google's C++ style guide](https://google.github.io/styleguide/cppguide.html)
* [Google's Javascript style guide](https://google.github.io/styleguide/javascriptguide.xml)
* [Google's Python style guide](https://google.github.io/styleguide/pyguide.html)

### Python

Python has very good support for *virtual environments*: isolated
deployments of Python in your hard disk which make it easy for you to
keep minimal installs. If you're using python, I *strongly* encourage
you to always use per-project virtualenvs.

In addition, you should have per-project `requirements.txt` which work
with `pip`. Please refer to [the pip documentation](http://pip.readthedocs.org/en/stable/reference/pip_install/#requirements-file-format) to see how this works.

The end goal here is that anyone should be able to clone your git
repository, create a local virtual environment, and then type

    pip install -r requirements.txt
	
Which will install everything necessary for your Python project to
run.

### Javascript

Similarly to Python, Javascript has decent support for virtual
environments as well. This might come as a surprise if you've never
developed large Javascript packages, since you might think Javascript
is a language executed only in the browser. But it turns out that we
can use [node.js](https://nodejs.org/en/), which essentially plucks
out Google Chrome's Javascript engine and lets you write Javascript as
a regular programming language. This makes it much easier for you to
test your Javascript software, package it, etc.

TODO: Pick a workflow that includes a build tool and a linter.

## Licenses

Unless there's a reason to choose otherwise, pick the
[MIT license](http://choosealicense.com/licenses/mit).  Also note that
all the code you develop as part of your work will have the following
copyright line:

`Copyright 2015- Arizona Board of Regents`

