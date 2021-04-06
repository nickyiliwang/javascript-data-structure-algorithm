# Big-O Notation

## Summary

1. Analyze the performance
2. High level understanding of time / space complexity
3. BigO not about precision, but about trends (linear O(n)? quadratic O(n^2) ? constant O(1)? )
4. Measures the algorithm on runtime instead of the hardware or the input.

a way of generalizing code and talking about the efficiency of code, comparing performance to other pieces of code

system of classifying code

## Why ?

1. precision and vocabulary when discussing code

2. Trade-offs and approaches when working with solutions. (ie. consistency with longer upfront time vs. others)

3. debugging and discover pain points of slow down at runtime

## Problem with time / counting effective runtime

1. Different machines will record different times
2. Same machine records diff times
3. For fast Algos, speed of measurement isn't precise enough
4. result may vary

## Why Counting operations is more reliable

1. numbers of simple operations the machine has to perform is constant in every machine

## BigO Shorthands - Time Complexity

1. Arithmetic operations are constant O(1) (+ - / \*)

2. Variable assignment is constant

3. Accessing elements in an array (by index) or object by key is constant

4. In a loop, the complexity is the length of th loop times the complexity of whatever happens inside of the loop
   a. ie. nested for loops => O(n^2)
   b. ie. logAtMost(n) => O(1) (because it only logs up to n)

## BigO Space Complexity (auxiliary space complexity)

space required by the algorism, not the input itself (the inputted code)

what happens inside the algorithm/ the amount of memory is uses at runtime

## Space Complexity Rules

1. Most primitives (bool, num, undefined, null) are constant space

2. Strings === O(n) space where n is the str length

3. Reference types are generally O(n) n is the length of arr or num of keys in obj

## Logarithms complexity

what ?

we are asking: to what exponent does log 2 get to 8
log2(1) = 0 = 2^0 = 1
log2(8) = 2^3 = 8
log2(64) = 6 = 2^6 = 64

<!-- as far as BigO is concerned -->

log === log2

Why ?

1. Certain searching algorithms have log time complexity
2. Efficient sorting algorithms involves log
3. Recursion sometimes involves log space complexity
