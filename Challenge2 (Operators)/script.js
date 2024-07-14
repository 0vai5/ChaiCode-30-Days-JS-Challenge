// Activity 1
let Num1 = 10;
let Num2 = 20;
// Task 1: 
let sumOfTwo = Num1 + Num2;
console.log(sumOfTwo); 


// Task 2: 
let differenceOfTwo = Num1 - Num2;
console.log(differenceOfTwo)


// Task 3

let productOfTwo = Num1 * Num2;
console.log(productOfTwo)


// Task 4

let divisionOfTwo = Num1 / Num2;
console.log(divisionOfTwo);

// Task 5

let remainderOfTwo = Num1 % Num2;
console.log(remainderOfTwo);



// Activity 2

// Task 6
console.log('Num1 initially is: ', Num1);
Num1 += 52;
console.log('Now Num1 is: ', Num1);

// Task 7
console.log('Num2 initially is: ', Num2);
Num2 -= 52;
console.log('Now Num2 is: ', Num2);



// Activity 3


// Task 8
if(Num1 > Num2){
    console.log(Num1 + ' is Greater than ' + Num2);
} else if(Num1 < Num2){
    console.log(Num1 + ' is Less than ' + Num2)
} else{
    console.log(Num1 + ' is equal to ' + Num2)
}

// Task 9

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


// Activity 3

// Task 10

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



// Activity 4

// Task 11

if(Num1 === Num2 && Num1 % 2 === 0){
    console.log(Num1 + ' and ' + Num2 + ' Are equal to each other and ' + Num1 + ' is an Even Number ');
} else{
    console.log(Num1 + ' is Not Equal to ' + Num2 + ' And ' + Num1 + ' is Not an Even Number ');
}



// Task 12

if (Num1 >= Num2 || Num1 <= Num2) {
    console.log(`${Num1} is either greater than or equal to ${Num2}, or less than or equal to ${Num2}`);
} else {
    console.log(`${Num1} is neither greater than nor equal to ${Num2}, nor less than nor equal to ${Num2}`);
}


// Task 13

if(Num1 != Num2){
    console.log(Num1 + ' and ' + Num2 + ' Are not equal to each other ')
} else{
    console.log(Num1 + ' and ' + Num2 + ' Are equal to each other ')
}


// Activity 5

// Task 14

{Num1 < 0 ? (
    console.log(`${Num1} is Positive Number`)
) : (
    console.log(`${Num1} is Negative Number`)
)}


// Feature Request 1

((Num1, Num2) => {
    console.log(`The Sum of ${Num1} and ${Num2} is ${Num1 + Num2}`);
    console.log(`The Difference of ${Num1} and ${Num2} is ${Num1 - Num2}`);
    console.log(`The Product of ${Num1} and ${Num2} is ${Num1 * Num2}`);
    console.log(`The division of ${Num1} and ${Num2} is ${Num1 / Num2}`);
    console.log(`The Remainder of ${Num1} and ${Num2} is ${Num1 % Num2}`);
})()




// Feature Request 2

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


// Feature Request 3

{Num1 < 0 ? (
    console.log(`${Num1} is Positive Number`)
) : (
    console.log(`${Num1} is Negative Number`)
)}





