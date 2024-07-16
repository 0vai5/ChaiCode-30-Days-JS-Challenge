# JavaScript Loops

This File contains a JavaScript program with Loops and feature requests implemented to demonstrate fundamental programming concepts. Each activity is accompanied by its code and contributes to the overall learning objectives.

---

## Activity 1

### Task 1: Printing Numbers 1 to 10

```javascript
for(let i = 1; i <= 10; i++){
    console.log(i);
}
```

### Task 2: Multiplication Table of 5

```javascript
for(let i = 1; i <= 12; i++){
    console.log(5 + ' x ' + i + ' = ' + 5 * i);
}
```

---

## Activity 2

### Task 3: Sum of Numbers Using While Loop

```javascript
let i = 1;
let sum = 0;
while(i <= 10){
    sum += i;
    i++;
}
console.log(sum);
```

### Task 4: Counting Down from 10 to 1

```javascript
let num = 10;
while(num >= 1){
    console.log(num);
    num--;
}
```

---

## Activity 3

### Task 5: Printing Numbers Using Do-While Loop

```javascript
let numDoWhile = 1;
do {
    console.log(numDoWhile);
    numDoWhile++;
} while (numDoWhile <= 5);
```

### Task 6: Calculating Factorial Using Do-While Loop

```javascript
let FactorialNum = 5;
let index = 1;
let factorial = 1;
do {
    factorial *= index;
    index++;
} while(index <= FactorialNum);
console.log(`The factorial of ${FactorialNum} is: ${factorial}`);
```

---

## Activity 4

### Task 7: Printing Triangle Pattern

```javascript
let lines = 5;
for (let i = 1; i <= lines; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '*';
    }
    console.log(line);
}
```

---

## Activity 5

### Task 8: Skipping a Number Using Continue Statement

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
```

### Task 9: Exiting Loop Using Break Statement

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break; 
    }
    console.log(i);
}
```

---

## Feature Requests

### Feature Request 1: Printing Numbers Using Different Loop Types

#### For Loop
```javascript
for(let i = 1; i <= 10; i++){
    console.log(i);
}

```
#### While Loop
```javascript
let IndexFeature = 1;
while(IndexFeature <= 10){
    console.log(IndexFeature);
    IndexFeature++;
}

```

### Feature Request 2: Reuse of Multiplication Table Feature

```javascript
for(let i = 1; i <= 12; i++){
    console.log(5 + ' x ' + i + ' = ' + 5 * i);
}
```

### Feature Request 3: Reuse of Triangle Pattern Feature

```javascript
let linesFeature = 5;
for (let i = 1; i <= linesFeature; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += '*';
    }
    console.log(line);
}
```

### Feature Request 4: Reuse of Sum Calculation Feature

```javascript
let iFeature = 1;
let sumFeature = 0;
while(iFeature <= 10){
    sumFeature += iFeature;
    iFeature++;
}
console.log(sumFeature);
```

### Feature Request 5: Reuse of Factorial Calculation Feature

```javascript
let FactorialNumFeature = 5;
let indexFactorial = 1;
let factorialFeature = 1;
do {
    factorialFeature *= indexFactorial;
    indexFactorial++;
} while (indexFactorial <= FactorialNumFeature);
console.log(`The factorial of ${FactorialNumFeature} is: ${factorialFeature}`);
```

---

## Conclusion: Benefits of All Activities and Features

- **Fundamental Concepts**: Each activity and feature request demonstrates core programming concepts such as loops (`for`, `while`, `do-while`), conditional statements (`if`, `continue`, `break`), and mathematical operations (`sum`, `factorial`).
- **Problem-Solving Skills**: Activities and feature requests encourage problem-solving and algorithmic thinking through tasks like generating patterns, calculating sums, and computing factorials.
- **Code Structure and Readability**: By implementing tasks and features in separate sections, the code promotes good code organization and readability.
- **Educational Value**: Collectively, these activities and feature requests provide a comprehensive learning experience suitable for beginners learning JavaScript programming.
- **Modularity and Reusability**: Features highlight code modularity and reusability through the reuse of functions and patterns across different tasks.
- **Practical Applications**: Demonstrates practical applications of JavaScript programming in solving real-world problems and generating structured outputs.

---

This repository serves as an educational resource for learning JavaScript programming concepts through practical examples and activities. Each section provides clear examples and explanations to aid understanding and practical application of these concepts.

