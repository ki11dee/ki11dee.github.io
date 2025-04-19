---
layout: default
---

# Formalisms in Quantum Mechanics

to be uploaded...

## O. Beyond Wave Functions

| mathematical arenas | Classical mechanics | Quantum Mechanics |
|---------------------|---------------------|-------------------|
| in physical space   | Newtonian formulation | pilot wave (de Broglie-Bohm) formulation |
| in configuration space | Lagrangian formulation | path integral (Feynman) formulation |
| in phase space | Hamiltonian formulation | Wigner-Moyal formulation |
| in Hilbert space | Koopman-von-Neumann formulation | wave function (Schrödinger) formulation |

### The Pilot Wave Formulation
is by Bohm.. but not really important (tba)

### Path Integrals

Let us start again with the double-slit experiment. In the standard wave function formulation, the particle traveling from point $A$ through slit 1 to a point $B$ on the screen has a probability amplitude $\psi_1(B)$. Similarly, the probability amplitude of finding the particle at point $B$ after passing through slit 2 is $\psi_2(B)$. The total probability is thus given by $P_{AB}=\|\psi_{AB}\|^2=\|\psi_1(B)+\psi_2(B)\|^2$.

What if we add a third slit to the barrier? Then, the probability becomes $P_{AB}=\|\psi_1(B)+\psi_2(B)+\psi_3(B)\|^2$.

What if we place an additional pair of slits, say 1' and 2', behind the original slits? What happens if we increase the number of slits significantly? In general, the probability amplitude for a particle to travel from point $A$ to $B$ in time $T$ is written as $\braket{B\|\Psi(A,T)}$ within the standard quantum framework. Using the time evolution operator, this amplitude can be expressed as:

$$
\braket{B\|\Psi(A,T)}=\bra{B}U(T)\ket{A}=\bra{B}e^{-\frac{i}{\hbar}\int_0^T dt'H(t')}\ket{A}=\bra{B}e^{-iHT}\ket{A}
$$

(here, we neglected the factor $\hbar$ temporarily to simplify notation.)

For instance, if the particle travels from $A$ to $B$ through an intermediate point $q_1$ at time $t_1 \in [0,T]$, the probability amplitude is:

$$
\bra{B}e^{-iH(T-t_1)}\ket{q_1}\bra{q_1}e^{-iHt_1}\ket{A}.
$$

Taking into account all possible intermediate points $q_1$, we sum over all paths:

$$
\sum_{q_1}\bra{B}e^{-iH(T-t_1)}\ket{q_1}\bra{q_1}e^{-iHt_1}\ket{A}.
$$

In reality, the intermediate positions at time $t_1$ are continuous rather than discrete, thus the sum becomes an integral:

$$
\int dq_1\bra{B}e^{-iH(T-t_1)}\ket{q_1}\bra{q_1}e^{-iHt_1}\ket{A}.
$$

Now, dividing the time interval $[0,T]$ into $N$ segments and letting $\delta \equiv T/N$, we have $U(\delta)=e^{-iH\delta/\hbar}$. Thus, the full amplitude is given by:

$$
\psi_{A \rightarrow B}=\int dq_1\cdots dq_{N-1}\bra{B}e^{-iH\delta}\ket{q_{N-1}}\cdots\bra{q_1}e^{-iH\delta}\ket{A}.
$$

We now define each component as follows:

$$
\bra{q_{j+1}}e^{-iH\delta}\ket{q_j}\equiv K_{q_{j+1},q_j},
$$

called the propagator. Expanding the exponential for very small $\delta$, we obtain:

$$
K_{q_{j+1},q_j}=\bra{q_{j+1}}\left(1 - iH\delta - \frac{1}{2}H^2\delta^2 + \cdots\right)\ket{q_j}=\braket{q_{j+1}\|q_j}-i\delta\braket{q_{j+1}\|H\|q_j}+\cdots
$$

Since eigenstates are orthogonal, the first term becomes a delta distribution:

$$
\braket{q_{j+1}\|q_j}=\delta(q_{j+1}-q_j)=\int\frac{dp_j}{2\pi}e^{ip_j(q_{j+1}-q_j)}.
$$

