# Symmetry in Music

## Related Topics
- [Group Theory](/Phys/MP/G/group.html)
- [Abstract Algebra](/Phys/MP/AAT/Abstract_basics.html)

## 1. Symmetry

Symmetry forms an infinite cyclic (dihedral) group in group theory. In music, symmetry is represented through rhythm, melody, or other repetitive patterns. Approximate symmetry (e.g., adjusted intervals for harmony) is more common in music than perfect symmetry due to the finite nature of musical sequences.

- Translation
- Reflection, glide reflection, time reflection
- Palindromic musical notes: retrograde canon, crab canon
- Rotation
- Horizontally repeating patterns: [Frieze group](https://en.wikipedia.org/wiki/Frieze_group)

The importance of symmetry in music lies in the ability to predict subsequent notes through regular patterns. Yet, a balance between predictability and surprise is essential.

---

## 2. Nzakara’s Harp

Consider a circular sequence of 5 strings, labeled $(0, 1, 2, 3, 4)$. Pairs that are neither adjacent nor share a common neighbor can be represented as $0=(1,4), 1=(0,2), 2=(1,3), 3=(2,4), 4=(0,3)$. By grouping a repeating melody into pairs, we can construct a sequence. For example:

$120141403424231202014030342313$  
Grouping into sequences: $12\quad 014140 \quad342423 \quad120201\quad403034 \quad2313$  
Translated patterns: $014140 \quad342423 \quad120201\quad403034 \quad231312$  
Reversed patterns: $213132 \quad430304\quad102021\quad324243\quad041410$

---

## 3. Sets and Groups

A **set** is a collection of elements. Mathematically, a set must not be too large (as in Russell’s Paradox). Group theory extends this by studying properties of interactions between elements rather than just the elements themselves.  
A **group** is a set $G$ combined with an operation $\circ$ such that $(G, \circ)$ satisfies:

1. **Closure**: For any $g, h \in G$, $g \circ h \in G$.
2. **Identity element**: There exists $e \in G$ such that $e \circ g = g \circ e = g$ for all $g \in G$.
3. **Inverse**: For every $g \in G$, there exists $g^{-1} \in G$ such that $g \circ g^{-1} = g^{-1} \circ g = e$.
4. **Associativity**: For all $g, h, k \in G$, $(g \circ h) \circ k = g \circ (h \circ k)$.

    An **abelian group** satisfies all group axioms with an additional commutativity property:

5. **Commutativity**: For all $g, h \in G$, $g \circ h = h \circ g$.

The multiplication table of a group can be used to determine if it is abelian: symmetry along the diagonal indicates commutativity.

### Lagrange Theorem

For a finite group $G$, the order of a subgroup $H$ divides the order of $G$, i.e., $\|H\|$ is a divisor of $\|G\|$.  
A **permutation** is an arrangement of elements in a set. In cyclic notation, the **cycle length** refers to the number of elements in a cycle, and elements with a cycle length of 1 are called fixed points.  
The **order** of a group $G$ is the number of elements it contains, denoted $\|G\|$. The **order** of a permutation $g$ is the smallest positive integer $n$ such that $g^n = e$.

The **symmetric group** $\mathbf{Sym}(X)$ on a set $X$ is the group of all permutations of $X$, with composition as the group operation. For $\|X\| = n$, $\mathbf{Sym}(X)$ is denoted $S_n$, and it contains $n!$ elements.  
A **permutation group** is any subgroup of a symmetric group $\mathbf{Sym}(X)$.

**Fermat’s Little Theorem 1**: Let $p$ be a prime number. For any integer $a$ not divisible by $p$, $a^{p-1} \equiv 1 \, (\text{mod } p)$.  
**Proof**: Since $p$ is prime, $\\{1, 2, \dots, p-1\\}$ forms a group under modular multiplication modulo $p$ (multiplicative group of integers modulo $p$, $Z_p^\times$). The order of this group is $p-1$. As $a$ is not divisible by $p$, $a$ is an element of $Z_p^\times$. By Lemma 3.2, $a^{p-1} = e = 1 \, (\text{mod } p)$.  
**Fermat’s Little Theorem 2**: Let $p$ be a prime number. For any integer $a$ not divisible by $p$, $\\{0, a, 2a, \dots, (p-1)a\\}$ is equivalent to $\\{0, 1, \dots, p-1\\}$ modulo $p$.  
**Proof**: The set $\\{0, a, 2a, \dots, (p-1)a\\}$ is a subgroup of $Z_p$, as $a \in Z_p^\times$. By Lagrange’s theorem, the order of the subgroup must divide $p$, and since $p$ is prime, the order is $p$.

---

## 4. [Campanology](https://en.wikipedia.org/wiki/Campanology)
---

## 5. Cayley’s Theorem

A function $f$ from a set $X$ to another set $Y$ is a mapping that assigns a well-defined element $y \in Y$ to each element $x \in X$. The **image** of $f$ is the subset of $Y$ consisting of all elements mapped by $f$. If $f$ is **injective** (one-to-one), no two elements of $X$ map to the same element of $Y$. If $f$ is **surjective** (onto), every element of $Y$ is in the image of $f$. A function that is both injective and surjective is called **bijective**, and it is equivalent to having an **inverse function**. A permutation of a set $X$ is a bijective function from $X$ to itself.  
For groups $G$ (with operation $\cdot$) and $H$ (with operation $\circ$), consider the copy of $G$ in $\mathbf{Sym}(G)$, where for each $g \in G$, the element $g$ maps $h \in G$ to $gh \in G$. A **homomorphism** $f: G \to H$ is a function that preserves the group operation, i.e., $f(g_1 \cdot g_2) = f(g_1) \circ f(g_2)$. The image of $f$ is a subgroup of $H$. For example, the logarithm function $\log$ is a homomorphism from the group $(\mathbb{R^+}, \cdot)$ to $(\mathbb{R}, +)$. The determinant function $\det$ is a homomorphism from the group of $n \times n$ invertible matrices $M$ (under matrix multiplication) to $(\mathbb{R}, \cdot)$.

**Theorem 5.1**  Let $e_G$ and $e_H$ denote the identity elements of groups $G$ and $H$, respectively. For a homomorphism $f: G \to H$, $f(e_G) = e_H$.  
**Theorem 5.2**  For a homomorphism $f: G \to H$, if $f(g) = h$, then $f(g^{-1}) = h^{-1}$.  
**Theorem 5.3**   If $f: G \to H$ is a homomorphism and $g \in G$ has finite order, then the order of $f(g)$ divides the order of $g$.

An **injective homomorphism** is called a **monomorphism**. A **bijective homomorphism** is called an **isomorphism**. For an isomorphism $f: G \to H$, if $g_1 \neq g_2$ for any $g_1, g_2 \in G$, then $f(g_1) \neq f(g_2)$. If such an $f$ exists, the groups $G$ and $H$ are said to be **isomorphic**. If $f$ is an injective homomorphism, $G$ can be considered a subgroup of $H$. If $H = G$, $f$ is called an **automorphism** of $G$.

**Cayley’s Theorem** Let $G$ be a group. Define $f: G \rightarrow \mathbf{Sym}(G)$ by $f(g)(h) = gh$. Then $f$ is an injective homomorphism, and $G$ is isomorphic to a subgroup of $\mathbf{Sym}(G)$.  
**Proof**  The function $f(g^{-1})$ is the inverse of $f(g)$ since, for any $h \in G$:

$$
f(g^{-1})(f(g)(h)) = f(g^{-1})(gh) = g^{-1}(gh) = h
$$

and similarly:

$$
f(g)(f(g^{-1})(h)) = f(g)(g^{-1}h) = gg^{-1}h = h.
$$

Thus, $f(g^{-1})$ is the inverse. Furthermore, $f$ preserves group operations, since:

$$
f(g_1g_2)(h) = (g_1g_2)(h) = g_1(g_2(h)) = f(g_1)(f(g_2)(h)) = (f(g_1)f(g_2))(h).
$$

Finally, if $f(g_1) = f(g_2)$, then for all $h \in G$, $f(g_1)(h) = f(g_2)(h)$. Choosing $h = e$, we find $g_1e = g_2e$, so $g_1 = g_2$. Therefore, $f$ is injective.

Thus, $G \cong f(G) \subseteq \mathbf{Sym}(G)$.


---

## 6. Clock Arithmetic and Octave Equivalence

In general, $a \equiv b \, (\text{mod } n)$ means that $a - b$ is divisible by $n$. By Cayley’s theorem, there exists an evident homomorphism from the group $\mathbb{Z}$ to $\mathbb{Z}/n$, corresponding to $n$-tone equal temperament in octave equivalence.

---

## 7. Generator

For a subset $S$ of a group $G$, the smallest subgroup of $G$ containing $S$ is denoted as $H = \langle S \rangle$. Here, $S$ is called the generator set, and $H$ is called the subgroup generated by $S$.  
If a group is generated by a single element $g$, it is called a **cyclic group**. Cyclic groups are abelian, and the direct product of cyclic groups is also abelian (e.g., the Klein four-group $\mathbb{Z}_2 \times \mathbb{Z}_2 \ncong \mathbb{Z}_4$, but $\mathbb{Z}_2 \times \mathbb{Z}_3 \cong \mathbb{Z}_6$). Every element of a cyclic group can be expressed as $g^n$ for some integer $n$.  
If there is no non-zero $n$ such that $g^n = e$, the operation $g^n$ corresponds to addition in $\mathbb{Z}$, and the group is isomorphic to $\mathbb{Z}$. If such an $n$ exists, the smallest positive $n$ is the order of $g$, and the group is isomorphic to $\mathbb{Z}/n$.

**Lemma 7.1**: If $d$ is the greatest common divisor of $n$ and $i$, then integers $r, s$ exist such that $d = rn + si$.  
**Proof**: Use the Euclidean algorithm.  
**Theorem 7.1**: The number of generators of $\mathbb{Z}/n$ is equal to the number of integers $i$ such that $0 < i < n$ and $i$ is coprime to $n$.

The count in the theorem is given by the Euler totient function $\phi(n)$. For example, for $n = 12$, $\phi(n) = 4$ (with $i = 1, 5, 7, 11$). A generator of $\mathbb{Z}/12$ corresponds to the circle of fifths in music, where each tone is generated by adding perfect fifth intervals.  
If $n = p^a$ is a power of a prime, then $\phi(n) = p^{a-1}(p-1)$. For coprime $m, n$, $\phi(mn) = \phi(m)\phi(n)$.

**Kronecker Decomposition Theorem**: Every finite abelian group is isomorphic to a Cartesian product of cyclic groups. Specifically, a group of order $n$ can be decomposed into the following form:

$$
\mathbb{Z}_{p_1^{k_1}} \oplus \mathbb{Z}_{p_2^{k_2}} \oplus \cdots \oplus \mathbb{Z}_{p_m^{k_m}}
$$

where $p_i^{k_i}$ are powers of primes.

---

## 8. Tone Rows

To extend beyond 12-tone rows, consider arbitrary-length sequences of pitch classes (including repeated pitches).

- $T^n(x)$: Transpose pitch class sequence $x$ by $n$ semitones.
- $I(x)$: Inversion of $x$.
- $R(x)$: Retrograde (reverse) of $x$.

Example: For $x = 3 \, 0 \, 8$,

$$
\begin{aligned}
T^2(x) & = 5 \, 2 \, 10 \\
I(x) & = 9 \, 0 \, 4 \\
T^6I(x) & = 3 \, 6 \, 10 \\
R(x) & = 8 \, 0 \, 3
\end{aligned}
$$

The operators satisfy the following relations:

$$
T^{12} = e, \quad T^nR = RT^n, \quad T^nI = IT^{-n}, \quad RI = IR
$$

$T^n (0 \leq n \leq 11)$ forms a cyclic group $\mathbb{Z}/12$, and $R$ forms $\mathbb{Z}/2$. The operators $T$ and $R$ commute.

---

## 9. Cartesian Product

The Cartesian product describes groups with two commutative operators. The Cartesian product of groups $G$ and $H$ is defined as:

$$
G \times H = \{(g, h) \, | \, g \in G, h \in H\}
$$

with the operation:

$$
(g_1, h_1)(g_2, h_2) = (g_1g_2, h_1h_2)
$$

If $G$ and $H$ are groups, then $G \times H$ is also a group. Elements of $G$ commute with elements of $H$, and if $G \cap H = \{1\}$ and $GH = K$, then $G \times H \cong K$ as an internal direct product.

---

## 10. Dihedral Group

The operators $T$ and $I$ do not commute, so they cannot be expressed as a direct product. The **dihedral group** $D_{2n}$ (or $D_n$) has two elements $g, h$ satisfying $h^2 = 1$ and $gh = hg^{-1}$. All elements of $D_{2n}$ are of the form $g^i$ or $g^i h$. If $g$ generates a cyclic subgroup of order $n$, the group is denoted $D_{2n}$.  
Geometrically, $D_{2n}$ represents the symmetry group of a regular $n$-gon. Element $g$ corresponds to rotation by $360^\circ / n$, and $h$ corresponds to reflection about an axis. For example, $g^i h$ corresponds to reflection after rotation.

---

## 11. Orbit and Coset

If $G$ acts on a set $X$ by permutations, and $g(x) = x'$ for $g \in G$, then $x$ and $x'$ belong to the same **orbit**. The collection of orbits partitions $X$ into disjoint subsets.  
If $H$ is a subgroup of $G$, the left coset of $H$ is $gH = \\{gh \, \| \, h \in H\\}$. The right coset is $Hg = \\{hg \, \| \, h \in H\\}$.

**Lemma 11.1**: If $g^{-1}g' \in H$, then $gH = g'H$.  
**Lemma 11.2**: If $g^{-1}g' \notin H$, then $gH \cap g'H = \emptyset$.

The number of left cosets is $\|G\| / \|H\|$, denoted $\|G:H\|$. For $x \in X$, the stabilizer $G_x$ is the set of elements in $G$ that fix $x$.

**Orbit-Stabilizer Theorem**:

$$
\\|\text{Orbit}(x)\\| = \\|G : G_x\\|
$$

---

## 12. Normal Subgroup and Quotient Group

A subgroup $N$ of $G$ is **normal** if the left and right cosets coincide, i.e., $gN = Ng$ for all $g \in G$. For abelian groups, all subgroups are normal.

**Theorem 12.1**: $N$ is normal in $G$ if and only if $gNg^{-1} = N$ for all $g \in G$.  
If $N$ is normal, the set of cosets forms a group called the **quotient group**, denoted $G/N$.  
**First Isomorphism Theorem**: If $f: G \to H$ is a homomorphism with kernel $N$, then $G/N \cong \text{Im}(f)$.

---

## 13. Burnside’s Lemma

Let $G$ be a finite group acting on a set $X$, and let $n(g)$ denote the number of fixed points of $g \in G$. The number of orbits of $G$ on $X$ is given by:

$$
\frac{1}{|G|} \sum_{g \in G} n(g)
$$

---

## 14. Pitch Class Set

## 15. Pólya’s Enumeration Theorem


## 16. Mathieu Group

(TBD)

---

## References

[Group Action](https://en.wikipedia.org/wiki/Group_action)

*음악 수학*, 데이비드 밴슨