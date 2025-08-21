---
layout: default
---

# Special Functions

## Gamma Function

[Gamma Function](https://dlmf.nist.gov/5)

Definition 1. Infinit Limit (Euler)

 $\Gamma(z) = \frac{1 \cdot 2 \cdot \dots n}{z(z+1) \dots (z+n)} n^z, \quad z \quad \text{is integer}$ 

Properties
1.  $\Gamma(z+1) = z\Gamma(z)$ 

2.  $\Gamma(n) = (n-1)!$ 

Definition 2. Definite Integral (Euler)

$\Gamma(z) = \int_0^\infty e^{-t}t^{z-1} dt , \quad Re(z) >0$ 

$\Gamma(z)= 2 \int_0^\infty e^{-t^2}t^{2z-1}dt, \quad \Gamma(1/2) = \sqrt{\pi}$

## Riemann Zeta Function

Definition (available only the infinite series converge)

 $\zeta(z) = \sum_{n=1}^\infty n^{-z}$ 

$\zeta(z) = \frac{1}{\Gamma(z)} \int_0^\infty \frac{t^{z-1}}{e^t-1} dt$ 

Analytic continuation of zeta function

## Legendre Functions

[Legendre and Related Functions](https://dlmf.nist.gov/14)

### Legendre ODE, regular Legendre equation

$\nabla = \hat{r} \frac{\partial}{\partial  r} + \hat{\theta} \frac{1}{r}\frac{\partial}{\partial \theta} + \hat{\varphi}\frac{1}{r \sin{\theta}}\frac{\partial}{\partial \varphi}$ 

$\nabla^2 = \frac{1}{r^2}\frac{\partial}{\partial  r}\left( r^2 \frac{\partial}{\partial r} \right) + \frac{1}{r^2 \sin{\theta}} \frac{\partial}{\partial \theta} \left( \sin{\theta}\frac{\partial}{\partial \theta} \right)+ \frac{1}{r^2\sin^2{\theta}}\frac{\partial^2}{\partial \varphi^2}$ 

Legendre Polynomials:  
$\rightarrow (1-x^2)P_l^{\''}(x) - 2xP_l'(x) + l(l+1)P_l(x) = 0$ 

Generating function:  $g(x,t) = (1-2xt+t^2)^{-1/2} = \sum_{l=0}^\infty P_l(x)t^l$ 

Recurrence Formulas:  $(2l+1)xP_l(x) = (l+1)P_{l+1}(x) + l P_{l-1}(x)$ 

Rodrigues Formula:  $P_l(x) = \frac{1}{2^l l!}\left( \frac{d}{dx} \right)^l (x^2-1)^l$ 

Orthogonality: $\int_{-1}^{1} P_n(x)P_m(x)dx = \frac{2}{2n+1}\delta_{nm}$ 

Legendre Series: Given a function $f(x)$ defined in the interval $x \in (-1,1)$, $f(x) = \sum_{n=1}^\infty a_nP_n(x)$ where $a_n$ is given $\frac{2n+1}{2}\int_{-1}^1 f(x)P_n(x)dx$. 

Shifted Legendre Polynomial

### Associated Legendre Equation

$(1-x^2)P{\''}(x) - 2xP'(x) + \left[ l(l+1)-\frac{m^2}{1-x^2} \right] P(x) = 0$ 

Try $P(x) = (1-x^2)^{m/2}\mathcal{P}(x)$, assuming $\mathcal{P}(x) = \sum_{j=0}^\infty a_j x^j$

Reccurence Formulas: $a_{j+2} = a_j \left[ \frac{j^2+(2m+1)j-l(l+1)+m(m+1)}{(j+2)(j+1)} \right]$ 

Associated Legendre Function:  
$P_l^m(x) = (1-x^2)^{m/2} \mathcal{P}_l^m (x) = (-1)^m (1-x^2)^{m/2} \frac{d^m}{dx^m}P_l(x)$
meaning that the associated Legendre function can be obtained by differentiating the normalized Legendre function $ P_l(x)$ with respect to $x , m $ times.

Rodrigues formula: $P_l^m(x) = \frac{(-1)^m}{2^l l!}(1-x^2)^{m/2}\left( \frac{d}{dx} \right)^{l+m} (x^2-1)^l$

Generating function for $\mathcal{P_{l+1}^m}:$
$g(x,t) = \frac{(-1)^m(2m-1)!!}{(1-2tx+t^2)^{m+1/2}}=\sum_{s=0}^\infty \mathcal{P}_{s+m}^m(x)t^s$

Reccurence formula:

$(l-m+1) \mathcal{P_{l+1}^m}(x)-(2l+1)x \mathcal{P_l^m}(x) + (l+m) \mathcal{P}_{l-1}^m(x)=0$

$\mathcal{P}_{m+1}^m=(2m+1)x\mathcal{P}_m^m$

Associated Legendre Functions:  
$P_l^m(x)=\frac{(-1)^m}{2^l l!}(1-x^2)^{m/2}\frac{d^{l+m}}{dx^{l+m}}(x^2-1)^l$

Parity and Special Values:

$P_l^m = (-1)^{(l+m)/2}\frac{(l+m-1)!!}{(l-m)!!}$ when $l+m=$even, $0$  when  $l+m=$odd

Orthogonality: $\int_{-1}^1 P_p^m(x) P_q^m(x)dx = \frac{2}{2p+1}\frac{(p+m)!}{(p-m)!}\delta_{pq}$ 

## Spherical Harmonics

 $\nabla^2\Psi + V(r)\Psi = \lambda \Psi$ 

1) $\frac{1}{r^2}\frac{\partial}{\partial r}\left( r^2\frac{\partial R}{\partial r} \right) + \left[ \lambda -V(r) \right] R - \frac{l(l+1)R}{r^2}=0$ : using regular Legendre function

2) $\frac{1}{\sin{\theta}} \frac{\partial}{\partial\theta} \left( \sin{\theta} \frac{\partial \Theta}{\partial \theta} \right) - \frac{m^2\Theta}{\sin^2{\theta}} + l(l+1)\Theta = 0$ : using associated Legendre function

