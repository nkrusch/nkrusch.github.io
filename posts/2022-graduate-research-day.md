---
title: "Semantic-preserving optimization algorithm for automatic program
parallelization"
author: "Neea Rusch"
date: "2022-04-01"
presentation: true
embed_title: "Poster"
embed: "../grd_poster.pdf"

preface: "Presented at Augusta University [37th Annual Graduate Research Day](https://www.augusta.edu/gradschool/grd.php) on April 1, 2022."

abstract: "Advanced and resource-intensive computation relies on continuous rise
in processing power. Since the 1970s, Moore's law accurately predicted this
growth would be achieved through hardware improvements, but this observation is
becoming progressively obsolete. Alternative approaches are needed to maintain
increase in efficiency. Parallelization is a technique in which larger
computational problem is divided into smaller tasks, which are then executed
simultaneously, reducing overall time to completion. Specialized software and
algorithms are required to enable parallelization.

This research presents a novel algorithm for automatic program parallelization
based on loop splitting. In programming, loop statements are used for carrying
out repeated computation, but when used extensively or carelessly, will produce
performance inefficiencies. Using a graph-based variable dependency analysis,
the algorithm detects opportunities for splitting loops into smaller,
parallelizable loops; then automatically applies this optimization.
Additionally, the algorithm guarantees the preservation of program semantics
post-transformation. We hypothesize this algorithm, when combined with
OpenMP--an existing state-of-the-art multiprocessing tool--will provide
noticeable performance gains for resource-intensive computational tasks. An
open-source tool, pyalp, implementing this algorithm on C programs, is currently
being developed to demonstrate and measure its efficiency in practice."

---
