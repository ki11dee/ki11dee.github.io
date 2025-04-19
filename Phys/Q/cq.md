---
layout: default
---

# Path Integral and Canonical Quantization

under construction :/


## 0. Intro to Quantum Field Theory

To describe microscopic physical phenomena involving particles moving at speeds close to that of light, both special relativity and quantum mechanics are required. However, these two theories have fundamental inconsistencies. For instance, quantum mechanics, through the uncertainty principle, suggests that the energy of a closed system can fluctuate slightly for extremely short periods. According to special relativity, fluctuations in energy imply fluctuations in mass, meaning mass can momentarily appear or disappear. Indeed, particle physics experiments involving high-energy collisions have confirmed phenomena such as the creation and annihilation of electron-positron pairs, where energy transforms into mass and back. Yet, conventional quantum mechanics lacks a framework to explain such processes. While quantum mechanics can describe phenomena unexplained by classical mechanics, such as quantized energy levels, ground state energies, and tunneling effects for a single electron performing simple harmonic oscillation (SHO), it remains strictly a theory of single-particle systems. Moreover, when an electron scatters off a proton, its wavefunction remains essentially unchanged afterward; this framework cannot account for the creation of new particles, such as positrons, during collisions.  
These limitations of classical quantum mechanics must be overcome through a more integrated theory capable of describing particle creation and annihilation processes using the mass-energy equivalence principle of special relativity.  
First, consider the concept and meaning of a **quantum field**. In quantum mechanics, a single particle undergoing SHO has a set of eigenvectors $\ket{n} (n=0,1,\dots)$ of the Hamiltonian operator $\hat{H}$ that form an orthonormal basis for the state space. Thus, any arbitrary state vector can be expressed as a linear combination of these eigenvectors. Particularly, for the particle's position eigenstate $\ket{x}$, we have:

$$
\ket{x} = \sum_n \ket{n}\braket{n|x}.
$$

Each $\ket{n}$ represents a specific energy state of a **single particle**, with no concept of particle creation or annihilation. However, we can reinterpret this using the operators $\hat{a}, \hat{a}^\dagger$:

$$
\ket{n} = \frac{1}{\sqrt{n!}}(\hat{a}^\dagger)^n\ket{0}.
$$

Defining $\hat{a}_n^\dagger := \frac{1}{\sqrt{n!}}(\hat{a}^\dagger)^n$, we rewrite:

$$
\ket{n} = \hat{a}_n^\dagger \ket{0}.
$$

Here, $\ket{0}$ can be reinterpreted as the vacuum state, representing a quantum state with no particles (whereas in conventional quantum mechanics, it represented the ground state of a single particle). Now, we interpret $\hat{a}_n^\dagger$ as a creation operator that generates a single quantum particle with energy state $\ket{n}$ from the vacuum (previously seen as a raising operator changing energy states from $E_0 = \frac{1}{2}\hbar\omega$ to $E_n=(n+\frac{1}{2})\hbar\omega$).

Thus, the position state can be rewritten as:

$$
\ket{x} = \left(\sum_n\braket{n|x}\hat{a}_n^\dagger\right)\ket{0}.
$$

Defining $c_n=\braket{n\|x}$ (with $\|c_n\|^2$ being the probability of measuring energy $E_n$ for state $\ket{x}$):

$$
\ket{x} = \sum_n c_n \ket{n} = \left(\sum_n c_n\hat{a}_n^\dagger\right)\ket{0}.
$$

The right-hand side now describes particle creation from the vacuum state. To interpret the left-hand side similarly, we define a new operator:

$$
\ket{x} \equiv \hat{a}_x^\dagger\ket{0}.
$$

Here, $\hat{a}_x^\dagger$ is interpreted as a creation operator generating a quantum particle at position $x$ from the vacuum state. Explicitly:

$$
\hat{a}_x^\dagger = \sum_n\Psi_n(x)^*\hat{a}_n^\dagger, \quad (\Psi_n(x)\equiv\braket{x|n} \text{ are energy eigenfunctions})
$$

Similarly, define an annihilation operator at position $x$:

$$
\hat{a}_x = \sum_n\hat{a}_n\Psi_n(x).
$$

Here, the right-hand side represents an arbitrary wavefunction $\Psi(x)$ solving the Schrödinger equation:

