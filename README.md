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

### Gem Puzzle (Пятнашки)

Игра в 15 или пятнашки — популярная головоломка, придуманная в 1878 году Ноем Чепмэном. Представляет собой набор одинаковых квадратных костяшек с нанесёнными числами, заключённых в квадратную коробку. Длина стороны коробки в четыре раза больше длины стороны костяшек для набора из 15 элементов, соответственно в коробке остаётся незаполненным одно квадратное поле. Цель игры — перемещая костяшки по коробке, добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений.

```
| 9  | 2  | 12 | 7  |
|----|----|----|----|
| 6  | 15 | 10 | 1  |
|----|----|----|----|
| 13 | 14 | 5  | 3  |
|----|----|----|----|
| 11 | 8  | 4  |    |
```

Реализуйте игру в соответствие со следующими требованиями:

Размер поля должен быть 4x4
В начальной позиции пустым всегда является правый нижний квадрат
Элементы формируются случайным образом по следующему алгоритму: сначала они перемешиваются используя randomize(values), а затем они наполняют таблицу. Таблица должна заполняться значениями сверху вниз, то есть пятый элемент, добавляемый в неё, находится по индексам [0, 1];
Перемещение костяшек происходит с помощью стрелок: при нажатии →, левая костяшка, относительно пустой области, сдвинется вправо.

Так как тесты завязаны на верстку (Bootstrap), то к ней предъявляются особые требования. Вот как выглядит начальная позиция:

```
<div class="gem-puzzle">
    <table class="table-bordered">
        <tbody>
            <tr>
                <td class="p-3">10</td>
                <td class="p-3">11</td>
                <td class="p-3">6</td>
                <td class="p-3">4</td>
            </tr>
            <tr>
                <td class="p-3">14</td>
                <td class="p-3">2</td>
                <td class="p-3">12</td>
                <td class="p-3">1</td>
            </tr>
            <tr>
                <td class="p-3">3</td>
                <td class="p-3">13</td>
                <td class="p-3">9</td>
                <td class="p-3">8</td>
            </tr>
            <tr>
                <td class="p-3">5</td>
                <td class="p-3">7</td>
                <td class="p-3">15</td>
                <td class="p-3 table-active"></td>
            </tr>
        </tbody>
    </table>
</div>
```

- Класс таблицы постоянен
- У каждой ячейки проставлен класс p-3
- Пустая ячейка не содержит текста.
- У пустой ячейки добавляется класс table-active

### Progress (Прогресс)

Реализуйте и экспортируйте по умолчанию функцию, которая запускает код, заполняющий элемент <progress> на один процент за 1 секунду. Через 100 секунд процесс должен остановится, так как достигнет максимума.

Начальное состояние

```
<progress value="0" max="100"></progress>
```

Через одну секунду

```
<progress value="1" max="100"></progress>
```

### Composition (Композиция функций)

С точки зрения математики, композиция функций f и g — новая функция z = f(g(x)).

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход две других одноаргументных функции и возвращает новую функцию. Эта новая функция также принимает на вход один параметр и представляет собой композицию двух исходных одноаргументных функций (эти функции вызываются последовательно в обратном порядке: например, при порядке f, g ===> f(g(x))).

Примеры ниже помогут понять, как должна работать функция:

```const f = compose(Math.sqrt, Math.abs);
f(-4); // 2

compose((v) => v, (v) => v)(10);         // 10
compose((v) => v + 2, (v) => v)(10);     // 12
compose((v) => v, v => (v) - 2)(10);     // 8
compose((v) => v ** 2, (v) => v - 2)(2); // 0
compose((v) => v - 2, (v) => v ** 2)(2); // 2
```

### Carrying (Каррирование)

Реализуйте и экспортируйте по умолчанию каррированую версию функции, которая принимает на вход три строки и возвращает новую строчку составленную из трех входных.

```
// исходная версия
concat('a', 'bc', 'f'); // abcf

// каррированая версия
concat('a')('bc')('f'); // abcf
```

### Church Numerals (Числа Черча)

Реализуйте алгоритм числа Zero() и операции Succ() (увеличение числа на единицу) в соответствии с арифметикой Чёрча. Не забудьте про экспорт.

**Пример:**

```
const two = Succ(Succ(Zero));

// Немного хитрый способ трансформировать число черча в обычное представление.
// Откровенно говоря, устройство самих чисел еще хитрее ;)
two(x => x + 1)(0); // 2

const four = Succ(Succ(two));
four(x => x + 1)(0); // 4
```

