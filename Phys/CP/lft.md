---
layout: default
date: 2025-06-06
---

date: {{ page.date | date: "%Y.%m.%d" }}


Lattice Field Theory(LFT) is a field theory that discretizes spacetime and represents it as a lattice. The method for predicting observable physical quantities in lattice field theory is to sample field configurations. Traditionally, Markov Chain Monte Carlo(MCMC) and Hybrid Monte Carlo(HMC) methods have been the representative sampling tools. However, Monte Carlo-based algorithms suffer from the critical slowing down problem, where autocorrelation time becomes lengthy near critical points. With recent advances in deep learning technology, GANs, flow-based models, and other approaches are being attempted for lattice field theory sampling. Among these, diffusion models demonstrate excellent capabilities in generating high-resolution images through a learning process that removes noise via denoising. The reverse denoising process in diffusion models is mathematically equivalent to stochastic quantization (SQ). Moreover, SQ corresponds one-to-one with the reverse Stochastic Differential Equation of Langevin dynamics in statistical physics. Therefore, by connecting these two mechanisms, we can propose that reverse diffusion theory can be utilized for LFT sampling.



- [Lattice Theory](https://universe-review.ca/R15-12-QFT18.htm)

- [Computational Statistical Physics](https://ethz.ch/content/dam/ethz/special-interest/phys/theoretical-physics/itp-dam/documents/compstatphys/CompStatPhysPartI_notes.pdf)

- [$\phi^4$ theory on the lattice](https://www.hiskp.uni-bonn.de/uploads/media/phi4.pdf)

- [Lattice quantum electrodynamics in (3+1)-dimensions at finite density with tensor networks](https://www.nature.com/articles/s41467-021-23646-3)

- [Lattice Simulations of the $\phi^4$ Theory and Related Systems](https://www.tpudlik.com/research/pudlik_Amherst_thesis.pdf)


### [Diffusion Models as Stochastic Quantization in Lattice Field Theory(2024)]

In this paper, researchers construct a $\varphi^4$ scalar field model on a 2D lattice and train a U-Net-based score network to approximate the score function of noise-corrupted samples. First, they demonstrate that diffusion models mathematically correspond to stochastic quantization. To achieve this, they explain how Langevin dynamics and the Fokker-Planck equation correspond to the forward/reverse SDE structure of diffusion models. they also explore the meaning of this correspondence. Next, they quantitatively investigate whether diffusion models can replace or complement existing MCMC sampling methods in LFT. they verify the accuracy level of variables such as autocorrelation, 2-point function, and binder cumulant in the 2D $\varphi^4$ model. they also present how to quantitatively compare the accuracy and efficiency of diffusion models near critical points. Subsequently, they predict whether the diffusion model framework can be extended to theories more complex than LFT. they numerically predict whether simulation techniques can be transitioned to self-supervised learning that improves the limitations of MCMC methods. From a long-term perspective, they explore whether diffusion models can be applied to challenging problems such as real-time dynamics and lattice QCD.



<div class="pagination">
  <a href="{{ '/Phys/CP/CP_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>