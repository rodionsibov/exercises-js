# Exercises JavaScript
Each exercise starts with a problem description. Read this description and try to solve the exercise.  

**If we want to learn something from the exercises, let's look at the solutions only after we’ve solved the exercise, or at least after we’ve attacked it long and hard enough to have a slight headache.**

Good luck!

## Challenges

- https://the-winter.github.io/codingjs/
- https://edabit.com/challenges
- https://codebattle.hexlet.io/
- https://www.codewars.com/kata/search/javascript?q=&&beta=false
- https://leetcode.com/problemset/all/
- https://exercism.io/tracks/javascript/exercises
- https://www.jschallenger.com/
- https://github.com/topics/javascript-exercises

### Min Window Substring

Have the function **minWindowSubstring(strArr)** take the array of strings stored in **strArr**, which will contain only two strings, the first parameter being the string **N** and the second parameter being a string **K** of some characters, and your goal is to determine the smallest substring of **N** that contains all the characters in **K**.

For example: if **strArr** is **["aaabaaddae", "aed"]** then the smallest substring of **N** that contains the characters **a, e**, and **d** is **"dae"** located at the end of the string. So for this example your program should return the string **dae**.

Another example: if **strArr** is **["aabdccdbcacd", "aad"]** then the smallest substring of **N** that contains all of the characters in **K** is **"aabd"** which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string **N**. Both strings will only contains lowercase alphabetic characters.

**Examples**

```
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje

Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse
```

### Tree Constructor

Have the function ```TreeConstructor(strArr)``` take the array of strings stored in strArr, which will contain pairs of integers in the following format: (i1,i2), where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1. For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:

![](https://i.imgur.com/NMRdSO1.png)

which you can see forms a proper binary tree. Your program should, in this case, return the string true because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string false. All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.

**Examples**

```
Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
Output: true

Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
Output: false
```

### Bracket Matcher

Have the function **bracketMatcher(str)** take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.

**Examples**

```
Input: "(coder)(byte))"
Output: 0

Input: "(c(oder)) b(yte)"
Output: 1
```


### Codeland Username Validation

Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.

**Examples**

```Input: "aa_"
Output: false

Input: "u__hello_world123"
Output: true
```

### Find Intersection

Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

**Examples**

```Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13

Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
```

### Questions Marks

Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

**Examples**

```
Input: "aa6?9"
Output: false

Input: "acc?7??sss?3rr1??????5"
Output: true
```

### Longest Word

Have the function **LongestWord(sen)** take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

**Examples**

```
Input: "fun&!! time"
Output: time

Input: "I love dogs"
Output: love
```

### First Factorial

Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

**Examples**

```
Input: 4
Output: 24

Input: 8
Output: 40320
```

### First Reverse

Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

**Examples**

```
Input: "coderbyte"
Output: etybredoc

Input: "I Love Code"
Output: edoC evoL I
```

### Greatest Common Divisor

The counterpart to the least common multiple is the greatest common divisor (gcd). The greatest common divisor of two natural numbers **a** and **b** is the largest natural numbers that divides **a** and **b**. Write a function **gcd** that takes two natural numbers and calculates their gcd.

**Examples**

```
gcd(6, 15) should return 3
```

### Roman numerals

Write a function **arabic** that converts a Roman number (up to 1000) into an Arabic.

Examples**

```
arabic('CDLXXXIII') should return 483
```

### Project Euler

> The following task is taken from Project Euler. It's the first task there. Project Euler is a series of challenging mathematical and computer programming problems.

Write a function **sumMultiples** taking a natural number **n** and returning the sum of all multiples of 3 and of 5 that are truly less than **n**. All multiples of 3 and 5 less than 20 are 3, 5, 6, 9, 10, 12, 15 and 18. Their sum is 78.

**Examples**

```
sumMultiples(20) should return 78
```

---

## Learn

- https://github.com/Asabeneh/30DaysOfJavaScript
- https://www.freecodecamp.org/news/best-javascript-tutorial/

