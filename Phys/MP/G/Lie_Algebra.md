---
layout: default
---

# Poincare Group, Lie Groups and Lie Algebras

![p](/assets/img/20250412_225321230.jpg)

(under constructions :/)


Let’s see that the Lie algebra of the double cover of the Lorentz group consists of two copies of the $SU(2)$ Lie algebra.

## 1. Quaternions

Quaternions are 4-dimensional complex numbers. Unit quaternions are written as $q = a\mathbf{1} + b\mathbf{i} + c\mathbf{j} + d\mathbf{k}$, satisfying $\mathbf{i}^2 = \mathbf{j}^2 = \mathbf{k}^2 = -1$ and $q^\dagger q = 1$.

If we express the three complex units as $2\times2$ matrices:

$$\mathbf{1} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$, 
$$\mathbf{i} = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$$, 
$$\mathbf{j} = \begin{pmatrix} 0 & i \\ i & 0 \end{pmatrix}$$, 
$$\mathbf{k} = \begin{pmatrix} i & 0 \\ 0 & -i \end{pmatrix}$$

then the quaternion becomes

$$q = \begin{pmatrix}a+di&b+ci\\-b+ci&a-di\end{pmatrix}$$, and $$\det q = a^2 + b^2 + c^2 + d^2$$. Therefore, complex $2 \times 2$ unit quaternions satisfy $U^\dagger U = 1$ and $\det U = 1$. Defining $SU(2)$ in this way, each unit quaternion can be identified as an element of $SU(2)$.  
Now define a 3-dimensional complex number identified with the three spatial axes as $v \equiv x\mathbf{i} + y\mathbf{j} + z\mathbf{k}$, where $x, y, z$ are the components in the subspace $\mathbb{R}\mathbf{i} + \mathbb{R}\mathbf{j} + \mathbb{R}\mathbf{k}$. In this case, we can compute $\det v = x^2 + y^2 + z^2$. Therefore, when considering transformations that preserve the length of this vector, we must use matrix transformations that preserve unit determinant. Let the transformed vector be $v' = q v q^{-1}$.  
Consider a unit quaternion $u$ in $\mathbb{R}\mathbf{i} + \mathbb{R}\mathbf{j} + \mathbb{R}\mathbf{k}$, and define a general unit quaternion as $t = \cos\theta + \sin\theta\, u$. Using a generic vector, we can write $$\vec{v} = (v_x, v_y, v_z)^T = v_x \mathbf{i} + v_y \mathbf{j} + v_z \mathbf{k} = \begin{pmatrix}iv_z & v_x + iv_y\\ -v_x + iv_y & -iv_z\end{pmatrix}$$.  
For example, let $\vec{v} = (1, 0, 0)^T$ and rotate it about the z-axis. Then $v = 1\cdot \mathbf{i} + 0\cdot \mathbf{j} + 0\cdot \mathbf{k} = \begin{pmatrix}0 & 1\\ -1 & 0\end{pmatrix}$. Then,  
$$R_z(\theta) = \cos\theta\, \mathbf{1} + \sin\theta\, \mathbf{k} = \begin{pmatrix}\cos\theta + i\sin\theta & 0\\0 & \cos\theta - i\sin\theta\end{pmatrix} = \begin{pmatrix}e^{i\theta} & 0\\0 & e^{-i\theta}\end{pmatrix}$$  
and  
$$R_z(\theta)^{-1} = \begin{pmatrix}e^{-i\theta} & 0\\0 & e^{i\theta}\end{pmatrix}$$.  
Then  
$$v' = \begin{pmatrix}e^{i\theta} & 0\\0 & e^{-i\theta}\end{pmatrix} \begin{pmatrix}0 & 1\\-1 & 0\end{pmatrix} \begin{pmatrix}e^{-i\theta} & 0\\0 & e^{i\theta}\end{pmatrix} = \begin{pmatrix}0 & \cos 2\theta + i\sin 2\theta\\ -\cos 2\theta + i\sin 2\theta & 0\end{pmatrix}$$ 
$$= \begin{pmatrix}iv_z' & v_x' + iv_y'\\ -v_x' + iv_y' & -iv_z'\end{pmatrix}$$

