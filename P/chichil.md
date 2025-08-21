---
layout: default
---

# Chichilnisky Impossibility Theorem

TBA


Last year I explored the \<Impossibility and the world\> theme and one of the fascinating discoveries I made was [Chichilnisky impossibility theorem](https://chichilnisky.com/wp-content/uploads/1982/11/The-Topological-Equivalence-of-the-Pareto-Condition-and-the-Existence-of-a-Dictator.pdf). This theorem provides a algebraic topological proof of [Arrow's impossibility theorem](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem), which demonstrates that there's no way to democratically aggregate all members' preferences.

Arrow's theorem states that (assuming all individuals have rational preference systems) there exists no consistent and desirable democratic procedure that satisfies all five conditions. These can be reduced to three key conditions:  

(1) non-dictatorship  
(2) unanimity (Pareto condition)  
(3) independence of irrelevant alternatives  

What's fascinating is that Chichilnisky found topological equivalences for these conditions and the result connects to the Mobius strip I encountered in Tymoczko's *Geometry of Musical Chords* a couple years ago. 

Let's say that two people each pick a point on a circle. A 'social rule' takes the pair of choices and outputs a single point on the same circle. We want the rule to satisfy:

- Continuity: tiny changes in the inputs produce tiny changes in the output.
- Unanimity(Pareto): if both people pick the same point $x$, the output must be $x$.
- Anonymity(symmetry): swapping the two people’s names does not change the output.

The space of ordered pairs of points on the circle is a torus. If we mod out by swapping the two people (to reflect anonymity), the torus collapses to a Möbius band. The unanimous cases—where both points are the same—form the boundary circle of that Möbius band.

A continuous unanimous rule becomes a continuous map from the Möbius band to the circle that is the identity on the boundary circle. But the boundary circle of a Möbius band “winds around” its center twice; any continuous map extended from the whole band makes the boundary wind an even number of times around the output circle. The identity winds once, which is odd. Contradiction. Therefore, there is no continuous rule satisfying all three properties at once.  

More mathematically rigorous explanation: 


(under construction...)


The elegant mathematical insight is that when individual preferences are represented as vectors, condition (3) gives us circles. For condition (1) to hold, we need at least two alternatives. And since impossibility with just two alternatives implies impossibility for more, we only need to examine the product space of two circles: a torus surface. But condition (2) requires invariance under any permutation which transforms the torus's fundamental polygon into a Mobius strip. To satisfy both (1) and (3) simultaneously, joining the edges of the Mobius strip should create a circle. But the strip's edge is always twisted. It can never form a circle. Hence, satisfying all three conditions is mathematically impossible.

This extends to a shocking conclusion: democratic voting itself is mathematically unrealizable. Like "chasing Platonic ideals in an impossible utopia." Even our "ideal model" of democracy is theoretically impossible to achieve in reality. This raises the question: how do economics and politics deal with this impossibility theorem? They probably choose realistic paths to circumvent this dilemma, somehow approximating or mitigating the limitations.

There are couple of other similar theorems or voting rules. For instance, [Sen's impossibility of paretian liberal](https://en.wikipedia.org/wiki/Liberal_paradox) states that (2) and liberalism cannot simultaneously be fulfilled, and [Gibbard's theorem](https://en.wikipedia.org/wiki/Gibbard%27s_theorem) states that when (1) and (2) are both satisfied then the voting system can be manipulated.

My impression is that indices like [V-DEM](https://en.wikipedia.org/wiki/V-Dem_Democracy_Indices) seem to address this dilemma by artificially incorporating indicators about minority opinion protection and preference system diversity as a kind of "brake mechanism" (though I don't know much beyond this)
Interestingly, when this theorem is extended, right-wing arguments like "V-DEM has leftist bias" directly contradict Chichilnisky's theorem. Understanding this theorem mathematically reveals that most such "leftist bias" claims are logically flawed.
I've observed someone debating with other users for several days and their arguments mainly fall into two categories:  

(1) Category errors confusing systems with ideologies  
(2) Attempting to deny academic achievements themselves  

While (1) is simply a logical fallacy, (2) is very weird. Why do they reject expert findings outright? Of course, it's their own to deny academic results and I don't think the academia doesn't even claim absolute truth but the scholarship represents humanity's best inferences based on accumulated knowledge. When people reject this foundation entirely there's not much left to discuss. It seems people just believe what they want to believe. There's a tendency to easily trust scientists and mathematicians while social science are often oversimplified or arbitrarily interpreted by the layman  who think their interpretations are 'correct'.


<div class="pagination">
  <a href="{{ 'P/P_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>