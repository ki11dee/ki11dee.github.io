# Gold Bug and CTM

In *The Gold-Bug* by Edgar Allan Poe, the protagonist's friend Legrand uses a decryption method for Captain Kidd's cryptogram based on the frequency stability of encoded symbols. Poe was well-versed in cryptography, as evidenced by a short treatise on cryptography that he wrote before publishing the novel, which explained the basic principles of cryptography in detail. Indeed, Poe had a notable talent for solving ciphers.

There are various types of ciphers, but all of them fundamentally need to function as a "lock" that allows the sender to safely transmit important information to the receiver. Since cryptographs use a syntactic-symbol correspondence structure, a "key" that can match the lock is essential. Simply replacing information with letters or symbols does not always guarantee the core of encryption—information security and confidentiality. For example, numbers stations use codes that replace meaningful phrases with words or numbers, and a chart (a codebook) is pre-distributed to receivers to decrypt these codes while listening to broadcasts. However, if the codebook (the key) is leaked or lost, it becomes useless.

The Enigma machine, used by the German military during World War II for encrypting communications, and the codebreaking efforts of the British Government Code and Cypher School (GCCS) led by mathematician Alan Turing, are some of the most famous events in cryptographic history. To briefly illustrate the encryption of Enigma for fun, imagine encrypting a four-letter code.

Suppose the message is **TURING**, the key is **ANT**, and the encryption code is represented as follows:

```
      A S D F

    A q w e u

    S a t d r

    D 1 2 3 4

    F g k i n
```

If you convert the message by matching each letter across horizontally to vertical values, it becomes:

```
SS FA FS DF FF AF
```

Next, match the key letters to each sequence horizontally:

```
ANT

SSF

AFS

DFF

FAF
```

If you randomly rearrange the decryption sequence to **2, 1, 3**, it becomes:

```
SAF FAS FDF AFF
```

This is the final encrypted message. If we expand the number of alphabets to **26** instead of **4**, and increase the sequence of keys to **8**, we get a system similar to the Enigma machine used by the Nazi German military. Enigma encrypted and decrypted information using three rotors with specific settings, which changed once a month, and relied on rotor positioning to make it extremely difficult to break.

Modern computing algorithms have evolved from such cryptographic systems. In general, an "algorithm" refers to the procedure or method for solving a problem, but in computing, it specifically means a procedure for solving repetitive problems. There are many ways to design algorithms, but the most efficient algorithm is always the one that yields the desired answer in the shortest time and with the fewest steps. The Turing machine, which can be seen as the precursor to modern computers, was one of many studies attempting to solve Entscheidungsproblem (decision problems) following Gödel's incompleteness theorem. Alonzo Church’s λ-calculus, featured in the Church-Turing thesis, is equivalent to the Turing machine, but it is less abstract and more mathematically concise—a minimal algorithm. The idea of λ-calculus is similar to RSA encryption, which uses the sine function forming the basis of quantum Fourier transform, the Dirac delta function, and approximations like the Taylor series. Just as Werner Heisenberg interpreted Hilbert's sixth problem, Alonzo Church's work became the most powerful discovery supporting the argument that computability theory could be quantified, establishing the foundation for CTT's role as an axiom of computer science.

Following the CTT, the view that everything is computable within the Turing machine framework became what is known as the classical computational theory of mind (CCTM) among theories of the mind.

What is the human mind? If it exists, where and how does it exist? How can we explain it in words? The philosophical discussions around the human mind, starting from the mind-body problem, fall under the field of philosophy of mind. It is known that there are numerous branches within this field. Modern philosophy of mind is largely dominated by functionalism, and most scientific findings also align with this view. However, due to the inherent diversity of theories about the mind and the nature of the subject, there are many researchers actively challenging this mainstream paradigm. Within the theory of mind (ToM), a notable theory is the Computational Theory of Mind (CTT) and its alternative or complementary theories.

Personally, I consider that research in the philosophy of mind may assist in the implementation of AI, rather than as a means to prove my thoughts about ToM. My goal remains focused on implementing the mechanisms of the mind. I recently organized some of the knowledge I acquired regarding functionalism and decided to record it in advance. CTM consists of:

1) **CCTM** - Explaining the mind by modeling the human brain as a Turing machine.

2) **Connectivism** - Mechanizing the mind using the principles of neural networks.

These two components are integrated within CTM. There are also other sub-discussions, such as:

3) **Formal-Syntactic Conception** - Interpreting the mind through formal syntactic calculations.

However, like other theories of the mind that are still incomplete, CTM is also a work in progress. Currently, several new attempts exist to supplement the limitations of CTM (albeit these attempts are also incomplete). Upon reviewing various alternatives, it appears that new discussions in this field involve the following:

4) **Information-Processing Calculations** - Interpretation through computational information processing.

5) **Structuralism Calculations** - Interpretation through structuralist computational methods.

6) **Pluralism** - A pluralistic interpretation of computation.

If CTM were to be revised, the most promising discussion would probably be number 6. In the case of 5, which is included in 6, it combines aspects of 1 and 3, similar to Church's thesis. It requires current formalization, but no significant flaws have been discovered yet. If we were to compare these discussions to theological perspectives, 1 might be akin to atheism, 2 and 3 resemble agnosticism, and 6 leans towards pantheism. Reasonable arguments could potentially bring CTM under their scope at a weak level, but due to their fundamentally abstract nature, they may struggle to gain robust paradigm support.

Will mind theories be proven during the 21st century, and if so, will technology advance enough for me to apply these findings in my pursuits? I still cannot provide a definite answer. I would like to add a personal note of ambivalence toward one of Professor Roger Penrose. Regardless of truth, I genuinely cannot tell if investigating the theory of mind is truly meaningful. Pouring my youthful energy into skepticism and exploration, fully believing my ideas are right beyond any doubt. Yet, perhaps all of this is nothing but a challenge to fate in my youth. When I begin to age and lose vitality, will I still hold onto the same passionate drive? And if I lose that drive, will my thoughts change as well? But still I cannot stop my journey toward truth. Only in this way can I understand this problem—or perhaps, my end. One of Penrose's books, *The Emperor's New Mind*, ends with the following:

> "I remember, myself, being troubled by many such puzzles as a child. Perhaps my own consciousness might suddenly get exchanged with someone else's. How would I ever know whether such a thing might not have happened to me earlier assuming that each person carries only the memories pertinent to that particular person? How could I explain such an 'exchange' experience to someone else? Does it really mean anything? Perhaps I am simply living the same ten minutes' experiences over and over again, each time with exactly the same perceptions. Perhaps only the present instant 'exists' for me. Perhaps the 'I' of tomorrow, or of yesterday, is really a quite different person with an independent consciousness. Perhaps I am actually living backwards in time, with my stream of consciousness heading into the past, so my memory really tells me what is going to happen to me rather than what has happened to me so that unpleasant experience at school is really something that is in store for me and I shall, unfortunately, shortly actually encounter. Does the distinction between that and the normally experienced time progression actually 'mean' something, so that the one is 'wrong' and the other 'right'? For the answers to such questions to be resolvable in principle, a theory of consciousness would be needed. But how could one even begin to explain the substance of such problems to an entity that was not-itself-conscious?..."