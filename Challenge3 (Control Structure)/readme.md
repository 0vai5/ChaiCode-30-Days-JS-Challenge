Sure! Here's the updated `README.md` file that includes the new activities and tasks, and replaces "How to Run" with "Achievements":


# JavaScript Control Structure

This JavaScript script performs various arithmetic operations, comparisons, and conditional checks. The script is divided into several activities and tasks, demonstrating the use of different operators, logical conditions, and switch cases.

## Activities and Tasks

### Activity 1

**Task 1:** Check if a number is positive, negative, or zero.
```javascript
const checkNumber = (num) => {
    if (num > 0) {
        console.log(`The Number ${num} is Positive`);
    } else if (num < 0) {
        console.log(`The Number ${num} is Negative`);
    } else {
        console.log(`The Number ${num} is zero`);
    }
}

checkNumber(10);
```

**Task 2:** Check if a person is eligible to vote based on their age.
```javascript
const VoterEligibility = (age) => {
    if (age >= 18) {
        console.log(`The Person is Eligible to Vote`);
    } else {
        console.log(`The Person is not Eligible to Vote`);
    }
}

VoterEligibility(10);
```

### Activity 2

**Task 3:** Determine the largest of three numbers.
```javascript
const CheckTheLargestNumber = (a, b, c) => {
    if (a >= b) {
        if (a >= c) {
            console.log(a + ' is the Greatest of all Numbers');
        } else {
            console.log(c + ' is the Greatest of all Numbers');
        }
    } else {
        if (b >= c) {
            console.log(b + ' is the Greatest of all Numbers');
        } else {
            console.log(c + ' is the Greatest of all Numbers');
        }
    }
}

CheckTheLargestNumber(130, 5, 70);
```

### Activity 3

**Task 4:** Log the current day of the week using a switch case.
```javascript
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
```

**Task 5:** Assign a grade based on a score using a switch case.
```javascript
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
```

### Activity 4

**Task 6:** Check if a number is even or odd using a ternary operator.
```javascript
const EvenOrOdd = (num) => {
    {num % 2 === 0 ? console.log('The Number is Even') : console.log('The Number is Odd')}
}

EvenOrOdd(51);
```

**Task 7:** Check if a year is a leap year.
```javascript
const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

isLeapYear(2024);
```

### Feature Requests

**Feature Request 1:** Reimplement checking if a number is even or odd using a ternary operator.
```javascript
const EvenOrOddFeature = (num) => {
    {num % 2 === 0 ? console.log('The Number is Even') : console.log('The Number is Odd')}
}

EvenOrOddFeature(51);
```

**Feature Request 2:** Reimplement checking if a person is eligible to vote based on their age.
```javascript
const VoterEligibilityFeature = (age) => {
    if (age >= 18) {
        console.log(`The Person is Eligible to Vote`);
    } else {
        console.log(`The Person is not Eligible to Vote`);
    }
}

VoterEligibilityFeature(10);
```

**Feature Request 3:** Reimplement logging the current day of the week using a switch case.
```javascript
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
}
```

**Feature Request 4:** Reimplement assigning a grade based on a score using a switch case.
```javascript
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
```

**Feature Request 5:** Reimplement checking if a year is a leap year.
```javascript
const isLeapYearFeature = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

isLeapYearFeature(2024);
```

## Achievements

Through this activity, the following concepts and skills were practiced and reinforced:

1. **Basic Conditional Checks**: Understanding and implementing checks to determine if a number is positive, negative, or zero.
2. **Eligibility Checks**: Creating conditions to verify eligibility based on age.
3. **Nested Conditionals**: Implementing nested conditions to find the largest of three numbers.
4. **Switch Cases**: Using switch cases to handle multiple conditions such as days of the week and grade assignments.
5. **Ternary Operator**: Applying the ternary operator for concise conditional expressions.
6. **Leap Year Calculation**: Implementing the logic to determine if a year is a leap year.
7. **Reimplementation**: Practicing reimplementation of existing logic to reinforce understanding and code reuse.
```