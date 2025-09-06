---
layout: default
---

# Differential Form

Forms are multilinear mappings from a vector spce to scalars.

- bilinear form: a bilinear map from two vectors to $\mathbb{R}$
- multilinear form: generalization of the bilinear map to take any number of vectors
- quadratic form(symmetricl bilinear form): a homogeneous polynomial of degree two; the polarization identity gives a 1-1 correspondence with it
- algebraic form(completely symmetric multilinear form): generalization of quadratic form to arbitrary degree
- 2-form: an anti-symmetric bilinear form
- exterior form(completely anti-symmetric multilinear form)

Examples of k-forms in [differential forms](https://en.wikipedia.org/wiki/Differential_form):

- 0-form: $\varphi=x^2y+e^z$
- 1-form: $\varphi=x^2dx+(yz+1)dz$
- 2-form: $\varphi=xyzdydz+xe^ydzdx+2dxdy$
- 3-form: $\varphi=(x^2+xyz+z^3)dxdydz$

## Hodge star
* orientation (vector space): choosing a direction for bases in a real $n$-dimensional $V$. Specifically, selecting one of two equivalence classes formed by grouping ordered bases under transformations with $\det>0$. (= choosing the $GL^+(n)$ side among the two connected components of $GL(n,\mathbb{R})$)
* Equivalence: selecting up to sign a non-zero top-degree $n$-form ($=\Lambda^n V^* \backslash\{0\}$). That is, choosing one of the two components $\{\Omega, -\Omega\}$. With an inner product, we can set $|\Omega|=1$ and call it a volume form (unit pseudoscalar).
* Hodge star $\star$ is defined by "inner product + orientation"
For the unit $n$-vector $\Omega=e_1\wedge\cdots\wedge e_n$ of the chosen inner product and orientation, define $\star:\Lambda^kV\rightarrow \Lambda^{n-k}V$ by $A\wedge \star B=\langle A,B\rangle\Omega$.
$$A\wedge(\star B)=\langle A,B\rangle\Omega, \quad A,B\in\Lambda^k V$$
where $\Omega$ is the unit $n$-form of the chosen orientation. Changing orientation gives $\Omega\mapsto -\Omega$, so there is a global sign reversal for all $k$-forms: $\star\mapsto -\star$.
   * Properties (signature $(r,s)$): $\star\star A=(-1)^{k(n-k)+s}A$; $\langle A,B\rangle=(-1)^s\langle\star A,\star B\rangle$, etc.
For example, in $\mathbb{R}^3$, adopting the standard basis $(e_1,e_2,e_3)$ with the 'right-hand' convention is precisely choosing an orientation. Then $\star e^1=e^2\wedge e^3$, $\star e^2=e^3\wedge e^1$, $\star e^3=e^1\wedge e^2$. Flipping the orientation adds a $(-)$ sign to all equations. Therefore, in definitions like $v\times w=\star(v^\flat\wedge w^\flat)^\sharp$, we can see that changing orientation flips the sign of the cross product, showing that it is a pseudo-vector.

The [Hodge star operator](https://en.wikipedia.org/wiki/Hodge_star_operator)(Hodge isomorphism) is an element of linear maps based on the exterior product. The result produces a Hodge dual.

In real $\mathbb{R}^n$ space, let's transform a k-form function $\varphi$ into an $(n-k)$-form function $\varphi^*$:

1. Given a set $\{X_1,X_2,\dots,X_n\}$, if there is a subset $\{X_{i_1},X_{i_2},\dots,X_{i_k}\}$, then its complement set is denoted as $\{X_{j_1},X_{j_2},\dots,X_{j_{n-k}}\}$.

   The differential form for these two sets gives:  
   $$dX_{i_1}\cdots dX_{i_k}dX_{j_1}\cdots dX_{j_{n-k}}=dX_1dX_2\cdots dX_n$$.  
   Applying the Hodge star operator to this differential form:  
   $$(dX_{i_1}\cdots dX_{i_k})^*=dX_{j_1}\cdots dX_{j_{n-k}}$$.  
   These two differential forms have a Hodge dual relationship.

2. If $\varphi=A_1dX_{I_1}+\cdots+A_mdX_{I_m}$ is a k-form, then   $$\varphi^*=A_1dX_{I_1}^*+\cdots+A_mdX_{I_m}^*$$.  
   For example:
   - In real $$\mathbb{R}^1$$: $$1^*=dx$$, $$dx^*=1$$
   - In real $\mathbb{R}^2$: $$1^*=dx\cdot dy$$, $$dx^*=dy$$, $$dy^*=-dx$$, $$(dx\cdot dy)^*=1$$


TBA

<div class="pagination">
  <a href="{{ 'Phys/Phys_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>