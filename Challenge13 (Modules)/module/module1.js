// Activity 1

// Task 1

export const Sum = (num1, num2) => {
    return num1 + num2;
}

// Task 2

export const PersonObj = {
    name: 'Ovais Raza',
    age: 16,
    city: 'Karachi',
    country: 'Pakistan',
    nationality: 'Pakistani',
    summary() {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Country: ${this.country}, Nationality: ${this.nationality}`;
    }
}

// Feature request 1

export const func = (num) => {
    console.log(num)
}