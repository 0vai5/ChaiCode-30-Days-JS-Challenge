// Activity 1

// Task 1

const factorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};
console.log(factorial(10));


// Task 2

const fibonacci = (n) => {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(10));

// Activity 2

// Task 3

const SumOfArray = (arr) => {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + SumOfArray(arr.slice(1));
    }
}

console.log(SumOfArray([1, 2, 32548474, 4458252, 50]));

// Task 4

const MaxNum = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return Math.max(arr[0], MaxNum(arr.slice(1)));
    }
}

console.log(MaxNum([1, 2, 32548474, 4458252, 50]));

// Activity 3

// Task 5
const ReverseString = (str) => {
    if (str === '') {
        return '';
    } else {
        return ReverseString(str.substr(1)) + str[0];
    }
}

console.log(ReverseString('Hello World!'));

// Task 6

const Palindrome = (str) => {
    if (str.length === 0 || str.length === 1) {
        return true;
    } else if (str[0] === str[str.length - 1]) {
        return Palindrome(str.slice(1, str.length - 1));
    } else {
        return false;
    }
}

console.log(Palindrome('madam'));
console.log(Palindrome('hello'));

// Activity 4

// Task 7

const recursiveSearch = (arr, start = 0, end = arr.length - 1, target) => {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return recursiveSearch(arr, mid + 1, end, target);
    } else {
        return recursiveSearch(arr, start, mid - 1, target);
    }
}

const SortedArray = [12, 2589, 1483699, 1, 25893548, 5454971].sort((a, b) => a - b);
console.log(SortedArray);
console.log(recursiveSearch(SortedArray, 0, SortedArray.length - 1, 2589));
console.log(recursiveSearch(SortedArray, 0, SortedArray.length - 1, 9999));


// Task 8

const occurrences = {};

const RecursiveFunction = (arr, target, index = 0) => {
    if (index >= arr.length) {
        return;
    }
    
    if (arr[index] === target) {
        occurrences[target] = (occurrences[target] || 0) + 1;
    }
    
    RecursiveFunction(arr, target, index + 1);
}

const array = ['hello', 'Ovais', 'hello', 'Raza', 'Muhammad', 'hello'];
const lowerCaseArray = array.map(elem => elem.toLocaleLowerCase());
console.log(lowerCaseArray);

RecursiveFunction(lowerCaseArray, 'hello');
console.log(occurrences);


// Feature Request 1

// Factorial Numbers

const FeatureFactorial = (n) => {
    if(n ===1 || n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1)
    }
}

console.log(FeatureFactorial(10)); 

// Fibonacci Numbers

const FeatureFibonacci = (n) => {
    if(n < 2) {
        return 1
    } else {
        return FeatureFibonacci(n - 1) + FeatureFibonacci(n - 2) 
    }
}

console.log(FeatureFibonacci(10))

// Feature Request 2

// Sum of Array

const FeatureArraySum = (arr) => {
    if(arr.length === 0) {
        return 0;
    } else {
        return arr[0] + FeatureArraySum(arr.slice(1))
    }
}

console.log(FeatureArraySum([1, 128, 26585, 254988, 65987]));


// MaxNum 

const FeatureMaxNum = (arr) => {
    if(arr.length === 0) {
        return 0
    } else {
        return Math.max(arr[0] + FeatureMaxNum(arr.slice(1)));
    }
}

console.log(FeatureMaxNum([12, 2589, 1483699, 1, 25893548, 5454971]))

// Feature Request 3


// Reversal of String

const FeatureStringReverse = (str) => {
    if(str === '') {
        return '';
    } else {
        return ReverseString(str.substr(1)) + str[0];
    }
}

console.log(FeatureStringReverse('mama'))

// Palindrome 

const FeaturePalindrome = (str) => {
    if (str.length === 0 || str.length === 1) {
        return true;
    } else if (str[0] === str[str.length - 1]) {
        return FeaturePalindrome(str.slice(1, str.length - 1));
    } else {
        return false;
    }
}

console.log(FeaturePalindrome('mam'))


// Feature Request 4

// Binary Search

const FeatureRecursiveSearch = (arr, start = 0, end = arr.length - 1, target) => {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return FeatureRecursiveSearch(arr, mid + 1, end, target);
    } else {
        return FeatureRecursiveSearch(arr, start, mid - 1, target);
    }
}

const FeatureSortedArray = [12, 2589, 1483699, 1, 25893548, 5454971].sort((a, b) => a - b);
console.log(FeatureSortedArray);
console.log(recursiveSearch(FeatureSortedArray, 0, FeatureSortedArray.length - 1, 2589));
console.log(recursiveSearch(FeatureSortedArray, 0, FeatureSortedArray.length - 1, 9999));


// Task 8

const FeatureOccurences = {};

const FeatureRecursiveFunction = (arr, target, index = 0) => {
    if (index >= arr.length) {
        return;
    }
    
    if (arr[index] === target) {
        FeatureOccurences[target] = (FeatureOccurences[target] || 0) + 1;
    }
    
    FeatureRecursiveFunction(arr, target, index + 1);
}

const FeatureArray = ['hello', 'Ovais', 'hello', 'Raza', 'Muhammad', 'hello'];
const FeatureLowerCaseArray = array.map(elem => elem.toLocaleLowerCase());
console.log(FeatureLowerCaseArray);

RecursiveFunction(FeatureLowerCaseArray, 'hello');
console.log(FeatureOccurences);
