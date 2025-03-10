# Tonnetz

## Related Topics

- [Topology](/Phys/MP/AAT/Topology_basics.html)
- Category Theory
- [Symmetry in Music](./Sym_in_m.html)
- Notable codes and programs
    - MusicTeX
    - music21 library in Python
    - [TikZ code for music theory](https://github.com/AlexPof/latexfigs-music)
    - Some softwares by Dmitri Tymoczko

### Triads

Using equal temperament, musical intervals can be mathematically calculated.

| note | C | C#/D♭ | D | D#/E♭ | E | F | F#/G♭ | G | G#/A♭ | A | A#/B♭ | B |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $\mathbb{Z}_{12}$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |

For major triad, let us define 

$$
M=\{(x,y,z)\in(\mathbb{Z}_{12} \times \mathbb{Z}_{12} \times \mathbb{Z}_{12})|y=x+4, z=x+7\}
$$

For minor triad, let us define 

$$
m=\{(x,y,z)\in(\mathbb{Z}_{12} \times \mathbb{Z}_{12} \times \mathbb{Z}_{12})|y=x-4, z=x-7\}
$$

Let us represent $D_{2n}$ group of transpositions and inversions ([T/I group](https://alpof.wordpress.com/2013/11/02/an-introduction-to-neo-riemannian-theory-5/)). This group acts transitively on the set of $2n$ major and minor triads. For 12 equal temperament, $n=12$. The T/I group and the set of major and minor chords form a General Interval System, which means any progression of chords using unique group elements, transpositions and inversions from $D_{24}$ can be analyzed.

### Neo-Riemannian theory

Neo-Riemannian theory is a music theory that directly analyzes relationships between chords without relying on the tonic, focusing on a transformational point of view among chords. Put simply, this theory characterizes harmonic progressions not based on tonal function but instead on parsimonious [voice leading](https://en.wikipedia.org/wiki/Voice_leading).  
In neo-Riemannian theory, harmonic ideas are visualized as geometric structures that represent relationships between chords. This is called the [tonnetz](https://en.wikipedia.org/wiki/Tonnetz) (German for ‘tone network’). The first rectangular Tonnetz was proposed by mathematician Leonhard Euler, and it was later developed into the hexagonal neo-Riemannian Tonnetz and the triangular Oettingen-Riemann Tonnetz. Neo-Riemannian theory assumes enharmonic equivalence (e.g., A$\flat$=G#), making the two-dimensional Tonnetz cyclic in two directions and mathematically isomorphic to a torus.

### Harmonic Transformations

![Tonnetz](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Neo-Riemannian_Tonnetz.svg/1920px-Neo-Riemannian_Tonnetz.svg.png)

The main transformation operations in the Tonnetz are based on parsimonious voice leading between chords, where minimal note movement occurs. By fixing two notes in a chord and moving the remaining note to the closest neighbor, the progression smoothly connects chords. These operations are typically called P, L, and R transformations, though other transformations also exist.  

![Transformations](https://storage.gmth.de/zgmth/media/1009/Rieke_Tonnetz_01.png)

PLR-group $G=<P,L,R\|P=R(LR)^3,(LR)^{12}=P^2=(PLR)^2=1>$ is isomorphic to T/I group $D_{24}$.

- Relative

$$
R(x,y,z)= \begin{cases}  (y,x,z+2), \quad (x,y,z)&\in M \\ (y,x,z-2), \quad (x,y,z)&\in m \end{cases}
$$

- Parallel

$$
P(x,y,z)= \begin{cases}  (z,y-1,x), \quad (x,y,z)&\in M \\ (z,y+1,x), \quad (x,y,z)&\in m \end{cases}
$$

- Leading-Tone Exchange

$$
L(x,y,z)= \begin{cases}  (x-1,z,y), \quad (x,y,z)&\in M \\ (x+1,z,y), \quad (x,y,z)&\in m \end{cases}
$$

- Slide

$$
S(x,y,z)= \begin{cases}  (z+1,y,x+1), \quad (x,y,z)&\in M \\ (z-1,t,x-1), \quad (x,y,z)&\in m \end{cases}
$$

- Nebenverwandt(Secondary relative)

$$
N(x,y,z)= \begin{cases}  (y-2,x-2,z), \quad (x,y,z)&\in M \\ (y+2,x+2,z), \quad (x,y,z)&\in m \end{cases}
$$

- Hexpole

$$
H(x,y,z)= \begin{cases}  (x+1,z+2,y+2), \quad (x,y,z)&\in M \\ (x-1,z-2,y-2), \quad (x,y,z)&\in m \end{cases}
$$

For $D_{2n}$ of order $2n$:

$$
\begin{aligned}
<P,L> \cong D_n \\ <P,R> \cong D_n \\ <P,L,R> = <L,R> \cong D_{12}
\end{aligned}
$$

### Maximum Parsimonious Voice Leading


1. Hexatonic Cycles  
    The group $<R,L>$ acts on the set $Mm$. When the subgroup $H_1=<P,L>$ acts on the set $Mm$, it creates four orbits, each called a hexatonic cycle.

    $$
\begin{aligned} o(C)&= \{C,c,G\#,g\#,E,e\} \\ o(C\#)&=\{C\#,c\#,A,a,F,f\} \\ o(D)&=\{D,d,A\#,a\#,F\#,f\#\} \\ o(D\#)&=\{ D\#,d\#,B,b,G,g \}\end{aligned}
    $$

2. Octatonic Cycles  
    When the subgroup $H_2=<P,R>$ of $<R,L>$ acts on the set $Mm$, it creates three orbits, each called an octatonic cycle.

    $$
\begin{aligned} o(C)&=\{ C,c,D\#,d\#,F\#,f\#,A,a \} \\ o(C\#)&=\{C\#,c\#,E,e,G,g,A\#,a\#\} \\ o(D)&=\{D,d,F,f,G\#,g\#,B,b\}\end{aligned}
    $$

    Analyzing transpositions through permutations, there are seven cases. In 12-tone equal temperament music, there are 12 notes so it seems there could be more than seven cases. However, in practice, this is unnecessary because the six cases with sharps and flats correspond equivalently to five cases, making additional cases redundant.

3. Hamiltonian Cycles  
    When the group $<P,L,R> \cong D_{12}$ acts on the set $Mm$, it creates only one orbit, meaning the set $Mm$ itself is the orbit. Since $LR$ is of order 12, alternately applying $R$ and $L$ traverses all 24 triads.


---

## References

[Neo-Riemannian Theory](https://producerhive.com/music-theory/neo-riemannian-theory/) 1

[Neo-Riemannian Theory](https://en.wikipedia.org/wiki/Neo-Riemannian_theory) 2

[An Introduction to neo-Riemannian Theory](https://alpof.wordpress.com/category/music/math-music/neo-riemannian-theory/): this blog explains the theory very well.

[Neo-Riemannian Triadic Progressions](https://viva.pressbooks.pub/openmusictheory/chapter/neo-riemannian-triadic-progressions/)

[Cycling in Tonal Space](https://www.gmth.de/zeitschrift/artikel/1009.aspx)

[Group Actions in neo-Riemannian Music Theory](https://www-personal.umd.umich.edu/~tmfiore/1/mathmusiccolloquiumslides.pdf)

[*Generalized Tonnetz*](https://dmitri.mycpanel.princeton.edu/tonnetzes.pdf), Dmitri Tymoczko

Neo-Riemannian tonnetz를 이용한 변환으로써의 음악의 수학적 분석과 작곡방법 고안

*음악 수학*, 데이비드 밴슨