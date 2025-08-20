---
layout: default
date: 2025-08-20
---

date: {{ page.date | date: "%Y.%m.%d" }}

# Quantum Mechanics Cheat Sheet

## Postulates, Measurement, Dynamics

* State normalization (Hilbert space)

  $$
  \langle \psi | \psi \rangle = 1.
  $$

* Born rule (measurement probability)

  $$
  p(a_n)=\langle \psi | P_{a_n} | \psi \rangle, \qquad \sum_n P_{a_n}=\mathbb I,\; P_{a_n}P_{a_m}=\delta_{nm}P_{a_n}.
  $$

* POVM (generalized measurement)

  $$
  p(m)=\langle \psi | E_m | \psi \rangle,\qquad E_m\ge0,\;\; \sum_m E_m=\mathbb I.
  $$

* Expectation value / variance

  $$
  \langle A\rangle=\langle\psi|A|\psi\rangle,\qquad
  (\Delta A)^2=\langle A^2\rangle-\langle A\rangle^2.
  $$

* Canonical commutation relation (CCR)

  $$
  [x,p]=i\hbar.
  $$

* Robertson–Schrödinger uncertainty

  $$
  \Delta A\,\Delta B \;\ge\; \tfrac12\big|\langle [A,B]\rangle\big|.
  $$

* Time-dependent Schrödinger equation (Schrödinger picture)

  $$
  i\hbar\frac{\partial}{\partial t}|\psi(t)\rangle = H\,|\psi(t)\rangle.
  $$

* Heisenberg equation of motion (Heisenberg picture)

  $$
  \frac{dA_H}{dt}=\frac{i}{\hbar}[H,A_H]+\Big(\frac{\partial A}{\partial t}\Big)_H.
  $$

* Stationary states (time-independent Schrödinger equation)

  $$
  H\psi=E\psi.
  $$



## One-Dimensional Potentials

* Infinite square well

  $$
  \psi_n(x)=\sqrt{\frac{2}{L}}\sin\!\frac{n\pi x}{L},\qquad E_n=\frac{\hbar^2\pi^2}{2mL^2}n^2.
  $$

* Finite square well (transcendental conditions)

  $$
  k=\frac{\sqrt{2mE}}{\hbar},\quad \kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar},\quad
  \begin{cases}
  k\tan(ka)=\kappa & (\text{even})\\
  -k\cot(ka)=\kappa & (\text{odd})
  \end{cases}
  $$

* Delta potential bound state

  $$
  V(x)=-g\,\delta(x),\quad E=-\frac{mg^2}{2\hbar^2}.
  $$

* Delta potential scattering amplitude (1D)

  $$
  t(k)=\frac{1}{1+i\frac{mg}{\hbar^2 k}},\qquad R=|r|^2=\frac{1}{1+\big(\tfrac{2\hbar^2 k}{mg}\big)^2}.
  $$

* Rectangular barrier resonance condition (transmission maxima)

  $$
  k_2 a = n\pi,\qquad k_2=\sqrt{\frac{2m(E-V_0)}{\hbar^2}}\ (E>V_0).
  $$



## Harmonic Oscillator

* Hamiltonian / ladder operators

  $$
  H=\frac{p^2}{2m}+\frac12 m\omega^2 x^2,\quad
  a=\frac{1}{\sqrt{2\hbar m\omega}}(m\omega x+ip),\quad
  [a,a^\dagger]=1.
  $$

* Spectrum and eigenstates

  $$
  H|n\rangle=\hbar\omega\Big(n+\tfrac12\Big)|n\rangle,\qquad a|n\rangle=\sqrt{n}\,|n-1\rangle.
  $$

* Position/momentum operators via $a,a^\dagger$

  $$
  x=\sqrt{\frac{\hbar}{2m\omega}}(a+a^\dagger),\qquad
  p=i\sqrt{\frac{\hbar m\omega}{2}}(a^\dagger-a).
  $$

