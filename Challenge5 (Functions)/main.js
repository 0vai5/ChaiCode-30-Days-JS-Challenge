// Activity 1

// Task 1

const EvenOrOdd = (num) => {
    if(num % 2 == 0){
        console.log(`The ${num} is even`);
    }else{
        console.log(`The ${num} is odd`);
    };
};

EvenOrOdd(5);

// Task 2

const SquareOfNumber = (num) => {
    console.log(`The Square of ${num} is ${num * num}`);
};

SquareOfNumber(5);


// Activity 2

// Task 3

const FindMax = (num1, num2) => {
    return Math.max(num1, num2);
}

let maxNum = FindMax(5, 10);
console.log(maxNum);


// Task 4

const ConcatStrings = (str1, str2) => {
    return str1 + str2;
}

let concatStr = ConcatStrings("Hello ", " World");
console.log(concatStr);

// Activity 3 

// Task 5

const Sum = (num1, num2) => {
    return num1 + num2;
}

let sum = Sum(5, 10);
console.log(sum);


// Task 6

const StringContain = (str) => {
    return str.includes("!");
}
let stringContain = StringContain("Hello World");
console.log(stringContain);

// Activity 4

// Task 7

const ProductOfNums = (num1, num2 = 1) => {
    return num1 * num2;
}

let product = ProductOfNums(5);
console.log(product);


// Task 8

const greetings = (name, age = 18) => {
    console.log(`Hello ${name}, you are ${age} years old`);
}

greetings("John");


// Activity 5

// Task 9

const CallNTimes = (func, n) => {
    for(let i = 1; i <= n; i++){
        func()
    };
};

const Greet = () => {
    console.log("Hello World");
};

CallNTimes(Greet, 3);


// task 10

const HigherFunc = (func1, func2, val) => {
    let value = func1(val);
    console.log(value);
    let result = func2(value);
    console.log(result);
}

const Square = (num) => {
    return num * num;
}

const Cube = (num) => {
    return num * num * num;
}

HigherFunc(Square, Cube, 5);


// Feature Request 1

const EvenOrOddFeature = (num) => {
    if(num % 2 == 0){
        console.log(`The ${num} is even`);
    }else{
        console.log(`The ${num} is odd`);
    };
};

EvenOrOddFeature(5);

// Feature Reqest 2

const SquareFeature = (num) => {
    return num * num;
};

console.log(SquareFeature(5)); 


// Feature Request 3

const ConcatStringsFeature = (str1, str2) => {
    return str1 + str2;
}

let ConcatStrFeature = ConcatStringsFeature("Hello ", " World");
console.log(ConcatStrFeature);

// Feature Request 4

const SumFeature = (num1, num2) => {
    return num1 + num2;
}

let sumFeature = SumFeature(5, 10);
console.log(sumFeature);

// Feature request 5

const CallNTimesFeature = (func, n) => {
    for(let i = 1; i <= n; i++){
        func()
    };
};

const GreetFeature = () => {
    console.log("Hello World");
};

CallNTimesFeature(GreetFeature, 3);