Using the explicit form of the Hamiltonian $H \propto \hat{p}^2/2m$ and changing to the momentum basis to eliminate the operator $\hat{p}$, the second term becomes:

$$
-i\delta\braket{q_{j+1}\|H\|q_j}=-i\delta\braket{q_{j+1}\|\left(\frac{\hat{p}^2}{2m}+V(\hat{q})\right)\|q_j}
$$
$$
=-i\delta\int\frac{dp_j}{2\pi}\left(\frac{p_j^2}{2m}+V(q_{j+1})\right)e^{ip_j(q_{j+1}-q_j)}.
$$

Thus, the propagator is summarized as:

$$
K_{q_{j+1},q_j}=\int\frac{dp_j}{2\pi}e^{ip_j(q_{j+1}-q_j)}\exp\left(-i\delta H(p_j,q_{j+1})\right).
$$

In total, the amplitude is:

$$
\psi_{A\rightarrow B}=\int\prod_{j=1}^{N-1}dq_j K_{q_{j+1},q_j}=\int\prod_{j=1}^{N-1}dq_j\int\prod_{j=0}^{N-1}\frac{dp_j}{2\pi}\exp\left(i\delta\sum_{j=0}^{N-1}\left[p_j\frac{q_{j+1}-q_j}{\delta}-H(p_j,\bar{q_j})\right]\right).
$$

(Trotter product formula used here.)

Taking the limit $N \rightarrow \infty$, the interval $\delta$ becomes infinitesimal, and the expression inside parentheses approaches $p\dot{q}-H$. By Legendre transformation, we have $L=p\dot{q}-H$, so the amplitude becomes:

$$
\psi_{A\rightarrow B}=\left(\frac{m}{2\pi i\delta}\right)^{N/2}\int\prod_{j=1}^{N-1}dq_j\exp\left(i\delta\sum_{j=0}^{N-1}L(q_j)\right).
$$

Conventionally, this amplitude is expressed compactly as:

$$
\psi_{A\rightarrow B}=\int \mathcal{D}q(t)e^{i\mathcal{S}[q(t)]/\hbar},
$$

where $\mathcal{S}[q(t)]$ is the action used in the Lagrangian formalism, and $\mathcal{D}q(t)$ is the path integral measure.

This formula indicates that in quantum mechanics, the probability amplitude of a particle traveling from $A$ to $B$ is the sum over all possible paths weighted by the corresponding actions. (This is in stark contrast to classical mechanics, where only one path—the action-minimizing trajectory—is physically valid.)

In quantum mechanics, however, particles behave as if they traverse all possible paths simultaneously. This path integral formulation is not limited to particle trajectories, but can also describe the evolution probabilities of general configurations.

Of course, explicit evaluations are notoriously difficult. A helpful visualization is to view the action as a complex exponential function $e^{i\mathcal{S}[q(t)]}$. Since $\mathcal{S}[q(t)]$ is a real number, it lies on the unit circle of complex numbers.

### Phase Space QM
tba

### Heisenberg Formulation
tba


## 1. Quantum Hypothesis

At the end of the 19th century and the beginning of the 20th century, experimental observations showed that particles exhibit wave-like properties, which could not be explained by classical Newtonian mechanics. These phenomena triggered the birth of quantum mechanics, a new physics paradigm fundamentally based on the quantum hypothesis.

### 1.1. Kinematical Hilbert Space

At a given time $t$, the state of a system is described by a vector $\ket{\Psi(t)}$ belonging to a Hilbert vector space $\mathcal{H}$ (a complete space endowed with an inner product). The space $\mathcal{H}$ is called the **state space**, and the vector $\ket{\Psi(t)}$ is called the **state vector**.

### 1.2. Observables and Operators

