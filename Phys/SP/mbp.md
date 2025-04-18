---
layout: default
---
# Quantum Many-Body Physics

(to be uploaded)


## 1. Review of Quantum Mechanics

### Single-particle systems

- single-particle Hamiltonian: $\hat{H}=\frac{(\vec{p}-q\vec{A})^2}{2m^*}+U(\vec{r})$ with non-relativistic particle under a potential $U(\vec{r})$ and magnetic field $\vec{B}=\nabla \times \vec{A}$
- Schrodinger’s equation: $i\hbar \frac{\partial}{\partial t} \ket{\psi(t)}=\hat{H}\ket{\psi(t)}$
    - $(\ket{\psi(t)})^\dagger=\bra{\psi(t)}$
    - $\braket{\vec{r}\|\psi(t)}=\psi(\vec{r},t)$j
    - $\braket{\phi\|\psi}=\int d^3r^3\phi^*(\vec{r})\psi(\vec{r})$

### Basis in the Hilbert space

- $\{\ket{\phi_\alpha}\}$: orthonormal basis (complete set) of the single-particle Hilbert space
- $\braket{\phi_\alpha\|\phi_\beta}=\delta_{\alpha\beta}$ and $\sum_\alpha \ket{\phi_\alpha} \bra{\phi_\alpha}=\mathbb{1}$
- can write $\ket{\psi(t)}=\sum_\alpha C_\alpha (t)\ket{\phi_\alpha}=\sum_\alpha \braket{\phi_\alpha \| \psi(t)}\ket{\phi_\alpha}$
- operators
    - $\hat{A}\ket{\psi}=\ket{\phi}$, $\bra{\psi}\hat{A}=\bra{\phi}$
    - representation in the $\ket{\phi_\alpha}$ basis
        - $A_{\alpha \beta}=\bra{\phi_\alpha}\hat{A}\ket{\phi_\beta}=\bra{\phi_\alpha}(\hat{A}\ket{\phi_\beta})$, $A_{\beta\alpha}^*=\bra{\phi_\beta}\hat{A}^\dagger\ket{\phi_\alpha}=(\bra{\phi_\beta}\hat{A}^\dagger)\ket{\phi_\alpha}$

### Observables (Hermitian operators)

