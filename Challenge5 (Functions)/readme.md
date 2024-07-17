# JavaScript Functions

## Activity 1

### Task 1: Even or Odd Checker
```javascript
const EvenOrOdd = (num) => {
    if (num % 2 == 0) {
        console.log(`The ${num} is even`);
    } else {
        console.log(`The ${num} is odd`);
    }
};

EvenOrOdd(5);
```

### Task 2: Square of a Number
```javascript
const SquareOfNumber = (num) => {
    console.log(`The Square of ${num} is ${num * num}`);
};

SquareOfNumber(5);
```

## Activity 2

### Task 3: Find Maximum of Two Numbers
```javascript
const FindMax = (num1, num2) => {
    return Math.max(num1, num2);
};

let maxNum = FindMax(5, 10);
console.log(maxNum);
```

### Task 4: Concatenate Strings
```javascript
const ConcatStrings = (str1, str2) => {
    return str1 + str2;
};

let concatStr = ConcatStrings("Hello ", " World");
console.log(concatStr);
```

## Activity 3

### Task 5: Sum of Two Numbers
```javascript
const Sum = (num1, num2) => {
    return num1 + num2;
};

let sum = Sum(5, 10);
console.log(sum);
```

### Task 6: Check if String Contains '!'
```javascript
const StringContain = (str) => {
    return str.includes("!");
};

let stringContain = StringContain("Hello World");
console.log(stringContain);
```

## Activity 4

### Task 7: Product of Numbers
```javascript
const ProductOfNums = (num1, num2 = 1) => {
    return num1 * num2;
};

let product = ProductOfNums(5);
console.log(product);
```

### Task 8: Greetings Function with Default Age
```javascript
const greetings = (name, age = 18) => {
    console.log(`Hello ${name}, you are ${age} years old`);
};

greetings("John");
```

## Activity 5

### Task 9: Call a Function Multiple Times
```javascript
const CallNTimes = (func, n) => {
    for (let i = 1; i <= n; i++) {
        func();
    }
};

const Greet = () => {
    console.log("Hello World");
};

CallNTimes(Greet, 3);
```

### Task 10: Higher-Order Function Example
```javascript
const HigherFunc = (func1, func2, val) => {
    let value = func1(val);
    console.log(value);
    let result = func2(value);
    console.log(result);
};

const Square = (num) => {
    return num * num;
};

const Cube = (num) => {
    return num * num * num;
};

HigherFunc(Square, Cube, 5);
```

## Feature Requests

### Feature Request 1: Even or Odd Checker
```javascript
const EvenOrOddFeature = (num) => {
    if (num % 2 == 0) {
        console.log(`The ${num} is even`);
    } else {
        console.log(`The ${num} is odd`);
    }
};

EvenOrOddFeature(5);
```

### Feature Request 2: Square of a Number
```javascript
const SquareFeature = (num) => {
    return num * num;
};

console.log(SquareFeature(5));
```

### Feature Request 3: Concatenate Strings
```javascript
const ConcatStringsFeature = (str1, str2) => {
    return str1 + str2;
};

let ConcatStrFeature = ConcatStringsFeature("Hello ", " World");
console.log(ConcatStrFeature);
```

### Feature Request 4: Sum of Two Numbers
```javascript
const SumFeature = (num1, num2) => {
    return num1 + num2;
};

let sumFeature = SumFeature(5, 10);
console.log(sumFeature);
```

### Feature Request 5: Call a Function Multiple Times
```javascript
const CallNTimesFeature = (func, n) => {
    for (let i = 1; i <= n; i++) {
        func();
    }
};

const GreetFeature = () => {
    console.log("Hello World");
};

CallNTimesFeature(GreetFeature, 3);
```

---

## Benefits of These Exercises

1. **Understanding Basic JavaScript Concepts**: These exercises cover fundamental JavaScript operations such as conditional statements, arithmetic operations, string manipulation, and function definitions. They help solidify your understanding of these core concepts.

2. **Function Composition and Higher-Order Functions**: Activities like Task 10 and Feature Request 5 introduce higher-order functions and function composition. These are powerful concepts in JavaScript for creating reusable and composable code.

3. **Default Parameter Usage**: Tasks like Task 7 and Task 8 demonstrate the usage of default parameters in function definitions, allowing for flexible function usage with sensible default behaviors.

4. **Practice with Control Flow**: Activities such as Task 1 and Task 6 involve conditional statements (`if-else`) and methods (`includes`), which are essential for controlling the flow of execution in JavaScript programs.

5. **Encapsulation and Reusability**: By encapsulating logic within functions (e.g., Task 2 and Feature Request 3), you promote code reusability and maintainability, adhering to best practices in software development.

6. **Iterative Programming**: Activity 5 and Feature Request 5 focus on iterative programming, demonstrating how to perform repetitive tasks efficiently using loops and function calls.

7. **Enhancing Problem-Solving Skills**: Each task and feature request presents a different problem to solve, helping to enhance your problem-solving skills and expand your toolkit for approaching various programming challenges.

By completing these exercises and understanding the associated concepts and patterns, you'll be better equipped to write clean, efficient, and maintainable JavaScript code in your projects.