* Wavefunctions (Hermite polynomials)

  $$
  \psi_n(x)=\frac{1}{\sqrt{2^n n!}}\Big(\frac{m\omega}{\pi\hbar}\Big)^{1/4}
  H_n\!\Big(\sqrt{\tfrac{m\omega}{\hbar}}\,x\Big)e^{-m\omega x^2/2\hbar}.
  $$

* Coherent state (minimum-uncertainty)

  $$
  |\alpha\rangle=e^{-|\alpha|^2/2}\sum_{n=0}^\infty \frac{\alpha^n}{\sqrt{n!}}|n\rangle,\quad a|\alpha\rangle=\alpha|\alpha\rangle.
  $$



## Hilbert Space, Completeness, Transforms

* Resolution of identity (discrete/continuous)

  $$
  \sum_n |n\rangle\langle n|=\mathbb I,\qquad \int d\alpha\,|\alpha\rangle\langle\alpha|=\mathbb I.
  $$

* Position–momentum transform (Fourier kernel)

  $$
  \langle x|p\rangle=\frac{1}{\sqrt{2\pi\hbar}}e^{ipx/\hbar},\;
  \psi(x)=\int\!\frac{dp}{\sqrt{2\pi\hbar}}\,e^{ipx/\hbar}\phi(p).
  $$

* Operator representations

  $$
  (x\psi)(x)=x\psi(x),\quad (p\psi)(x)=-i\hbar\,\partial_x\psi(x).
  $$

* Spectral theorem (PVM form)

  $$
  A=\int_{\mathbb R}\lambda\, dE(\lambda),\qquad
  f(A)=\int f(\lambda)\, dE(\lambda).
  $$

* Rigged Hilbert space (Gelfand triple)

  $$
  \mathcal S\subset L^2\subset \mathcal S^{\!*},\quad |x\rangle,|p\rangle\in \mathcal S^{\!*}.
  $$



## 3D Separation, Angular Momentum, Radial Equation

* Laplacian (spherical coordinates)

  $$
  \nabla^2=\frac{1}{r^2}\partial_r(r^2\partial_r)-\frac{\hat L^2}{\hbar^2 r^2},\quad \hat L^2Y_{\ell m}=\hbar^2\ell(\ell+1)Y_{\ell m}.
  $$

* Radial Schrödinger equation (effective potential)

  $$
  u_\ell''(r)+\Big[\frac{2m}{\hbar^2}(E-V(r))-\frac{\ell(\ell+1)}{r^2}\Big]u_\ell(r)=0,\quad u_\ell=rR_\ell.
  $$

* Effective potential

  $$
  V_{\rm eff}(r)=V(r)+\frac{\hbar^2}{2m}\frac{\ell(\ell+1)}{r^2}.
  $$

* Spherical Bessel solutions (free particle)

  $$
  u_\ell(r)\propto j_\ell(kr),\quad j_0(z)=\frac{\sin z}{z}.
  $$

* Plane-wave expansion (partial waves)

  $$
  e^{i\mathbf k\cdot\mathbf r}=4\pi\sum_{\ell m}i^\ell j_\ell(kr)Y_{\ell m}(\hat{\mathbf r})Y_{\ell m}^*(\hat{\mathbf k}).
  $$



## Hydrogenic Atom

* Energy levels

  $$
  E_n=-\frac{\mu Z^2 e^4}{2(4\pi\varepsilon_0)^2\hbar^2}\frac{1}{n^2},\qquad n=1,2,\dots
  $$

* Radial wavefunctions (associated Laguerre)

  $$
  R_{n\ell}(r)=\frac{2}{n^2a_0^{3/2}}\sqrt{\frac{(n-\ell-1)!}{(n+\ell)!}}\;e^{-\rho/2}\rho^\ell L_{n-\ell-1}^{2\ell+1}(\rho),\ \ \rho=\frac{2Zr}{na_0}.
  $$

* Expectations

  $$
  \Big\langle \frac{1}{r}\Big\rangle_{n\ell}=\frac{Z}{a_0 n^2},\qquad
  \langle r\rangle_{n\ell}=\frac{a_0}{2Z}\big(3n^2-\ell(\ell+1)\big).
  $$

