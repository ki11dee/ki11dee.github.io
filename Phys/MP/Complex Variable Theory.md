# Complex Variable Theory

## 1. Complex Variables and Functions

To facilitate integration, complex numbers are introduced. It is important to make effective use of the property that a function must be single-valued.

$$
e^{i\theta} = \cos{\theta} + i\sin{\theta}
$$

## 2. Cauchy-Riemann Conditions

Can a complex function $f = u(z) + i v(z)$ be differentiated by taking limits, similar to real functions?

For the derivative of $f(z)$ to be defined, the value of the derivative must be independent of the direction from which it is approached.

$$
\delta f = \delta u + i\delta v, \qquad f'(z) = \lim_{z \to \infty} \left( \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x} \right) = \lim_{z \to \infty} \left( \frac{\partial u}{i\partial y} + \frac{\partial v}{\partial y} \right)
$$

- Consider a complex function $f$ defined on an open set $\Omega \subset \mathbb{C}$. If the quotient $\frac{f(z_0+h) - f(z_0)}{h}$ converges as $h \to 0$, the function $f$ is said to be holomorphic (regular, complex differentiable) at the point $z_0 \in \Omega$, where $h \in \mathbb{C}, h \neq 0, z_0 + h \in \Omega$. If the limit of this quotient exists, it is denoted as $f'(z_0)$ and is called the derivative of $f$ at $z_0$. A holomorphic (single-variable) complex function exhibits stronger properties compared to a differentiable (single-variable) real function: it is infinitely differentiable and can be expanded as a power series in any neighborhood of a point. In this context, the term "analytic" is often used interchangeably with "holomorphic."

### Cauchy-Riemann Condition

$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad -\frac{\partial u}{\partial y} = \frac{\partial v}{\partial x}
$$

### Derivatives of Analytic Functions

The chain rule is applicable.

Example 1) $z^2$ is analytic

Example 2) $z*$ is not analytic

Example 3) Derivative of the logarithm

## 3. Cauchy's Integral Theorem

### Contour Integrals

"If $f(z)$ is an analytic function in the region containing the contour $C$, and $C$ is a closed contour, then $\oint_C f(z)dz = 0$."

## 4. Cauchy's Integral Formula

Example) $f(z) = z^n (n \in \mathbb{Z})$

$$
\frac{1}{2\pi i} \oint \frac{f(z)}{z - z_0} dz = f(z_0)
$$

; If the function $f(z)$ is analytic, then all of its derivatives of any order are also analytic.

Example 1) $\oint_C \frac{1}{z(z+2)}dz$

Example 2) $\oint_C \frac{1}{4z^2 - 1}dz$

Example 3) $\oint_C \frac{\sin^2{z}}{(z - a)^4} dz$

## 5. Laurent Expansion

[https://complex-analysis.com/content/laurent_series.html](https://www.blogger.com/blog/post/edit/5836959991896979253/6475347748861398325#)

### Taylor Expansion

$$
f^n(z_0) = \frac{n!}{2\pi i} \oint_C \frac{f(z')}{(z' - z_0)^n} dz' = \sum_{n=0}^{\infty} \frac{f^n(z_0)}{n!} (z - z_0)^n
$$

; The expansion is only possible around analytic points.

### Laurent Expansion

$$
f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n
$$

Example 1) $f(z) = \frac{1}{z(z-1)}$

Example 2) Taylor expansion of $\ln{(1+z)}$ about $z=0$

Example 3) Laurent expansion of $\frac{e^z}{z^2}$ about $z=0$

Example 4) Laurent expansion of $\frac{ze^z}{z-1}$ about $z=1$

Example 5) Laurent expansion of $(z-1)e^{\frac{1}{z}}$ about $z=0$

## 6. Singularities

### Poles

Isolated singular point: A complex function $f(z)$ is not analytic at $z = z_0$ but is analytic at points in the neighborhood of $z = z_0$.

Pole of order n: $(z - z_0)^n$ contains only finite negative exponent terms.

Essential singularity: $(z - z_0)^n$ contains infinitely many negative exponent terms (e.g., $e^{\frac{1}{z}} = \sum_{n=0}^{\infty} \frac{z^{-n}}{n!}$)

### Branch Points

Example 1) $f(z) = z^{1/2}$

Example 2) $f(z) = \ln{(1+z)}$

Example 3) $f(z) = (z^2 - 1)^{1/2}$

## 7. Calculus of Residues

### Residue Theorem

$$
\oint_C f(z)dz = 2\pi i a_{-1}
$$

If $f(z)$ has isolated singularities at $z_1, z_2, \ldots, z_n$, Cauchy's integral theorem cannot be applied. In such cases, the residue theorem is used (which converts an integration problem into an algebraic one).

1) If $f(z)$ has a simple pole at $z = z_0$:

$$
a_{-1} = \lim_{z \to z_0} f(z)(z - z_0)
$$

