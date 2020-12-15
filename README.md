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

**Examples:**

```
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje

Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse
```

### Tree Constructor

Have the function **treeConstructor(strArr)** take the array of strings stored in **strArr**, which will contain pairs of integers in the following format: **(i1,i2)**, where **i1** represents a child node in a tree and the second integer **i2** signifies that it is the parent of **i1**. For example: if **strArr** is **["(1,2)", "(2,4)", "(7,2)"]**, then this forms the following tree:

![](https://i.imgur.com/NMRdSO1.png)

which you can see forms a proper binary tree. Your program should, in this case, return the string **true** because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs, then return the string **false**. All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.

**Examples:**

```
Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
Output: true

Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
Output: false
```

### Bracket Matcher

Have the function **bracketMatcher(str)** take the **str** parameter being passed and return **1** if the brackets are correctly matched and each one is accounted for. Otherwise return **0**. For example: if **str** is "(hello (world))", then the output should be **1**, but if **str** is "((hello (world))" the the output should be **0** because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If **str** contains no brackets return **1**.

**Examples:**

```
Input: "(coder)(byte))"
Output: 0

Input: "(c(oder)) b(yte)"
Output: 1
```

### Codeland Username Validation

Have the function **codelandUsernameValidation(str)** take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string **true**, otherwise return the string **false**.

**Examples:**

```
Input: "aa_"
Output: false

Input: "u__hello_world123"
Output: true
```

### Find Intersection

Have the function **findIntersection(strArr)** read the array of strings stored in **strArr** which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of **strArr** in sorted order. If there is no intersection, return the string false.

**Examples:**

```
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13

Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
```

### Questions Marks

Have the function **questionsMarks(str)** take the **str** string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string **true**, otherwise it should return the string **false**. If there aren't any two numbers that add up to 10 in the string, then your program should return **false** as well.

For example: if **str** is "arrb6???4xxbl5???eee5" then your program should return **true** because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

**Examples:**

```
Input: "aa6?9"
Output: false

Input: "acc?7??sss?3rr1??????5"
Output: true
```

### Longest Word

Have the function **longestWord(sen)** take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume **sen** will not be empty.

**Examples:**

```
Input: "fun&!! time"
Output: time

Input: "I love dogs"
Output: love
```

### First Factorial

Have the function **firstFactorial(num)** take the **num** parameter being passed and return the factorial of it. For example: if **num** = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

**Examples:**

```
Input: 4
Output: 24

Input: 8
Output: 40320
```

### First Reverse

Have the function **firstReverse(str)** take the **str** parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string "sredoC dna dlroW olleH".

**Examples:**

```
Input: "coderbyte"
Output: etybredoc

Input: "I Love Code"
Output: edoC evoL I
```

### Greatest Common Divisor

The counterpart to the least common multiple is the greatest common divisor (gcd). The greatest common divisor of two natural numbers **a** and **b** is the largest natural numbers that divides **a** and **b**. Write a function **gcd** that takes two natural numbers and calculates their gcd.

**Examples:**

```
gcd(6, 15) should return 3
```

### Roman numerals

Write a function **arabic()** that converts a Roman number (up to 1000) into an Arabic.

**Examples:**

```
arabic('CDLXXXIII') should return 483
```

### Project Euler

> The following task is taken from Project Euler. It's the first task there. Project Euler is a series of challenging mathematical and computer programming problems.

Write a function **sumMultiples()** taking a natural number **n** and returning the sum of all multiples of 3 and of 5 that are truly less than **n**. All multiples of 3 and 5 less than 20 are 3, 5, 6, 9, 10, 12, 15 and 18. Their sum is 78.

**Examples:**

```
sumMultiples(20) should return 78
```

### Invert Case (Инвертированный регистр)

Реализуйте и экспортируйте по умолчанию функцию, которая меняет в строке регистр каждой буквы на противоположный.

**Примеры:**

```
invertCase('Hello, World!'); // hELLO, wORLD!
invertCase('I loVe JS');     // i LOvE js
```

### Fizzbuzz (Найди Fizz и Buzz)

Реализуйте и экспортируйте по умолчанию функцию, которая выводит (**console.log**) в терминал числа в диапазоне от **begin** до **end**. При этом:

- Если число делится без остатка на **3**, то вместо него выводится слово **Fizz**
- Если число делится без остатка на **5**, то вместо него выводится слово **Buzz**
- Если число делится без остатка и на **3**, и на **5**, то вместо числа выводится слово **FizzBuzz**
- В остальных случаях выводится само число

Функция принимает два параметра (**begin и end**), определяющих начало и конец диапазона (включительно). Для простоты считаем, что эти параметры являются целыми числами больше нуля. Если диапазон пуст (в случае, когда **begin > end**), то функция просто ничего не печатает.

**Примеры:**

```
fizzBuzz(11, 20);
//
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
```

### Without Two Zeros (Без двух нулей)

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента - количество нулей и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, что бы не было двух нулей идущих подряд.

Например, определим все способы размещения двух нулей и двух единиц. Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100. В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100. Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3.

**Примеры:**

```
withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3); // 4
withoutTwoZeros(2, 4); // 10
```

### Basics Power3 (Степень тройки)

Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

**Примеры:**

```
isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)
```

### Happy Ticket (Счастливый билет)

"Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй половины цифр. Номера могут быть произвольной длины, с единственным условием, что количество цифр всегда чётно, например: 33 или 2341 и так далее.

Билет с номером 385916 — счастливый, так как 3 + 8 + 5 = 9 + 1 + 6. Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 != 0 + 0 + 2.

Реализуйте и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер — всегда строка). Функция должна возвращать true, если билет счастливый, или false, если нет.