* Runge–Lenz vector

  $$
  \mathbf A=\frac{1}{2\mu}\big(\mathbf p\times\mathbf L-\mathbf L\times\mathbf p\big)-\frac{Ze^2}{4\pi\varepsilon_0}\frac{\mathbf r}{r},\quad [H,\mathbf A]=0.
  $$



## Spin and Angular-Momentum Addition

* Spin algebra / Pauli matrices

  $$
  [S_i,S_j]=i\hbar\varepsilon_{ijk}S_k,\qquad S_i=\frac{\hbar}{2}\sigma_i.
  $$

* Rotation operator (SU(2))

  $$
  R(\hat{\mathbf n},\theta)=\exp\!\Big(-\frac{i}{\hbar}\theta\,\hat{\mathbf n}\!\cdot\!\mathbf S\Big).
  $$

* Zeeman effect (weak-field)

  $$
  H_Z=\mu_B(g_L \mathbf L+g_S \mathbf S)\cdot\mathbf B/\hbar,\quad E_{J,M}=-g_J\mu_B M B.
  $$

* Landé $g_J$ factor

  $$
  g_J=\frac{J(J+1)+L(L+1)-S(S+1)}{2J(J+1)}g_L+\frac{J(J+1)-L(L+1)+S(S+1)}{2J(J+1)}g_S.
  $$

* Spin–orbit coupling (Thomas factor included)

  $$
  H_{\rm SO}=\frac{1}{2m^2c^2}\frac{1}{r}\frac{dV}{dr}\,\mathbf L\cdot\mathbf S.
  $$

* Addition of angular momenta / Clebsch–Gordan

  $$
  |JM\rangle=\sum_{m_1+m_2=M} C^{JM}_{j_1m_1\,j_2m_2}\,|j_1m_1\rangle|j_2m_2\rangle.
  $$

* Wigner–Eckart theorem

  $$
  \langle J'M'|T^{(k)}_q|JM\rangle=C^{J'M'}_{JMkq}\,\frac{\langle J'\!\|T^{(k)}\|J\rangle}{\sqrt{2J'+1}}.
  $$



## Identical Particles and Statistics

* Exchange operator / symmetry

  $$
  P_{12}|\Psi_\pm\rangle=\pm|\Psi_\pm\rangle,\qquad \Psi_\pm=\tfrac{1}{\sqrt2}\big(\phi_a(1)\phi_b(2)\pm\phi_b(1)\phi_a(2)\big).
  $$

* Slater determinant (fermions)

  $$
  \Psi_F(\mathbf r_1,\mathbf r_2)=\tfrac{1}{\sqrt2}
  \begin{vmatrix}
  \phi_a(1)&\phi_b(1)\\
  \phi_a(2)&\phi_b(2)
  \end{vmatrix}.
  $$

* Second quantization (boson/fermion)

  $$
  [a_\alpha,a_\beta^\dagger]=\delta_{\alpha\beta},\qquad
  \{c_\alpha,c_\beta^\dagger\}=\delta_{\alpha\beta}.
  $$

* Direct / exchange integrals (two-electron Coulomb)

  $$
  J=\iint \frac{|\phi_a(1)|^2|\phi_b(2)|^2}{r_{12}}\,d^3r_1d^3r_2,\quad
  K=\iint \frac{\phi_a^*(1)\phi_b^*(2)\phi_a(2)\phi_b(1)}{r_{12}}\,d^3r_1d^3r_2.
  $$



## Time-Independent Perturbation Theory

* Non-degenerate energies / states

  $$
  E_n^{(1)}=\langle n|V|n\rangle,\quad
  E_n^{(2)}=\sum_{m\ne n}\frac{|V_{mn}|^2}{E_n^{(0)}-E_m^{(0)}},\quad
  |n^{(1)}\rangle=\sum_{m\ne n}\frac{V_{mn}}{E_n^{(0)}-E_m^{(0)}}|m\rangle.
  $$