### Trees Convertor (Массив как объект)

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив определённой структуры и возвращает объект, полученный из этого массива.

Массив устроен таким образом, что с помощью него можно представлять ассоциативные массивы. Каждое значение внутри него — это массив из двух элементов, где первый элемент — ключ, а второй — значение. В свою очередь, если значение тоже является массивом, то считается, что это вложенное представление ассоциативного массива. Другими словами, любой массив внутри исходного массива всегда рассматривается как данные, которые нужно конвертировать в объект.

```
convert([]); // {}
convert([['key', 'value']]); // { key: 'value' }
convert([['key', 'value'], ['key2', 'value2']]); // { key: 'value', key2: 'value2' }

convert([
  ['key', [['key2', 'anotherValue']]],
  ['key2', 'value2']
]);
// { key: { key2: 'anotherValue' }, key2: 'value2' }
```

### Trees Flatten (Выравнивание (Массив))

Реализуйте и экспортируйте по умолчанию функцию, которая делает плоским вложенный массив.

Для решения задачи нельзя использовать готовые методы для выравнивания массивов.

**Примеры:**

```
const list = [1, 2, [3, 5], [[4, 3], 2]];

// [1, 2, 3, 5, 4, 3, 2]
flatten(list);
```

### Trees Stringify (JSON stringify)

JavaScript содержит метод JSON.stringify() для приведения к строке любого значения. Он работает следующим образом:

```
JSON.stringify('hello'); // "hello" - для строковых значений добавляются кавычки
JSON.stringify(true);    // true    - значение приведено к строке, но без кавычек
JSON.stringify(5);       // 5

const data = { hello: 'world', is: true, nested: { count: 5 } };
JSON.stringify(data); // {"hello":"world","is":true,"nested":{"count":5}} 

JSON.stringify(data, null, 2); // null, 2 - указывают на два пробела перед ключом
// ключам добавляются кавычки
// в конце каждой строчки (линии) добавляется запятая, если имеется значение ниже
// {
//   "hello": "world",
//   "is": true,
//   "nested": {
//     "count": 5
//   }
// }
```

Реализуйте и экспортируйте по умолчанию функцию, похожую на JSON.stringify(), но со следующими отличиями:

- ключи и строковые значения должны быть без кавычек;
- строчка (линия) в строке заканчивается самим значением, без запятой.

**Синтаксис:**

```
stringify(value[, replacer[, spacesCount]])
```

Параметры:

- value
Значение, преобразуемое в строку.
- replacer, необязательный
Строка - отступ для ключа; Значение по умолчанию - один пробел.
- spacesCount, необязательный
Число - количество повторов отступа ключа. Значение по умолчанию - 1.

```
import stringify from './stringify.js';

stringify('hello'); // hello - значение приведено к строке, но не имеет кавычек
stringify(true);    // true
stringify(5);       // 5

const data = { hello: 'world', is: true, nested: { count: 5 } };
stringify(data); // то же самое что stringify(data, ' ', 1);
// {
//  hello: world
//  is: true
//  nested: {
//   count: 5
//  }
// }

stringify(data, '|-', 2);
// Символ, переданный вторым аргументом повторяется столько раз, сколько указано третьим аргументом.
// {
// |-|-hello: world
// |-|-is: true
// |-|-nested: {
// |-|-|-|-count: 5
// |-|-}
// }
```

### Trees Map Filter Reduce (Отображение, фильтрация, свёртка)

Три основные функции высшего порядка по работе с коллекциями: map, filter и reduce. С помощью них можно решать практически любые задачи.

В этом испытании вам предстоит написать собственную реализацию этих функций, только работать они будут с файловыми деревьями.

map принимает на вход функцию-обработчик и дерево, а возвращает отображенное дерево.

filter принимает в качестве параметров предикат и дерево, а возвращает отфильтрованное дерево по предикату.

reduce кроме основных параметров (функция-обработчик и дерево) принимает также начальное значение аккумулятора.

**Примеры:**

```import { mkdir, mkfile, getName, isDirectory } from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('eTc', [
    mkfile('config.json')
  ]),
]);
```

Приводим имена всех директорий и файлов к верхнему регистру:

```
map(n => ({ ...n, name: getName(n).toUpperCase() }), tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'ETC',
//       type: 'directory',
//       meta: {},
//       children: [{ name: 'CONFIG.JSON', type: 'file', meta: {} }],
//     },
//   ],
// }
```

