// Activity 1

const BookObj = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024
};

// task 1

console.log(BookObj);

// Task 2

console.log(`The Book with the Name: ${BookObj.title} which is authored by: ${BookObj.author}`);

// Activity 2

const BookObj2 = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024,
    FormattedBook: function () {
        return `${this.title} by ${this.author}`
    },
    UpdateYear: function (year) {
        this.year = year;
    }
};

// task 3

console.log(BookObj2.FormattedBook());

// task 4

console.log('Currently the Year of the Book is: ', BookObj2.year);
BookObj2.UpdateYear(2090);
console.log('The Updated Year of the Book is: ', BookObj2.year);

// Activity 3

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
}


// Task 5

console.log(library);

// Task 6

console.log(`The Library Name is: ${library.title}`);

library.authors.forEach((author) => {
    author.books.forEach((book) => {
        console.log(`Book: ${book.title} by ${author.name}`);
    });
});

// Activity 4

const Obj = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024,
    string: function () {
        return `${this.title} by ${this.author}`
    }
};

// Task 7

console.log(Obj.string());


// Activity 5

const Obj2 = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024
}

// task 8

for(key in Obj2){
    console.log(key);
}

// task 9

console.log("Keys:");
Object.keys(Obj2).forEach(key => {
  console.log(key);
});

console.log("\nValues:");
Object.values(Obj2).forEach(value => {
  console.log(value);
});


// Feature Request 1

const FeatureObj1 = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024,
    string: function () {
        return `${this.title} by ${this.author}`
    }
}

console.log('Keys of Books Object: ');
Object.keys(FeatureObj1).forEach(key => {
    console.log(key);
});

console.log(`The Method result is: ${FeatureObj1.string()}`)


// feature Request 2

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



// Feature Request 3

const FeatureObj2 = {
    title: 'Hello World',
    author: 'XYZ',
    year: 2024
};


// For ... in
for(Properties in FeatureObj2) {
    console.log(Properties)
};

// Object.keys() 

console.log("Keys:");
Object.keys(Obj2).forEach(key => {
  console.log(key);
});

// Object.values

console.log("\nValues:");
Object.values(Obj2).forEach(value => {
  console.log(value);
});