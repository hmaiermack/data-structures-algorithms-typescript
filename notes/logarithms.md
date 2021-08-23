# Logarithms

A logarithm is defined by the following equation: log b(x)=y if and only if b^y = x.
In the context of coding interviews, the log is used to describe the complexity analysis of algorithms, and its usage alaways
implies a logarithm of base 2. Log in coding interviews is defined by log (n) = y if and only if 2^y = n.

If an algorithm has a log time complexity O(log(n)), where n is the size of the inputs, whenever the algorithms input size doubles,
the number of operations needed to complete the algorithm increases by only one unit.

- Conversely, an algo w/ linear time complexity would see its operations double alongside input size.

It is assumed that you are dealing with base 2 (binary) logarithms.

Essentially, log(n) is the power to which you need to raise 2 for you to reach n.
