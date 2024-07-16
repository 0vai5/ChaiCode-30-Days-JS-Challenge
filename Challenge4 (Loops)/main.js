// Activity 1

// Task 1
for(let i = 1; i <= 10; i++){
    console.log(i)
}

//Task 2
for(let i = 1; i <= 12; i++){
    console.log(5 + ' x ' + i + ' = ' + 5 * i)
}

// Activity 2


// Task 3
let i = 1;
let sum = 0;
while(i <= 10){
    sum += i;
    i++;
}
console.log(sum);

// Task 4

let num = 10;
while(num >= 1){
    console.log(num)
    num--;
}


// Activity 3

// Task 5

let numDoWhile = 1;

do {
  console.log(numDoWhile);
  numDoWhile++;
} while (numDoWhile <= 5);


// Task 6
let FactorialNum = 5
let index = 1;
let factorial = 1
do{
    factorial *= index
    index++
} while(index <= FactorialNum)

console.log(`The factorial of ${FactorialNum} is: ${factorial}`);

// Activity 4

// Task 7

let lines = 5;

for (let i = 1; i <= lines; i++) {
    let line = ''; 

    for (let j = 1; j <= i; j++) {
        line += '*'; 
    }

    console.log(line); 
}

// Activity 5

// Task 8

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Task 9

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break; // Skip printing the number 5
    }
    console.log(i);
}


// Feature Request 1

// For Loop

for(let i = 1; i <= 10; i++){
    console.log(i)
}

// While Loop

let IndexFeature = 1;
while(IndexFeature <= 10){
    console.log(IndexFeature)
    IndexFeature++
};

// Feature Request 2

for(let i = 1; i <= 12; i++){
    console.log(5 + ' x ' + i + ' = ' + 5 * i)
}

// Feature 3


let linesFeature = 5;

for (let i = 1; i <= linesFeature; i++) {
    let line = ''; 

    for (let j = 1; j <= i; j++) {
        line += '*'; 
    }

    console.log(line); 
}


// Feature 4

let iFeature = 1;
let sumFeature = 0;
while(iFeature <= 10){
    sumFeature += i;
    i++;
}
console.log(sumFeature);


// Feature 5

let FactorialNumFeature = 5;
let indexFactorial = 1;
let factorialFeature = 1;

do {
    factorialFeature *= indexFactorial;
    indexFactorial++;
} while (indexFactorial <= FactorialNumFeature);

console.log(`The factorial of ${FactorialNumFeature} is: ${factorialFeature}`);
