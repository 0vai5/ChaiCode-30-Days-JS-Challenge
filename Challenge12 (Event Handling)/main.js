// Activity 1

// Task 1

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

// Task 2

const Division = (denominator, neumerator) => {
    try {
        if (denominator === 0) {
            throw new Error("Division by zero can't be done");
        }
        return neumerator / denominator;
    }
    catch (error) {
        console.log(error.message)
    }
}

console.log(Division(2, 4));

// Activity 2

// task 3

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

// Activity 3

// Task 4

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

// Task 5

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

// Activity 4

// Task 6

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

// Task 7

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

// Activity 5

// Task 8

fetch('https://hello.com/api/hello') // Invalid URL
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));


// Task 9

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

FetchFunc()




// Feature Request 1

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

// Feature Request 2


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

// Feature Request 3

// Using Try() and Catch();

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

FeatureFunc1().then(message => console.log(message))

// .catch()

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
    .catch(error => console.log(error))


// Feature request 4


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

FetchFunc()