Отфильтровываем директории:

```
filter((n) => isDirectory(n), tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'etc',
//       type: 'directory',
//       meta: {},
//       children: [],
//     },
//   ],
// }
```

Подсчитываем количество узлов в дереве:

```
reduce((acc, n) => acc + 1, tree, 0); // 3
```

### Trees Itinerary (Построение маршрута)

Реализуйте и экспортируйте по умолчанию функцию, которая выстраивает маршрут между городами.

Функция принимает 3 аргумента:

- дерево городов
- город старта
- город окончания маршрута

И возвращает массив городов, выстроенный в том же порядке, в котором они находятся на пути следования по маршруту.

**Примеры:**

```
const tree = ['Moscow', [
  ['Smolensk'],
  ['Yaroslavl'],
  ['Voronezh', [
    ['Liski'],
    ['Boguchar'],
    ['Kursk', [
      ['Belgorod', [
        ['Borisovka'],
      ]],
      ['Kurchatov'],
    ]],
  ]],
  ['Ivanovo', [
    ['Kostroma'], ['Kineshma'],
  ]],
  ['Vladimir'],
  ['Tver', [
    ['Klin'], ['Dubna'], ['Rzhev'],
  ]],
]];

itinerary(tree, 'Dubna', 'Kostroma');
// ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']

itinerary(tree, 'Borisovka', 'Kurchatov');
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']
```

### Trees Transformer (Трансформер)

Реализуйте и экспортируйте по умолчанию функцию, которая строит дерево относительно заданного корневого узла.

Функция принимает 2 аргумента:

- исходное дерево
- узел, от которого будет построено новое дерево.

Функция должна возвращать новое дерево с сохранёнными связями между узлами, в котором переданный узел является корневым.

**Примеры:**

```
const tree = ['A', [ //     A
  ['B', [            //    / \
    ['D'],           //   B   C
  ]],                //  /   / \
  ['C', [            // D   E   F
    ['E'],
    ['F'],
  ]],
]];

transform(tree, 'B');

// ['B', [           //   B
//   ['D'],          //  / \
//   ['A', [         // D   A
//     ['C', [       //      \
//       ['E'],      //       C
//       ['F'],      //      / \
//     ]],           //     E   F
//   ]],
// ]];
```

### Trees Puzzle (Пазл)

Реализуйте и экспортируйте по умолчанию функцию, которая объединяет отдельные ветки в одно дерево. Каждая из веток в свою очередь является также деревом.

Функция может принимать на вход неограниченное количество веток и соединяет их. Корневым узлом объединённого дерева является корневой узел первой переданной ветки.

**Примеры:**

```
const branch1 = ['A', [ //   A
  ['B', [               //   |
    ['C'],              //   B
    ['D'],              //  / \
  ]],                   // C   D
]];

const branch2 = ['B', [ //   B
  ['D', [               //   |
    ['E'],              //   D
    ['F'],              //  / \
  ]],                   // E   F
]];

const branch3 = ['I', [ //   I
  ['A', [               //   |
    ['B', [             //   A
      ['C'],            //   |
      ['H'],            //   B
    ]],                 //  / \
  ]],                   // C   H
]];

combine(branch1, branch2, branch3);

// ['A', [      //     A
//   ['B', [    //    / \
//     ['C'],   //   B   I
//     ['D', [  //  /|\
//       ['E'], // C D H
//       ['F'], //  / \
//     ]],      // E   F
//     ['H'],
//   ]],
//   ['I'],
// ]];
```

### Trees Dependencies (Отслеживание зависимостей)

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список зависимостей и возвращает список (массив) отсортированных узлов.

**Примеры:**

```
const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};

console.log(sortDeps(deps1));
// => ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];
```

Независимые библиотеки и цепочки библиотек должны быть в порядке, соответствующему порядку элементов в графе зависимостей.

### Fibonacci (Числа Фибоначчи)

Числа Фибоначчи — последовательность чисел, которая начинается следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 и так далее. Эти числа получаются по следующему алгоритму:

- Начальное число ноль.
- Первое число один.
- Каждое следующее число — сумма двух предыдущих.

Напишите функцию fib, которая вычисляет произвольное N-е число Фибоначчи.

**Пример:**

```
fib(6) // 8
fib(13) // 233
fib(30) // 832040
```

### Design Lazy (Ленивые коллекции)

