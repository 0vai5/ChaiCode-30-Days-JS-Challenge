# JavaScript Events Handling Exercises

## Activity 1

### Task 1
```javascript
const para1 = document.getElementById('textContent');
const btn1 = document.getElementById('btn');
btn1.addEventListener('click', () => {
  para1.innerHTML = 'Hello Changed Text';
});
```

### Task 2
```javascript
const img1 = document.getElementsByTagName('img');
const btn2 = document.getElementById('btn2');
btn2.addEventListener('dblclick', () => {
  img1[0].style.visibility = 'hidden';
});
```

## Activity 2

### Task 3
```javascript
const container1 = document.getElementById('container1');
container1.addEventListener('mouseover', () => {
  container1.style.backgroundColor = 'red';
});
```

### Task 4
```javascript
container1.addEventListener('mouseout', () => {
  container1.style.backgroundColor = '#ccc';
});
```

## Activity 3

### Task 5
```javascript
const input1 = document.getElementById('text');
input1.addEventListener('keydown', (e) => {
  console.log(`Key is: ${e.key}`);
});
```

### Task 6
```javascript
input1.addEventListener('keyup', (e) => {
  para2.innerHTML = e.target.value;
});
```

## Activity 4

### Task 7
```javascript
const input3 = document.getElementById('text');
const input4 = document.getElementById('number');
const form1 = document.getElementsByTagName('form');
form1[0].addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(`
    ${input3.value}
    ${input4.value}
  `);
});
```

### Task 8
```javascript
const dropdown = document.getElementById('dropdown');
dropdown.addEventListener('change', (e) => {
  console.log(e.target.value);
});
```

## Activity 5

### Task 9
```javascript
const ul1 = document.getElementById('ul1');
ul1.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'LI') {
    console.log(`List item clicked: ${e.target.textContent}`);
  }
});
```

### Task 10
```javascript
const btn4 = document.getElementById('btn4');
ul1.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'LI') {
    console.log(`List item clicked: ${e.target.textContent}`);
  }
});
btn4.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = ul1.children.length + 1;
  ul1.appendChild(li);
});
```

## Feature Requests

### Feature Request 1
```javascript
const featureP = document.getElementById('featureP');
const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
  featureP.textContent = 'Feature Request 1: Added a new feature to the app. Now';
});
```

### Feature Request 2

#### MouseOver
```javascript
const container2 = document.getElementById('container2');
container2.addEventListener('mouseover', () => {
  container2.style.backgroundColor = 'red';
});
```

#### MouseLeave
```javascript
container2.addEventListener('mouseleave', () => {
  container2.style.backgroundColor = '#ccc';
});
```

### Feature Request 3

#### KeyDown
```javascript
const input5 = document.getElementById('text');
input5.addEventListener('keydown', (e) => {
  console.log(e.key);
});
```

#### KeyUp
```javascript
input5.addEventListener('keyup', (e) => {
  para3.innerHTML = ` ${e.target.value}`;
});
```

### Feature Request 4
```javascript
const form2 = document.getElementById('form');
const input6 = document.getElementById('text');
const select2 = document.getElementById('select');
form2.addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = {
    name: input6.value,
    select: select2.value
  };
  console.log(formData);
});
```

### Feature Request 5

#### Button Click
```javascript
const btn6 = document.getElementById('btn6');
const ul3 = document.getElementById('ul3');
btn6.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = ul3.children.length + 1;
  ul3.appendChild(li);
});
```

#### List Item Click
```javascript
ul3.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'LI') {
    console.log(`${e.target.textContent}`);
  }
});
```

## Benefits of these Exercises:

- Hands-on Practice: Gain practical experience in manipulating the Document Object Model (DOM) using JavaScript, essential for front-end development.
- Event Handling Mastery: Master event-driven programming by attaching event listeners and responding to user actions, improving interactive web application development skills.
- UI/UX Enhancement: Learn to enhance user interface (UI) and user experience (UX) through dynamic content updates, interactive controls, and responsive design techniques.
- Form Handling: Develop proficiency in handling form submissions, validating user input, and managing form data for robust web applications.
- JavaScript Proficiency: Strengthen JavaScript skills with exercises covering key concepts like event propagation, DOM manipulation, and asynchronous operations.
- Real-time Feedback: Implement features that provide real-time feedback to users, improving usability and engagement with web applications.