* Degenerate subspace (matrix diagonalization)

  $$
  W_{\alpha\beta}=\langle\alpha|V|\beta\rangle,\quad W\ \text{diagonalize in the degenerate subspace}.
  $$

* Quasi-degenerate 2×2 effective Hamiltonian

  $$
  H_{\rm eff}=\begin{pmatrix}E_1^{(0)} & V_{12}\\ V_{21} & E_2^{(0)}\end{pmatrix},\quad
  E_\pm=\frac{E_1^{(0)}+E_2^{(0)}}{2}\pm\sqrt{(\tfrac{\Delta}{2})^2+|V_{12}|^2}.
  $$

* Hellmann–Feynman theorem

  $$
  \frac{dE}{d\lambda}=\Big\langle \psi(\lambda)\Big|\frac{\partial H}{\partial\lambda}\Big|\psi(\lambda)\Big\rangle.
  $$

* Second-order Stark polarizability (ground state)

  $$
  \Delta E^{(2)}=-\tfrac12\alpha E^2,\quad
  \alpha=2e^2\sum_{n\ne0}\frac{|\langle n|z|0\rangle|^2}{E_n^{(0)}-E_0^{(0)}}.
  $$



## Variational Method and WKB

* Variational upper bound (Ritz functional)

  $$
  E_0\le \mathcal E[\psi]=\frac{\langle\psi|H|\psi\rangle}{\langle\psi|\psi\rangle}.
  $$

* Ritz method (generalized eigenvalue problem)

  $$
  H\mathbf c=E\,S\mathbf c,\quad H_{ij}=\langle\phi_i|H|\phi_j\rangle,\ S_{ij}=\langle\phi_i|\phi_j\rangle.
  $$

* WKB waveforms

  $$
  \psi(x)\approx \frac{1}{\sqrt{p(x)}}\exp\!\Big(\pm\frac{i}{\hbar}\!\int^x p\,dx\Big),\quad
  p(x)=\sqrt{2m(E-V)}.
  $$

* Bohr–Sommerfeld quantization (two turning points)

  $$
  \int_{x_1}^{x_2}\!p(x)\,dx=\pi\hbar\Big(n+\tfrac12\Big).
  $$

* Barrier tunneling probability (thick barrier)

  $$
  T\approx \exp\!\Big[-2\int_{x_a}^{x_b}\kappa(x)\,dx\Big],\quad
  \kappa(x)=\sqrt{2m(V-E)}/\hbar.
  $$

* Langer correction (radial WKB)

  $$
  \ell(\ell+1)\ \longrightarrow\ \big(\ell+\tfrac12\big)^2.
  $$

* Quantum bouncer levels (WKB, hard wall + linear)

  $$
  \int_0^{E/F}\!\sqrt{2m(E-Fx)}\,dx=\pi\hbar\Big(n-\tfrac14\Big).
  $$



## Time-Dependent Perturbations and Transitions

* Interaction picture

  $$
  i\hbar\frac{d}{dt}|\psi_I\rangle=V_I(t)|\psi_I\rangle,\quad V_I=e^{iH_0 t/\hbar}V e^{-iH_0 t/\hbar}.
  $$

