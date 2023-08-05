---
title: "Distributing and Parallelizing Non-canonical Loops"
author: "Neea Rusch"
date: "2023-01-16"
presentation: true
embed_title: "Slides"
embed: "../files/vmcai_slides.pdf"
embed_ratio: "169"
paper_title: "https://hal.science/hal-03669387v2"
paper: "https://hal.science/hal-03669387v2"
artifact_desc: <img src="/files/vmcai_badges.png" alt="badges" /> <br/> The artifact contains the benchmark experiments discussed in the paper. The artifact was peer-reviewed by the artifact committee and obtained available and functional badges.
artifact_url: https://zenodo.org/record/7080145
preface: "
I presented this talk at [VMCAI'23](https://popl23.sigplan.org/home/VMCAI-2023)
in Boston, on January 16, 2023."
abstract: "This work leverages an original dependency analysis to parallelize loops regardless of their form in imperative programs. Our algorithm distributes a loop into multiple parallelizable loops, resulting in gains in execution time comparable to state-of-the-art automatic source-to-source code transformers when both are applicable. Our graph-based algorithm is intuitive, language-agnostic, proven correct, and applicable to all types of loops. Importantly, it can be applied even if the loop iteration space is unknown statically or at compile time, or more generally if the loop is not in canonical form or contains loop-carried dependency. As contributions we deliver the computational technique, proof of its preservation of semantic correctness, and experimental results to quantify the expected performance gains. We also show that many comparable tools cannot distribute the loops we optimize, and that our technique can be seamlessly integrated into compiler passes or other automatic parallelization suites."
---