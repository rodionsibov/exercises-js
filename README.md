# Exercises JavaScript
Each exercise starts with a problem description. Read this description and try to solve the exercise. If you run into problems, consider reading the hints after the exercise. 

__If you want to learn something from the exercises, I recommend looking at the solutions only after you’ve solved the exercise, or at least after you’ve attacked it long and hard enough to have a slight headache.__

Good luck!

## Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:
```
#
##
###
####
#####
######
#######
```
> It may be useful to know that you can find the length of a string by writing .length after it.
```
let abc = "abc";
console.log(abc.length);
// → 3
```
> You can start with a program that prints out the numbers 1 to 7, which you can derive by making a few modifications to the even number printing example given earlier in the chapter, where the for loop was introduced.

Now consider the equivalence between numbers and strings of hash characters. You can go from 1 to 2 by adding 1 (+= 1). You can go from "#" to "##" by adding a character (+= "#"). Thus, your solution can closely follow the number-printing program.
[Download source code and solution to exercise]()

The exercises are from the book [Eloquent JavaScript](https://eloquentjavascript.net/index.html)
