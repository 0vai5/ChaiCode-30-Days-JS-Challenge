# JavaScript Comparison and Arithmetic Operations

This JavaScript script performs various arithmetic operations and comparisons between two numbers (`Num1` and `Num2`). The script is divided into several activities and tasks, demonstrating the use of different operators and logical conditions.

## Activities and Tasks

### Activity 1

**Task 1:** Calculate and log the sum of two numbers.
```javascript
let sumOfTwo = Num1 + Num2;
console.log(sumOfTwo); 
```

**Task 2:** Calculate and log the difference between two numbers.
```javascript
let differenceOfTwo = Num1 - Num2;
console.log(differenceOfTwo);
```

**Task 3:** Calculate and log the product of two numbers.
```javascript
let productOfTwo = Num1 * Num2;
console.log(productOfTwo);
```

**Task 4:** Calculate and log the division of two numbers.
```javascript
let divisionOfTwo = Num1 / Num2;
console.log(divisionOfTwo);
```

**Task 5:** Calculate and log the remainder of the division of two numbers.
```javascript
let remainderOfTwo = Num1 % Num2;
console.log(remainderOfTwo);
```

### Activity 2

**Task 6:** Increment `Num1` by 52 and log the result.
```javascript
Num1 += 52;
console.log('Now Num1 is: ', Num1);
```

**Task 7:** Decrement `Num2` by 52 and log the result.
```javascript
Num2 -= 52;
console.log('Now Num2 is: ', Num2);
```

### Activity 3

**Task 8:** Compare `Num1` and `Num2` and log whether `Num1` is greater than, less than, or equal to `Num2`.
```javascript
if(Num1 > Num2){
    console.log(Num1 + ' is Greater than ' + Num2);
} else if(Num1 < Num2){
    console.log(Num1 + ' is Less than ' + Num2);
} else{
    console.log(Num1 + ' is equal to ' + Num2);
}
```

**Task 9:** Use `>=` and `<=` operators to compare `Num1` and `Num2` and log the results.
```javascript
if (Num1 >= Num2) {
    console.log(`${Num1} is greater than or equal to ${Num2}`);
} else {
    console.log(`${Num1} is less than ${Num2}`);
}

if (Num1 <= Num2) {
    console.log(`${Num1} is less than or equal to ${Num2}`);
} else {
    console.log(`${Num1} is greater than ${Num2}`);
}
```

**Task 10:** Check if `Num1` and `Num2` are equal using `==` and `===` operators and log the results.
```javascript
if(Num1 == Num2){
    console.log(Num1 + ' and ' + Num2 + ' Are equal to each other ');
} else{
    console.log(Num1 + ' and ' + Num2 + ' Are not equal to each other');
}

if(Num1 === Num2){
    console.log(Num1 + ' and ' + Num2 + ' Are equal to each other ');
} else {
    console.log(Num1 + ' and ' + Num2 + ' Are not equal to each ');
}
```

**Task 11:** Use logical operators to combine conditions and log the results.
```javascript
if(Num1 === Num2 && Num1 % 2 === 0){
    console.log(Num1 + ' and ' + Num2 + ' Are equal to each other and ' + Num1 + ' is an Even Number ');
} else{
    console.log(Num1 + ' is Not Equal to ' + Num2 + ' And ' + Num1 + ' is Not an Even Number ');
}
```

**Task 12:** Use `||` operator to combine conditions and log the results.
```javascript
if (Num1 >= Num2 || Num1 <= Num2) {
    console.log(`${Num1} is either greater than or equal to ${Num2}, or less than or equal to ${Num2}`);
} else {
    console.log(`${Num1} is neither greater than nor equal to ${Num2}, nor less than nor equal to ${Num2}`);
}
```

**Task 13:** Use `!=` operator to compare `Num1` and `Num2` and log the results.
```javascript
if(Num1 != Num2){
    console.log(Num1 + ' and ' + Num2 + ' Are not equal to each other ');
} else{
    console.log(Num1 + ' and ' + Num2 + ' Are equal to each other ');
}
```

