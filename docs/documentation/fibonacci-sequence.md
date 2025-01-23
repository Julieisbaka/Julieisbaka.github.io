---
icon: first-order-alt
description: The Fibonacci sequence
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Fibonacci sequence

{% code title="Python Fibonacci sequence" lineNumbers="true" fullWidth="true" %}

```python
def fib(index):

    if index <= 0: # 0 + 0[undefined] = [0]
        return 0
    elif index == 1: # 1 + 0 = 1
        return 1
    else:
        return fib(index - 1) + fib(index - 2) # 1 + 0 = 1
   
```

{% endcode %}

The Fibonacci sequence is the list of numbers such that a number in the sequence is the sum of the of the two sequence numbers.

$$
f(n) = f(n-1) + f(n-2)
$$

for the starting number equal to 0 or 1 (Be consistent)

## **Applications**

Johannes Kepler observed that the ratio of consecutive Fibonacci numbers converges. "as 5 is to 8 so is 8 to 13, practically, and as 8 is to 13, so is 13 to 21 \[almost.]", and concluded that these ratios approach the golden ratio φ

$$
\phi=\frac{fib(n)}{fib(n-1)}
$$
