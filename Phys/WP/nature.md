---
layout: default
date: 2025-06-11
---

date: {{ page.date | date: "%Y.%m.%d" }}

# Understanding Nature

Starting from the questions “What does it mean to understand nature?” and “What does it mean to describe and explain natural phenomena?”, science aims to explain the *causes* of phenomena causally. For example, suppose a scientist builds an AI model that takes elemental properties as input and outputs crystal lattice structures, then trains it to predict superconducting critical temperatures. The model, remarkably, predicts the $T_c$ of an unprecedented new material, and an experiment confirms it.

If we cannot properly explain *why* the result is correct, it has little long-term significance. How would we explain it? If the model merely recognizes patterns, then it has learned correlations; it does not know the causal structure. With such a model one cannot say “we have understood nature.”

Moreover, “explaining” comes in layers. One may offer a semantic (conceptual) explanation or a structural (formal) one. For instance, if the scientist says, “Internally this model has a coding that corresponds to the Fermi surface and electronic structure,” that is a structural explanation; “This variable computed by the model represents a materials-property distance between elements, …” is a semantic explanation.

People have long tried to peer into black-box models—drawing heatmaps, tracing which parts of an image drove the decision, and so on—but such approaches seem far from sufficient.

If, however, the model’s interior *resembles some physical law*, then we could align input features with physical concepts that are semantically isomorphic, enabling a direct explanation. Of course, if the interior obeys physical laws entirely different from existing physics, we might not be able to explain it; we would need to formulate a new physical theory tailored to the AI model. And even if such an internal space exists, it may not be a physically intuitive world for humans, making interpretation at a human level extremely difficult—much like quantum mechanics a century ago.

If that nevertheless becomes possible, it would let us *redefine* what it means for something with perception to “understand” something. Traditionally, “perception” refers to a living being’s capacity to act according to its own thoughts, feelings, and motives.

Suppose the AI has a nonlinear space such as a latent space, and we can define an abstract space that reflects nature’s automorphic structure (be it a topological space, symmetry group, manifold, graph, etc.). Then we could seek a mapping between the two that preserves information—or preserves structures such as symmetry, topological properties, and causality. The AI’s internal space will likely be nonlinear and nearly uninterpretable, but if there exists a system that preserves isomorphisms—à la the Langlands program—or a functor, one could substitute a well-understood system for the difficult object, making the problem easier.

In that case, “understanding nature” ultimately becomes the structural modeling of a space of concepts, and “understanding a concept” becomes learning its causal conceptual structure. Thus AI would be neither a stochastic parrot nor a mere mimic without understanding, but a system that *genuinely behaves intelligently*. It would then become easier to define what counts as sentient or intelligent (perception and intelligence are not identical, but related), because we could judge whether an entity understands reality by whether it can reproduce and interpret the causal structure of phenomena.

To be sure, defining perception as a kind of “capacity for reproduction” is a functionalist stance. Even if a theory “captures the structure of reality,” what if that is merely humans *structuring* reality? And how would we know that the theory’s structure is absolute? Scientific theories are in principle falsifiable and thus on uncertain footing, and we may not truly know the exact structure of “reality itself”—as with Kant’s thing-in-itself or Plato’s Forms. Perhaps one can bracket these concerns as a working hypothesis…?

Moreover, even if there exists a physical structure that maps to the AI’s internal space, if finding and interpreting that space is NP-hard, the problem becomes practically intractable. In that case, wouldn’t we be confined to phenomenological approaches or approximate descriptions, as with an effective theory?

<div class="pagination">
  <a href="{{ '/Phys/WP/what_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>