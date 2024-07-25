# JavaScript Modules

### Activity 1

#### Task 1: Using `module1.js` for Sum Calculation

```javascript
import { Sum } from "./module/module1.js";

console.log('Sum: ' + Sum(10, 1589));
```
Output:
```
Sum: 1599
```

#### Task 2: Using `module1.js` for Person Object Summary

```javascript
import { PersonObj } from "./module/module1.js";

const person = PersonObj;
console.log('Person Summary: ' + person.summary());
```
Output:
```
Person Summary: Name: Ovais Raza, Age: 16, City: Karachi, Country: Pakistan, Nationality: Pakistani
```

### Activity 2

#### Task 3: Using `module2.js` for Arithmetic Operations

```javascript
import { Difference, Division, Multiplication } from "./module/module2.js";

console.log('Difference: ' + Difference(10, 5));
console.log('Division: ' + Division(10, 5));
console.log('Multiplication: ' + Multiplication(10, 5));
```
Output:
```
Difference: 5
Division: 2
Multiplication: 50
```

#### Task 4: Using `module2.js` for Modulus Operation

```javascript
import modulas from "./module/module2.js";

console.log('Modulus: ' + modulas(10, 5))
```
Output:
```
Modulus: 0
```

### Activity 3

#### Task 5: Using `module3.js` for Number Operations and Object Export

```javascript
import { EvenOdd, Tables, Factorial, CountryObj } from "./module/module3.js";

console.log('EvenOdd: ' + EvenOdd(10));
Tables(10);
console.log('Factorial: ' + Factorial(10));
console.log('CountryObj: ' + JSON.stringify(CountryObj));
```
Output:
```
EvenOdd: Even
10 x 1 = 10
10 x 2 = 20
10 x 3 = 30
10 x 4 = 40
10 x 5 = 50
10 x 6 = 60
10 x 7 = 70
10 x 8 = 80
10 x 9 = 90
10 x 10 = 100
Factorial: 3628800
CountryObj: {"name":"Pakistan","capital":"Karachi"}
```

### Activity 4

#### Task 6: Using External Library `give-me-a-joke`

```javascript
import giveMeAJoke from 'give-me-a-joke';

giveMeAJoke.getRandomJokeOfTheDay(function(joke) {
    console.log(joke);
});
```
Output:
```
[Random Joke of the Day]
```

#### Task 7: Using `axios` for HTTP Request

```javascript
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
```
Output:
```
[Output from JSONPlaceholder API]
```

## Feature Requests

### Feature Request 1: Using `module1.js` for Custom Function

```javascript
import { func } from "./module/module1.js";

console.log(func(12));
```
Output:
```
12
```

### Feature Request 2: Using `module3.js` for Named and Default Exports

```javascript
import helloWorld, { hello } from "./module/module3.js";

console.log('hello: ' + hello());
console.log('Hello world: ' + helloWorld());
```
Output:
```
Hello
Hello World
```

### Feature Requests 3: Reusing `axios` for HTTP Request

```javascript
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
```
Output:
```
[Output from JSONPlaceholder API]
```

## Benefits of These Exercises

1. **Modularization**: Organizing code into modules (`module1.js`, `module2.js`, `module3.js`) promotes reusability and maintainability by encapsulating related functionalities.

2. **Practice with ES6 Modules**: Using `import` and `export` statements in JavaScript helps in understanding and applying ES6 module syntax effectively.

3. **Integration with External Libraries**: Incorporating external libraries (`give-me-a-joke` for jokes and `axios` for HTTP requests) demonstrates practical usage and integration capabilities.

4. **Hands-on Functional Programming**: Implementing functions for arithmetic operations, number manipulation, and object handling fosters proficiency in functional programming concepts.

5. **Real-world Application**: Utilizing `axios` to fetch data from a remote API (`JSONPlaceholder`) showcases real-world data retrieval and error handling scenarios.