### Activity 4

**Task 14:** Use ternary operator to check if `Num1` is a positive number and log the result.
```javascript
{Num1 < 0 ? (
    console.log(`${Num1} is Positive Number`)
) : (
    console.log(`${Num1} is Negative Number`)
)}
```

### Feature Requests

**Feature Request 1:** Create an Immediately Invoked Function Expression (IIFE) to log arithmetic operations on `Num1` and `Num2`.
```javascript
((Num1, Num2) => {
    console.log(`The Sum of ${Num1} and ${Num2} is ${Num1 + Num2}`);
    console.log(`The Difference of ${Num1} and ${Num2} is ${Num1 - Num2}`);
    console.log(`The Product of ${Num1} and ${Num2} is ${Num1 * Num2}`);
    console.log(`The division of ${Num1} and ${Num2} is ${Num1 / Num2}`);
    console.log(`The Remainder of ${Num1} and ${Num2} is ${Num1 % Num2}`);
})(Num1, Num2);
```

**Feature Request 2:** Create a function to compare two numbers using various operators and log the results.
```javascript
function compareNumbers(num1, num2) {
    const isEqual = num1 === num2;
    const isNotEqual = num1 !== num2;
    const isGreater = num1 > num2;
    const isLess = num1 < num2;
    const isGreaterOrEqual = num1 >= num2;
    const isLessOrEqual = num1 <= num2;

    console.log(`Comparing ${num1} and ${num2}:`);
    
    console.log(`${num1} === ${num2}: ${isEqual}`);
    console.log(`${num1} !== ${num2}: ${isNotEqual}`);
    console.log(`${num1} > ${num2}: ${isGreater}`);
    console.log(`${num1} < ${num2}: ${isLess}`);
    console.log(`${num1} >= ${num2}: ${isGreaterOrEqual}`);
    console.log(`${num1} <= ${num2}: ${isLessOrEqual}`);

    // Combining conditions using logical operators
    console.log(`(${num1} === ${num2}) || (${num1} !== ${num2}): ${isEqual || isNotEqual}`);
    console.log(`(${num1} > ${num2}) && (${num1} < ${num2}): ${isGreater && isLess}`);
    console.log(`(${num1} >= ${num2}) && (${num1} <= ${num2}): ${isGreaterOrEqual && isLessOrEqual}`);
    console.log(`(${num1} !== ${num2}) || (${num1} > ${num2}): ${isNotEqual || isGreater}`);
    console.log(`(${num1} < ${num2}) && (${num1} !== ${num2}): ${isLess && isNotEqual}`);
    console.log('---------------------------------');
}

compareNumbers(Num1, Num2);
```

**Feature Request 3:** Use ternary operator to check if `Num1` is a positive number and log the result.
```javascript
{Num1 < 0 ? (
    console.log(`${Num1} is Positive Number`)
) : (
    console.log(`${Num1} is Negative Number`)
)}
```

## Achievements

Through this activity, the following concepts and skills were practiced and reinforced:

1. **Basic Arithmetic Operations**: Understanding and implementing addition, subtraction, multiplication, division, and modulus operations in JavaScript.
2. **Increment and Decrement Operations**: Using the `+=` and `-=` operators to modify variable values.
3. **Comparison Operators**: Utilizing `>`, `<`, `>=`, `<=`, `==`, and `===` to compare values and understand their differences.
4. **Logical Operators**: Combining conditions using `&&` and `||` to create complex logical expressions.
5. **Conditional Statements**: Writing `if`, `else if`, and `else` statements to execute code based on different conditions.
6. **Ternary Operator**: Applying the ternary operator for concise conditional expressions.
7. **Functions and IIFE**: Creating functions to encapsulate logic and using Immediately Invoked Function Expressions (IIFE) to execute code immediately.
8. **String Interpolation**: Using template literals for clear and readable string formatting.
```

---

This repository serves as an educational resource for learning JavaScript programming concepts through practical examples and activities. Each section provides clear examples and explanations to aid understanding and practical application of these concepts.
