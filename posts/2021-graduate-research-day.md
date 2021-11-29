---
title: Certifying the complexity and correctness of critical software
date: "2021-03-26"
---

I presented this talk at Augusta University 2021 Graduate Research Day.

### Abstract

Software powers our everyday lives: from phones to daily interactions to our homes. At the same time software is fraught with bugs causing systems to behave in undesirable ways. When discussing critical software responsible for sustaining human life—such as airplanes, ventilators, and nuclear reactors—being able to guarantee correct behavior is necessary. 

Compilers play a vital role in the software development process by transforming programmer's source code to executable programs. They perform analysis, transformations, and optimizations to improve the performance and reliability of the resulting program. But compilers—since they are themselves pieces of software—may contain bugs. 

To build reliable software, we must establish the correct behavior of these intermediate tools. There is a colossal push to prove the correctness of such tools using mathematical abstractions such as dependency analysis, formal methods, and proof assistants. Proving the correctness allows eradicating bugs in programs and drives programmers to specify formally the intended behavior of programs while building trust and confidence in the end-result. 

Using dependency analysis inspired by Implicit Computational Complexity, we apply those techniques to program transformations. Among these techniques is ensuring program's variables grow within reasonable bounds thus providing a certification in term of memory footprint and possibly run-time, in addition to certifying its behavior. Implementing this analysis is one of the goals of our research.