В этой задаче необходимо реализовать ленивую коллекцию.

Реализуйте и экспортируйте по умолчанию класс, который предназначен для обработки коллекций объектов. Основная особенность работы данного класса заключается в том, что он использует lazy вариант обработки.

```
import Enumerable from './enumerable.js';

const elements = [
  { key: 'value' },
  { key: '' },
];
const coll = Enumerable.wrap(elements);
const result = coll.where('key', 'value');

result.all() // [{ key: 'value' }]
```

### Drunkard (Пьяница)

Пьяница — карточная игра, в которой побеждает тот игрок, который собирает все карты. В нашей задаче используется модификация игры с двумя игроками. Игрокам раздаётся равное количество карт. Игроки не смотрят в свои карты, а кладут их в стопку рядом с собой. Затем каждый игрок снимает верхнюю карту и показывает её сопернику. Тот игрок, чья карта оказалась большего номинала, берёт обе карты и кладёт их к себе в колоду снизу (так что своя карта идёт первой). Если карты имеют одинаковый номинал, то они выкидываются из игры. В игре возможны три исхода:

- У обоих игроков не осталось карт
- Игра не может закончиться
- Победил один из игроков

Реализуйте и экспортируйте по умолчанию класс с методом run(), принимающим на вход два списка чисел, которые представляют собой карты для первого и второго игроков.

- Если выиграл первый игрок, то метод должен вернуть First player. Round: <номер раунда>.
- Если выиграл второй игрок, то метод должен вернуть Second player. Round: <номер раунда>.
- Если у игроков не осталось карт, то метод должен вернуть Botva!
- Если за 100 раундов не удалось выявить победителя то также возвращается Botva!

### Custom Object (Особый объект)

Объекты JavaScript позволяют обращаться к собственным свойствам. При обращении к свойству, которое не было установлено, возвращается undefined:

```
const obj = {
  key: 'value',
  key2: {
    key3: 'value3',
  },
};

obj.key2 // { key3: 'value3' }
obj.key2.key1 // undefined
obj.key2.key1.key0 // Uncaught TypeError: Cannot read property 'key0' of undefined
```

В этом испытании мы реализуем особый объект, позволяющий обращаться к несуществующим свойствам, не получая ошибки.

Реализуйте и экспортируйте по умолчанию функцию, которая принимает объект и позволяет получать из него свойства по любому имени. При обращении к несуществующему свойству не должно выбрасываться исключений или возвращаться undefined. Функция должна возвращать объект Proxy.

```
import createObject from './object.js';

const obj = {
  key: 'value',
  key2: {
    key3: 'value3',
  },
};

obj.key2 // { key3: 'value3' }

// код корректно продолжает работу:
obj.key2.key1
obj.key2.key1.key0
obj.obj.obj
```

### Range Of Dates (Диапазон дат)


Реализуйте и экспортируйте по умолчанию функцию, которая переводит входные данные в удобный для построения графика формат.

На вход эта функция принимает три аргумента: массив данных; дата начала периода; дата конца периода. Данные представлены в формате объекта вида { value: 14, date: '02.08.2018' }, а даты диапазона в формате 'yyyy-MM-dd'.

Диапазон дат задаёт размер выходного массива, который должна сгенерить реализуемая функция. Правила формирования итогового массива:

- он заполняется записями по всем дням из диапазона begin - end.
- если во входном массиве нет данных для какого-то дня из диапазона, то в свойство value записи этого дня установить значение 0.

```
import buildRange from './dates.js';

const dates = [
  { value: 14, date: '02.08.2018' },
  { value: 43, date: '03.08.2018' },
];
const beginDate = '2018-08-01';
const endDate = '2018-08-04';

buildRange(dates, beginDate, endDate);
// [
//   { value: 0, date: '01.08.2018' },
//   { value: 14, date: '02.08.2018' },
//   { value: 43, date: '03.08.2018' },
//   { value: 0, date: '04.08.2018' },
// ]
```

### Circle (Круг)

Реализуйте и экспортируйте по умолчанию класс Circle описывающий круг. У круга есть только одно свойство - его радиус. Реализуйте методы getArea() и getCircumference(), которые вычисляют и возвращают площадь и длину окружности соответственно.

**Примеры:**

```
const circle = new Circle(3);
circle.getArea(); // 28.274...
```

### Url (Обработка ссылок)

Реализуйте абстракцию для работы с урлами. Она должна извлекать и менять части адреса. Интерфейс:

