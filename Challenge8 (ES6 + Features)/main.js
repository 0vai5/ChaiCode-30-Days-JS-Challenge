// Activity 1

// Task 1

let name = 'Ovais Raza';
let age = 16;

console.log(`My name is ${name} and I am ${age} years old.`);

// Task 2

let nationality = 'Pakistani';

console.log(
`My Name is ${name}
and I am ${age} years old.
I am from ${nationality}.`
);

// Activity 2

// Task 3

const arrayNum = [10, 12, 158, 3259, 5157, 1223497, 54575];

const [firstNum, SecondNum] = arrayNum;

console.log(firstNum, SecondNum);

// Task 4



const Obj = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024
};

const { title, author, year } = Obj;

console.log(title, author, year);


// Activity 3

// Task 5

const array1 = [12, 'Hello', 1256, 'World', 1235478, 54981987];
console.log(`The Previous Array: ${array1}`);
const array2 = [...array1, 'How Are You?', 'Chai', 'Code'];
console.log(`The New Array with Elements from array1 and some extra elements as well ${array2}`);

// Task 6

function Sum (...Nums){
    let total = 0;
    for(Nums of Nums){
        total += Nums;
    }
    return total;
}
    
console.log(Sum(1, 2, 3, 4, 5));


// Activity 4

// task 7

const Product = (num1, num2 = 1) => {
    return num1 * num2;
};

// Without Second Param
console.log(Product(5));

// With Second Param
console.log(Product(5, 2));

// Activity 5

// Task 8

const EnhancedObj = (title, author, year) => {
    return {
        title,
        author,
        year, 
        summary(){
            return `${this.title} was written by ${this.author} in ${this.year}`;
        }
    };
};

console.log(EnhancedObj('Hello World', 'XYZ', 2024).summary());

// Task 9

let Name = 'Ovais Raza';
let Age = 16;

const EnhancedObj2 = {
    Name,
    Age
};

console.log(EnhancedObj2);


// Feature Request 1

let FeatureName = 'Ovais Raza';
let FeatureAge = 16;
let FeatureNationality = 'Pakistani';

console.log(
`
My name is ${FeatureName}
And my age is ${FeatureAge}
Moreover, I am ${FeatureNationality}
`)

// Feature Request 2

// Object Destructuring

const FeatureObj = {
    titleBook: 'Hello JS',
    authorBook: 'JS',
    yearBook: 2024
}
const {titleBook, authorBook, yearBook} = FeatureObj;
console.log(title, author, year);

// Array Destructuring

const FeatureArr = ['hello', 123, 'World', 456, 'How Are You?', 789];
const [FirstElem, SecondElem, ThirdElem] = FeatureArr;
console.log(FirstElem, SecondElem, ThirdElem);

// Feature Request 3

// Spread (...) Operator

const FeatureArray1 = [1, 2, 3, 4, 5];
console.log(`The Array is Initaially is: ${FeatureArray1}`);
const FeatureArray2 = [...FeatureArray1, 6, 7];
console.log(`The New Array is: ${FeatureArray2}`);


// Rest () Operator

const FeatureFunction = (...Args) => {
    let total = 0;
    for (Args in Args) {
        total += Args;
    }

    return total;
}
console.log(FeatureFunction(1, 1589, 2366999, 2144588));

// Feature request 4

const FeatureFunction2 = (num1, num2 = 1) => {
    return num1 + num2;
};

console.log(FeatureFunction2(5));




