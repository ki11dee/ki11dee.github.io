# Sets

## Lemma 1
Assume that $\langle x_1, \dots, x_m \rangle = \langle y_1, \dots, y_m, \dots, y_{m+k} \rangle$. Then $x_1 = \langle y_1, \dots, y_{k+1} \rangle$.

### n-ary operation
An n-ary operation on $A$ is a function mapping $A^n$ into $A$. For example, addition is a binary operation on $\mathbb{N}$, whereas the successor operation $S$ where $S(n) = n + 1$ is a unary operation in $\mathbb{N}$. If $f$ is an n-ary operation on $A$, then the restriction of $f$ to a subset $B$ of $A$ is the function $g$ with domain $B^n$ which agrees with $f$ at each point of $B^n$.

$$ g = f \cup (B^n \times A) $$

$g$ will be an n-ary operation on $B$ if and only if $B$ is closed under $f$, in the sense that $f(b_1, \dots, b_n) \in B$ whenever each $b_i$ is in $B$. In this case,

$$ g = f \cup B^{n+1}. $$

A particularly simple unary operation on $A$ is the identity function $Id$ on $A$, given by the equation

$$ Id(x) = x \qquad \text{for} \quad x \in A. $$

Thus,

$$ Id = \{ \langle x, x \rangle \mid x \in A \}. $$

### Relation Properties
For a relation $R$, we define the following:

- **Reflexive**: $R$ is reflexive on $A$ if and only if $\langle x, x \rangle \in R$ for every $x$ in $A$.
- **Symmetric**: $R$ is symmetric if whenever $\langle x, y \rangle \in R$, then also $\langle y, x \rangle \in R$.
- **Transitive**: $R$ is transitive if whenever both $\langle x, y \rangle \in R$ and $\langle y, z \rangle \in R$, then also $\langle x, z \rangle \in R$.
- **Trichotomy**: $R$ satisfies trichotomy on $A$ if for every $x$ and $y$ in $A$, exactly one of the three possibilities, $\langle x, y \rangle \in R$, $x = y$, or $\langle y, x \rangle \in R$, holds.
- **Equivalence Relation**: $R$ is an equivalence relation on $A$ if $R$ is a binary relation on $A$ that is reflexive on $A$, symmetric, and transitive.
- **Ordering Relation**: $R$ is an ordering relation on $A$ if $R$ is transitive and satisfies trichotomy on $A$.

## Theorem 2
Let $A$ be a countable set. Then the set of all finite sequences of members of $A$ is also countable.

## Zorn's Lemma
Let $A$ be a set such that for any chain $C \subseteq A$, the set $\bigcup C$ is in $A$. Then there is some element $m \in A$ which is maximal in the sense that it is not a subset of any other element of $A$.

## Cardinality
Georg Cantor characterized the cardinal number of a set $M$ as "the general concept which, with the help of our active intelligence, comes from the set $M$ upon abstraction from the nature of its various elements and from the order of their being given."

If you count the members of $A$ and the members of $B$, then you get the same number both times. But it is applicable even to infinite sets $A$ and $B$, where counting is difficult. For finite sets, we can use natural numbers as measures of size, for we can easily see that the set $\mathbb{N}$ of natural numbers and the set $\mathbb{Z}$ of integers are equinumerous. The same natural number would be assigned to two finite sets if and only if the sets were equinumerous. Cardinal numbers are introduced to enable us to generalize this situation to infinite sets.

When two sets are assigned the same cardinality if and only if they are equinumerous:

$$ \text{card } A = \text{card } B \quad \text{iff } A \sim B $$

When $A$ is dominated by $B$ $(A \preceq B)$ if $A$ is equinumerous with a subset of $B$, then the companion concept for cardinals is

$$ \text{card } A \leq \text{card } B \quad \text{iff } A \preceq B. $$

## Schroder-Bernstein Theorem
- (a) For any sets $A$ and $B$, if $A \preceq B$ and $B \preceq A$, then $A \sim B$.
- (b) For any cardinal numbers $\kappa$ and $\lambda$, if $\kappa \leq \lambda$ and $\lambda \leq \kappa$, then $\kappa = \lambda$.

## Theorem 3
For any sets $A$ and $B$, either $A \preceq B$ or $B \preceq A$.

For any cardinal numbers $\kappa$ and $\lambda$, either $\kappa \leq \lambda$ or $\lambda \leq \kappa$.

Of any two cardinals, one is smaller than the other. Any nonempty set of cardinal numbers contains a smallest member. The smallest cardinals are those finite sets: $0, 1, 2, \dots$. Next is $\text{card } \mathbb{N}$, which is named $\aleph_0$. Thus,

$$ 0, 1, 2, \dots, \aleph_0, \aleph_1, \dots $$

The cardinality of real numbers, $\text{card } \mathbb{R}$, is called $2^{\aleph_0}$. Since $\mathbb{R}$ is uncountable, we have $\aleph_0 < 2^{\aleph_0}$.

## Cardinal Arithmetic Theorem
For cardinal numbers $\kappa$ and $\lambda$, if $\kappa \leq \lambda$ and $\lambda$ is infinite, then $\kappa + \lambda = \lambda$. If $\kappa \neq 0$, then $\kappa \cdot \lambda = \lambda$.

