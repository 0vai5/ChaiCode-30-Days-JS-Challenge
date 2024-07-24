# JavaScript Error Handling and Asynchronous Operations

This file contains exercises and feature requests focused on JavaScript error handling, asynchronous operations using Promises and async/await, and fetch API usage.

## Activity 1

### Task 1: Error Handling in a Function

```javascript
const ErrorFunction = () => {
    throw new Error("Something went wrong");
    try {
        console.log('Hello')
    }
    catch (error) {
        console.log(error.message);
    }
};

console.log(ErrorFunction());
```

### Task 2: Division Function with Error Handling

```javascript
const Division = (denominator, numerator) => {
    try {
        if (denominator === 0) {
            throw new Error("Division by zero can't be done");
        }
        return numerator / denominator;
    }
    catch (error) {
        console.log(error.message)
    }
}

console.log(Division(2, 4));
```

### Task 3: Function with Try-Catch-Finally

```javascript
const Sum = (num1, num2) => {
    try {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Invalid input");
        }
        return num1 + num2;
    }
    catch (error) {
        console.log(error.message)
    }
    finally {
        console.log('Done');
    }
}

console.log(Sum(12, 1025));
```

### Task 4: Custom Error Class

```javascript
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

try {
    throw new CustomError('Something went wrong');
}
catch (error) {
    console.log(error.message);
}
```

### Task 5: Error Handling in Input Validation

```javascript
class ErrorClass extends Error {
    constructor(message) {
        super(message);
        this.name = 'ErrorClass';
    }
}

const InputValidator = (userInput) => {
    try {
        if (typeof userInput !== 'number') {
            throw new ErrorClass('Invalid input');
        }
        return userInput;
    } catch (error) {
        throw new ErrorClass('Invalid input');
    }
}
```

## Activity 2

### Task 6: Handling Promises

```javascript
const Promise1 = new Promise((resolve, reject) => {
    if (41 > 96) {
        resolve('Success');
    }
    else {
        reject('Failed');
    }
})

Promise1.then((message) => {
    console.log(message)
}).catch(error => {
    console.log(error)
})
```

### Task 7: Async Function with Promise

```javascript
const AsyncFunction = async () => {
    try {
        return await new Promise((resolve, reject) => {
            if (41 > 96) {
                resolve('Success');
            } else {
                reject('Failed');
            }
        })
    } catch (error) {
        console.log(error);
    }
}

console.log(AsyncFunction());
```

## Activity 3

### Task 8: Handling Errors in Fetch API

```javascript
fetch('https://hello.com/api/hello') // Invalid URL
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### Task 9: Async Function with Fetch API

```javascript
const FetchFunc = async () => {
    try {
        const response = await fetch('https://hello.com/api/hello');
        if (response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}

FetchFunc();
```

## Feature Requests

### Feature Request 1: Implementing a Difference Function

```javascript
const Difference = (num1, num2) => {
    try {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error("Invalid input");
        }
        return num1 - num2;
    }
    catch (error) {
        console.log(error.message)
    }
    finally {
        console.log('Done');
    }
}
```

### Feature Request 2: Custom Error Class for Feature Requests

```javascript
class FeatureError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FeatureError';
    }
}

try {
    throw new FeatureError('Feature not implemented');
}
catch (error) {
    console.log(error.message);
}
```

### Feature Request 3: Handling Promises in Feature Requests

#### Using Try() and Catch() 
```javascript
const FeatureFunc1 = async () => {
    try {
        return await new Promise((resolve, reject) => {
            if (41 > 96) {
                resolve('Success');
            }
            else {
                reject('Failed');
            }
        })
    } catch (error) {
        console.log(error);
    }
}

FeatureFunc1().then(message => console.log(message));
```
#### Using .catch()
```javascript
const FeatureFunc2 = async () => {
    return new Promise((resolve, reject) => {
        if (41 > 96) {
            resolve('Success');
        }
        else {
            reject('Failed');
        }
    })
}

FeatureFunc2().then(message => console.log(message))
    .catch(error => console.log(error));
```

### Feature Request 4: Enhanced Fetch Functionality

```javascript
const FetchFuncFeature = async () => {
    try {
        const response = await fetch('https://hello.com/api/hello');
        if (response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}

FetchFuncFeature();
```

## Benefits of These Exercises

- **Understanding Error Handling**: Practice handling various types of errors gracefully using try-catch blocks and custom error classes.
  
- **Promises and Async/Await**: Gain proficiency in managing asynchronous operations, handling promises, and using async/await for cleaner asynchronous code.
  
- **Fetch API Usage**: Learn to fetch data from APIs, handle responses, and manage errors effectively in real-world scenarios.

- **Feature Requests**: Explore extending functionalities with custom error handling and asynchronous operations, reinforcing learning through practical implementation.

