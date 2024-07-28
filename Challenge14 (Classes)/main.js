// Activity 1

class personClass {
    constructor() {
        this.firstName = 'John';
        this.lastName = 'Doe'
        this.age = 30;
        this.language = 'en'
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    set lang(lang) {
        this.language = lang
    }
    summary() {
        return `Hey my name is ${this.firstName} and I am ${this.age} year old`
    }
    ageUpdate(age) {
        this.age = age;
    }
    static genericGreeting() {
        return 'Hello, I am a person class';
    }
}

// Task 1

const person = new personClass;
console.log(person.summary()); // Output: Name: John, Age: 30

// Task 2

const person2 = new personClass;
person2.ageUpdate(40);
console.log(person2.summary()) // Output: Name: John, Age: 40



// Activity 2

class studentClass extends personClass {
    static count = 1;
    constructor(name, age) {
        super(name, age);
        this.id = '14a583';
        studentClass.count++;
    }
    summary() {
        return `Hey my name is ${this.firstName} and I am ${this.age} years old with the ID ${this.id}`;
    }
}

// Task 3

const student = new studentClass;
console.log(student.id); // Output: Name: John, Age: 30, ID: 14a583

// Task 4

const student2 = new studentClass;
console.log(student2.summary());




// Activity 3


// Task 5

console.log(personClass.genericGreeting());


// Task 6

console.log(studentClass.count);

// Activity 4

// Task 7

const person3 = new personClass;
console.log(person3.fullName);

// Task 8

const person4 = new personClass;
person4.lang = 'ur'
console.log(person4.language);



// Feature Request 1

class FeaturePerson {
    constructor() {
        this.name = 'John';
        this.age = 30;
        this.language = 'ur'
    }
    summary() {
        return `Name: ${this.name}, Age: ${this.age}, Language: ${this.language}`
    }
}

const person5 = new FeaturePerson;
console.log(person5.summary());

// Feature Request 2

class FeatureStudent extends FeaturePerson {
    constructor() {
        super();
        this.rollNo = 1;
    }
    summary() {
        return `Name: ${this.name}, Age: ${this.age}, Language: ${this.language}`
    }
}

const student3 = new FeatureStudent;
console.log(student3.summary());

// Feature request 3

class FeatureCar {
    static count = 1
    constructor() {
        this.color = 'red'
        this.speed = 100
        FeatureCar.count++
    }
    static CarSummary () {
        return `Total Cars: ${FeatureCar.count}`
    }
}

console.log(FeatureCar.CarSummary())




// Feature Request 4

class AnimalClass {
    constructor() {
        this._name = 'Dog';
        this._speed = '12 mph';
        this._sound = 'woof';
    }

    summary() {
        return `Name: ${this._name}, Speed: ${this._speed}, Sound: ${this._sound}`;
    }

    get speed() {
        return this._speed;
    }

    set speed(speed) {
        this._speed = speed;
    }

    get sound() {
        return this._sound;
    }

    set sound(sound) {
        this._sound = sound;
    }
}

const animal = new AnimalClass();
console.log(animal.speed);
animal.sound = 'bark';
console.log(animal.sound);
console.log(animal.summary());


