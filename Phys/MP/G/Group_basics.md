---
layout: default
---

## 1. Symmetry in Groups

### Symmetry in Physics

A set of transformations leaves the laws of physics invariant. The classical example is a rotation characterized by three angles and Newton’s law which is left invariant by rotations.  

For instance, think of the performance of two sequential transformation $T_{first}$ and $T_{last}$ so that results from it is denoted by the product $T_{first} \cdot T_{last}$. If both transformation leave the laws of physics invariant, then also does $T_{first} \cdot T_{last}$. This discussion invites us to abstract the concept of a group.  

A group $G$ consists of a set of entities $\{g_\alpha\}$ called elements, which we could compose(multiply) together. Composition or multiplication satisfies the following axioms:

1. Closure: $g_\alpha \cdot g_\beta =g_\gamma$
2. Associativity: $(g_\alpha \cdot g_\beta)\cdot g_\gamma=g_\alpha \cdot (g_\beta \cdot g_\gamma)$
3. Existence of the identity: $I \cdot g_\alpha=g_\alpha$
4. Existence of the inverse: $g_\alpha^{-1}\cdot g_\alpha=g_\alpha\cdot g_\alpha^{-1}=I$

Composition is not required to commute. If it is commutative/not commutative, it is called to be abelian/nonabelian. It’s often convenient to denote $I=g_0$. The label $\alpha$ may be discrete or continuous. The set of elements  $\{g_0, g_1, \dots, g_{n-1}\}$ may be finite, in which case $G$ is called a finite group with $n$ elements and $n$ is known as the order of the group.   

Thinking of transformation in less abstract level, $Ig=gI=g$ for instance, first doing nothing and then doing something is same as doing nothing and then doing something, and also they are same as just doing something once. In this way existence of the inverse says that the transformations of interest to physics can always be undone.  

### Examples of groups

1. Rotations in $n$-dimensional Euclidean space is $SO(n)$ group. 
2. Permutation group $S_n$ has $n!$ elements.
3. Even permutation of $n$ object forms the alternating group $A_n$.
4. The $N$th roots of 1 form the group $Z_N=\{e^{i2\pi j/N}; j=0,\cdots, N-1\}$. 
5. Complex numbers of magnitude 1, namely $e^{i\phi}$, form a $U(1)$ group, with $e^{i\phi_1}e^{i\phi_2}=e^{i(\phi_1+\phi_2)}$ and $e^{i(\phi+2\pi)}=e^{i\phi}$. We can think of $U(1)$ as the continuum limit of $Z_n$ with $2\pi j/N=\phi$ as the level of physicist rigor.
6. The addition of integers $\text{mod} N$ generates group. The addition of real numbers also form a group. The additive group of integers is obtained from the additive group of real numbers. 
7. The Lorentz transformations with boost angle $\phi$ form a group: $$\begin{pmatrix}\cosh{\phi_2} & \sinh{\phi_2} \\ \sinh{\phi_1} & \cosh{\phi_2}\end{pmatrix}\begin{pmatrix}\cosh{\phi_1} & \sinh{\phi_1} \\ \sinh{\phi_2} & \cosh{\phi_1}\end{pmatrix}=\begin{pmatrix}\cosh{(\phi_1+\phi_2)} & \sinh{(\phi_1+\phi_2)} \\ \sinh{(\phi_1+\phi_2)} & \cosh{(\phi_1+\phi_2)}\end{pmatrix}$$
8. Matrices with unit determinant are called special. The set of $n \times n$ matrices $M$ with determinants equal to 1 forms the special linear group with real entities $SL(n,R)$. If the entries are allowed to be complex, $SL(n,C)$. 

### Concepts of subgroup

Given a set of entities $\{g_\alpha\}$ that form a group $G$, if a subset $\{h_\beta\}$ also forms a group $H$, then $H$ is known as a subgroup of $G$ and written as $H \subset G$.   

For example, $SO(2) \subset SO(3)$, $S_m \subset S_n$ for $m<n$, $A_n \subset S_n$, $Z_2 \subset Z_4$ but $Z_2 \not\subset Z_5$, $SO(3) \subset SL(3,R)$. 

### Cyclic subgroups

For any finite group $G$ and some element $g$ , consider the sequence $\{g,g^2,\cdots\}$. Since $G$ is finite, let us say the sequence end at some point with$g^k=I$. Then $G$ has a bunch of cyclic subgroup $\{I, g, \cdots, g^{k-1}\}$.  In this case the set of elements forms a subgroup $Z_k$. If $k$ is equal to the number of elements in $G$, then $G$ is $Z_k$. 

