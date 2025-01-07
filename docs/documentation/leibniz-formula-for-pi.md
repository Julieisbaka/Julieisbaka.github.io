---
icon: pi
description: Formula for pi/4 created by Leibniz.
---

# Leibniz formula for pi

$$
{\displaystyle \sum _{k=0}^{\infty }{\frac {(-1)^{k}}{2k+1}}}=\frac{\pi}{4}
$$

{% hint style="info" %}
Curiously, despite being named Leibniz's formula for pi, this formula was not actually created by Leibniz. Bernoulli who was Leibniz's teacher and mentor discovered it; the book was then worked on and published by both of them. Leibniz had a curious arrangement with his teacher in which he bought all mathematical discoveries made by his teacher.
{% endhint %}

{% code title="Python implementation of the formula" lineNumbers="true" %}
```python
import math

def leibniz_pi(n_terms: int) -> float:
    pi_approximation = 0
    for i in range(1, n_terms + 1):
        term = 4 / (2 * i - 1) if i % 2 == 1 else -4 / (2 * i - 1)
        pi_approximation += term
    return pi_approximation

print(leibniz_pi(10_000))
print(math.pi)
```
{% endcode %}

## Proof
