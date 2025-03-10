# Is the World Deterministic?

## Countability and Uncountability

- The Cardinality of Sets

## DFA

A Deterministic Finite Automaton is an abstract machine described by 5-tuple $M=(Q, \Sigma, \delta, q_0, F)$ where

$Q$ as a finite set (states)

$\Sigma$ as a finite set (input alphabet)

$\delta : Q \times \Sigma \rightarrow Q$ as the transition function

$s \in Q$ as the start state

$F \subseteq Q$ as the set of final/accepting states.

The size of $M$ is the number of states in $Q$. $M$ accepts $w \in \Sigma^*$ if $\delta^*(s, w) \in F$ for the extension $\delta^*$ of $\delta$ to $\Sigma^*$.

- Languages of DFAs

- The Separating Words Problem

## NFA

While the next state is uniquely determined by the current state and input symbol in DFA, there are several choices for the next state in a Nondeterministic Finite Automaton (NFA).

NFA with $\epsilon$-transition is an abstract machine described by 5-tuple $M=(Q, \Sigma, \Delta, s, F)$ where it is like DFA except that

$\Delta : Q \times (\Sigma \cup \{\epsilon\}) \rightarrow P(Q) \quad \text{P(Q) as a power set of Q}$

- Reachable (recallable) $\epsilon$

- Extended transition function

- Rabin-Scott theorem

Let $N = (Q, \Sigma, \Delta, s, F)$ be an $\epsilon$-NFA with all $\Delta(q, a)$ $\epsilon$-closed. Let $M = (Q', \Sigma, \delta, s', F')$ be the DFA with

$Q' := P(Q)$

$\delta(R, a) := \bigcup_{q \in R} \Delta(q, a) \quad \text{for} \quad R \subseteq Q, a \in \Sigma$

$s' := \Delta(s, \epsilon)$

$F' := \{R \in P(Q) : R \cap F \neq \emptyset \}$

Then $L(N) = L(M)$.



# References
[CS 365 - Models of Computation](https://cs.uwaterloo.ca/~eblais/cs365/)

[Deterministic and nondeterministic automata](https://math.colorado.edu/~mayr/teaching/math6010spring21/class02.pdf)