**Примеры:**

```
isHappyTicket('385916'); // true
isHappyTicket('231002'); // false
isHappyTicket('1222');   // false
isHappyTicket('054702'); // true
isHappyTicket('00');     // true
```

### Happy Numbers (Счастливые числа)

Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу.

**Например:**

```
7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.
```

**Вывод: исходное число 7 - счастливое.**

Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true, если число счастливое, и false, если нет. Количество итераций процесса поиска необходимо ограничить числом 10.

### Balanced Brackets (Сбалансированы ли скобки?)

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок, и проверяет, является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

- Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

- Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Закрывающая скобка не должна идти впереди открывающей.

**Например:**

```
areBracketsBalanced('(())');  // true
areBracketsBalanced('((())'); // false
```

### Perfect Numbers (Идеальные числа)

Создайте функцию isPerfect(), которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

Совершенное число — положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

> [Список совершенных чисел](https://en.wikipedia.org/wiki/List_of_perfect_numbers)

### Sum Square Difference (Сумма квадратов)

Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference(), которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.

### RNA (Преобразование DNA в RNA)

ДНК и РНК это последовательности нуклеотидов.

Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).

Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).

Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

- G -> C
- C -> G
- T -> A
- A -> U

Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

**Примеры:**

```
dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null
```

### Ackermann (Функция Аккермана)

Функция Аккермана — простой пример вычислимой функции, которая не является примитивно рекурсивной.

Она обозначается A(m,n), принимает два неотрицательных целых числа в качестве параметров и возвращает натуральное число. Эта функция растёт очень быстро, например, число A(4,4) настолько велико, что количество цифр в порядке этого числа многократно превосходит количество атомов в наблюдаемой части Вселенной.

Функция Аккермана определяется рекурсивно для неотрицательных целых чисел m и n следующим образом:

![](https://i.imgur.com/NTlMEQb.png)

Реализуйте и экспортируйте по умолчанию функцию Аккермана.

**Примеры:**

```
ackermann(0, 0); // 1
ackermann(2, 1); // 5
ackermann(2, 3); // 9
```

### Basics Time (Форматированное время)

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм. Если количество минут содержит больше 24 часов (1 суток), то функция возвращает время прошедшее с полуночи последних суток.

**Примеры:**

```
formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
formattedTime(67); // 01:07
formattedTime(175); // 02:55
formattedTime(600); // 10:00
formattedTime(754); // 12:34
formattedTime(1504); // 01:04
```

### Reverse Integer (Переворот числа)

Реализуйте и экспортируйте по умолчанию функцию, которая переворачивает цифры в переданном числе и возвращает новое число.

**Примеры:**

```
reverseInt(13); // 31
reverseInt(-123); // -321
reverseInt(8900); // 98
```

### Angle Difference (Разница углов)

Напишите функцию diff(), которая принимает два угла (integer), каждый от 0 до 360, и возвращает разницу между ними.

Функция должна вернуть наименьшее значение.

**Примеры:**

```
diff(0, 45) === 45; // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170; // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;
```

### Reverse String (Переворот строки)

Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.

**Например:**

```
reverse('str');    // rts
reverse('hexlet'); // telxeh
```

Попробуйте решить эту задачу, используя рекурсивный процесс. Для этого вам понадобится метод slice().



---

## Learn

- https://github.com/Asabeneh/30DaysOfJavaScript
- https://www.freecodecamp.org/news/best-javascript-tutorial/