- $\hat{A}=\hat{A}^\dagger$: Hermitian operator
- $\hat{A}\ket{\phi_\alpha}=a\ket{\phi_\alpha} \rightarrow a \in \mathbb{R}$: real eigenvalues (physical observable
- $P_\psi(a)\equiv\|\braket{\phi_\alpha\|\psi}\|^2$: probability of measuring the value for the observable $\hat{A}$ if the particle is in state $\ket{\psi}$. if the spectrum is continuous, this becomes a probability density. For example, the position operator $dP_\psi(\vec{r})\equiv\|\braket{\vec{r}\|\psi(t)}\|^2d^3\vec{r}=\|\psi(\vec{r},t)\|^2d^3\vec{r}$
- example: 1D Harmonic Oscillator
    - Hamiltonian: $\hat{H}=\frac{\hat{p}^2}{2m}+\frac{1}{2}m\omega^2\hat{x}^2$ with $[\hat{x},\hat{p}]=i\hbar$
    - position representation: $\braket{\vec{r}\|\hat{p}\|\psi(t)}=\frac{\hbar}{i}\frac{\partial}{\partial x} \psi(x,t)$
    - Define $\hat{X}=\sqrt{\frac{m\omega}{\hbar}}\hat{x}$, $\hat{P}=\frac{1}{\sqrt{m\hbar \omega}} \hat{p}$ $\rightarrow \hat{H}=\frac{\hbar \omega}{2}(\hat{P}^2+\hat{X}^2)$
    - Define $\hat{a}=\frac{1}{\sqrt{2}}(\hat{X}+i\hat{P}), \hat{a}^\dagger=\frac{1}{\sqrt{2}}(\hat{X}-i\hat{P}) \rightarrow \hat{X}=\frac{1}{\sqrt{2}}(\hat{a}^\dagger+\hat{a}), \hat{P}=\frac{i}{\sqrt{2}}(\hat{a}^\dagger-\hat{a})$
    - $[\hat{X},\hat{P}]=i$ and $[\hat{a},\hat{a}^\dagger]=1$ and also $\hat{H}=\hbar \omega (\hat{a}^\dagger \hat{a}+\frac{1}{2})$
    - Define $\hat{N}\equiv \hat{a}^\dagger\hat{a}$ and its eigenstates $\hat{N}\ket{n}=E_n\ket{n}$
    - $E_n=\hbar\omega(n+\frac{1}{2}), n=0,1,...$, $\hat{a}^\dagger\ket{n}=\sqrt{n+1}\ket{n+1}, \hat{a}\ket{n}=\sqrt{n}\ket{n-1}, \ket{n}=\frac{(\hat{a}^\dagger)^n}{\sqrt{n!}}\ket{0}$

### Single-particle spectrum

- $\{\ket{n}\}$: orthonormal basis of the (single-particle) Hilbert’s space
- $\braket{n\|n'}=\delta_{nn'}$ and $\sum_n \ket{n}\bra{n}=\mathbb{1}$
- single-particle state: $\ket{\psi(t)}=\sum_n C_n (t)\ket{n}=\sum_n \braket{n \| \psi(t)}\ket{n}$
- Probability of measuring the value $E_n$ for the energy if the particle is in state $\ket{\psi}$: $P_\psi(n)=\|\braket{n\|\psi}\|^2$

---

## 2. Basics of quantum N-body systems

### N-particle systems (First quantization)

- Example of an N-particle Hamiltonian:

$$
\underset{\text{Single-particle operators}}{\hat{H}=\sum_{i=1}^N(\frac{\|\hat{p}\|^2}{2m_i}+U(\vec{r}_i))} \quad + \underset{\text{Two-particle operators (e.g., interactions)}} {\frac{1}{2}\sum_{i,j(i\neq j)=1}^N V(\vec{r_i},\vec{r_j})}
$$

- Schrodinger’s equation (Dirac’s notation):
    - $i\hbar\frac{\partial}{\partial t}\ket{\Psi(t)}=\hat{H}\ket{\Psi(t)}$
    - $\braket{\vec{r_1},\vec{r_2},\dots,\vec{r_N}\|\Psi(t)}=\Psi(\vec{r_1},\dots,\vec{r_N})$
    - $\braket{\Phi\|\Psi}=\int d^3\vec{r_1}d^3\vec{r_2}\cdots d^3\vec{r_N}\Phi^*(\vec{r_1},\dots,\vec{r_N})\Psi(\vec{r_1},\dots,\vec{r_N})$
- Basis out of single-particle states: $\{\ket{\Phi_\alpha}\}=\{\ket{\phi_{\alpha_1}}\} \otimes \{\ket{\phi_{\alpha_2}}\}\otimes \cdots\otimes \{\ket{\phi_{\alpha_N}}\}$
- $\braket{\Phi_\alpha\|\Phi_\beta}=\delta_{\alpha\beta}$ and $\sum_\alpha \ket{\Phi_\alpha} \bra{\Phi_\alpha}=\mathbb{1}$
- can write $\ket{\Psi(t)}=\sum_\alpha C_\alpha (t)\ket{\Phi_\alpha}=\sum_\alpha \braket{\Phi_\alpha \| \Psi(t)}\ket{\Phi_\alpha}$
- can also use the full spectrum from a N-particle operator as a basis: $\{\ket{\Psi_n}\}=\hat{H}\ket{\Psi_n}=E_n\ket{\Psi_n}$

### Systems of identical particles

- System of N *distinguishable* particles can be differentiated by performing measurements.
    - examples: classical particles, quantum particles with different mass (electrons and muons) or charge (electrons and protons)
- In a system of N indistinguishable particles, it can’t if they have the same quantum numbers (mass, charge, spin, etc.)
    - examples: system of N electrons with the same spin (spin-polarized or spinless)
    - thus the exchange of two identical particles cannot be experimentally detected; it should have the *same probability density*:
        - $\|\Psi(\vec{r_1},\dots,\vec{r_k},\dots,\vec{r_m},\dots,\vec{r_N})\|^2=\|\Psi(\vec{r_1},\dots,\vec{r_m},\dots,\vec{r_k},\dots,\vec{r_N})\|^2$
        - states are the same up to a global phase: $\Psi(\vec{r_1},\dots,\vec{r_k},\dots,\vec{r_m},\dots,\vec{r_N})=e^{i\theta}\Psi(\vec{r_1},\dots,\vec{r_m},\dots,\vec{r_k},\dots,\vec{r_N})$
        - experimental fact: second exchange of the same particles brings the state back to the initial one: $e^{2i\theta}=1$
            - bosons: $\theta=0$, $\Psi(\dots,\vec{r_k},\dots,\vec{r_m},\dots)=+\Psi(\dots,\vec{r_m},\dots,\vec{r_k},\dots)$
            - fermions: $\theta=\pi$, $\Psi(\dots,\vec{r_k},\dots,\vec{r_m},\dots)=-\Psi(\dots,\vec{r_m},\dots,\vec{r_k},\dots)$

### An example with N=2

- Two (indistinguishable) particles in a harmonic oscillator:
    - $\hat{H}=(\frac{\|\hat{p_1}\|^2}{2m_i}+\frac{1}{2}m\omega\hat{x}_1^2)+\hat{H}=(\frac{\|\hat{p_2}\|^2}{2m_i}+\frac{1}{2}m\omega\hat{x}_2^2)=\hat{H}^{(1)}+\hat{H}^{(2)}$
    - $\hat{H}^{(1)}\ket{n_1}_1=E_{n_1}\ket{n_1}_1$, $\hat{H}^{(2)}\ket{n_2}_2=E_{n_2}\ket{n_2}_2$
    - position representation: $\braket{x\|n}=\phi_n(x)$
    - $\ket{\Phi_\alpha}=\ket{n_1}\otimes\ket{n_2} \rightarrow \braket{x_1x_2\|\Phi_\alpha}=\braket{x_1\|n_1}_1\braket{x_2\|n_2}_2=\phi_{n_1}(x_1)\phi_{n_2}(x_2)=\Phi_\alpha(x_1,x_2)$
    - Is this basis appropriate for indistinguishable particles? No, for example: $\phi_1(x_1)\phi_0(x_2)\neq\phi_1(x_2)\phi_0(x_1)$ Then how can we fix this?
        - Symmetrizing/Antisymmetrizing Boson and Fermions:
            - symmetrized basis (bosons): $\Phi_{2n+1}^S(x_1,x_2) = \phi_{n}(x_1)\phi_{n}(x_0)$
            - antisymmetrized basis (fermions): $\Phi_{2n}^S(x_1,x_2)=\frac{1}{\sqrt{2}}(\phi_0(x_1)\phi_n(x_2)+\phi_n(x_1)\phi_0(x_2)$
        - $\Phi_\alpha^{S,A}(x_1,x_2)=\pm \Phi_\alpha^{S,A}(x_2,x_1)$
        - In general:
        
        $$
        \Phi_\alpha^{(S,A)}(\vec{r_1},\dots,\vec{r_N})=A_\alpha\hat{S}_\pm\prod_{j=1}^N\phi_j(\vec{r_j})=\left\|
        \begin{array}{ccccc}
        \phi_1(\vec{r_1}) & \phi_1(\vec{r_2}) & \dots & \phi_1(\vec{r_N}) \\
        \phi_2(\vec{r_1}) & \phi_2(\vec{r_2}) & \dots & \phi_2(\vec{r_N}) \\ \vdots & \ddots & \dots & \vdots \\
        \phi_N(\vec{r_1}) & \phi_N(\vec{r_2}) & \dots & \phi_N(\vec{r_N})
        \end{array}
        \right\|_\pm
        $$
        
    - How about spin, etc.?
        - there are other quantum numbers labeling the single-particle states
        1. count each single-particle state with a given set of quantum numbers as one single particle state: $\ket{\phi_{nlm\sigma}} \rightarrow \ket{\phi_\alpha}$
        2. we can also build many-particle states directly from sum of angular momenta (multiplets) , tricky but useful: $\ket{\phi^{(1)}_{n_1l_1m_1\sigma_1}}\otimes\ket{\phi^{(2)}_{n_2l_2m_2\sigma_2}}\rightarrow\ket{\Phi_{JM_J}}$

---

## 3. Second Quantization

### Symmetrizing/Antisymmetrizing Bosons and Fermions

$$
\Phi_\alpha^{(S,A)}(\vec{r_1},\dots,\vec{r_N})=A_\alpha\hat{S}_\pm\prod_{j=1}^N\phi_j(\vec{r_j})=\left\|
\begin{array}{ccccc}
\phi_1(\vec{r_1}) & \phi_1(\vec{r_2}) & \dots & \phi_1(\vec{r_N}) \\
\phi_2(\vec{r_1}) & \phi_2(\vec{r_2}) & \dots & \phi_2(\vec{r_N}) \\ \vdots & \ddots & \dots & \vdots \\
\phi_N(\vec{r_1}) & \phi_N(\vec{r_2}) & \dots & \phi_N(\vec{r_N})
\end{array}
\right\|_\pm
$$

- $A_\alpha$: normalization
- $\hat{S}_\pm$: symmetrization operator: $+$ is permanant, $-$ is determinant

### Number occupation representation

- alternative basis: number occupation: $\ket{n_1, \dots, n_N}$
- $n_i \rightarrow$ number of particles in state $\ket{\phi_i}$
- $\sum_j n_j=N$ (constraints), for fermions $n_j=0,1$, for bosons $n_j=0,1,2, ...$
- number operator $\hat{n}_k$:
    - defined such that $\hat{n}_k\ket{n_1m\dots,n_N}=n_k\ket{n_1m\dots,n_N}$
    - vacuum state: $\ket{0}\equiv\ket{n_1=0, \dots, n_N=0}$
- examples: $n=2$, single-particle basis: $\{\ket{\phi_0},\ket{\phi_2},\ket{\phi_3}\}$
    - bosons:
        - $\ket{\phi_0}\otimes\ket{\phi_0} \rightarrow \ket{n_0=2, n_1=0,n_2=0}_+$
        - $\frac{1}{\sqrt{2}}(\ket{\phi_1}\otimes\ket{\phi_2}+\ket{\phi_2}\otimes\ket{\phi_1}) \rightarrow \ket{n_0=0, n_1=1,n_2=1}_+$
    - fermions:
        - $\frac{1}{\sqrt{2}}(\ket{\phi_0}\otimes\ket{\phi_2}-\ket{\phi_2}\otimes\ket{\phi_0}) \rightarrow \ket{n_0=1, n_1=0,n_2=1}_-$
        - $\frac{1}{\sqrt{2}}(\ket{\phi_1}\otimes\ket{\phi_2}-\ket{\phi_2}\otimes\ket{\phi_1}) \rightarrow \ket{n_0=1, n_1=1,n_2=1}_-$
    
    (with the order matters that 
    
    - $\ket{n_0=1, n_1=0,n_2=1}_+=+\ket{n_0=1, n_2=0,n_1=1}_+$
    - $\ket{n_0=1, n_1=0,n_2=1}_-=-\ket{n_0=1, n_2=0,n_1=1}_-$)

### Bosonic creation and destruction operators

- bosons: define operators $\hat{b}_i$ and $\hat{b}_i^\dagger$:
    - $\hat{b}_j^\dagger\ket{n_1,\dots,n_N}=B_+(n_j)\ket{n_1,\dots,n_{j}+1,\dots,n_N}$
    - $\hat{b}\ket{n_1,\dots,n_N}=B_-(n_j)\ket{n_1,\dots,n_{j}-1,\dots,n_N}$   ($n_j$ : normalization)
    - in this basis, the only non-zero matrix elements are
        
        $\braket{n_1,\dots,n_j+1,\dots,n_N\|\hat{b}_j^\dagger\|n_1,d\dots,n_N}$ = $(\braket{n_1,\dots,n_j,\dots,n_N\|\hat{b}_j\|n_1,d\dots,n_j+1,n_N})^*$
        
- question: $\hat{b}_k^\dagger\hat{b}_j^\dagger\ket{n_1,\dots,n_N}=\hat{b}_j^\dagger\hat{b}_k^\dagger\ket{n_1,\dots,n_N}$? yes!
    - thus $[\hat{b}_k^\dagger,\hat{b}_j^\dagger]=0$ and by the same reasoning $[\hat{b}_k,\hat{b}_j]=0$
- question: if $k\neq j$, $\hat{b}_k\hat{b}_j^\dagger\ket{n_1,\dots,n_N}=\hat{b}_j^\dagger\hat{b}_k\ket{n_1,\dots,n_N}$? yes!
    - thus $[\hat{b}_k,\hat{b}_j^\dagger]=0$ ($k\neq j$)
- what if $k=j$? $\hat{b}_j\hat{b}_j^\dagger\ket{n_1,\dots,n_N}=\hat{b}_j^\dagger\hat{b}_j\ket{n_1,\dots,n_N}$
    - vacuum state: $\ket{0}\equiv\ket{n_1=0, \dots, n_N=0}$
    - clearly, we must impose: $\hat{b}_j\ket{0}=0$ $\forall j$
    - thus $\hat{b}_j^\dagger\hat{b}_j\ket{0}=0$ however $\hat{b}_j\hat{b}_j^\dagger\ket{0} \propto \ket{0}$
    - we choose the norm. constant such that $\hat{b}_j\hat{b}_j^\dagger\ket{0}=\ket{0} \Rightarrow [\hat{b}_j,\hat{b}_j^\dagger]\ket{0}=0$
    - In general, let’s assume the following operator identities hold: $[\hat{b}_k\hat{b}_j^]=[\hat{b}_k^\dagger\hat{b}_j^\dagger]=0$, $[\hat{b}_k\hat{b}_j^\dagger]=\delta_{kj}$

### Bosonic number operator

- show that: $[\hat{b}_k^\dagger\hat{b}_k,\hat{b}_k]=-\hat{b}_k$, $[\hat{b}_k^\dagger\hat{b}_k,\hat{b}_k^\dagger]=+\hat{b}_k^\dagger$
- then show that: $\hat{b}_k\ket{\dots,n_k,\dots}=\sqrt{n_k}\ket{\dots,n_k-1,\dots}$,  $\hat{b}_k^\dagger\ket{\dots,n_k,\dots}=\sqrt{n_k}\ket{\dots,n_k+1,\dots}$
- finally, show that: $\hat{n}_k^\equiv\hat{b}_k^\dagger\hat{b}_k$ such that $\hat{n}_k\ket{n_1,\dots,n_N}=n_k\ket{n_1,\dots,n_N}$

### Fermionic creation and destruction operators

- fermions: define operators $\hat{c}_i$ and $\hat{c}_i^\dagger$:
    - $\hat{c}_j^\dagger\ket{n_1,\dots,n_N}=C_+(n_j)\ket{n_1,\dots,n_{j}+1,\dots,n_N}$
    - $\hat{c}_j\ket{n_1,\dots,n_N}=C_-(n_j)\ket{n_1,\dots,n_{j}-1,\dots,n_N}$   $n_j=0,1$
    - the order of the occupations is: $\ket{\dots,n_k,\dots,n_j,\dots}=-\ket{\dots,n_j,\dots,n_k,\dots}$, $\hat{c}_k^\dagger\hat{c}_j^\dagger\ket{\dots,0,\dots,0,\dots}=-\hat{c}_j^\dagger\hat{c}_k^\dagger\ket{\dots,0,\dots,0,\dots}$
    - let’s assume those holds as an operator identity: $\hat{c}_k^\dagger\hat{c}_j^\dagger=-\hat{c}_j^\dagger\hat{c}_k^\dagger \Rightarrow \{c_k^\dagger,c_j^\dagger\}$ by the same reasoning, $\{\hat{c}_k,\hat{c}_j\}=0, \{\hat{c}_k,\hat{c}_j^\dagger\}=0$ $(k\neq j)$
    - if $k=j$, $\{\hat{c}_k,\hat{c}_k^\dagger\}=1$, thus $\{\hat{c}_k,\hat{c}_j^\dagger\}=\delta_{kj}$, $\{\hat{c}_k,\hat{c}_j\}=0=\{\hat{c}_k^\dagger,\hat{c}_j^\dagger\}$ $\rightarrow (\hat{c}_k^\dagger)^2\ket{\dots,n_k,\dots}=0, (\hat{c}_k)^2\ket{\dots,n_k,\dots}=0$

### Fermionic number operator

- show that: $[\hat{c}_k^\dagger\hat{c}_k,\hat{c}_k]=-\hat{c}_k$, $[\hat{c}_k^\dagger\hat{c}_k,\hat{c}_k^\dagger]=+\hat{c}_k$
- then, show that $(\hat{c}_k^\dagger\hat{c}_k)^2\ket{\dots,n_k,\dots}=\hat{c}_k^\dagger\hat{c}_k\ket{\dots,n_k,\dots}$
- thus, if $\hat{c}_k^\dagger\hat{c}_k\ket{\dots,n_k,\dots}=n_k\ket{\dots,n_k,\dots}\Rightarrow n_k=0,1$
- from, this, we can associate $\hat{n}_k\equiv\hat{c}_k^\dagger\hat{c}_k$ such that $\hat{n}_k\ket{n_1,\dots,n_N}=n_k\ket{n_1,\dots,n_N}$

---

## 4. Operators in Second Quantization

### One-body operators

- one-body operator written in a single-particle basis: $T_{kj}=\braket{\phi_k\|\hat{T}\|\phi_j}\Leftrightarrow \hat{T}=\sum_{kj}T_{kj}\ket{\phi_k}\bra{\phi_j}$
- matrix element: $T_{kj}=\int d^3\vec{r}\phi_k^*(\vec{r})T(\vec{r})\phi_j(\vec{r})$
- example: kinetic energy $K_{kj}=\left(-\frac{\hbar^2}{2m}\right)\int d^3\vec{r}\phi_k^*(\vec{r})\nabla^2_{\vec{r}}\phi_j(\vec{r})$

### Two-body operators

- two-body operator written in a two-particle basis:
    - $\ket{\Phi_\alpha}=S_\pm\ket{\phi_i}\otimes \ket{\phi_j}=\ket{\phi_i}\ket{\phi_j}$
    - $V_{\alpha\beta}=\braket{\Phi_\alpha\|\hat{V}\|\Phi_\beta}\Leftrightarrow\hat{V}=\sum_{\alpha\beta}V_{\alpha\beta}\ket{\Phi_\alpha}\bra{\Phi_\beta}$
- two-body operator written in a single-particle basis:
    - $\Rightarrow \hat{V}=\sum_{ijkm}V_{ijkm}\ket{\phi_i}\ket{\phi_j}\bra{\phi_k}\bra{\phi_m}+\dots$
    - matrix elements: $V_{ijkm}=\int d^3\vec{r}_1d^3\vec{r}_2\phi_i^*(\vec{r}_1)\phi_j^*(\vec{r}_2)V(\vec{r}_1,\vec{r}_2)\phi_k(\vec{r}_1)\phi_m(\vec{r}_2)$

### Operators in the N-body basis

- one-body operator written in an N-particle basis:
    - $\hat{T}^{(n)}\ket{\phi_{k_1}}\dots\ket{\phi_{k_n}}\dots\ket{\phi_{k_N}}=\sum_{ij}T_{kj}^{(n)}\delta_{jk_n}\ket{\phi_{k_1}}\dots\ket{\phi_k}\dots\ket{\phi_{k_N}}$
    - sum of N one-body operators written in a N-particle basis: $\hat{T}_{tot}=\sum_{n-1}^N\hat{T}^{(n)}$, $\hat{T}_{tot}\ket{\phi_{k_1}}\dots\ket{\phi_{k_N}}=\sum_{n=1}^N\sum_{kj}T_{kj}^{(n)}\delta_{jk_n}\ket{\phi_{k_1}}\dots\ket{\phi_{k_k}}\dots\ket{\phi_{k_N}}$

### Operators in the N-body bosonic basis

- orbitals: $\ket{\phi_k}=\hat{b}_k^\dagger\ket{0}, \bra{\phi_k}=\bra{0}\hat{b}_k$
- one-body operator: $\hat{T}=\sum_{kj}T_{kj}\ket{\phi_k}\bra{\phi_j}$
- two-body operator: $\hat{V}=\sum_{ijkm}V_{ijkm}\ket{\phi_i}\ket{\phi_j}\bra{\phi_k}\bra{\phi_m}$
- N-body operators (sum):
    - $\hat{T}_{tot}=\sum_{n=1}^N\hat{T}^{(n)}$
    - $\hat{V}=\frac{1}{2}\sum_{n,n'=1(n\neq n')}^N \hat{V}^{(n,n')}$
- number occupation representation: $\sum_j n_j=N$, $\ket{n_1,\dots,n_k,\dots,n_N} \propto (\hat{b}_1^\dagger)^{n_1}\dots(\hat{b}_k^\dagger)^{n_k}\dots(\hat{b}_N^\dagger)^{n_N}\ket{0}$
- we can show that $\hat{T}_{tot}\ket{n_1,\dots,n_k,\dots,n_N}=\sum_{kj}T_{kj}\hat{b}_k^\dagger\hat{b}_j\ket{n_1,\dots,n_k,\dots,n_j,\dots n_N}$
- also show that $\hat{V}_{tot}\ket{n_1,\dots,n_N}=\sum_{ijkm}V_{ijkm}\hat{b}_i^\dagger \hat{b}_j^\dagger\hat{b}_m\hat{b}_k\ket{n_1,\dots,n_N}$

### Operators in second quantized form

- we can write:
    - $\hat{T}_{tot}=\sum_{kj}T_{kj}\hat{b}_k^\dagger\hat{b}_j^\dagger$
    - $\hat{V}_{tot}=\sum_{ijkm}V_{ijkm}\hat{b}_i^\dagger\hat{b}_j^\dagger\hat{b}_m\hat{b}_k$
- it turns out that, for fermions, they take the same form:
    - $\hat{T}_{tot}=\sum_{kj}T_{kj}\hat{c}_k^\dagger\hat{c}_j^\dagger$
    - $\hat{V}_{tot}=\sum_{ijkm}V_{ijkm}\hat{c}_i^\dagger\hat{c}_j^\dagger\hat{c}_m\hat{c}_k$

### Example: non-interacting system

- Hamiltonian: $\hat{H}=\sum_{n=1}^N\hat{h}^{(n)}$, in this basis : $\hat{H}_{tot}=\sum_k\epsilon_k\hat{n}_k$
- single-particle basis: $\hat{h}\ket{\phi_i}=\epsilon_i\ket{\phi_i}$, $\hat{n}_k=\hat{c}_k^\dagger\hat{c}_k$ (fermions) , $\hat{n}_k=\hat{b}_k^\dagger\hat{b}_k$ (bosons)
- many-body spectrum:
    - $\hat{H}_{tot}\ket{n_1,\dots,n_N}=(\sum_k \epsilon_kn_k)\ket{n_1,\dots,n_N}$
    - $E_{n_1,\dots,n_N}=\sum_{n=1}^N\epsilon_kn_k$

### Density operator

- canonical: $\hat{\rho}\equiv e^{-\beta \hat{H}_{tot}}$, $\beta=\frac{1}{kT}$
- grand-canonical: $\hat{\rho}_G\equiv e^{-\beta(\hat{H}_{tot}-\mu\hat{N})}$, $\hat{N}=\sum_{k=1}^N\hat{n}_k$
- many-particle spectrum: $\hat{H}_{tot}\ket{\alpha}=E_\alpha\ket{\alpha}$
- partition function: $\mathcal{Z}=\sum_\alpha e^{-\beta E_\alpha}=\text{Tr}(\hat{\rho})$
- thermal average: $\braket{\hat{A}}=\frac{\text{Tr}(\hat{\rho}\hat{A})}{\text{Tr}(\hat{\rho})}=\frac{1}{\mathcal{Z}}\sum_\alpha A_\alpha e^{-\beta E_\alpha}$


---

## Non-interacting electron gas

## Mean-field theory

## Time evolution and representations in quantum mechanics

## Equations of motion and time-ordered correlation functions

## Retarded and and advanced Green’s functions

## The Anderson impurity model

## Schrieffer-Wolff transformation (Kondo model)

## Linear response theory and Kubo formula

## Kubo formula for the conductivity and the conductance

## Electronic transports in the Anderson model

## Kondo effect and numerical renormalization group

## Time-ordered Green’s functions and WIck’s theorem

## Feynman diagrams

## Dyson’s equations and self-energy

## Random Phase Approximation (RPA)

## Matsubara formalism

## Phonons

## Phonon Green’s functions

## Cooper instability

## Introduction to BCS theory

TBA


<div class="pagination">
  <a href="{{ '/Phys/SP/SP_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>