- make(url) - Конструктор. Создает урл.
- setProtocol(data, protocol) - Сеттер. Меняет схему.
- getProtocol(data) - Селектор (геттер). Извлекает схему.
- setHost(data, host) - Сеттер. Меняет хост.
- getHost(data) - Геттер. Извлекает хост.
- setPath(data, path) - Сеттер. Меняет строку запроса.
- getPath(data) - Геттер. Извлекает строку запроса.
- setQueryParam(data, key, value) - Сеттер. Устанавливает значение для параметра запроса.
- getQueryParam(data, paramName, default = null) - Геттер. Извлекает значение для параметра запроса. Третьим параметром функция принимает значение по умолчанию, которое возвращается тогда, когда в запросе не было такого параметра
- toString(data) - Геттер. Преобразует урл в строковой вид.

```
const url = make('https://hexlet.io/community?q=low');

setProtocol(url, 'http:');
toString(url); // 'http://hexlet.io/community?q=low'

setPath(url, '/404');
toString(url); // 'http://hexlet.io/404?q=low'

setQueryParam(url, 'page', 5);
toString(url); // 'http://hexlet.io/404?q=low&page=5'

setQueryParam(url, 'q', 'high');
toString(url); // 'http://hexlet.io/404?q=high&page=5'
```

### Balanced Binary Tree (Сбалансированное двоичное дерево)

Реализуйте метод isBalanced(), который проверяет дерево на сбалансированность. Он возвращает true, если количество узлов в левом и правом поддеревьях каждого узла отличается не более, чем на 2. В ином случае метод должен вернуть false.

Сбалансированное дерево

![](https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6ImJiZWU3MTNmYTA0ZmI5YWM3ODMxYjU3N2JmY2M0NDU4LnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=6022bd8438a45bd635d2cd7469d589a5608ef2c13002b96c093950d1c5ed923a)

Несбалансированное дерево

![](https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6ImJlOTRjMGNkMjlkYTRlYjg4MzAxZTkyMDdjMTc1YzZiLnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=cb5ca7aa41f043690f20842fd8979acdd553b32d75e95c71c9f44656c403b803)

В узле 5 количество узлов в левом поддереве равно 4, а в правом — 1. Разница составляет 3. Это больше, чем максимально допустимая разница по условию задачи (2).

**Примеры:**

```
const tree1 = new Node(4,
  new Node(3,
    new Node(2)));

tree1.isBalanced(); // true

const tree2 = new Node(4,
  new Node(3,
    new Node(2,
      new Node(1))));

tree2.isBalanced(); // false
```

### Rand (Генератор случайных чисел)

Реализуйте генератор случайных чисел, представленный классом Random. Интерфейс объекта включает в себя три функции:

- Конструктор. Принимает на вход seed, начальное число генератора псевдослучайных чисел.
- getNext() — метод, возвращающий новое случайное число.
- reset() — метод, сбрасывающий генератор на начальное значение.

Экспортируйте класс по умолчанию.

**Примеры:**


```
const seq = new Random(100);
const result1 = seq.getNext();
const result2 = seq.getNext();

result1 !== result2; // true

seq.reset();

const result21 = seq.getNext();
const result22 = seq.getNext();

result1 === result21; // true
result2 === result22; // true
```

### Square (Генератор квадратов)

Реализуйте и экспортируйте по умолчанию класс Square для представления квадрата. У квадрата есть только одно свойство — сторона. Реализуйте метод getSide(), возвращающий значение стороны.

**Пример:**

```
const square = new Square(10);
square.getSide(); // 10
```

Реализуйте класс SquaresGenerator со статическим методом generate(), принимающим два параметра: сторону и количество экземпляров квадрата (по умолчанию 5 штук), которые нужно создать. Функция должна вернуть массив из квадратов. Экспортируйте класс по умолчанию.

**Пример:**

```
const squares = SquaresGenerator.generate(3, 2);
// [new Square(3), new Square(3)];
```

### Tree Aggregation (Агрегация в двоичном дереве)

Реализуйте следующие методы в классе:

- getCount() — возвращает количество узлов в дереве.
- getSum() — возвращает сумму всех ключей дерева.
- toArray() — возвращает одномерный массив содержащий все ключи.
- toString() — возвращает строковое представление дерева.
- every(fn) — проверяет, удовлетворяют ли все ключи дерева условию, заданному в передаваемой функции.
- some(fn) - проверяет, удовлетворяет ли какой-либо ключ дерева условию, заданному в передаваемой функции.

