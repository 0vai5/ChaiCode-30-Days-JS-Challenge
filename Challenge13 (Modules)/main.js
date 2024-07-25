// Activity 1

// Task 1

import { Sum } from "./module/module1.js";

console.log('Sum: ' + Sum(10, 1589));

// Task 2

import { PersonObj } from "./module/module1.js";

const person = PersonObj;
console.log('Person Summary: ' + person.summary());


// Activity 2

// Task 3

import { Difference, Division, Multiplication } from "./module/module2.js";

console.log('Difference: ' + Difference(10, 5));
console.log('Division: ' + Division(10, 5));
console.log('Multiplication: ' + Multiplication(10, 5));

// Task 4

import modulas from "./module/module2.js";

console.log('Modulas: ' + modulas(10, 5))

// Activity 3

// Task 5

import { EvenOdd, Tables, Factorial, CountryObj } from "./module/module3.js";

console.log('EvenOdd: ' + EvenOdd(10));
Tables(10);
console.log('Factorial: ' + Factorial(10));
console.log('CountryObj: ' + CountryObj);

// Activity 4

// Task 6

import giveMeAJoke from 'give-me-a-joke';

giveMeAJoke.getRandomJokeOfTheDay (function(joke) {
    console.log(joke);
});

// Task 7 

import axios from "axios";

async function getTodo() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data); // Accessing and logging response data
    } catch (error) {
        console.error('Error fetching todo:', error);
    }
}

getTodo();


// Feature Request 1

import { func } from "./module/module1.js";

console.log(func(12));

// Feature Request 2

import helloWorld, { hello } from "./module/module3.js";

console.log('hello: ' + hello());
console.log('Hello world: ' + helloWorld());

// Feature Requests 3

import axios from "axios";

async function getTodo() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data); // Accessing and logging response data
    } catch (error) {
        console.error('Error fetching todo:', error);
    }
}

getTodo();