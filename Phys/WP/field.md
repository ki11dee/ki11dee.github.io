---
layout: default
date: 2025-05-30
---

date: {{ page.date | date: "%Y.%m.%d" }}

# Is Quantum Field Real?

Last year I read *Space, Time, Matter*, where Mie’s theory of electrodynamics appeared, and I couldn’t make sense of it. Today I happened to grasp the context.

1. Physics is the discipline that seeks to understand nature. But what must one know to say that nature has been understood?

2. In the 17th-century Scientific Revolution, that “what” was the position of particles. Scientists then thought the world was made of particles endowed with intrinsic properties such as mass and electric charge. A particle’s state can be represented by its position as a function of time. And that position must be represented as a quantity with a specific mathematical structure.

3. Having specified the “what,” one must find the “how.” How do we describe the motion of particles? Newton thought the answer was “solve the equations of motion.” This philosophy later became a universal foundation of physics, and modern scientists largely think the same way: most physics problems reduce to modeling and predicting how certain variables characterizing a phenomenon or system in spacetime change.

4. Mathematically, such modeling and prediction are recast as finding solutions to (differential) equations. Thus, if one can solve ODEs, PDEs, and the like, one can properly solve the problem and obtain answers.

5. In Newtonian mechanics, the equations close only after conditions on the force are supplied. To specify the force means to specify its value at each point in space and time. A quantity so defined is called a field. Forces are thus described by fields, and once those fields are determined the equations of motion are complete. Whether the equations are correct is decided by experiment.

6. For Newton’s equations to be well defined, an appropriate coordinate system must exist (as Newton assumed). Through the First Law, he admitted the existence of a global inertial frame “valid at every point of space” and of an absolute space permanent in character and wholly independent of the presence of matter, and he built mechanics on that basis. In the *Principia*, he explained that from the shape of the water surface in a bucket fixed in a given frame one can judge whether that frame is rotating with respect to absolute space—or more generally, whether it is accelerating. But can there be a unique inertial frame in Newtonian mechanics? Any frame at rest or in uniform motion with respect to absolute space is inertial, and there is no way to tell which of them is the absolutely resting frame, physically distinguished from the others. Because the Second and Third Laws retain the same form in all inertial frames (the forces considered are form-invariant under the relevant transformations), all inertial frames have equal status. Hence velocity has no absolute meaning, only a relative one (the Galilean principle of relativity).

7. Mach, by contrast, denied the existence of absolute space, since it cannot be an object of observation. He argued that a body’s inertia is determined only through its interaction with all other bodies in the universe (an empiricist stance).

8. In the late 19th century, Maxwell completed his equations governing electromagnetism to satisfy logical consistency, and Hertz’s experiments confirmed the existence of electromagnetic waves. According to Maxwell’s equations, electromagnetic waves propagate in vacuum at speed $c$, independently of the motion of the source and of the direction of propagation. But under Galilean transformations Maxwell’s equations cannot remain valid; the relativity principle is thus broken.

9. Einstein, drawing on Mach’s ideas, replaced Galilean by Lorentz transformations and modified Newtonian mechanics. He also adjusted Newton’s equations of motion into relativistic equations invariant under Lorentz transformations. In special relativity he postulated that all physical laws must have the same form under Lorentz transformations. The notion of an absolutely resting frame thereby becomes physically meaningless, and by adopting Lorentz transformations one restores the relativity principle.

10. The property that the correct laws of motion be expressed in a form independent of the choice of coordinates is called general covariance with respect to arbitrary coordinate choices; the systematic assertion that the laws of nature are independent of coordinates is relativity theory.

11. If one follows this principle, physical quantities in nature must be expressed as objects covariant under “rotations” mixing time and space (4-vectors/tensors). Using such building blocks, one should obtain both equations of motion and field equations—including for non-inertial coordinate systems. In that case inertial forces appear, which locally cannot be distinguished from gravity (equivalence principle) and which produce accelerations related to the curvature of trajectories; to extend the notion of curvature to all of spacetime, one introduces the curvature of Riemannian geometry and thereby describes both inertial forces and gravity. One then obtains field equations determining spacetime curvature and the geodesic equation determining particle motion within spacetime. To form a scalar from the Riemann curvature—choosing the leading contribution when gravitational effects are weak—one arrives at the Ricci scalar.

