# Special Functions

## 1. Gamma Function

[https://dlmf.nist.gov/5](https://www.blogger.com/blog/post/edit/5836959991896979253/6973115788995683442#)

Definition 1. Infinit Limit (Euler)

 $\Gamma(z) = \frac{1 \cdot 2 \cdot \dots n}{z(z+1) \dots (z+n)} n^z, \quad z \quad \text{is integer}$ 

Properties
1.  $\Gamma(z+1) = z\Gamma(z)$ 

2.  $\Gamma(n) = (n-1)!$ 

Definition 2. Definite Integral (Euler)

$\Gamma(z) = \int_0^\infty e^{-t}t^{z-1} dt , \quad Re(z) >0$ 

$\Gamma(z)= 2 \int_0^\infty e^{-t^2}t^{2z-1}dt, \quad \Gamma(1/2) = \sqrt{\pi}$

## 2. Riemann Zeta Function

Definition (available only the infinite series converge)

 $\zeta(z) = \sum_{n=1}^\infty n^{-z}$ 

$\zeta(z) = \frac{1}{\Gamma(z)} \int_0^\infty \frac{t^{z-1}}{e^t-1} dt$ 

Analytic continuation of zeta function

## 3. Legendre Functions

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

![Legendre Polynomials](https://blogger.googleusercontent.com/img/a/AVvXsEhGbokkfruyMZHARVUuZF4hAYZNAPRqphDQu7e6zLC1bcS1R-MWd0vjpic5-KuXN9FrMSFyk_OjtHSewzLTCKxWKLfNNNiMBboovbGr2Kn041OaI7iXKnAd2EFw50hiLFDA2K98r-FGIJRM2JGjKoPhRnCrzyyeJ71FZedsam0ZoI_ybXXlTT2rquO8Wi4)

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

![Associated Legendre Polynomials](https://blogger.googleusercontent.com/img/a/AVvXsEivIq7CVGFDk9J46QZceZSGMakspkX_lJoMm1Nn6nBoasl3FaBorNoGpoke1mhnBxspr_BKaApWCLZpIdx0zoxl0OZ_w0EiRlM6lIuBl45IKwD7gBW0BE0bMrZ6o2WCz3tS2VpewThrrHB28lNChU7ZB7t9OnqcfstVeqGfKwVtw6tMJ0oNjIwZEVfR9eQ)

## 4. Spherical Harmonics

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



## 5. Bessel Function
[https://dlmf.nist.gov/10](https://dlmf.nist.gov/10)
[Bessel function](https://en.wikipedia.org/wiki/Bessel_function)

Bessel Function of the First Kind $J_\nu(x)$

Neumann Functions, Bessel Functions of the Second Kind

Hankel Functions

Modified Bessel Functions

Spherical Bessel Functions

## 6. More Special Functions

**Hermite Polynomials**

There's a class which can be solved by Laplace's method. $H_n(x)$ satisfy the differential equation $y\{''}-2xy'+2ny=0$. Using complex integral you can get the solution 
$H_n(x)=(-1)^n e^{x^2}\frac{d^n}{dx^n}e^{-x^2}$

**Airy Function**

This is also of Laplace's type, the solution of the equation $y\{''}-xy=0$.

**Confluent Hypergeometric Function**

$F(\alpha, \gamma, z)=1+\frac{\alpha}{\gamma}\frac{z}{1!}+\frac{\alpha(\alpha+1)}{\gamma(\gamma+1)}\frac{z^2}{2!}+\dots$ which satisfy the differential equation $zu\{''+(\gamma-z)u'-\alpha u=0}$

**Hypergeometric Function**

$F(\alpha, \beta, \gamma, z)=1+\frac{\alpha \beta}{\gamma}\frac{z}{1!}+\frac{\alpha(\alpha+1)\beta(\beta+1)}{\gamma(\gamma+1)}\frac{z^2}{2!}+\dots$ which is defined in the circle $\|z\|<1$ and for $\|z\|>1$ obtained by its alaytical continuation. This is a particular integral of the differential equation $z(1-z)u\{''}+[\gamma-(\alpha+\beta+1)z]u'-\alpha \beta u=0$.

**Laguerre Function**

**Chebyshev Polynomials**

[Polylogarithm](https://mathworld.wolfram.com/Polylogarithm.html), [Dilogarithm](https://mathworld.wolfram.com/Dilogarithm.html)


---
## References
*Mathematical Methods for Physicists*, Arfken

Various reading materials on the Internet

*Quantum Mechanics*, Landau