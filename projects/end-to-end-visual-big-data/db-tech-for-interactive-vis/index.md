---
layout: main-no-sidebar
title: "Data Management Technology for Interactive Vis"
---

# Abstract

In the last two decades, interactive visualization and analysis have
become a central tool in data-driven decision making. Concurrently to
the contributions in data visualization, the data management community
has spent significant effort in developing technology that directly
benefits interactive analysis. We contribute a systematic review of
this adjacent field, and highlight a number of techniques and
principles we believe to be underappreciated in visualization
work. We seek to bring attention to: *materialized views*, 
*approximate query processing*, *user modeling and query prediction*, 
*multi-query optimization*, *provenance techniques*, and *indexing techniques*.

By a combination of use cases and taxonomies from the visualization
literature, we show that these ideas can positively change how we
visualization designers build our systems, while also highlighting
research gaps, where future work is necessary.

## Article

Data Management Technology for Interactive Visualization: A Review and
Model. [Leilani Battle](https://www.cs.umd.edu/~leilani/bio.html) and [Carlos Scheidegger](https://cscheid.net).  (In preparation.)

## Methodology and Materials

(The full details of the methodology are described in the
(forthcoming) paper.) In brief, we conducted a systematic literature
review of six different venues going back to at least 2005 (three
data-management venues: ICDE, SIGMOD and VLDB and three visualization
venues: IEEE VIS, ACM CHI, and EuroVis). 

We categorized the results we obtained by coding the publications we
found along two axes. The first axis characterizes the interaction
techniques which are applicable for the techniques proposed; we
obtained the codes themselves from combining two well-regarded task
taxonomies from the literature. The second axis characterizes the kind
of technical work, which we obtained by a combination of the keywords
used by the publications and the our experience as authors of working
in the intersection of the data management and visualization fields.

The result of this methodology is a bibliography annotated with
*interaction codes* --- `encode`, `select`, `navigate`, `arrange`,
`change`, `filter`, `aggregate`, `annotate`, `derive` and `record` ---
as well as *implementation codes* --- `materialized-view`, `aqp` (for
"approximate query processing"), `mqo` (for "multi-query
optimization"), `user-modeling`, and `index` (for "indexing-based
techniques").  In addition, as we have worked thrhough the identified
articles, we have collected all other surveys under a separate
category (coded as `survey`).

The resulting bibliography has 104 articles and is available [as a
BibTeX file](vis-db.bib).