12. In the early 20th century the Göttingen school held that universal physical laws are encoded in the calculus of variations (the principle of least action) and in group-theoretic invariance grounded in projective geometry. They believed universal laws arise from variational principles, symmetries, and invariants. According to them, all mechanics starts from an action via Hamilton’s principle, and equations are obtained by variation.

13. Hilbert, Klein, Riemann, Weyl, Noether, Minkowski, and others were associated with Göttingen, and mathematicians of the time were interested in unifying gravity and electromagnetism using non-Euclidean geometry such as Riemannian geometry. Minkowski once attempted relativistic field equations to address mechanics and electromagnetism together by distinguishing matter and ether; the light-quantum hypothesis was not taken into account. Although Einstein’s theory later rejected the ether, the continuum viewpoint persisted (classical field theory).

14. After Minkowski’s death, Hilbert—continuing this line—independently derived field theory from variational principles. Mie’s theory was a matter theory explaining electromagnetic forces via nonlinear electromagnetic equations. Weyl combined his own scale gauge transformations with this continuum framework to build a unified field theory, and this line of thought later fed into the mathematical framework of Yang–Mills theory. The nonlinear electrodynamics developed from Mie’s ideas to cure the divergence of the classical electromagnetic field’s energy density—the Born–Infeld model—reappears later in the context of D-branes.

15. After general relativity was experimentally confirmed, Weyl undertook a serious attempt to unify GR and electromagnetism. Treating the electron as a continuously distributed substance in space, he applied gauge transformations, redefined geometric tensors, extended gauge invariance geometrically, and interpreted the electromagnetic potential as a (Riemannian) connection to construct a generalized electrodynamics. (Weyl’s theory was experimentally incorrect and was discarded, but the philosophy of gauge invariance survived and became the seed of the $U(1)$ gauge theory.)

16. All gauge theories can be interpreted as geometry of connections on space. Any gauge theory can be reinterpreted geometrically as a connection and curvature on a principal bundle. The homological algebra built on this structure is BRST; its complex corresponds to the de Rham complex.

Einstein’s fixation on unified field theory stemmed from the fact that light-quantum emission was understood only statistically, precluding a deterministic interpretation. If only one could find relativistic field equations, the continuum hypothesis and a deterministic interpretation could be preserved; quantum mechanics would then be governed “from above” by higher-level differential equations, yielding a deterministic model. Unfortunately this program failed, and relativistic quantum mechanics was constructed on a wholly different philosophy, leading to quantum field theory.

General relativity is not quantized; it is an instance of classical field theory that elevates the geometry of spacetime itself to dynamical status. There are attempts to “probabilize” classical field theory (e.g., extending classical mechanics to a complex Hilbert space in the Koopman–von Neumann formalism, or starting from Langevin dynamics and introducing an infinite-dimensional Gibbs measure to obtain the path integral in stochastic quantization), but they do not incorporate the core structure of quantum mechanics.

In the worldview of classical field theory, fields are “real” and treated as a deterministic continuum; particles are singularities of the field or soliton-like objects; computations proceed by deterministic PDE methods. By contrast, regarding the field ontology of quantum field theory—whether in Constructive QFT, Axiomatic QFT, or Algebraic QFT—it is hard to make a straightforward claim that fields are “substances.”

If one lists minimal, correct conditions that a “quantum field” must satisfy, those conditions can be called “structural” or “model-independent.” Yet it still feels very unclear what, in physics, that quantum field actually *is* that satisfies them.

Of course, experiments such as the Aharonov–Bohm effect and the Casimir effect provide indirect confirmation consistent with fields, and on that basis some argue for the reality of fields. But these are descriptions of phenomena; they do not, by themselves, show that fields are literally “real.”

<div class="pagination">
  <a href="{{ '/Phys/WP/what_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>