Orthogonality condition:  $\int_0^{2\pi}\Theta_{lm}(\cos{\theta})\Theta_{l'm}(\cos{\theta})\sin{\theta}d\theta = \delta_{ll'}$ 

3)  $\Phi_m(\varphi) = \frac{1}{\sqrt{2\pi}} e^{im\varphi}, \quad m= ..., -2, -1, 0, 1, ...$ : solve the second order ODE

Orthogonality condition: $\int_0^{2\pi} \Phi_m^*(\varphi)\Phi_m'{\varphi}d\varphi = \delta_{mm'}$

Spherical Harmonic $Y_l^m(\theta, \varphi)$

$Y_l^m(\theta, \varphi) = \Theta_{lm}(\cos{\theta}) \Phi_m(\varphi) = \sqrt{ \frac{2l+1}{4\pi} \frac{(l-m)!}{(l+m)!} }P_l^m(\cos{\theta})e^{im\varphi}$  

Orthogonal condition:  
$\int_0^{2\pi}d\varphi \int_0^{\pi} \sin{\theta}d\theta \left[ Y_{l_1}^{m_1}(\theta, \varphi) \right]^* Y_{l_2}^{m_2}(\theta, \varphi) = \delta_{l_1 l_2} \delta_{m_1 m_2}$ 

Overall solutions:  
$\Psi(r, \theta, \varphi) = \sum_{l=0}^\infty \sum_{m=-l}^l \left( a_{lm}r^l + b_{lm} r^{-l-1} \right) Y_l^m(\theta, \varphi)$ 



