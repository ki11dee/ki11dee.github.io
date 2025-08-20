---
layout: default
date: 2025-06-02
---

date: {{ page.date | date: "%Y.%m.%d" }}

# Langevin Dynamics

Langevin dynamics is a stochastic differential equation (SDE) that describes the motion of particles in thermal systems, such as Brownian motion. An SDE is a differential equation where one or more terms are stochastic processes, representing processes that express each state changing over time $t$. The results are not deterministic and vary slightly due to randomness. The basic form of an SDE is:

$$dX_t=\mu(X_t,t)dt+\sigma(X_t,t)dB_t$$

Here, the first term is called the drift term (the deterministic part without randomness), and the second term is called the diffusion term (the part that expresses how much a random process $B_t$ affects the entire process). This random process is primarily defined as a Wiener process.

A Wiener process is a stochastic process that represents Brownian motion. When the randomness term or noise term of an SDE is expressed as a Wiener process, it takes the following form:

$$\begin{aligned}
dx(t)&=f(x(t),t)dt+g(x(t),t)dw(t) \\
dx_t&=-\frac{D}{kT}\nabla_x U(x_t)dt+\sqrt{2D}dW_t
\end{aligned}$$

where $U(x)$ is the potential energy, $D=kT/\gamma$ is the diffusion coefficient, and $W_t$ is Brownian motion (Wiener process). The characteristics of a Wiener process are as follows:

1. $w(0)=0$
2. $w(t+\Delta t)-w(t)=\Delta w \sim \mathcal{N}(0,\Delta tI)$: Gaussian increment (the difference between states separated by $\Delta t$ and the current state follows a normal distribution)
3. $w(t+\Delta t)-w(t)$ and $w(t)-w(t-\Delta t)$ are independent (each increment is independent)
4. The path of the Wiener process is almost surely continuous

Langevin dynamics is widely used as a sampling method in diffusion models that utilize score function-based SDEs. A score function is defined as the gradient of the log-likelihood:

$$\nabla_x \log p(x)$$

Score matching is the process of estimating probability density functions using score values without obtaining the actual probability density function. If we define the probability density function $p(x)$ in the form of an energy-based model parameterized by $\theta$:

$$p_\theta(x)=\frac{e^{-f_\theta(x)}}{Z_\theta}, \quad \text{where} \quad Z_\theta=\int e^{-f_\theta(x)}$$

To reduce complex integral calculations, we use the score function to calculate the log-likelihood instead:

$$\nabla_x \log p(x)=-\nabla_x f_\theta(x)=-\nabla U(x)/kT$$

An ideal example of score matching is optimizing the Fisher divergence between the score function of the true data distribution and the estimated score function. However, since we often cannot know exactly what the true data distribution is, it is common to use a loss function that transforms the equation to depend only on the score function rather than directly calculating the Fisher divergence.

The Fokker-Planck equation is a differential equation that describes how probability density functions change over time through stochastic processes. Probability distributions can reach a point where they no longer change over time, called the stationary distribution. If we can find an SDE that implements a final stationary distribution following the target data distribution, we can model a generative model with this to obtain desired results. Since the Fokker-Planck equation describes how the entire probability distribution changes as time evolves, the solution to this equation is equivalent to the probability distribution of solutions to the SDE. The equation generally takes the following form:

$$\frac{dp_s(x(t);t)}{dt}=-\frac{d}{dx(t)}f(x(t),t)p_s(x(t);t)+\frac{d^2}{2dx(t)^2}g^2(x(t),t)p_s(x(t);t)$$


<div class="pagination">
  <a href="{{ '/Phys/TSP/TSP_content.html' | relative_url }}" class="prev-button">Previous</a>
</div>