При обходе дерева нужно использовать порядок слева-направо. То есть вначале обрабатываем ключ узла, затем ключ левого ребёнка, после чего ключ правого ребёнка.

**Примеры:**

```
const tree = new Node(9,
    new Node(4,
      new Node(8),
      new Node(6,
        new Node(3),
        new Node(7))),
    new Node(17,
      null,
      new Node(22,
        null,
        new Node(20))));

tree.getCount() // 9
tree.getSum(); // 96
tree.toArray(); // [9, 4, 8, 6, 3, 7, 17, 22, 20]
tree.toString(); // '(9, 4, 8, 6, 3, 7, 17, 22, 20)'

tree.every((key) => key <= 22); // true
tree.every((key) => key < 22); // false
tree.some((key) => key < 4); // true
tree.some((key) => key > 22); // false
```

### Tree Build (Построение двоичного дерева)

Двоичное дерево — иерархическая структура данных, в которой каждый узел имеет не более двух потомков (детей). Как правило, первый называется родительским узлом, а дети называются левым и правым наследниками.

В данном испытании мы будем использовать подвид двоичного дерева — двоичное дерево поиска. Правильное дерево не содержит повторяющихся ключей, и для каждого узла гарантируется, что в левом поддереве все значения меньше текущего, а в правом — больше.

![](https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6ImQ1ZmM0YTVhOGNiMjE2OTY3ZjVhZDM1NzRhMTNhMWUzLnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=0a0aafb4941c320a1ce9aa76367398aa1eede47ce48b27a157406ffc457552fe)

Реализуйте и экспортируйте по умолчанию класс, который реализует представление узла.

Класс должен содержать:

- Геттер getKey() — возвращает ключ.
- Геттеры getLeft(), getRight() — возвращают соответственно левого и правого ребёнка. Если ребёнок в узле отсутствует, геттер возвращает null.
- Метод insert(key) — выполняет добавление узла, формируя правильное двоичное дерево.

**Примеры:**

```
const tree = new Node();
tree.insert(9);
tree.insert(17);
tree.insert(4);
tree.insert(3);
tree.insert(6);

tree.getKey(); // 9
tree.getLeft().getKey(); // 4
tree.getRight().getKey(); // 17
tree.getLeft().getLeft().getKey(); // 3
tree.getLeft().getRight().getKey(); // 6
```

### Search (Поиск в двоичном дереве) 

Двоичное дерево поиска состоит из узлов, каждый из которых содержит значение ключа и два поддерева (левое и правое), которые в свою очередь также являются двоичными деревьями. Правильное дерево не содержит повторяющихся ключей, и для каждого узла гарантируется, что в левом поддереве все значения меньше текущего, а в правом — больше.

![](https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6IjE1NDI0MWFiZjQ4ZDIxMDU1MTQwM2NhMjk2NDQxMjAwLnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=ed03242e5a9b387359f758fe3e9ecbba927dd08e2e997c65b5cbc2bdec241e57)

Реализуйте и экспортируйте по умолчанию класс, который реализует представление узла. Конструктор класса принимает на вход значение ключа (число), и двух детей, которые в свою очередь также являются узлами. Дерево может быть создано пустым.

Класс должен содержать методы:

- Геттер getKey() — возвращает ключ. Если дерево пустое, возвращает null.
- Геттеры getLeft(), getRight() — возвращают соответственно левого и правого ребёнка. Если ребёнок в узле отсутствует, геттер возвращает null.
- search(key) — выполняет поиск узла в правильном двоичном дереве по ключу и возвращает узел. Если узел не найден, возвращается null.

**Примеры:**

```
const tree = new Node(9,
  new Node(4,
    new Node(3),
    new Node(6,
      new Node(5),
      new Node(7))),
  new Node(17,
    null,
    new Node(22,
      new Node(20),
      null)));

const node = tree.search(6);
node.getKey(); // 6
node.getLeft().getKey(); // 5
node.getRight().getKey(); // 7

tree.search(35); // null
tree.search(3).getLeft(); // null
```



<! --
JS: Асинхронное программирование
JS: Массивы
JS: Объекты
JS: Функции	
-->

---

## Learn

- https://github.com/Asabeneh/30DaysOfJavaScript
- https://www.freecodecamp.org/news/best-javascript-tutorial/

