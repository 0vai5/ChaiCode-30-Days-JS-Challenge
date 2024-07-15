// Activity 1

// Task 1

const checkNumber = (num) => {
    if (num > 0) {
        console.log(`The Number ${num} is Positive`)
    } else if (num < 0) {
        console.log(`The Number ${num} is Negative`)
    } else {
        console.log(`The Number ${num} is zero`)
    }
}

checkNumber(10)

// Task 2

const VoterEligibility = (age) => {
    if (age >= 18) {
        console.log(`The Person is Eligible to Vote`)
    } else {
        console.log(`The Person is not Eligible to Vote`)
    }
}

VoterEligibility(10)


// Activity 2

// task 3

const CheckTheLargestNumber = (a, b, c) => {
    if (a >= b) {
        if (a >= c) {
            console.log(a + ' is the Greatest of all Numbers');
        } else {
            console.log(c + ' is the Greatest of all Numbers');
        };
    } else {
        if (b >= c) {
            console.log(b + ' is the Greatest of all Numbers');
        } else {
            console.log(c + ' is the Greatest of all Numbers');
        };
    };
};

CheckTheLargestNumber(130, 5, 70);


// Activity 3

// Task 4

const day = new Date().getDay();

switch (day) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
    default:
        console.log('Invalid day');
}


// Task 5

const GradeAssignment = (score) => {
    switch (true) {
        case score >= 90:
            console.log('You Have Achieved Grade A*');
            break;
        case score >= 80:
            console.log('You Have Achieved Grade A');
            break;
        case score >= 70:
            console.log('You have Achieved Grade B');
            break;
        case score >= 60:
            console.log('You have Achieved Grade C');
            break;
        case score >= 50:
            console.log('You have Achieved Grade D');
            break;
        case score < 50:
            console.log('You have Failed');
            break;
        default:
            console.log('Invalid Score');
    }
}

GradeAssignment(83);


// Activity 4

// Task 6

const EvenOrOdd = (num) => {
    {num % 2 === 0 ?  console.log('The Number is Even') : console.log('The Number is Odd')}
}

EvenOrOdd(51);


const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

isLeapYear(2024);


// Feature Request 1

const EvenOrOddFeature = (num) => {
    {num % 2 === 0 ?  console.log('The Number is Even') : console.log('The Number is Odd')}
}

EvenOrOddFeature(51);

// Feature Request 2


const VoterEligibilityFeature = (age) => {
    if (age >= 18) {
        console.log(`The Person is Eligible to Vote`)
    } else {
        console.log(`The Person is not Eligible to Vote`)
    }
}

VoterEligibilityFeature(10)

// Feature Request 3

const dayOfTheWeek = new Date().getDay();

switch (dayOfTheWeek) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
    default:
        console.log('Invalid day');
};

// Feature Request 4

const GradeAssignmentFeature = (score) => {
    switch (true) {
        case score >= 90:
            console.log('You Have Achieved Grade A*');
            break;
        case score >= 80:
            console.log('You Have Achieved Grade A');
            break;
        case score >= 70:
            console.log('You have Achieved Grade B');
            break;
        case score >= 60:
            console.log('You have Achieved Grade C');
            break;
        case score >= 50:
            console.log('You have Achieved Grade D');
            break;
        case score < 50:
            console.log('You have Failed');
            break;
        default:
            console.log('Invalid Score');
    }
}

GradeAssignmentFeature(83);


// Feature Request 5

const isLeapYearFeature = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

isLeapYearFeature(2024);