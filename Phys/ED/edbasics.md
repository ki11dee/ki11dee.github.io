---
layout: default
date: 2025-08-20
---

date: {{ page.date | date: "%Y.%m.%d" }}

# Electrodynamics Cheat Sheet

SI units; $$\nabla=(\partial_x,\partial_y,\partial_z)$$, 
$$\hat{\mathbf n}$$: outward unit normal, 
$$R=|\mathbf r-\mathbf r'|$$, 
$$\hat{\mathbf R}=(\mathbf r-\mathbf r')/R$$.



## Electrostatics (vacuum)

* Coulomb field of a static charge distribution  
$$\mathbf E(\mathbf r)=\frac{1}{4\pi\varepsilon_0}\int \rho(\mathbf r')\,\frac{\mathbf r-\mathbf r'}{|\mathbf r-\mathbf r'|^3}\,d^3r'$$

* Electrostatic potential and its gradient relation  
$\Phi(\mathbf r)=\frac{1}{4\pi\varepsilon_0}\int \frac{\rho(\mathbf r')}{|\mathbf r-\mathbf r'|}\,d^3r',\qquad \mathbf E=-\nabla\Phi$

* Gauss’s law (integral/differential)  
$\oint_{\partial V}\mathbf E\!\cdot\! d\mathbf a=\frac{Q_{\text{encl}}}{\varepsilon_0},\qquad \nabla\!\cdot\!\mathbf E=\frac{\rho}{\varepsilon_0}$

* Poisson/Laplace equations  
$\nabla^2\Phi=-\frac{\rho}{\varepsilon_0},\qquad \nabla^2\Phi=0\ \ (\rho=0)$

* Electrostatic energy (field/source forms)  
$U=\frac{\varepsilon_0}{2}\int E^2\,d^3x=\frac12\int \rho\,\Phi\,d^3x$

* Capacitance and energy of a capacitor  
$C\equiv \frac{Q}{V},\qquad U=\frac12 C V^2$


* Boundary conditions (electrostatics):  
  $\hat{\mathbf n}\times(\mathbf E_2-\mathbf E_1)=\mathbf 0,\qquad \hat{\mathbf n}\!\cdot(\mathbf D_2-\mathbf D_1)=\sigma_f$  
  Tangential $E$ continuous; normal $D$ jumps by free surface charge $\sigma_f$.



## Boundary-Value Methods (separation, Green)

* Separated spherical solution of Laplace’s equation (axisymmetric)  
$\Phi_{\text{sph}}(r,\theta)=\sum_{\ell=0}^\infty\!\left(A_\ell r^\ell+B_\ell r^{-(\ell+1)}\right)P_\ell(\cos\theta)$

* Separated cylindrical solution (2D)  
$\Phi_{\text{cyl}}(\rho,\phi)=A_0+B_0\ln\rho+\sum_{m=1}^\infty\left(\rho^m A_m+\rho^{-m}B_m\right)\!\cos m\phi\ (\text{or }\sin m\phi)$

* Green’s function for 3D Laplacian  
$\nabla^2 G(\mathbf r,\mathbf r')=-\delta(\mathbf r-\mathbf r'),\qquad G=\frac{1}{4\pi R}$

* Green’s representation (Dirichlet/Neumann data)  
$\Phi(\mathbf r)=\frac{1}{\varepsilon_0}\int_V \rho(\mathbf r')G\,d^3r' -\oint_{\partial V}\!\left[\Phi\,\partial_{n'}G-G\,\partial_{n'}\Phi\right]da'$


* Method of images (plane conductor at $z=0$):  
  $$\Phi(\mathbf r)=\frac{1}{4\pi\varepsilon_0}\!\left(\frac{q}{|\mathbf r-\mathbf r_0|}-\frac{q}{|\mathbf r-\mathbf r_0^*|}\right)$$  
  Image charge at mirrored point $\mathbf r_0^*$.



## Uniqueness & Energy tricks

* No formula—principle used for checks  
If $\Phi$ satisfies Laplace’s equation in $V$ with fixed $$\Phi|_{\partial V}$$(or fixed   $$\partial_n\Phi|_{\partial V}$$), the solution is unique.

* Energy by surface/source integrals (variational checks)  
$U=\frac{\varepsilon_0}{2}\int E^2\,d^3x=\frac12\oint_{\partial V}\!\Phi\,\mathbf D\!\cdot\! d\mathbf a-\frac12\int_V \Phi\,\rho\,d^3x$


## Conductors, capacitance networks

* Surface charge and equipotential interior  
$\sigma=\varepsilon_0 E_n,\qquad \Phi=\text{const inside conductor}$

* Capacitance matrix relations (multi-conductor)  
$U=\frac12\sum_{ij}C_{ij}V_iV_j,\qquad Q_i=\sum_j C_{ij}V_j$


## Multipole expansion

* Cartesian multipole expansion to quadrupole  
$\Phi(\mathbf r)=\frac{1}{4\pi\varepsilon_0}\!\left[\frac{q}{r}+\frac{\mathbf p\!\cdot\!\hat{\mathbf r}}{r^2}+\frac{1}{2r^3}Q_{ij}\hat r_i\hat r_j+\cdots\right]$

* Monopole/dipole/quadrupole moments (traceless $Q_{ij}$)  
$q=\!\int \rho\,d^3r,\qquad \mathbf p=\!\int \rho\,\mathbf r\,d^3r,\qquad Q_{ij}=\!\int \rho\,(3x_ix_j-r^2\delta_{ij})\,d^3r$

* Spherical multipole expansion  
$\Phi(\mathbf r)=\frac{1}{4\pi\varepsilon_0}\sum_{\ell=0}^\infty\sum_{m=-\ell}^{\ell}\frac{4\pi}{2\ell+1}\frac{Q_{\ell m}\,Y_{\ell m}(\Omega)}{r^{\ell+1}}$

* Spherical multipole moments  
$Q_{\ell m}=\int \rho(\mathbf r)\,r^\ell Y_{\ell m}^*(\Omega)\,d^3r$

* Quadrupole tensor diagonalization: principal axes&shape (prolate/oblate)  
$$Q=R^{\!\top}\!\operatorname{diag}(\lambda_1,\lambda_2,\lambda_3)R$$, $$\lambda_1+\lambda_2+\lambda_3=0$$


## Dielectrics (polarization)

* Bound charges from polarization  
$$\mathbf P:\ \text{polarization density},\quad \rho_b=-\nabla\!\cdot\!\mathbf P,\quad \sigma_b=\mathbf P\!\cdot\!\hat{\mathbf n}$$

* Electric displacement and Gauss law for free charge $\rho_f$  
$\mathbf D=\varepsilon_0\mathbf E+\mathbf P,\qquad \nabla\!\cdot\!\mathbf D=\rho_f$

* Constitutive relations (linear, isotropic)  
$\mathbf P=\varepsilon_0\chi_e\mathbf E,\quad \mathbf D=\varepsilon\mathbf E,\quad \varepsilon=\varepsilon_0(1+\chi_e)$

* Boundary (dielectrics):
  $\hat{\mathbf n}\times(\mathbf E_2-\mathbf E_1)=\mathbf 0,\qquad \hat{\mathbf n}\!\cdot(\mathbf D_2-\mathbf D_1)=\sigma_f$

* Clausius–Mossotti (micro–macro link)  
$\frac{\varepsilon_r-1}{\varepsilon_r+2}=\frac{N\alpha}{3\varepsilon_0}$

* Dielectric sphere in uniform field:
  $\mathbf p=4\pi\varepsilon_0 a^3\frac{\varepsilon-\varepsilon_0}{\varepsilon+2\varepsilon_0}\,\mathbf E_0,\quad E_{\text{in}}=\frac{3\varepsilon_0}{\varepsilon+2\varepsilon_0}E_0$


## Magnetostatics I: currents & $\mathbf A$

* Steady-state Maxwell (no displacement current)  
$\nabla\!\cdot\!\mathbf J=0,\quad \nabla\!\cdot\!\mathbf B=0,\quad \nabla\!\times\!\mathbf B=\mu_0\mathbf J$

* Biot–Savart law (volume form; line-current gives $d\boldsymbol\ell'$)  
$\mathbf B(\mathbf r)=\frac{\mu_0}{4\pi}\int \frac{\mathbf J(\mathbf r')\times \hat{\mathbf R}}{R^2}\,d^3r'$

* Ampère’s law (integral)  
$\oint \mathbf B\!\cdot\! d\boldsymbol\ell=\mu_0 I_{\text{encl}}$

* Vector potential in Coulomb gauge  
$\mathbf B=\nabla\times\mathbf A,\quad \nabla\!\cdot\!\mathbf A=0\ \Rightarrow\ \nabla^2\mathbf A=-\mu_0\mathbf J$

* Magnetic dipole moment & far field  
$\mathbf m=I\,\mathbf a,\quad \mathbf B_{\text{dip}}=\frac{\mu_0}{4\pi r^3}\!\left[3(\mathbf m\!\cdot\!\hat{\mathbf r})\hat{\mathbf r}-\mathbf m\right]$

* Magnetostatic boundary:
  $\hat{\mathbf n}\!\cdot(\mathbf B_2-\mathbf B_1)=0,\quad \hat{\mathbf n}\times(\mathbf B_2-\mathbf B_1)=\mu_0\mathbf K$

* Magnetic energy density  
$u_B=\frac{B^2}{2\mu_0}$



## Magnetostatics II: magnetized matter & $\mathbf H$

* Bound currents due to magnetization  
$\mathbf M:\ \text{magnetization},\quad \mathbf J_b=\nabla\times\mathbf M,\quad \mathbf K_b=\mathbf M\times\hat{\mathbf n}$

* $\mathbf B=\mu_0(\mathbf H+\mathbf M),\quad \nabla\!\times\!\mathbf H=\mathbf J_f$
  Auxiliary field $\mathbf H$ (free-current source).

* Linear magnetic medium  
$\mathbf M=\chi_m\mathbf H,\quad \mathbf B=\mu\mathbf H,\quad \mu=\mu_0(1+\chi_m)$

* Boundary (magnetic):
  $\hat{\mathbf n}\!\cdot(\mathbf B_2-\mathbf B_1)=0,\qquad \hat{\mathbf n}\times(\mathbf H_2-\mathbf H_1)=\mathbf K_f$

* Demagnetizing field (ellipsoid):
  $\mathbf H=\mathbf H_{\text{ext}}-\mathbf N\,\mathbf M\qquad (N_x+N_y+N_z=1)$

* Magnetic scalar potential (no free current):
  $\mathbf H=-\nabla\Phi_m,\qquad \nabla^2\Phi_m=\nabla\!\cdot\!\mathbf M$

* Energy density in magnetic media  
$u=\frac12\,\mathbf B\!\cdot\!\mathbf H$

* Toroid (mean length $\ell$, area $A$):
  $H\simeq \frac{NI}{\ell},\quad B\simeq \mu\frac{NI}{\ell},\quad L\simeq \frac{\mu N^2 A}{\ell}$



## Time-dependent fields

* $\oint \mathbf E\!\cdot\! d\boldsymbol\ell=-\frac{d}{dt}\int \mathbf B\!\cdot\! d\mathbf a\qquad (\text{Faraday’s law})$

* $\oint \mathbf B\!\cdot\! d\boldsymbol\ell=\mu_0 I_f+\mu_0\varepsilon_0\frac{d}{dt}\int \mathbf E\!\cdot\! d\mathbf a\qquad (\text{Ampère–Maxwell})$

* Wave equations in vacuum  
$\nabla^2\mathbf E-\mu_0\varepsilon_0\,\partial_t^2\mathbf E=0,\quad \nabla^2\mathbf B-\mu_0\varepsilon_0\,\partial_t^2\mathbf B=0$

* Poynting theorem (energy conservation)  
$\partial_t u+\nabla\!\cdot\!\mathbf S=-\mathbf J\!\cdot\!\mathbf E,\quad u=\tfrac12(\varepsilon_0E^2+B^2/\mu_0),\quad \mathbf S=\frac{1}{\mu_0}\mathbf E\times\mathbf B$

* Quasi-static limits:
  $\text{EQS: }\nabla\times\mathbf E\approx0\ (\mathbf E\approx-\nabla\Phi),\quad \text{MQS: }\partial_t\mathbf D\approx0\ (\nabla\times\mathbf H\approx\mathbf J)$

* Diffusion in conductors (MQS + Ohm): Magnetic diffusion and skin depth  
  $\partial_t\mathbf B=\frac{1}{\mu\sigma}\nabla^2\mathbf B,\quad \delta=\sqrt{\frac{2}{\mu\sigma\omega}}$



## EM waves (vacuum)

* Plane-wave solution (transverse fields):  
  $\mathbf E=\Re\{\mathbf E_0 e^{i(\mathbf k\cdot\mathbf r-\omega t)}\},\ \ \omega=ck,\ \ \mathbf k\!\cdot\!\mathbf E_0=0,\ \ \mathbf B_0=\hat{\mathbf k}\times\mathbf E_0/c$
  

* Time-averaged Poynting vector (intensity):  
  $\langle \mathbf S\rangle=\frac{1}{2\mu_0}\Re\{\mathbf E_0\times\mathbf B_0^*\}=\frac12 c\varepsilon_0 E_0^2\,\hat{\mathbf k}$

* Polarization (Jones/Stokes):  
  $$\mathbf J=\begin{bmatrix}E_x\\E_y\end{bmatrix},\quad S_0=|E_x|^2+|E_y|^2,\ S_1=|E_x|^2-|E_y|^2,\ S_2=2\Re(E_xE_y^*),\ S_3=2\Im(E_xE_y^*)$$

* Standing wave (two counter-propagating plane waves):  
  $\mathbf E=2E_0\sin kz\,\sin\omega t\,\hat{\mathbf x},\quad \mathbf B=2\frac{E_0}{c}\cos kz\,\cos\omega t\,\hat{\mathbf y}$

* Radiation pressure (normal incidence):
  $p_{\text{abs}}=\frac{I}{c},\qquad p_{\text{refl}}=\frac{2I}{c}$



## Interfaces & propagation in media

* Refractive index and wave impedance (lossless)  
$n=\sqrt{\varepsilon_r\mu_r},\quad \eta=\sqrt{\mu/\varepsilon}$

* Snell’s law and law of reflection  
$n_1\sin\theta_i=n_2\sin\theta_t,\qquad \theta_r=\theta_i$

* Fresnel coefficients (lossless, oblique):  
  $r_s=\frac{\eta_2\cos\theta_i-\eta_1\cos\theta_t}{\eta_2\cos\theta_i+\eta_1\cos\theta_t},\quad r_p=\frac{\eta_2\cos\theta_t-\eta_1\cos\theta_i}{\eta_2\cos\theta_t+\eta_1\cos\theta_i}$
  $t_s=\frac{2\eta_2\cos\theta_i}{\eta_2\cos\theta_i+\eta_1\cos\theta_t},\quad t_p=\frac{2\eta_2\cos\theta_i}{\eta_2\cos\theta_t+\eta_1\cos\theta_i}$

* Power coefficients (lossless):
  $R=|r|^2,\qquad T=\frac{n_2\cos\theta_t}{n_1\cos\theta_i}\,|t|^2,\qquad R+T=1$

* Brewster angle (nonmagnetic):
  $\tan\theta_B=\frac{n_2}{n_1}\quad (p\text{-polarization})$

* Total internal reflection (TIR):  
  $\theta_i>\theta_c=\sin^{-1}\!\left(\frac{n_2}{n_1}\right),\quad \alpha=k_0\sqrt{n_1^2\sin^2\theta_i-n_2^2}$
  Evanescent decay constant $\alpha$.

* Rectangular waveguide (vacuum):  
  $\beta=\sqrt{k^2-k_c^2},\quad k_c=\pi\sqrt{(m/a)^2+(n/b)^2},\quad f_c=\frac{c}{2a}\ ( \text{TE}_{10} )$
  $v_p=\frac{\omega}{\beta}>c,\quad v_g=\frac{d\omega}{d\beta}<c,\quad v_p v_g=c^2$



## Potentials & gauge

* Gauge transformation:  
  $\phi\to\phi-\partial_t\chi,\quad \mathbf A\to\mathbf A+\nabla\chi$

* Lorenz (Lorentz) gauge:  
  $\nabla\!\cdot\!\mathbf A+\frac{1}{c^2}\partial_t\phi=0,\quad \left(\nabla^2-\frac{1}{c^2}\partial_t^2\right)\!\begin{Bmatrix}\phi\\ \mathbf A\end{Bmatrix}=-\begin{Bmatrix}\rho/\varepsilon_0\\ \mu_0\mathbf J\end{Bmatrix}$  
  Retarded potentials:  
  $\phi(\mathbf r,t)=\frac{1}{4\pi\varepsilon_0}\!\int\!\frac{\rho(\mathbf r',t-R/c)}{R}\,d^3r',\quad \mathbf A(\mathbf r,t)=\frac{\mu_0}{4\pi}\!\int\!\frac{\mathbf J(\mathbf r',t-R/c)}{R}\,d^3r'$

* Coulomb gauge:  
  $\nabla\!\cdot\!\mathbf A_C=0,\quad \nabla^2\phi_C=-\rho/\varepsilon_0,\quad \left(\nabla^2-\frac{1}{c^2}\partial_t^2\right)\mathbf A_C=-\mu_0\mathbf J_T$

* Liénard–Wiechert potentials (point charge):  
  $$\phi=\frac{1}{4\pi\varepsilon_0}\left[\frac{q}{\kappa R}\right]_{\text{ret}},\quad \mathbf A=\frac{\mu_0}{4\pi}\left[\frac{q\,\mathbf v}{\kappa R}\right]_{\text{ret}},\quad \kappa=1-\hat{\mathbf R}\!\cdot\!\boldsymbol\beta$$



## Radiation

* Near/induction/radiation scaling:  
  $\mathbf E=\mathcal O(R^{-3})+\mathcal O(R^{-2})+\mathcal O(R^{-1}),\quad \text{only }R^{-1}\text{ carries power}$

* Larmor power (nonrelativistic):
  $P=\frac{q^2 a^2}{6\pi\varepsilon_0 c^3}$

* Harmonic electric dipole $\mathbf p(t)=\Re\{\mathbf p_0e^{-i\omega t}\}$:  
  $E_\theta=\frac{k^2 p_0\sin\theta}{4\pi\varepsilon_0}\frac{\cos(\omega t-kr)}{r},\quad B_\phi=\frac{E_\theta}{c}$
  $\frac{d\langle P\rangle}{d\Omega}=\frac{\mu_0\omega^4p_0^{\,2}}{32\pi^2 c}\sin^2\theta,\qquad \langle P\rangle=\frac{\mu_0\omega^4p_0^{\,2}}{12\pi c}$

* Liénard–Wiechert radiation field (general motion):  
  $$\mathbf E_{\text{rad}}=\frac{q}{4\pi\varepsilon_0 c^2}\left[\frac{\hat{\mathbf R}\times\{(\hat{\mathbf R}-\boldsymbol\beta)\times \dot{\mathbf v}\}}{\kappa^3 R}\right]_{\text{ret}},\quad \mathbf B_{\text{rad}}=\hat{\mathbf R}\times\mathbf E_{\text{rad}}/c$$

* Relativistic total power:  
  $P=\frac{q^2\gamma^6}{6\pi\varepsilon_0 c^3}\left(a^2-(\boldsymbol\beta\times\mathbf a)^2\right)$

* Short (Hertzian) dipole radiation resistance:  
  $R_{\text{rad}}\approx 80\pi^2\left(\frac{\ell}{\lambda}\right)^2\qquad (\ell\ll\lambda)$


## Covariant formulation (relativity)

* Four-vectors:
  $x^\mu=(ct,\mathbf x),\quad u^\mu=\gamma(c,\mathbf v),\quad J^\mu=(c\rho,\mathbf J)$

* Field tensor:
  $F^{\mu\nu}=\partial^\mu A^\nu-\partial^\nu A^\mu,\quad F^{0i}=\frac{E_i}{c},\quad F^{ij}=-\epsilon^{ijk}B_k$

* Covariant Maxwell equations:
  $\partial_\mu F^{\mu\nu}=\mu_0 J^\nu,\qquad \partial_{[\alpha}F_{\beta\gamma]}=0\ \ (\Leftrightarrow\ \partial_\mu \tilde F^{\mu\nu}=0)$

* Lorentz force (covariant):
  $m\frac{du^\mu}{d\tau}=q\,F^{\mu}{}_{\nu}u^\nu$

* Invariants:
  $I_1=F_{\mu\nu}F^{\mu\nu}=2\!\left(B^2-\frac{E^2}{c^2}\right),\qquad I_2=\tilde F_{\mu\nu}F^{\mu\nu}=-\frac{4}{c}\,\mathbf E\!\cdot\!\mathbf B$

* Field transformations (boost $\mathbf v$):  
  $$\mathbf E'_\parallel=\mathbf E_\parallel,\ \ \mathbf E'_\perp=\gamma(\mathbf E_\perp+\mathbf v\times\mathbf B),\quad \mathbf B'_\parallel=\mathbf B_\parallel,\ \ \mathbf B'_\perp=\gamma\!\left(\mathbf B_\perp-\frac{1}{c^2}\mathbf v\times\mathbf E\right)$$

* Lagrangian density & current conservation:  
  $\mathcal L=-\frac{1}{4\mu_0}F_{\mu\nu}F^{\mu\nu}-J_\mu A^\mu,\quad \partial_\mu J^\mu=0$

* Energy–momentum tensor:  
  $$T^{\mu\nu}=\frac{1}{\mu_0}\!\left(F^{\mu\alpha}F^{\nu}{}_{\alpha}-\frac14\eta^{\mu\nu}F_{\alpha\beta}F^{\alpha\beta}\right),\ \ \partial_\mu T^{\mu\nu}=-F^{\nu\lambda}J_\lambda$$

* Special frames (if $ \mathbf E\!\cdot\!\mathbf B=0$):  
  $\mathbf v_{\!E'=0}=\frac{\mathbf E\times\mathbf B}{B^2}\ \ (E<cB),\qquad \mathbf v_{\!B'=0}=\frac{c^2\,\mathbf E\times\mathbf B}{E^2}\ \ (E>cB)$


## Waves in matter (dispersion, loss)

* Complex permittivity & refractive index:  
  $\varepsilon(\omega)=\varepsilon'(\omega)-i\,\varepsilon''(\omega),\quad \tilde n=n-i\kappa=\sqrt{\varepsilon_r\mu_r},\quad \alpha=2k_0\kappa=\frac{2\omega}{c}\kappa$

* Complex wave impedance & propagation constant:  
  $\tilde\eta=\sqrt{\mu/\varepsilon},\qquad \tilde\gamma=\alpha+i\beta=\omega\sqrt{\mu\varepsilon}$

* Drude model (free electrons):  
  $\varepsilon(\omega)=\varepsilon_\infty-\frac{\omega_p^2}{\omega(\omega+i\gamma)},\qquad \omega_p^2=\frac{n_e e^2}{\varepsilon_0 m_e}$

* Lorentz oscillator (bound electrons):  
  $\varepsilon(\omega)=\varepsilon_\infty+\sum_j \frac{f_j\omega_{p,j}^2}{\omega_{0j}^2-\omega^2-i\gamma_j\omega}$

* Debye relaxation (dipolar):  
  $\varepsilon(\omega)=\varepsilon_\infty+\frac{\varepsilon_s-\varepsilon_\infty}{1-i\omega\tau}$

* Kramers–Kronig (causality):  
  $\varepsilon'(\omega)-1=\frac{2}{\pi}\,\mathcal P\!\int_0^\infty\!\frac{\Omega\,\varepsilon''(\Omega)}{\Omega^2-\omega^2}\,d\Omega,\quad \varepsilon''(\omega)=-\frac{2\omega}{\pi}\,\mathcal P\!\int_0^\infty\!\frac{\varepsilon'(\Omega)-1}{\Omega^2-\omega^2}\,d\Omega$

* Brillouin energy density (dispersive, lossless part):  
  $u=\frac14\frac{d(\omega\varepsilon')}{d\omega}|E|^2+\frac14\frac{d(\omega\mu')}{d\omega}|H|^2,\qquad Q_{\text{loss}}=\frac12\,\omega\varepsilon''|E|^2$

* Good conductor (high-$\sigma$) skin depth & impedance:  
  $\delta=\sqrt{\frac{2}{\mu\sigma\omega}},\qquad \tilde k\approx\frac{1+i}{\delta},\qquad \tilde\eta\approx (1+i)\sqrt{\frac{\omega\mu}{2\sigma}}$

* Cold plasma:  
  $\varepsilon(\omega)=\varepsilon_0\!\left(1-\frac{\omega_p^2}{\omega^2}\right),\qquad n^2=1-\frac{\omega_p^2}{\omega^2}$

* Normal-incidence reflection (lossy medium 2):  
  $\tilde r=\frac{\tilde\eta_2-\eta_1}{\tilde\eta_2+\eta_1},\qquad R=|\tilde r|^2,\qquad A=1-R-T$

* Waveguide/Resonator attenuation & $Q$:  
  $\alpha=\alpha_c+\alpha_d,\qquad Q\simeq \frac{\beta}{2(\alpha_c+\alpha_d)}$



## Constants & handy identities

* $c=\frac{1}{\sqrt{\varepsilon_0\mu_0}},\qquad \eta_0=\sqrt{\frac{\mu_0}{\varepsilon_0}}\approx 377\,\Omega$

* $\nabla\!\cdot(\Phi\mathbf A)=\Phi\,\nabla\!\cdot\mathbf A+\mathbf A\!\cdot\nabla\Phi,\qquad \nabla\times(\nabla\Phi)=\mathbf 0,\qquad \nabla\!\cdot(\nabla\times\mathbf A)=0$

<div class="pagination">
  <a href="{{ '/Phys/ED/ED_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>