## Bessel Function
[Bessel Functions](https://dlmf.nist.gov/10)  
[Bessel function](https://en.wikipedia.org/wiki/Bessel_function)

The general solution is a linear combination of the spherical Bessel functions, defined via half-integer–order Bessel/Hankel functions:

$$
\begin{aligned}
j_\ell(x)&=\sqrt{\frac{\pi}{2x}}\,J_{\ell+1/2}(x)\quad\text{(spherical Bessel)},\\[2mm]
y_\ell(x)&=\sqrt{\frac{\pi}{2x}}\,Y_{\ell+1/2}(x)\quad\text{(spherical Neumann; called }n_\ell\text{ in Reitz)},\\[2mm]
h_\ell^{(1)}(x)&=j_\ell(x)+i\,y_\ell(x)=\sqrt{\frac{\pi}{2x}}\,H^{(1)}_{\ell+1/2}(x)\quad\text{(spherical Hankel of the first kind)},\\[2mm]
h_\ell^{(2)}(x)&=j_\ell(x)-i\,y_\ell(x)=\sqrt{\frac{\pi}{2x}}\,H^{(2)}_{\ell+1/2}(x)\quad\text{(spherical Hankel of the second kind)}.
\end{aligned}
$$

For integer order $$\ell=0,1,2,\dots$$, these functions are proportional to half-integer  
($$\nu=\tfrac12,\tfrac32,\tfrac52,\dots$$) Bessel functions.

Low-order examples are:  
$$
\begin{aligned}
&j_0(x)=\frac{\sin x}{x},\qquad &&y_0(x)=-\frac{\cos x}{x},\\[4pt]
&j_1(x)=\frac{\sin x}{x^2}-\frac{\cos x}{x},\qquad &&y_1(x)=-\frac{\cos x}{x^2}-\frac{\sin x}{x},\\[4pt]
&j_2(x)=\Bigl(\frac{3}{x^2}-1\Bigr)\frac{\sin x}{x}-\frac{3\cos x}{x^2},\qquad
&&y_2(x)=\Bigl(-\frac{3}{x^2}+1\Bigr)\frac{\cos x}{x}-\frac{3\sin x}{x^2}.
\end{aligned}
$$

Spherical Hankel functions and radiating spherical waves:

- **(A)** For radiating spherical waves, $$h_\ell^{(1,2)}$$ are more suitable than $$j_\ell,y_\ell$$.
- **(B)** This is because $$e^{-i\omega t}$$ combined with $$j_\ell,y_\ell$$ represents interference between an incoming wave $$e^{-i(\omega t+kr)}$$ and an outgoing (scattered) wave $$e^{-i(\omega t-kr)}$$, effectively forming a standing wave. For example,
$$
j_0(kr)\,e^{-i\omega t}=\frac{\sin(kr)}{kr}\,e^{-i\omega t}
=\frac{1}{2i\,kr}\Bigl[e^{-i(\omega t-kr)}-e^{-i(\omega t+kr)}\Bigr].
$$
- **(C)** Hence the amplitude has fixed nodes and antinodes in space, as in $$j_0(kr)$$.
- **(D)** By contrast, $$e^{-i\omega t}$$ with spherical Hankel functions yields outgoing and incoming spherical waves, respectively. For example:
$$
\begin{aligned}
h_0^{(1)}(kr)\,e^{-i\omega t}
&=[j_0(x)+i\,y_0(x)]e^{-i\omega t}
=-\,\frac{i}{kr}\,e^{+ikr}e^{-i\omega t}
=-\,\frac{i}{kr}\,e^{-i(\omega t-kr)},\\
h_0^{(2)}(kr)\,e^{-i\omega t}
&=[j_0(x)-i\,y_0(x)]e^{-i\omega t}
=\frac{i}{kr}\,e^{-ikr}e^{-i\omega t}
=-\,\frac{i}{kr}\,e^{-i(\omega t+kr)}.
\end{aligned}
$$
(The first is an outgoing wave, the second an incoming wave.)

## More Special Functions

[Hermite Polynomials](https://en.wikipedia.org/wiki/Hermite_polynomials)

There's a class which can be solved by Laplace's method. $H_n(x)$ satisfy the differential equation $y\{''}-2xy'+2ny=0$. Using complex integral you can get the solution 
$H_n(x)=(-1)^n e^{x^2}\frac{d^n}{dx^n}e^{-x^2}$

[Airy Function](https://en.wikipedia.org/wiki/Airy_function)

This is also of Laplace's type, the solution of the equation $y\{''}-xy=0$.

[Confluent Hypergeometric Function](https://en.wikipedia.org/wiki/Confluent_hypergeometric_function)

$F(\alpha, \gamma, z)=1+\frac{\alpha}{\gamma}\frac{z}{1!}+\frac{\alpha(\alpha+1)}{\gamma(\gamma+1)}\frac{z^2}{2!}+\dots$ which satisfy the differential equation $zu\{''+(\gamma-z)u'-\alpha u=0}$

[Hypergeometric Function](https://en.wikipedia.org/wiki/Hypergeometric_function)

$F(\alpha, \beta, \gamma, z)=1+\frac{\alpha \beta}{\gamma}\frac{z}{1!}+\frac{\alpha(\alpha+1)\beta(\beta+1)}{\gamma(\gamma+1)}\frac{z^2}{2!}+\dots$ which is defined in the circle $\|z\|<1$ and for $\|z\|>1$ obtained by its alaytical continuation. This is a particular integral of the differential equation $z(1-z)u\{''}+[\gamma-(\alpha+\beta+1)z]u'-\alpha \beta u=0$.

[Laguerre Function](https://en.wikipedia.org/wiki/Laguerre_polynomials)

[Chebyshev Polynomials](https://en.wikipedia.org/wiki/Chebyshev_polynomials)

[Polylogarithm](https://mathworld.wolfram.com/Polylogarithm.html), [Dilogarithm](https://mathworld.wolfram.com/Dilogarithm.html)


---
*Mathematical Methods for Physicists*, Arfken

*Quantum Mechanics*, Landau



<div class="pagination">
  <a href="{{ 'Phys/Phys_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>