2) If $f(z)$ has a pole of order $n$ at $z = z_0$:

$$
a_{-1} = \frac{1}{(n - 1)!} \frac{d^{n-1}}{dz^{n-1}}\left[ (z - z_0)^n f(z) \right] \Big|_{z = z_0}
$$

3) If $f(z)$ has an essential singularity at $z = z_0$: Use Laurent expansion.

Example 1) $f(z) = \frac{1}{4z + 1} \quad \text{residue at} \quad z = 1/4$

Example 2) $f(z) = \frac{1}{\sin{z}} \quad \text{residue at} \quad z = 0$

Example 3) $f(z) = \frac{\ln{z}}{z^2 - 4} \quad \text{residue at} \quad z = -2 = 2e^{i\pi}$

Example 4) $f(z) = \frac{z}{\sin^2{z}} \quad \text{residue at} \quad z = \pi$

### Cauchy Principal Value

$$
\lim_{\delta \to 0^+} \int^{x_0 - \delta} f(x)dx + \int_{x_0 + \delta} f(x)dx = P \int f(x)dx
$$

Example) $I = \int_{0}^{\infty} \frac{\sin{x}}{x} dx$

- Jordan's Lemma

If $\lim_{R \to \infty} f(z) = 0$ for all $z = Re^{i\theta}$ in the region $0 \leq \theta \leq \pi$, then $\lim_{R \to \infty} \int e^{iaz} f(z)dz = 0$, where $a > 0$ and $C$ is a semicircle of radius $R$ in the upper half-plane centered at the origin.

## 8. Evaluation of Definite Integrals

### 1. Trigonometric Integrals, Range $(0, 2\pi)$

$$
I = \int_{0}^{2\pi} f(\sin{\theta}, \cos{\theta}) d\theta
$$

Example 1) $I = \int_{0}^{2\pi} \frac{d\theta}{1 + a\cos{\theta}}, \quad \|a\| < 0 (a > 0)$

Example 2) $I = \int_{0}^{2\pi} \frac{\cos{2\theta}}{5 - 4\cos{\theta}}d\theta$

### 2. Integrals, Range $(-\infty, \infty)$

If $\lim_{R \to \infty} zf(z) = 0$ for all $z = Re^{i\theta} (0 \leq \theta \leq \theta_2)$, then $\lim_{R \to \infty} \int_C f(z)dz$. Here $C$ is an arc between angles $\theta_1$ and $\theta_2$ of a circle of radius $R$ centered at the origin.

Example) $I = \int_0^\infty \frac{dx}{1 + x^2}$

### 3. Integrals with Complex Exponentials

$$
I = \int_{-\infty}^{\infty} f(x) e^{iax} dz \quad (a > 0)
$$

Use Jordan's lemma.

Example) $I = \int_0^\infty \frac{\cos{x}}{x^2 + 1}dx$

### 4. Another Integration Techniques

Example) $I = \int_0^\infty \frac{dx}{x^3 + 1}$

### 5. Avoidance of Branch Points

Example) $I = \int_0^\infty \frac{\ln{x}}{x^3 + 1}$

### 6. Exploiting Branch Cuts

Example) $I = \int_0^\infty \frac{x^p}{x^2 + 1}dx \quad (0 < p < 1)$

$I = \int_0^\infty \frac{dx}{x^3 + 1}$

### 7. Exploiting Periodicity

Example) $I = \int_0^\infty \frac{x}{\sinh{z}}dx$

Let's solve the exercises.

$I = \int_0^{2\pi} \frac{\cos{3\theta}d\theta}{5 - 4\cos{\theta}} \qquad \text{Answer: } \pi/12$

$I = \int_{-\infty}^{\infty} \frac{\sin^2{x}}{x^2}dx \qquad \text{Answer: } \pi$

$I = \int_0^\infty \frac{x\sin{x}}{x^2 + 1}dx \qquad \text{Answer: } \pi/2e$

$I = \int_0^\infty \frac{x^p \ln{x}}{x^2 + 1}dx \qquad \text{Answer: } \frac{\pi^2}{4}\frac{\sin^2{(p\pi/2)}}{\cos^2{(p\pi/2)}}$

$I = \int_0^\infty \frac{(\ln{x})^2}{1 + x^2}dx \qquad \text{Answer: } 4\sum_{n=0}^\infty (-1)^n (2n + 1)^{-3},$ or

$I = \int_0^\infty \frac{(\ln{x})^2}{1 + x^2}dx = \int_0^\infty \frac{x^2}{\cosh{x}}dx \qquad \text{Answer: } \pi^3/8$

$I = \int_0^\infty \frac{dx}{1 + x^n} \qquad \text{Answer: } \frac{\pi}{n\sin{(\pi/n)}}$

$I = \int_0^1\frac{1}{x^2 - x^3}^{1/3}dx \qquad \text{Answer: } 2\pi/\sqrt{3}$