which yields $$v'_x = \cos 2\theta, v'_y = \sin 2\theta, v'_z = 0$$.  
Therefore, in conventional vector notation, $\vec{v'} = (\cos 2\theta, \sin 2\theta, 0)^T$. Defining $\phi \equiv 2\theta$, we get $t = \cos(\phi/2) + \sin(\phi/2) u$. From this, we can see that the mapping is not one-to-one — two unit quaternions describe the same rotation. For instance, $t_{\phi = \pi} = u$, $t_{\phi = 3\pi} = -u$ both describe the same transformation by $\pi$. This is why $SU(2)$ is the **double cover** of $SO(3)$.

Now, what if we want to describe rotations in 4 dimensions (i.e., $4 \times 4$ matrices)? There are two options. One is to find even higher-dimensional complex numbers. The other is to attempt using quaternions. In the latter case, something meaningful arises regarding 4D rotations. These are described by 6 parameters, and two unit quaternions together have exactly 6 free parameters. This reveals a deep connection between 4D rotations and **two copies of $SU(2)$**.

## 2. Lie Groups

A Lie group is a group and at the same time a differentiable manifold. The group operation $\circ$ must induce a differential map from the manifold to itself. For example, any group element $A$ must induce a map that sends another element $B$ to $C = AB$ in the group $C$, and this map must be differentiable. Using coordinates, this means the coordinates of $AB$ must be differentiable functions of those of $B$.  
A manifold $M$ is a set of points that each has a continuous one-to-one map from an open neighborhood to an open subset of $\mathbb{R}^n$. $M$ is locally similar to standard $\mathbb{R}^n$. The map from an open neighborhood of $M$ to $\mathbb{R}^n$ associates each point $P$ in $M$ with an $n$-tuple $(x_1(P), \dots, x_n(P))$, where $x_1(P), \dots, x_n(P)$ are called the coordinates of point $P$. One way to think of an $n$-dimensional manifold is as a set in which every point has $n$ independent coordinates in some neighborhood.  
For example, the surface of a sphere is a manifold. The surface of a 3D sphere $S^2$ is defined as a set of points in $\mathbb{R}^3$ such that $x^2 + y^2 + z^2 = r^2$ holds. One degree of freedom is eliminated, making it 2-dimensional. Its map onto $\mathbb{R}^2$ is given in usual spherical coordinates, and coordinates are identified as the combination $(\theta, \phi)$. At points like $0$ and $2\pi$ (problematic poles), a one-to-one correspondence is not possible. This shows that a globally valid coordinate system for all points on a manifold generally does not exist — only local coordinates in neighborhoods are valid. For instance, the spherical coordinate map is valid only in the open neighborhood $0 < \phi < \pi$, $0 < \theta < 2\pi$.  
A **Lie group** is defined as a group $(G, \cdot)$ that has a smooth manifold structure and such that both $G \times G \to G$ and the inversion map $i: G \to G$ (given by $g \mapsto g^{-1}$) are smooth.

## 3. Lie Algebras

Let us consider a very small transformation that acts on an object so that almost nothing changes. For the identity $I$, an element $g$ close to identity, and a very small number $\epsilon$, let $g(\epsilon) = I + \epsilon X$, where $X$ is an object called a **generator**. Repeating this infinitesimal transformation many times results in the same effect as a finite rotation in the same direction:  
$h(\theta) = (I + \epsilon X)(I + \epsilon X)\cdots(I + \epsilon X) = (I + \epsilon X)^k$  
where $k$ is the number of repetitions. Suppose $\theta$ is some finite transformation parameter like $50^\circ$, and $N$ is a large number such that the transformation is still close to identity. Then we write $g(\theta) = I + \frac{\theta}{N} X$. Sending $N \to \infty$ and repeating infinitesimal transformations infinitely, we get:  
$$h(\theta) = \lim_{N \to \infty} (I + \frac{\theta}{N} X)^N = e^{\theta X}$$.  
In this sense, $X$ generates the finite transformation $h$, hence it is a **generator**. Differentiating gives: $$\frac{d}{d\theta} h(\theta) = \frac{d}{d\theta} e^{\theta X} = X e^{\theta X}$$, and $$X = \frac{d h(\theta)}{d\theta} \big\|_{\theta=0}$$.  
If we consider continuous matrix-valued transformations, we can use the Taylor expansion: $$h(\theta) = I + \frac{d h}{d\theta} \big|_{\theta=0} \theta + \frac{1}{2} \frac{d^2 h}{d\theta^2} \big|_{\theta=0} \theta^2 + \cdots = \sum_n \frac{1}{n!} \frac{d^n h}{d\theta^n} \big|_{\theta=0} \theta^n$$.  
For a Lie group $G$ given as $n \times n$ matrices, the (finite-dimensional) Lie algebra $\mathfrak{g}$ of $G$ is the set of $n \times n$ matrices $X$ such that $e^{tX} \in G$ for $t \in \mathbb{R}$, and the Lie bracket $[,]$ tells us how to combine the matrices.  
The abstract definition of a Lie algebra is as follows.  
A Lie algebra is a vector space $\mathfrak{g}$ equipped with a binary operation $[,] : \mathfrak{g} \times \mathfrak{g} \to \mathfrak{g}$ that satisfies:

- **Bilinearity**: $[aX + bY, Z] = a[X, Z] + b[Y, Z]$ and $[Z, aX + bY] = a[Z, X] + b[Z, Y]$ for arbitrary scalars $a, b$ and all $X, Y, Z \in \mathfrak{g}$.  
- **Anticommutativity (anti-symmetry)**: $[X, Y] = -[Y, X]$ for all $X, Y \in \mathfrak{g}$.  
- **Jacobi identity**: $[X,[Y,Z]] + [Z,[X,Y]] + [Y,[Z,X]] = 0$ for all $X, Y, Z \in \mathfrak{g}$.

Elements of a Lie algebra are matrices. The product of two Lie algebra elements is **not necessarily** a Lie algebra element.

- Ado’s theorem: every Lie algebra is isomorphic to a matrix Lie algebra
- combination rule of the Lie algebra  
    $g \circ h  (g \in G, h\in G)$.  
    $e^{X}\circ e^{Y}=e^{X+Y+\frac{1}{2}[X,Y]+\frac{1}{12}[X,[X,Y]]-\cdots} \in G, \quad X,Y\in\frak{g}$: Baker-Campbell-Hausdorff formula
    
|Lie Group | Lie Algebra|
|----------|------------|
|$g,h\in G$|$X,Y\in\frak{g}$|
|$g\circ h \in G$|$[X,Y]\in\frak{g}$|

Lie algebra is closed under the Lie braket $[,]$. There is exactly one **distinguishable** Lie group for each Lie algebra, which means **there is precisely one simply-connected Lie group corresponding to each Lie algebra**(this means if a Lie group is defined as a manifold, any closed curve of this can be shrunk smoothly to a point.), but Lie algebra corresponds to many Lie groups.

- the generators and Lie algebra of $SO(3)$

    $O^TO=I$ and $\det{O}=1$, $O=e^{\theta J}$  
    where $O$ is a group element and $J$ is a generator.  
    $\rightarrow J^T+J=0$  
    $\det{e^{\theta J}}=e^{\theta\text{Tr}(J)}=1 \rightarrow
     \text{Tr}(J)=0$  
    Basis matrices for the generators of $SO(3)$ is $$J=aJ_1+bJ_2+cJ_3, (J_i)_{jk}=-\epsilon_{ijk}$$.  Result with the generators of the group in explicit matrix form, $[J_j,J_k]=\epsilon_{ijk}J_k$. Now call the Lie bracket relation of the basis generators the Lie algebra $[J_i,J_j]=i\epsilon_{ijk}J_k$ (additional $i$ is to get Hermitian generators) 
    
- the generators and Lie algebra of $SU(2)$

    $U^\dagger U=UU^\dagger=1, \det{U}=1$  
    $U^\dagger U=(e^{iJ_i})^\dagger(e^{iJ_i})=1 \rightarrow J_j^\dagger=J_i$  
    $$\det{e^{iJ_i}}=1 \rightarrow \text{Tr}(J_i)=0$$   
    (additional $i$ is to get Hermitian matrices)  
    A basis for Hermitian traceless $2\times 2$ matrices is  
    $$\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$$, $$\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$$
    ,$$\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$$ : Pauli matrices  
    $$[\sigma_i,\sigma_j]=2i\epsilon_{ijk}\sigma_k$$.  
    define the generator $J_i\equiv\frac{1}{2}\sigma_i$, the Lie algebra then reads $[J_i,J_j]
    =i\epsilon_{ijk}J_k$.
    

## 4. Representation Theory

## $SU(2)$

- in 1D
- in 2D
- in 3D

## Lorentz Group $O(1,3)$

is how the Lorentz transformations $\Lambda$ are defined

- one representation of the Lorentz group
- generators of the other components of the Lorentz group
- Lie algebra of the proper orthochronous Lorentz group
- $(0,0)$ representation
- $(\frac{1}{2},0)$ representation
- $(0,\frac{1}{2})$ representation
- Van der Waerden notation
- $(\frac{1}{2},\frac{1}{2})$ representation
- spinors and parity
- charge conjugation
- infinite-dimensional representations

## 5. Poincare Group

is Lorentz group(rotation + boosts) + translations


-----
## References

*Physics from Symmetry*, Schwichtenberg

[Lie groups, algebras, brackets](https://www.youtube.com/playlist?list=PLDcSwjT2BF_WDki-WvmJ__Q0nLIHuNPbP)

<div class="pagination">
  <a href="{{ 'Phys/MP/MP_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>