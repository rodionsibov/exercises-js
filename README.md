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

> Now consider the equivalence between numbers and strings of hash characters. You can go from 1 to 2 by adding 1 (+= 1). You can go from "#" to "##" by adding a character (+= "#"). Thus, your solution can closely follow the number-printing program.

[Download source code and solution to exercise]()

## FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

> Going over the numbers is clearly a looping job, and selecting what to print is a matter of conditional execution. Remember the trick of using the remainder (%) operator for checking whether a number is divisible by another number (has a remainder of zero).

> In the first version, there are three possible outcomes for every number, so you’ll have to create an if/else if/else chain.

> The second version of the program has a straightforward solution and a clever one. The simple solution is to add another conditional “branch” to precisely test the given condition. For the clever solution, build up a string containing the word or words to output and print either this word or the number if there is no word, potentially by making good use of the || operator.

[Download source code and solution to exercise]()

---
_The exercises are from the book [Eloquent JavaScript](https://eloquentjavascript.net/index.html)_
