// Activity 1

const array1 = [1, 2, 3, 4, 5];

// Task 1
console.log(array1);

// Task 2
console.log(`The First Element of the Array is ${array1[0]} and the Last element of the Array is ${array1[4]}`);


// Activity 2

const array2 = [1, 'Hello', 45, 'World', 'Chai', 132, 'Code'];


// Task 3

console.log(`The Initial Array is ${array2}`);
array2.push(100);
console.log(`The Modified Array is ${array2} by Push Method`);

// Task 4

console.log(`The Initial Array is ${array2}`);
array2.pop();
console.log(`The Modified Array is ${array2} by Pop Method`);

// Task 5

console.log(`The Initial Array is ${array2}`);
array2.shift();
console.log(`The Modified Array is ${array2} by Shift Method`);

// Task 6

console.log(`The Initial Array is ${array2}`);
array2.unshift(100);
console.log(`The Modified Array is ${array2} by Unshift Method`);

// Activity 3

const array3 = [1, 12, 15, 18, 21, 24, 27, 30];

// Task 7

const doubledArray = array3.map(num => num * 2);
console.log(`The Doubled Array is ${doubledArray}`);

// Task 8

const filteredArray = array3.filter(num => num % 2 === 0);
console.log(`The filtered Array is ${filteredArray}`);

// Task 9

const reducedArray = array3.reduce((acc, curr) => acc + curr, 0);
console.log(`The Sum of the Array is ${reducedArray}`);

// Activity 4

const array4 = [1, 'Hello', 'World', 215, 'Chai', 'Code', 1214, 1544464, 45445];

// Task 10 

for(let i = 1; i < array4.length; i++){
    console.log(array4[i]);
};


// Task 11
 
array4.forEach((elem) => {
    console.log(elem);
});

// Activity 5

const TwoDArray = [
    [1, 2, 152],
    [125, 21214, 123958],
    [21484, 54869, 211494]
];

// Task 12

console.log(TwoDArray);

// Task 13

console.log(TwoDArray[1][1]);



// Feature Request 1

const arrayManipulation = [1, 'Hello', 45, 'World', 'Chai', 132, 'Code'];


// Push() Method

console.log(`The Initial Array is ${array2}`);
array2.push(100);
console.log(`The Modified Array is ${array2} by Push Method`);

// Pop() Method

console.log(`The Initial Array is ${array2}`);
array2.pop();
console.log(`The Modified Array is ${array2} by Pop Method`);

// Shift() method

console.log(`The Initial Array is ${array2}`);
array2.shift();
console.log(`The Modified Array is ${array2} by Shift Method`);

// Unshift() Method

console.log(`The Initial Array is ${array2}`);
array2.unshift(100);
console.log(`The Modified Array is ${array2} by Unshift Method`);

// Feature Request 2

const arrayTransformation = [1, 12, 15, 18, 21, 24, 27, 30];

// .Map() Method

const MapTransformation = arrayTransformation.map(num => num * 2);
console.log(`The Doubled Array is ${doubledArray}`);

// Filter() Method

const FilterTransformation = arrayTransformation.filter(num => num % 2 === 0);
console.log(`The filtered Array is ${filteredArray}`);

// Reduce() Method

const ReduceTransformation = arrayTransformation.reduce((acc, curr) => acc + curr, 0);
console.log(`The Sum of the Array is ${reducedArray}`);


// Feature Request 3

const arrayIteration = [1, 'Hello', 'World', 215, 'Chai', 'Code', 1214, 1544464, 45445];

// For Loop

for(let i = 1; i < arrayIteration.length; i++){
    console.log(arrayIteration[i]);
};


// For Each
 
arrayIteration.forEach((elem) => {
    console.log(elem);
});


// Feature Request 4


// Creation Of 2D Array
const TwoDArrayfeature = [
    [1, 2, 152],
    [125, 21214, 123958],
    [21484, 54869, 211494]
];

// Manipulation of 2D Array

console.log(TwoDArray[1][1]);