### Lagrange’s theorem

Let a group $G$ with $n$ elements have a subgroup $H$ with $m$ elements. Then $m$ is a factor of $n$ which means in other words $n/m$ is an integer.

### Direct product of groups

Given by two groups $F$ and $G$, whose elements are denoted by $f$ and $g$, define another group $H\equiv F \otimes G$. This is known as the direct product of $F$ and $G$, consisting of the elements $(f,g)$. The product of two elements $(f,g)$ and $(f',g')$ of $H$ is given by $(f,g)(f',g')=(ff',gg')$. The identity element of $H$ is $(I,I)$. (or $I_H=(I_F,I_G)$, if we were insufferable pedants)

The inverse of $(f,g)$ is $(f^{-1}, g^{-1})$, and $(F \otimes G)$ has $mn$ elements. 

### Klein’s Vierergruppe $V$

$Z_2\otimes Z_2$. 

The theory of the strong, weak, and electromagnetic interaction is based on the group $SU(3)\otimes SU(2) \otimes U(1)$. 

### Construct the cyclic subgroup

Given a group $G$ of four elements $\{I,A,B,C\}$, keep multiplying $A$ by itself. If $A^4=I$, then $G=Z_4$. If $A^2=I$, $B^2$ or $B^4$ equals $I$ . The latter is ruled out, so $B^2=1$ and $AB=BA=C$ then $G=Z_2\otimes Z_2$. By lagrangian theorem, $A^3=I$ is not allowed. 

### Presentations

- $Z_4:\braket{A\|A^4=I}$
- $Z_2\otimes Z_2:\braket{A,B\|A^2=B^2=I,AB=BA}$

### Homomorphism and isomorphism

A map $f: G \rightarrow G'$ of a group $G$ into $G'$ is called a homomorphism if it preserves the multiplicative structure of $G$; if $f(g_1)f(g_2)=f(g_1g_2)$. The identity of $G$ is mapped to the identity of $G'$; $f(I)=I$. 

- $Z_p \otimes Z_q$ and $Z_{pq}$ are isomorphic ($p,q$ are not required to b prime, only relative prime)
- $SO(2)$ and $U(1)$ are isomorphic. The map $f:SO(2)\rightarrow U(1)$ is defined simply by $f(R(\phi))=e^{i\phi}$

### Modular group

Consider the set of transformations of one complex number into another given by $z \mapsto \frac{az+b}{cz+d}$ with $a,b,c,d$ integers satisfying $ad-bc=1$. This transformation can be specified by the matrix $M=\begin{pmatrix}a & b\\ c & d\\ \end{pmatrix}$ with $\det{M}=1$. $M, -M$ correspond to the same transformation.  $SL(n,R)$, $SL(n,C)$ and $SL(n,Z)$ each are the special linear group of $n \times n$ matrices with real, complex, integer entries. The group resulting upon identifying $M$ and $-M$ in $SL(n,Z)$ define projective special linear group $PSL(n,Z)$, otherwise known as a *modular group*. 

The transformation can be generated by repeatedly composing the two generating transformations $S: z \rightarrow -\frac{1}{z}$ and $T: z\rightarrow z+1$. They correspond to the matrices $S=\begin{pmatrix}0 & 1 \\ -1 & 0\end{pmatrix}$ and $T=\begin{pmatrix}1 & 1 \\ 0 & 1\end{pmatrix}$, respectively. Using the language of presentation introduced in the text, $PSL(2,Z): \braket{S,T\|S^2=I,(ST)^3=I}$. Incidentally, the modular group can be generalized to the triangular group $\mathcal{T}$, denoted by $(2,3,n)$ (or sometimes written as $(2,3,\infty)$) and presented by $\mathcal{T}:\braket{S,T\|S^2=I,T^n=I}$.

## 2. Finite Groups

to be uploaded

## 3. Rotations and the Notion of Lie Algebra

## 4. Representation Theory

## 5. Schur’s Lemma and the Great Orthogonality Theorem

## 6. Character Is a Function of Class

## 7. Real, Pseudoreal, Complex Representations, and the Number of Square Roots

## 8. Crystals Are Beautiful

## 9. Euler’s $\phi$-Function, Fermat’s Little Theorem, and Wilson’s Theorem

## 10. Frobenius Groups


<div class="pagination">
  <a href="{{ 'Phys/MP/MP_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>