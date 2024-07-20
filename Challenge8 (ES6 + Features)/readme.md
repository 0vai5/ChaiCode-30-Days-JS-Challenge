# JavaScript ES6 + Features Activites

This JavaScript script contains various activities demonstrating different language features and functionalities.

## Activities Summary

### Activity 1: String Interpolation and Template Literals

- **Task 1**: Print name and age using template literals.

  ```javascript
  let name = 'Ovais Raza';
  let age = 16;
  
  console.log(`My name is ${name} and I am ${age} years old.`);
  ```

- **Task 2**: Print name, age, and nationality using multi-line template literals.

  ```javascript
  let name = 'Ovais Raza';
  let age = 16;
  let nationality = 'Pakistani';
  
  console.log(`
  My Name is ${name}
  and I am ${age} years old.
  I am from ${nationality}.
  `);
  ```

### Activity 2: Destructuring Assignment

- **Task 3**: Destructure an array to extract the first and second elements.

  ```javascript
  const arrayNum = [10, 12, 158, 3259, 5157, 1223497, 54575];
  const [firstNum, SecondNum] = arrayNum;
  console.log(firstNum, SecondNum);
  ```

- **Task 4**: Destructure an object to extract its properties.

  ```javascript
  const Obj = {
      title: 'Hello World',
      author: 'XYZ',
      year: 2024
  };
  
  const { title, author, year } = Obj;
  console.log(title, author, year);
  ```

### Activity 3: Spread Operator and Rest Parameter

- **Task 5**: Create a new array by spreading elements from another array and adding new elements.

  ```javascript
  const array1 = [12, 'Hello', 1256, 'World', 1235478, 54981987];
  console.log(`The Previous Array: ${array1}`);
  const array2 = [...array1, 'How Are You?', 'Chai', 'Code'];
  console.log(`The New Array with Elements from array1 and some extra elements as well ${array2}`);
  ```

- **Task 6**: Define a function using the rest parameter to sum up a variable number of arguments.

  ```javascript
  function Sum(...Nums) {
      let total = 0;
      for (const num of Nums) {
          total += num;
      }
      return total;
  }
  
  console.log(Sum(1, 2, 3, 4, 5)); // Output: 15
  ```

### Activity 4: Arrow Functions with Default Parameters

- **Task 7**: Create an arrow function that multiplies two numbers, with one number having a default value.

  ```javascript
  const Product = (num1, num2 = 1) => {
      return num1 * num2;
  };
  ```
    #### Without Second Param

  ```javascript
  console.log(Product(5)); // Output: 5
  ```
    #### With Second Operator

  ```javascript
  console.log(Product(5, 2)); // Output: 10
  ```
  


### Activity 5: Enhanced Object Literals

- **Task 8**: Create an enhanced object literal with a method that returns a summary.

  ```javascript
  const EnhancedObj = (title, author, year) => {
      return {
          title,
          author,
          year, 
          summary() {
              return `${this.title} was written by ${this.author} in ${this.year}`;
          }
      };
  };
  
  console.log(EnhancedObj('Hello World', 'XYZ', 2024).summary());
  ```

- **Task 9**: Create an object with shorthand property assignment.

  ```javascript
  let Name = 'Ovais Raza';
  let Age = 16;
  
  const EnhancedObj2 = {
      Name,
      Age
  };
  
  console.log(EnhancedObj2);
  ```

---

## Feature Requests

### Feature Request 1: String Interpolation with Variables

- **Description**: Demonstrates string interpolation using variables for enhanced readability and dynamic content.

  ```javascript
  let FeatureName = 'Ovais Raza';
  let FeatureAge = 16;
  let FeatureNationality = 'Pakistani';
  
  console.log(`
  My name is ${FeatureName}
  And my age is ${FeatureAge}
  Moreover, I am ${FeatureNationality}
  `);
  ```

### Feature Request 2: Object and Array Destructuring

- **Description**: Illustrates object and array destructuring for efficient assignment of values.

  #### Object Destructuring

  ```javascript
  const FeatureObj = {
      titleBook: 'Hello JS',
      authorBook: 'JS',
      yearBook: 2024
  };

  const { titleBook, authorBook, yearBook } = FeatureObj;
  console.log(titleBook, authorBook, yearBook);
  ```
  #### Array Destructuring

  ```javascript
  const FeatureArr = ['hello', 123, 'World', 456, 'How Are You?', 789];
  const [FirstElem, SecondElem, ThirdElem] = FeatureArr;
  console.log(FirstElem, SecondElem, ThirdElem);
  ```
  

### Feature Request 3: Spread (...) Operator and Rest (...) Parameter

- **Description**: Highlights the use of the spread operator to merge arrays and rest parameter to handle variable function arguments.

  #### spread Operator

  ```javascript
  const FeatureArray1 = [1, 2, 3, 4, 5];
  console.log(`The Array is Initially: ${FeatureArray1}`);
  const FeatureArray2 = [...FeatureArray1, 6, 7];
  console.log(`The New Array is: ${FeatureArray2}`);
  ```
#### Rest Parameter

  ```Javascript
  const FeatureFunction = (...Args) => {
      let total = 0;
      for (const num of Args) {
          total += num;
      }
      return total;
  };
  console.log(FeatureFunction(1, 1589, 2366999, 2144588)); // Output: 4513177
  ```

### Feature Request 4: Arrow Functions with Default Parameters

- **Description**: Utilizes arrow functions with default parameters for concise and flexible function definitions.

  ```javascript
  const FeatureFunction2 = (num1, num2 = 1) => {
      return num1 + num2;
  };
  
  console.log(FeatureFunction2(5)); // Output: 6
  ```

---

## Benefits of These Exercises

1. **String Interpolation and Template Literals**:
   - **Benefits**: Improves readability and makes string construction easier by allowing embedded expressions and multi-line strings.

2. **Destructuring Assignment**:
   - **Benefits**: Provides a concise syntax for extracting values from arrays and objects, making code cleaner and easier to maintain.

3. **Spread Operator and Rest Parameter**:
   - **Benefits**: Facilitates manipulation of arrays and functions by spreading array elements into other arrays or function arguments, enhancing flexibility and code reuse.

4. **Arrow Functions with Default Parameters**:
   - **Benefits**: Offers a compact syntax for defining functions and allows parameters to have default values, improving code clarity and reducing boilerplate.

5. **Enhanced Object Literals**:
   - **Benefits**: Simplifies object creation with shorthand syntax for defining properties and methods, promoting cleaner and more organized code structures.

6. **Feature Requests**: Demonstrates advanced usage scenarios and expands understanding of modern JavaScript features, enhancing proficiency and capability in JavaScript development.