Quantum mechanics relies fundamentally on the quantum hypothesis, part of which states that classical observables (such as the dynamical variables representing the system, e.g., position $\vec{x}=(x_1,x_2,x_3)$ and conjugate momentum $\vec{p}=(p_1,p_2,p_3)$) correspond to linear Hermitian operators $\hat{x}_i, \hat{p}_i$ defined on the Hilbert space $\mathcal{H}$. These operators satisfy the commutation relation: $$
[x_i, p_i] = i\hbar$$.

----
In Hamiltonian classical mechanics, given two functions $f(p_i,q_i,t)$ and $g(p_i,q_i,t)$ defined on phase space $(T\mathbb{R}^n)^*$ with coordinates $(q_i,p_i)$ at time $t$, the Poisson bracket is defined as:

$$
\{f,g\}_{P,B} = \sum_{i=1}^n\left(\frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i}-\frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q_i}\right)
$$

Furthermore, if we define the canonical 1-form as $$\theta:=\sum_{i=1}^n p_i dq_i\in (T\mathbb{R}^n)^*$$, and the symplectic 2-form as $$\omega:=\sum_{i=1}^n dp_i\wedge dq_i$$, the nondegeneracy of $\omega$ implies that the mapping $$T\mathbb{R}^n\rightarrow (T\mathbb{R}^n)^*$$ defined by $$v\mapsto \omega(v,\cdot)$$ is a bijection. Consequently, for any function $f$, there always exists a vector field $X_f$ satisfying $$\omega(X_f,\cdot)=-df$$. Explicitly, the vector field is:

$$
X_f=\sum_{i=1}^n\frac{\partial f}{\partial q_i}\frac{\partial }{\partial p_i} - \sum_{i=1}^n\frac{\partial f}{\partial p_i}\frac{\partial }{\partial q_i},
$$

and we verify that:

$$
\{f,g\}_{P,B} = \omega(X_f,X_g).
$$

Meanwhile, we have:

$$
\{q_i,p_j\}_{P,B}=\delta_{ij}.
$$

For a given Hamiltonian function $H$, Hamilton’s equations of motion are:

$$
\dot{q}_i = \frac{\partial H}{\partial p_i}=\{q_i,H\}_{P,B},\quad \dot{p}_i=-\frac{\partial H}{\partial q_i}=\{p_i,H\}_{P,B}.
$$

More generally, we have:

$$
\frac{d}{dt}f(p,q,t)=\{f,H\}_{P,B}+\frac{\partial f}{\partial t}.
$$

If we represent the Hamiltonian vector field as $$X_H=\dot{q}_i\frac{\partial}{\partial q_i}+\dot{p}_i\frac{\partial}{\partial p_i}$$ and solve Hamilton’s equations on $(T\mathbb{R}^n)^*$, we can obtain integral curves $(q(t),p(t))$ of $X_H$, indicating that at time $t$, the position and momentum of the system are determined. Specifically, Hamilton’s equations imply $$dH(X_H)=0$$, reflecting energy conservation in the system's dynamics.

---

The classical observable $F(x_i,p_i)$ corresponds in quantum mechanics to the operator $F(\hat{x}_i,\hat{p}_i)$ (denoted $\hat{F}$).

### 1.3. Temporal Evolution of the State Vector: Schrödinger Equation

The temporal evolution of the state vector $\ket{\Psi(t)}$ is described by the operator corresponding to the Hamiltonian function $H(x_i,p_i)$:

$$
i\hbar\frac{\partial}{\partial t}\ket{\Psi(t)}=H(\hat{x}_i,\hat{p}_i)\ket{\Psi(t)}.
$$

### 1.4. Measurement Values and Eigenvalues

When measuring an observable $F$, the measured value is one of the eigenvalues $a_1,\dots$ of operator $\hat{F}$. The eigenvectors $\ket{a_i}$ corresponding to these eigenvalues form a complete orthonormal basis in $\mathcal{H}$. Upon measurement, if the observed value is $a_i$, the system's state collapses from $\ket{\Psi}$ to $\ket{a_i}$.

----
This quantum hypothesis aligns with Dirac's formalism or David Bohm’s **expansion postulate**. Generally, eigenvectors of operators such as $\hat{x}$ do not reside strictly within $\mathcal{H}$, necessitating an extension of $\mathcal{H}$ to a larger space known as a [rigged Hilbert space (Gelfand triplet)](https://en.wikipedia.org/wiki/Rigged_Hilbert_space):

