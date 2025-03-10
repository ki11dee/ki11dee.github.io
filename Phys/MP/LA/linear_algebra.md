# Linear Algebra Basics

![Matrix](https://i.imgur.com/Tn046ii.png)

## Brief Review

### Matrix appears and problem

**Linear algebra** is one of the most beautiful subjects in mathematics. This is not a complete treatment of linear algebra; rather, we will focus on the aspects needed for physics and related topics (e.g., group theory).  

Define $$M=\begin{pmatrix} M_{11} & M_{12} \\ M_{21} & M_{22} \\ \end{pmatrix}$$ and $$\vec{x}=\begin{pmatrix} x_1 \\x_2\end{pmatrix}$$, $$\vec{u}=\begin{pmatrix} u_1 \\u_2\end{pmatrix}$$, for example. Then we can express $M\vec{x}=\vec{u}$. Our problem is to find $\vec{x}$ such that $M$ acting on it would produce $\vec{u}$. For more convenience to solve the problem, it’s fruitful to turn this around into $\vec{u}=M\vec{x}$. Looking at this as a linear transformation of $\vec{x}$ by $M$ into $\vec{u}$, conceptualized as $M: \vec{x} \rightarrow \vec{u}$. Let us think of what happens if another matrix $N$ transforms $\vec{u}$ into another vector $\vec{p}$: 

$$
\vec{p}=N\vec{u}=NM\vec{x}=P\vec{x}
$$

At least for a while, let us form the multiplication of matrices $P=NM$. This tells us how $NM$ is to be determined.  
Specifically, we deal the case of the rectangular $n \times n$ matrices here.

### Indices and Kronecker delta

Adopt the standard convention $M_{ij}$ the entry in the $i$th row and $j$th column of $M$ in case of $2 \times 2$ matrix.  We could start $u_i=\sum_{j=1}^2M_{ij}x_j$ for $i=1,2$.  
The rule for multiplying matrices:

$$
p_i=\sum_{j=1}^n N_{ij}u_j=\sum_{j=1}^n\sum_{k=1}^nN_{ij}M_{jk}x_k=\sum_{k=1}^nP_{ik}x_k
$$

Hence $P=NM$ means $P_{ik}=\sum_{j=1}^nN_{ij}M_{jk}$, which is called *multiplication rule*. Now define the identity matrix $I$ by $I_{ij}=\delta_{ij}$ with the Kronecker delta symbol and $$(IM)_{ik}=(MI)_{ik}=M_{ik}$$.  

Regard the $n$ columns in $M$ and $n$ different column vectors $\vec{\psi}_k$ $( k=1, \dots, n)$  where by definition the $j$ th component of $$\vec{\psi}_k$$ is equal to $$M_{jk}$$. Thus $$M=(\vec{\psi}_1, \cdots, \vec{\psi}_k, \cdots, \vec{\psi}_n)$$. Similarly, regard the $n$ columns in $P$ as $n$ different column vectors $\vec{\phi}_k$ is equal to $$P_{jk}$$ then

$P=(\vec{\phi}_1,\cdots,\vec{\phi}_k,\cdots,\vec{\phi}_n)=NM=(N\vec{\psi}_1, \cdots, N\vec{\psi}_k, \cdots, N\vec{\psi}_n)$

### Einstein’s index summation

[As we know…](https://en.wikipedia.org/wiki/Einstein_notation) 

### Not commutative, but associative

$NM \neq MN \quad \text{but} (AB)C=A(BC)$.

### Transpose and trace

$(NM)^T=M^TN^T$

$\text{tr}M=M_{ii}$, $AB \neq BA$ but $\text{tr}AB=\text{tr}BA$. $\text{tr}ABC=\text{tr}BCA=\text{tr}CAB$.

### Inverse

If $M$ has an inverse, then $M\vec{x}=\vec{u}$ can be solved as $\vec{x}=I\vec{x}=M^{-1}M\vec{x}=M^{-1}\vec{u}$ with the condition $\det{M}\neq0$. Cramer’s formula for the inverse of an $n \times n$ matrix is $(M^{-1})_{ij}=\frac{(-1^{i+j})\det{\tilde{M}(j,i)}}{\det{M}}$, more simply, $M^{-1}=\frac{\text{adj}M}{\det{M}}$. There are no solutions for arbitrary $u$ and $v$  when $\det{M}=0$ because in this case the inverse doesn’t exist.   
But what if $\vec{u}$ vanishes? In $\det{M}=0$ case an infinite number of solutions exist: if $\vec{x}$ solves $M\vec{x}=\vec{0}$, then $s\vec{x}$ is also a solution for any number $s$. In $\det{M}\neq 0$ case, $M\vec{x}=0$ doesn’t have a nontrivial solution. In summary. $M\vec{x}=\vec{0}$ has a nontrivial solution iff $\det{M}=0$.

### The determinant and the Laplace expansion

[As we know…](https://en.wikipedia.org/wiki/Laplace_expansion)   

Let $A$ be an $(n+1) \times (n+1)$ matrix. Then for each entry $a_{ij}$ of $A$, define the minor of $a_{ij}$ to be the determinant of the $n \times n$ matrix obtained from $A$ by deleting the $i$th row and $j$th column. The cofactor of $a_{ij}$ is defined to be $(-1)^{i+j}$ times the minor of $a_{ij}$ and is denoted by $A_{ij}$. Then the determinant of $A$, denoted by $|A|$ or $\det{A}$, is defined by $\det{A}=\sum_{i=1}^na_{ij}A_{ij}$ for each $1 \leq j \leq n$.  And by the theorem, $\det{A}=\sum_{j=1}^na_{ij}A_{ij}$ for each $1\leq i\leq n$.   
There are several general properties and useful identity for the [determinant](https://en.wikipedia.org/wiki/Determinant) of a matrix.

### Hermitian conjugation

$M^\dagger=M$. 

### Eigenvectors and eigenvalues

Does there exist a special vector $\vec{\psi}$ such that $M\vec{\psi}=\lambda\vec{\psi}$ for some complex number $\lambda$? Solving this to determine the eigenvector $\vec{\psi}$ and the eigenvalue $\lambda$ is called *eigenvalue problem*. For $\vec{\psi}\neq 0$, we can use $\det{(M-\lambda I)}=0$ to specify them. For $n \times n$ matrix, there are $n$th-degree polynomial in $\lambda$. So with this as the unknown, eigenvalue problem will have $n$ solutions according to the [fundamental theorem of algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra). For example, in case of $2 \times 2$ matrix, for each of the $\lambda_{\pm}$, we can take two corresponding eigenvectors to be $\vec{\psi}_+$ associated with $\lambda_+$ and $\vec{\psi}_-$ associated with $\lambda_-$. The overall normalization of the two eigenvectors is left to choose.

### Hermitian and real symmetric matrices

Let us label the eigenvector $\lambda_a$ and the eigenvectors $\psi_a$ by an index $a=1,\dots,n$, satisfying $M\psi_a=\lambda_a\psi_a$. Taking $$\psi_a^\dagger M^\dagger=\psi_a^\dagger\lambda_a^*$$ and thus $$\psi_a^\dagger M^\dagger\psi_b=\psi_a^\dagger\lambda_a^*\psi_b$$ upon multiplying by $$\psi_b$$ gives $\psi_b^\dagger M^\dagger\psi_a=\lambda_a\psi_b^\dagger\psi_a$. Now suppose that $M$ is hermitian, and relabel the indices $a \leftrightarrow b$ to obtain $$0=(\lambda_a-\lambda_b^*)\psi_b^\dagger\psi_a$$. Set $a=b$, then $\lambda_a=\lambda_b^*$, which implies $\lambda_a$ is real. Set $a \neq b$, then in general, $\lambda_a \neq \lambda_b$ and we conclude that $$\psi_a^\dagger\psi_a=0$$, which implies the eigenvectors are orthogonal.   
Since $$\psi_a^\dagger\psi_a=\sum_{i=1}^n(\psi_a)_i^*(\psi_a)_i$$ is a fortiori nonzero for $\psi_a \neq 0$, we can always normalize the eigenvectors by $$\psi_a \rightarrow \psi_a/(\psi_a^\dagger\psi_a)^{1/2}$$ so that $$\psi_a^\dagger\psi_a=1$$. Thus,   

$H=H^\dagger \Longrightarrow\lambda_a=\lambda_a^*$ and $\psi_a^\dagger\psi_a=\delta_{ab}$.   

We understand that the scalar product $\vec{v} \cdot \vec{w}=\sum_{i=1}^n v_iw_i$ in Euclidean space tells us about the length of vectors and the angle between them. For complex vectors, the above theorem indicates that the natural generalization of the scalar product involves hermitian conjugation. The scalar product of two complex vectors $\phi$ and $\psi$ is defined as $$\phi^\dagger\psi=\sum\phi_i^*\psi_i$$ and the length squared $$\psi^\dagger\psi$$ of a complex vector is then manifestly real and positive.  
The indices carried by vectors and matrices have been written as subscripts. Here, we may introduce complex vectors carrying an upper index $\psi^i$ and a lower index $$\phi_i\equiv\phi^{i*}=\phi^\dagger$$. In some sense, the upper index is a row index, and the lower index a column index: $(M\psi)^i=M_j^i\psi^j$.

### Diagonalization of matrices

Let $M$ be an $n \times n$ matrix, and suppose it has $n$ linearly independent eigenvectors. Define $S=\begin{pmatrix}\psi_1,\dots,\psi_n\end{pmatrix}$ and 

$S^{-1}=\begin{pmatrix}\phi_1\ \\ \cdot \\ \cdot \\ \cdot \\ \phi_n\end{pmatrix}$

The product of $M, S$ is given by $MS=(\lambda_1\psi_1,\dots,\lambda_n\psi_n)$. Multiplying from the left by $S^{-1}$ gives

$$S^{-1}MS=\begin{pmatrix}\lambda_1 & 0 & 0&\cdots & 0 \\ 0 & \lambda_2 & 0 & \cdots & 0 \\ 0 & 0 & \lambda_3 & \cdots & 0 \\ 0 & 0& 0& \ddots& 0\\0 & 0& 0& \cdots&\lambda_n\end{pmatrix}\equiv \Lambda$$

where $\Lambda$ is a diagonal matrix. Note that the eigenvectors $\psi_a$ need not be normalized. There are matrices that cannot be diagonalized.  
If$M$ is hermitian, define $U=\begin{pmatrix}\psi_1,\dots,\psi_n\end{pmatrix}$ as a new name. By normalizing the eigenvectors,

$S^{-1}=\begin{pmatrix}\psi_1^\dagger\ \\ \cdot \\ \cdot \\ \cdot \\ \psi_n^\dagger\end{pmatrix}$

namely $U^\dagger$. Hence the identity translates to $U^\dagger U=I$. Here, $U$ satisfying the condition is said to be *unitary*. Let us mention a real matrix $O$ satisfying the condition $O^TO=I$ is called *orthogonal*. Repeat the argument in the preceding section, then we can know that $\Lambda$ is real and that $U$ is unitary such that $U^\dagger MU=\Lambda$ is diagonal and real.  
When $M$ is real symmetric, there exist $O$ such that $O^\dagger MO=\Lambda$ is diagonal and real.  
The trace of a matrix is the sum of its eigenvalues: $\text{tr}S^{-1}MS=\sum_a\lambda_a$. As this special case, $\text{tr}U^\dagger MU=\text{tr}M=\text{tr}\Lambda$, and for $M$ real symmetric, $\text{tr}O^TMO=\text{tr}M=\text{tr}\Lambda$. With the notation discussed earlier, $(U\dagger MU)_j^i=(U^\dagger)_j^iM^k_jU^l_j$. 

### Simultaneously diagonalizable

Given two commutative matrices $A, B$, suppose that we find a matrix $S$ such that $A^d=S^{-1}AS$ is diagonal. Apply the similarity transformation ($0=S^{-1}[A,B]S=S^{-1}AB-S^{-1}BAS$$=[A^d,B^d]$), we can derivate the theorem that implying $B^d$ is also diagonal for the same $S$: $B^d=S^{-1}BS$. 

### Functions of matrices

Given a function $f(x)=\sum_{k=0}^\infty a_k x^k$, we can define $f(M)$  for some matrix $M$, by the power series $f(M)=\sum_{k=0}^\infty \frac{M^K}{k!}$. Let $M$ be diagonalizable so that $M=S^{-1}\Lambda S$. Since $M^k=S^{-1}\Lambda^kS$,   

$f(M)=\sum_{k=0}^\infty a_kS^{-1}\Lambda^kS=S^{-1}f(\Lambda)S$

Note also that $\text{tr}f(M)=\text{tr}f(\Lambda)$. $f(x)$ doesn’t have to be Taylor expanded aroung $x=0$. 

### The direct product of matrices

Given an $n \times n$ matrix $C_{ab}$ ($a,b=1,2,...,n$) and $n\nu \times n\nu$ matrix $\Gamma_{\alpha\beta}$($\alpha,\beta=1,2,...,\nu$), the direct product $M = C \otimes \Gamma$ as the $n\nu \times n\nu$  matrix is defined by $M_{a\alpha,b\beta}=C_{ab}\Gamma_{\alpha\beta}$. Since $$M_{\alpha\alpha,b\beta}M'_{b\beta,c\gamma}=(C_{ab}C'_{bc})(\Gamma_{\alpha\beta}\Gamma'_{\beta\gamma})$$, $$MM'=(C \otimes \Gamma)(C' \otimes \Gamma')=(CC' \otimes \Gamma\Gamma')$$.

### Polar decomposition
Any matrix $M$ can be written as $M=HU$, with $H$ hermitian and $U$ unitary.  The polar decomposition theorem has a number of useful applications. Given a complex $n \times n$ matrix $M$, we can write $M=HU=VDV^\dagger U$. Thus $V^\dagger MW=D$ where $W=U^\dagger V$ is a unitary matrix, and $D$ is a positive real diagonal matrix. Let $\Psi$ denote a phase matrix $\text{diag}\{e^{i\psi_1},\cdots,i\psi_n\}$ then $\Psi^\dagger D\Psi=D$. Thus the theorem determines the two unitary matrices $V, W$ only up to $V \rightarrow V\Psi$ and $W \rightarrow W\Psi$.  
Let $M=M^\dagger$ be symmetric, then transpose $$V^\dagger MW=D$$ to get $$W^T M^TV^*=W^TMV^*=D$$, so $$V^\dagger MW=W^TMV^*$$. Let us let $\Phi^2$ be an arbitrary phase matrix to deal with the phase degree of freedom. Then $$D=\Phi^{*2}D\Phi^2$$ so $$W=V^*\Phi^2$$, hence $$V^\dagger MW=D$$ becomes $$\Phi^{*2}W^TMW=D$$. Multiplying the equation by $\Phi$ from the left and $\Phi^*$ from the right, we obtain $$W^{'T}MW'=D$$ where $$W'=W\Phi^*$$. Thus, for a symmetric complex matrix $M$, there always exists a unitary matrix $W$ such that $W^TMW=D$ with $D$ positive real diagonal. In general, the diagonal elements of $D$ are not of $M$ because $W$ is unitary but not orthogonal.

### Brief Questions (and proofs)

- If $Ax = \lambda x$ and $\lambda \neq 0$, then $x$ is an eigenvector of $A^{-1}$.
- $A$ and $A^T$ share the same eigenvalues.

- Suppose $A$ is an $n \times n$ matrix with $n$ linearly independent eigenvectors. Let the matrix $S$ consist of these eigenvectors as its columns. For a diagonal matrix $\Lambda$ defined as $(\Lambda)_{ij} = 0 \; (i \neq j)$, it holds that $S^{-1} A S = \Lambda$. (Proof: compute $AS = S\Lambda$)

- Does $S$ have an inverse? > Yes.  
  If $\vec{x_i}$ are linearly independent, the equation $S\vec{c} = 0$ implies that $c_1 = \cdots = c_n = 0$. When $S$ is converted to echelon form, if $\text{rank}(S) \neq n$, then a non-zero solution for $c$ exists. Therefore, $\text{rank}(S) = n$, which implies $|S| \neq 0$, and hence $S^{-1}$ exists.

- Does $\text{rank}(S) = n$ imply $\text{det}(S) \neq 0 $? > Yes.   
One of the key properties of determinants: $\text{det}(A) = \sum a_{i1}A_{i1} = \sum a_{1j}A_{1j}$. This shows that the determinant value is invariant under expansion by rows or columns, and $\text{det}(A) = \text{det}(A^T)$.  
  For an $n \times n$ matrix with $\text{rank} = n$, the echelon form $U$ satisfies $\text{det}(U) = p_1p_2 \cdots p_n$, where $p_i \neq 0$, so $\text{det}(U) \neq 0$. To prove the equivalence of $\text{det}(S) \neq 0$ and $\text{det}(U) \neq 0$:
  Echelon form is achieved through row operations. Hence, $\text{det}(S) \neq 0$ if and only if $\text{det}(U) \neq 0$.

- If $B$ is obtained by swapping two rows of an $n \times n$ matrix $A$, then $\text{det}(B) = -\text{det}(A)$.
- If the nonzero eigenvectors $\vec{x_1}, \vec{x_2}, \dots, \vec{x_k}$ correspond to distinct eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_k$, then these eigenvectors are linearly independent.

- Do all $n \times n$ matrices have eigenvectors and eigenvalues?
  - This question is ambiguous:
    - Do all have distinct eigenvalues?  > No, but it is possible.
    - When do they have distinct eigenvalues? > If they have linearly independent and distinct eigenvectors.

- If $\text{det}(A - \lambda I) = 0$, does there always exist an eigenvector $x (\neq 0)$ satisfying $Ax = \lambda x$?
  - For $\text{rank} = 1$, $x$ lies on a line through the origin, so $x \neq 0$ exists.  
  - For $\text{rank} = 2$, $x$ lies on a plane through the origin, so $x \neq 0$ exists.  
  - What about $\text{rank} > 3$?  

- A Hermitian matrix always has linearly independent eigenvectors, even for repeated eigenvalues. Can a Hermitian matrix with repeated eigenvalues have two independent eigenvectors? > Possible.

- For Hermitian $A$, if $A = U \Lambda U^\dagger$ and $B = UAU^{-1}$, are the determinants of $A$ and $B$ equal? > Yes:  
$\text{det}(B - \lambda I) = \text{det}(U(A - \lambda I)U^\dagger) = \text{det}(A - \lambda I)$

- Is a Hermitian matrix $S$ always orthogonal? > No, but possible if it is real.  
Becasue we arbitrarily set the eigenvectors orthognal, so $S^T=S^{-1}$. If including complex number, $S^\dagger S=\mathbb{1}$ (unitary). $A^H=S\lambda S^{-1}=U\Lambda U^\dagger$: spectral theorem

- $H^\dagger =H$. Are there always two independent $\ket{x}$ satisfying $H \ket{x}=\lambda\ket{x}$? > no

- Are $AB$'s eigenvalues the product of eigenvalues of $A$ and $B$? > No.  
  Example: $\sigma_x \sigma_y = i\sigma_z$. It holds when $AB = BA$ (commutative).

- If $A$ and $B$ are Hermitian and $AB = BA$, do they share eigenvectors? > Not necessarily.
  - For $B\vec{x}$ to be an eigenvector of $A$, does $\text{rank} = 1$ suffice?  
  - If $Ax = \lambda x$ and $\lambda$ is a simple eigenvalue, is $x = cx'$?

- If eigenvalues are not distinct, can eigenvectors for repeated eigenvalues form a linearly independent set? > Use geometric reasoning. (How?) [related topic: characteristic polynomial](https://en.wikipedia.org/wiki/Characteristic_polynomial)