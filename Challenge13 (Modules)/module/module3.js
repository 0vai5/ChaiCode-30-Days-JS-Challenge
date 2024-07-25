// Activity 3

// Task 5

const EvenOdd = (num) => {
    if (num % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

const Tables = (num) => {
    for(let i = 1; i > 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

const Factorial = (num) => {
    let result = 1;
    for(let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

const CountryObj = {
    name: 'Pakistan',
    capital: 'Karachi',
}

export { EvenOdd, Tables, Factorial, CountryObj }

// Feature request 2

// Using Named exports

export const hello = () => {
    console.log('Hello')
}

// Using Default exports

const helloWorld = () => {
    console.log('Hello World')
}

export default helloWorld