$$
-i\hbar\frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2m}\nabla^2\Psi + V(x)\Psi,
$$

expressed in terms of eigenfunctions $\Psi_n(x)$ satisfying:

$$
\left(-\frac{\hbar^2}{2m}\nabla^2 + V(x)\right)\Psi_n(x)=E_n\Psi_n(x),
$$

with the orthonormality and completeness conditions:

$$
\braket{\Psi_n|\Psi_m}=\delta_{nm}, \quad \sum_n\Psi_n(x)\Psi_n(x')=\delta(x-x').
$$

In quantum field theory, $\Psi(t,x)$ is no longer interpreted as a single-particle wavefunction but as a dynamical field satisfying equations of motion (similar to the Schrödinger equation) at each position $x$. To justify this rigorously, one must show that the quantized fields obtained from canonical quantization satisfy the same equations of motion as the original classical fields. Indeed, quantized fields such as the non-relativistic Schrödinger field, scalar fields (Klein-Gordon equation), Dirac fields (Dirac equation), and electromagnetic fields (Maxwell equations) all satisfy this requirement. The quantum properties of these fields are described through the creation and annihilation of their constituent quanta. Defining:

$$
\ket{\hat{\Psi}(t,x)}=\hat{\Psi}(t,x)^\dagger\ket{0},
$$

as a vector representing a state with one quantum of field $\Psi$ created at position $x$ and time $t$, we have:

$$
\hat{\Psi}(t,x)^\dagger=\sum_n\hat{a}_n^\dagger(t)\Psi_n^*(x), \quad \hat{\Psi}(t,x)=\sum_n\hat{a}_n(t)\Psi_n(x).
$$

The commutation relations are:

$$
[\hat{a}_n(t),\hat{a}_m^\dagger(t)]=\delta_{nm}, \quad [\hat{a}_n(t),\hat{a}_m(t)]=[\hat{a}_n^\dagger(t),\hat{a}_m^\dagger(t)]=0,
$$

leading to:

$$
[\hat{\Psi}(t,x),\hat{\Psi}(t,x')^\dagger]=\delta(x-x'), \quad [\hat{\Psi}(t,x),\hat{\Psi}(t,x')]=[\hat{\Psi}(t,x)^\dagger,\hat{\Psi}(t,x')^\dagger]=0.
$$

Additionally,

$$
\hat{a}_n(t)=\int dx\,\Psi_n(x)^*\hat{\Psi}(t,x), \quad \hat{a}_n^\dagger(t)=\int dx\,\Psi_n(x)\hat{\Psi}(t,x)^\dagger.
$$

Thus, defining commutation relations for $\hat{\Psi}(t,x)$ first enables deriving those for $\hat{a}_n,\hat{a}_n^\dagger$.

This process of redefining a dynamical field into operators describing particle creation and annihilation, endowed with suitable commutation relations, defines a **quantized field (quantum field)**.

## 1. Canonical Quantization of Dynamical Fields

Let's formally describe the concept of quantum fields. Using the classical Hamiltonian formalism for a dynamical field, we explore its quantization.

Consider a dynamical field $\Psi$ with Lagrangian:

$$
L(\Psi(t),\dot{\Psi}(t))=\int d^3\vec{x}\,\mathcal{L}(\Psi(t,\vec{x}),\vec{\nabla}\Psi(t,\vec{x}),\dot{\Psi}(t,\vec{x})).
$$

The canonically conjugated field $\Pi(t,\vec{x})$ is defined as:

$$
\Pi(t,\vec{x}) := \frac{\delta L[\Psi(t),\dot{\Psi}(t)]}{\delta\dot{\Psi}(x)}=\frac{\partial \mathcal{L}}{\partial \dot{\Psi}}(x).
$$

The Hamiltonian $H$ obtained via Legendre transformation is:

$$
H(\Psi,\Pi)=\int d^3x\,\mathcal{H},\quad\mathcal{H}=\Pi(x)\dot{\Psi}(x)-\mathcal{L}[\Psi(\vec{x}),\vec{\nabla}\Psi(\vec{x}),\dot{\Psi}(\vec{x})]
$$


(TBA)


<div class="pagination">
  <a href="{{ '/Phys/Q/Q_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>