$$
\Phi \subset \mathcal{H} \subset \Phi^\times
$$

Here, $\Phi$ is a dense subspace of $\mathcal{H}$ satisfying $$\hat{x}(\Phi)\subseteq \Phi, \hat{p}(\Phi)\subseteq \Phi, \hat{H}\subseteq \Phi$$, and $\Phi^\times$ is the space of anti-linear functionals defined on $\Phi$. Eigenvectors $\ket{x}$ of operator $\hat{x}$ specifically lie in $\Phi^\times$. This approach rigorously handles generalized eigenvectors through the generalized spectral theorem.

----

### 1.5. Probabilistic Interpretation of Observables

When a system is in state $\ket{\Psi(t)}$, the probability of observing the eigenvalue $a_i$ of observable $F$ at time $t$ is $\|\braket{a_i\|\Psi(t)}\|^2$.

## 2. Structure of Quantum Mechanics

1. From postulate 4, any state $\ket{\Psi(t)}$ can be expanded as $$\ket{\Psi(t)}=\sum_i c_i\ket{a_i}$$, with coefficients $$c_i=\braket{a_i\|\Psi(t)}$$. According to postulate 5, $\|c_i\|^2$ is interpreted as the probability of obtaining measurement outcome $a_i$. This can also be expressed as $$I=\sum_i\ket{a_i}\bra{a_i}$$, where $I$ is the identity operator. The expectation value of an observable $A$ is computed as $\braket{\hat{A}}=\braket{\Psi\|\hat{A}\|\Psi}$.

2. Using Dirac’s notation, we define wavefunctions in position and momentum representations as $\Psi(x)=\braket{x\|\Psi}$ and $\Psi(p)=\braket{p\|\Psi}$, respectively.

3. Ehrenfest’s theorem demonstrates the quantum-classical correspondence for expectation values.

4. Momentum eigenstates satisfy $\braket{x\|p}=e^{ipx/\hbar}$.

5. The temporal evolution operator is $$U(t)=e^{-iHt/\hbar}$$, giving $\ket{\Psi(t)}=U(t)\ket{\Psi(0)}$.

6. Operators and states in Heisenberg and Schrödinger pictures differ in temporal dependence. The Heisenberg equation of motion for observables is $\frac{d}{dt}\hat{A}_H(t)=\frac{1}{i\hbar}[\hat{A}_H(t),\hat{H}]$.

## 3. Simple Harmonic Oscillator

Consider a mass $m$ attached to a spring with spring constant $k$. The Hamiltonian of this system is given by $H = \frac{p^2}{2m} + k\frac{q^2}{2}$. By defining new variables as $\omega^2 := \frac{k}{m}, \quad Q := \sqrt{\frac{m\omega}{\hbar}}q, \quad P := \sqrt{\frac{1}{m\hbar\omega}}p$, the Hamiltonian can be expressed in the form:

$$
H = \frac{\hbar\omega}{2}(P^2 + Q^2).
$$

Now, through the quantization procedure described in section 1.1, replace $P, Q$ by operators $\hat{P}, \hat{Q}$, imposing the commutation relation $[\hat{Q},\hat{P}] = i$. Considering an eigenvector $\ket{\Psi_a}$ of the Hamiltonian operator $\hat{H}$ corresponding to eigenvalue $a$, we define the wavefunction as $\Psi_a(Q) = \braket{Q\|\Psi_a}$. Then the following differential equation holds $\frac{1}{2}\left[-\frac{d^2}{dQ^2}+Q^2\right]\Psi_a(Q)=a\Psi_a(Q)$.  
Solutions to this differential equation exist only when $a$ is a non-negative integer. Furthermore, each eigenvalue $a$ corresponds to a 1-dimensional eigenspace of $\hat{H}$, indicating that there is no degeneracy in the 1-dimensional bound state.


<div class="pagination">
  <a href="{{ '/Phys/Q/Q_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>