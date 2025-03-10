# Spectral Theory of Linear Operators

## Introduction

How to find the eigenvalues of a matrix? We as physics students might have already dealt with the topic. But why are eigenvalues important? When I learned about vectors and transformations, certain transformations can be thought of as *scaling* vectors and the eigenvalues represent these scaling factors. This interpretation helps make more sense of the concept but is fishy.

In quantum mechanics (particularly Heisenberg's matrix mechanics) the eigenvalues of the Hamiltonian operator are interpreted as energy levels. However we might wonder why the Hamiltonian should be considered a transformation. Like any linear operator on a vector space, Hamiltonian acts as a transformation within a chosen basis. But this approach is a bit less touching. Furthermore it's not enough for the finite bases to work with at least countable bases. Still things are manageable with the spaces with countable bases, but beyond quantum mechanics with finite particles or in QFT (where every point in spacetime has its own degree of freedom), uncountable bases become inevitable. 

The [Wightman axioms](https://en.wikipedia.org/wiki/Wightman_axioms) cleverly deal with this by sticking to countable bases. This decision seems practical, but it still requires justification to make it work in real situations. The problem is that we will need similar justifications again (such as in quantum gravity).

Why not avoid using a basis entirely? There's some justification for this ("the basis itself isn't a physically observable quantity"). Regardlessly, it seems appealing to skip the basis and proceed logically...but it turns out it's not always that convenient.

Instead of relying on a basis, it makes more sense to focus on the relations between operators. This is where $C^{\*}$-algebras and $W^{*}$-algebras come in. Avoiding the basis, new definition is needed-the spectrum. The spectrum of an operator is the set of complex numbers for which does not have an inverse of . This is similar to how to define eigenvalues for matrices.

(to be uploaded)


---
## References
[Spectral Theory of Linear Operators] [PDF](./Spectral_Theory.pdf)

[Mathematical Background of Spectral Theory](https://en.wikipedia.org/wiki/Spectral_theory)