* First-order transition amplitude (Dyson)

  $$
  c_f^{(1)}(t)=\frac{1}{i\hbar}\int_{t_0}^{t}\!dt'\,e^{i\omega_{fi}t'}\,V_{fi}(t').
  $$

* Rabi formula (two-level, RWA)

  $$
  P_{i\to f}(t)=\frac{\Omega^2}{\Omega_R^2}\sin^2\frac{\Omega_R t}{2},\qquad
  \Omega_R=\sqrt{\Delta^2+\Omega^2}.
  $$

* Fermi’s golden rule

  $$
  W_{i\to f}=\frac{2\pi}{\hbar}\,|V(\omega_{fi})|^2\,\rho_f(E_f).
  $$

* Adiabatic condition

  $$
  \frac{|\langle m|\dot H|n\rangle|}{(E_n-E_m)^2}\ll 1.
  $$

* Landau–Zener transition probability

  $$
  P_{\rm LZ}=e^{-2\pi g^2/(\hbar v)}.
  $$



## Scattering Theory

* Asymptotic form (stationary scattering)

  $$
  \psi(\mathbf r)\sim e^{i\mathbf k\cdot\mathbf r}+f(\theta)\frac{e^{ikr}}{r}.
  $$

* Differential/total cross section

  $$
  \frac{d\sigma}{d\Omega}=|f(\theta)|^2,\qquad
  \sigma_{\rm tot}=\int d\Omega\,|f(\theta)|^2.
  $$

* Partial-wave expansion / phase shifts

  $$
  f(\theta)=\frac{1}{2ik}\sum_{\ell=0}^\infty(2\ell+1)\big(e^{2i\delta_\ell}-1\big)P_\ell(\cos\theta),\quad
  \sigma_{\rm tot}=\frac{4\pi}{k^2}\sum_\ell(2\ell+1)\sin^2\delta_\ell.
  $$

* Optical theorem

  $$
  \sigma_{\rm tot}=\frac{4\pi}{k}\,\mathrm{Im}\,f(0).
  $$

* Lippmann–Schwinger (outgoing Green’s function)

  $$
  |\psi^{(+)}\rangle=|\phi\rangle+G_0^{(+)}V|\psi^{(+)}\rangle,\quad
  G_0^{(+)}(\mathbf r)=-\frac{m}{2\pi\hbar^2}\frac{e^{ikr}}{r}.
  $$

* Born approximation (first order)

  $$
  f(\theta)\approx -\frac{2m}{4\pi\hbar^2}\int d^3r\,e^{-i\mathbf q\cdot\mathbf r}V(\mathbf r),\quad q=2k\sin\frac{\theta}{2}.
  $$

* Effective range expansion (low-energy $s$-wave)

  $$
  k\cot\delta_0(k)=-\frac{1}{a}+\frac{1}{2}r_e k^2+\cdots,\qquad
  f_0=\frac{1}{k\cot\delta_0-ik}.
  $$

* Breit–Wigner resonance

  $$
  \sigma_\ell(E)=\frac{4\pi}{k^2}(2\ell+1)\,\frac{\Gamma^2/4}{(E-E_R)^2+\Gamma^2/4}.
  $$



## Symmetry and Conservation Laws

* Wigner theorem

  $$
  |\langle \phi|\psi\rangle|^2\ \text{preserved} \;\Rightarrow\; \text{transformation is unitary or antiunitary}.
  $$

* Generator and conservation (Noether in QM)

  $$
  U(\epsilon)=e^{-\tfrac{i}{\hbar}\epsilon G},\quad [H,G]=0\Rightarrow \frac{d}{dt}\langle G\rangle=0.
  $$

* Space translations / rotations (unitary reps.)

  $$
  U(\mathbf a)=e^{-i\mathbf a\cdot\mathbf p/\hbar},\qquad
  R(\hat{\mathbf n},\theta)=e^{-i\theta \hat{\mathbf n}\cdot\mathbf L/\hbar}.
  $$

* Parity / time reversal

  $$
  (P\psi)(\mathbf r)=\psi(-\mathbf r),\qquad T i T^{-1}=-i,\quad T\mathbf S T^{-1}=-\mathbf S.
  $$

* Kramers degeneracy (half-integer spin)

  $$
  T^2=-1\Rightarrow \text{at least double degeneracy for }B=0.
  $$

* Wigner–Eckart (selection rules)

  $$
  \langle J'M'|T^{(k)}_q|JM\rangle\propto C^{J'M'}_{JMkq}.
  $$



## Density Operator, Quantum Channels, Master Equations

* Density operator and expectation

  $$
  \rho=\sum_i p_i|\psi_i\rangle\langle\psi_i|,\quad \mathrm{Tr}\,\rho=1,\quad
  \langle A\rangle=\mathrm{Tr}(\rho A),\quad \mathrm{Tr}\,\rho^2\le1.
  $$

* Partial trace (reduced state)

  $$
  \rho_A=\mathrm{Tr}_B\,\rho_{AB}.
  $$

* Kraus representation (CPTP map / quantum channel)

  $$
  \mathcal E(\rho)=\sum_k K_k\rho K_k^\dagger,\qquad \sum_k K_k^\dagger K_k=\mathbb I.
  $$

* Lindblad (GKSL) master equation

  $$
  \dot\rho=-\frac{i}{\hbar}[H,\rho]+\sum_j\Big(L_j\rho L_j^\dagger-\tfrac12\{L_j^\dagger L_j,\rho\}\Big).
  $$

* Bloch equations (driven qubit, $T_1,T_2$)

  $$
  \dot{\mathbf r}=\boldsymbol\Omega\times\mathbf r-\frac{r_x\hat x+r_y\hat y}{T_2}-\frac{(r_z-r_z^{\rm eq})\hat z}{T_1}.
  $$



## Path Integrals and Action Phase

* Feynman path integral (propagator)

  $$
  K(x_b,t_b;x_a,t_a)=\int_{x(t_a)=x_a}^{x(t_b)=x_b}\!\!\mathcal D x(t)\;
  e^{\tfrac{i}{\hbar}\int_{t_a}^{t_b}L\,dt}.
  $$

* Composition property

  $$
  K(b,a)=\int dx\,K(b,x)\,K(x,a).
  $$

* Free particle propagator

  $$
  K_0=\sqrt{\frac{m}{2\pi i\hbar T}}\;\exp\!\Big[\frac{i m (x_b-x_a)^2}{2\hbar T}\Big].
  $$

* Harmonic oscillator propagator (exact)

  $$
  K_{\rm HO}=
  \sqrt{\frac{m\omega}{2\pi i\hbar\sin\omega T}}\;
  \exp\!\Big[\frac{i}{\hbar}S_{\rm cl}(x_b,x_a;T)\Big],
  $$

  $$
  S_{\rm cl}=\frac{m\omega}{2\sin\omega T}\Big[(x_b^2+x_a^2)\cos\omega T-2x_a x_b\Big].
  $$

* Van Vleck semiclassical formula

  $$
  K\approx\sum_{\text{classical paths}}
  \Big(\frac{1}{2\pi i\hbar}\Big)^{\!1/2}
  \sqrt{\Big|-\frac{\partial^2 S_{\rm cl}}{\partial x_b\,\partial x_a}\Big|}
  \exp\!\Big[\frac{i}{\hbar}S_{\rm cl}-i\frac{\nu\pi}{2}\Big].
  $$

* Generating functional (with source)

  $$
  Z[J]=\int\mathcal D x\;\exp\!\Big[\frac{i}{\hbar}\!\int (L+Jx)\,dt\Big],\quad
  \langle \mathcal T\,x(t_1)\cdots x(t_n)\rangle=\frac{1}{i^n}\frac{\delta^n \ln Z}{\delta J(t_1)\cdots \delta J(t_n)}\Big|_{J=0}.
  $$

* Wick rotation / Euclidean action

  $$
  t\to -i\tau,\quad K_E=\int\mathcal D x\;e^{-S_E/\hbar},\quad
  S_E=\int d\tau\Big(\tfrac{m}{2}\dot x^2+V(x)\Big).
  $$

* Instanton tunneling (double well, splitting scale)

  $$
  \Delta E \propto A\,e^{-S_E[x_{\rm inst}]/\hbar}.
  $$

* Aharonov–Bohm phase

  $$
  \Delta\varphi=\frac{q}{\hbar c}\oint \mathbf A\cdot d\mathbf l=\frac{q\Phi}{\hbar c}.
  $$

* Coherent-state path integral (HO)

  $$
  S[\alpha,\alpha^*]=\int dt\Big(\tfrac{i\hbar}{2}(\alpha^*\dot\alpha-\dot\alpha^*\alpha)-\hbar\omega\,\alpha^*\alpha\Big).
  $$


<div class="pagination">
  <a href="{{ '/Phys/Q/Q_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>