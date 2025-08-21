# Effectiveness and Computability

Is there an effective procedure to determine whether a given well-formed formula (wff) \$ \tau \$ is a logical consequence of a set of wffs \$ \sum \$, i.e., whether \$ \sum \vDash \tau \$?

## Theorem 1  
There is an effective procedure that, given any expression \$ \epsilon \$, will decide whether or not it is a wff.

## Theorem A  
The set of wffs is decidable in the following sense:

A set \$ \sum \$ of expressions is decidable if there exists an effective procedure that, given an expression \$ \alpha \$, will decide whether or not \$ \alpha \in \sum \$.

Any finite set is decidable. Some infinite sets are decidable, but not all. On one hand, there are uncountably many sets of expressions. On the other hand, there can be only countably many effective procedures, since there are only \$ \aleph_0 \$ finite sequences of letters, and the instructions, when written out, form a finite sequence of letters.

## Theorem 2  
There is an effective procedure that, given a finite set \$ \sum \$ of wffs and a wff \$ \tau \$, will decide whether or not \$ \sum \vDash \tau \$.

## Theorem 3  
For a finite set \$ \sum \$, the set of tautological consequences of \$ \sum \$ is decidable.

## Theorem 4  
A set \$ A \$ of expressions is effectively enumerable if there exists an effective procedure that, given any expression \$ \epsilon \$, produces the answer “yes” if and only if \$ \epsilon \in A \$.

If \$ \sum \$ is an infinite set—even a decidable one—then in general its set of tautological consequences may not be decidable. However, we can obtain a weaker result, which is in a sense half of decidability: A set \$ A \$ of expressions is semidecidable if there exists an effective procedure that, given any expression \$ \epsilon \$, produces the answer “yes” if and only if \$ \epsilon \in A \$.

## Theorem 5  
A set of expressions is decidable if and only if both it and its complement (relative to the set of all expressions) are effectively enumerable.

## Theorem 6  
If \$ \sum \$ is a decidable set of wffs, then the set of tautological consequences of \$ \sum \$ is effectively enumerable.