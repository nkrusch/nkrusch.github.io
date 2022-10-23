---
title: "Implementing the mwp-flow analysis"
author: "Neea Rusch"
date: "2021-11-15"
presentation : true
embed_title: "Slides"
embed: "../files/mwp_slides.pdf"

preface: "
I presented this talk on 15 November at IRISA
[Celtique](https://team.inria.fr/celtique/) research lab seminar and on
18 November at [LIPN](https://lipn.univ-paris13.fr/) seminar at
University of Paris 13.
"

abstract: "
Jones and Kristiansen’s mwp-flow analysis certifies polynomial bounds on
the size of the values returned by an imperative program. This method is
compositional, extensible and elegant, as it bounds transitions between
states instead of focusing on states in isolation. While simple to use,
this theoretical result is difficult to prove correct and implement.
Here we detail the challenges a naive implementation has to face, and
how we remedied them to offer a fast, efficient and extended
implementation of the technique. The result, `pymwp`, is a lightweight
tool to automatically perform data-size analysis of C programs. This
effort prepares and enables the development of certified complexity
analysis, by transforming a costly analysis into a tractable program,
that leverages compositionality and decorrelates the problem of finding
the existence of a bound with its value.
"

---


