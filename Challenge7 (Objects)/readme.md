# JavaScript Object Operations

## Activities

### Activity 1

#### Task 1: Logging BookObj
```javascript
const BookObj = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024
};

console.log(BookObj);
```

#### Task 2: Logging Book details
```javascript
console.log(`The Book with the Name: ${BookObj.title} which is authored by: ${BookObj.author}`);
```

### Activity 2

#### Task 3: Using method in BookObj2
```javascript
const BookObj2 = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024,
    FormattedBook: function () {
        return `${this.title} by ${this.author}`;
    },
    UpdateYear: function (year) {
        this.year = year;
    }
};

console.log(BookObj2.FormattedBook());
```

#### Task 4: Updating and logging year in BookObj2
```javascript
console.log('Currently the Year of the Book is: ', BookObj2.year);
BookObj2.UpdateYear(2090);
console.log('The Updated Year of the Book is: ', BookObj2.year);
```

### Activity 3

#### Task 5: Logging library object
```javascript
const library = {
    title: 'Hello Library',
    authors: [
        {
            name: 'John Doe',
            books: [
                { title: "Book 1", ISBN: "12345" },
                { title: "Book 2", ISBN: "67890" }
            ]
        },
        {
            name: "Jane Smith",
            books: [
                { title: "Another Book", ISBN: "54321" },
                { title: "Some Book", ISBN: "09876" }
            ]
        }
    ]
};

console.log(library);
```

#### Task 6: Logging library name and books
```javascript
console.log(`The Library Name is: ${library.title}`);

library.authors.forEach((author) => {
    author.books.forEach((book) => {
        console.log(`Book: ${book.title} by ${author.name}`);
    });
});
```

### Activity 4

#### Task 7: Using method in Obj
```javascript
const Obj = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024,
    string: function () {
        return `${this.title} by ${this.author}`;
    }
};

console.log(Obj.string());
```

### Activity 5

#### Task 8: Logging keys using for...in loop
```javascript
const Obj2 = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024
};

for (let key in Obj2) {
    console.log(key);
}
```

#### Task 9: Logging keys and values using Object.keys() and Object.values()
```javascript
console.log("Keys:");
Object.keys(Obj2).forEach(key => {
  console.log(key);
});

console.log("\nValues:");
Object.values(Obj2).forEach(value => {
  console.log(value);
});
```

## Feature Requests

### Feature Request 1

#### Logging keys and method result in FeatureObj1
```javascript
const FeatureObj1 = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024,
    string: function () {
        return `${this.title} by ${this.author}`;
    }
};

console.log('Keys of Books Object: ');
Object.keys(FeatureObj1).forEach(key => {
    console.log(key);
});

console.log(`The Method result is: ${FeatureObj1.string()}`);
```

### Feature Request 2

#### Listing books in FeatureLibrary
```javascript
const FeatureLibrary = {
    title: 'Hello Library',
    books: [
        {
            author: 'John Doe',
            title: 'Hello World',
            year: 2024
        },
        {
            author: 'Ovais',
            title: 'Hello',
            year: 2023
        }
    ],
    listBooks: function() {
        const bookTitles = this.books.map(book => book.title);
        return `The library ${this.title} has the following books: ${bookTitles.join(', ')}`;
    }
};

console.log(FeatureLibrary.listBooks());
```

### Feature Request 3

#### Logging keys and values using different methods in FeatureObj2
```javascript
const FeatureObj2 = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024
};

// Logging keys using for...in loop
console.log("Keys using for...in:");
for (let key in FeatureObj2) {
    console.log(key);
}

// Logging keys using Object.keys()
console.log("\nKeys using Object.keys():");
Object.keys(FeatureObj2).forEach(key => {
  console.log(key);
});

// Logging values using Object.values()
console.log("\nValues using Object.values():");
Object.values(FeatureObj2).forEach(value => {
  console.log(value);
});
```

---

## Benefits of Activities and Feature Requests

1. **Understanding Object Structures**: Activities 1 and 3 help in understanding how to define and work with objects containing nested structures (like books within a library).

2. **Method Utilization**: Activity 2 introduces the use of methods within objects, allowing for encapsulation of logic related to the object's properties (e.g., formatting a book's details).

3. **Iteration and Access**: Activity 5 demonstrates different ways to iterate over object properties (`for...in` loop) and access keys and values (`Object.keys()` and `Object.values()`), enhancing proficiency in data manipulation.

4. **Feature Enhancements**: Feature Requests 1 and 2 extend basic operations by logging object keys, using methods to generate formatted outputs, and iterating through collections (like books in a library).

5. **Code Optimization**: The activities and feature requests encourage writing clean, efficient code by utilizing JavaScript's built-in methods and adhering to best practices in object-oriented programming.

These exercises collectively enhance JavaScript proficiency, reinforce object manipulation skills, and prepare for more complex data handling scenarios in web development.