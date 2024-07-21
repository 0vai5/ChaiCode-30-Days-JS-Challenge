# Documenting JavaScript DOM Manipulation Activities

## Activity 1

### Task 1
Change the heading text to "How Are You??"
```javascript
const heading = document.getElementById("heading");
heading.innerHTML = 'How Are You??';
```

### Task 2
Update the text of the first element with class "headText" to "Hello"
```javascript
const headText = document.getElementsByClassName("headText");
headText[0].innerHTML = 'Hello';
```

## Activity 2

### Task 3
Add a new `div` element with the text "Hello World" to the body.
```javascript
const body = document.getElementsByTagName('body');
const Elem = document.createElement('div')
Elem.innerHTML = 'Hello World';
body[0].appendChild(Elem);
```

### Task 4
Append a new list item "Earth" to an existing unordered list.
```javascript
const list = document.getElementsByTagName('ul');
const li = document.createElement('li');
li.innerText = 'Earth';
list[0].appendChild(li);
```

## Activity 3

### Task 5
Remove the element with id "div1" from the DOM.
```javascript
const div1 = document.getElementById('div1');
div1.remove();
```

### Task 6
Remove the last list item from all list items.
```javascript
const listItems = document.getElementsByTagName('li');
const count = listItems.length;
listItems[count - 1].remove();
```

## Activity 4

### Task 7
Change the source of the first image to a new URL.
```javascript
const img = document.getElementsByTagName('img')
img[0].src = 'https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png';
```

### Task 8
Remove the class "world" from the first element with class "hello".
```javascript
const hello = document.getElementsByClassName('hello');
hello[0].classList.remove('world');
```

## Activity 5

### Task 9
Change the content of paragraph element "p" to "Hello World" on button click.
```javascript
const p = document.getElementById('p');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    p.innerHTML = 'Hello World';
});
```

### Task 10
Add a border to the "div2" element when mouse enters it.
```javascript
const div2 = document.getElementById('div2');
div2.addEventListener('mouseenter', () => {
    div2.style.border = '10px solid blue';
});
```

## Feature Requests

### Feature Request 1
Change the text content of element with id "Featureh1" to "Hello".
```javascript
const Featureh1 = document.getElementById('Featureh1');
Featureh1.innerHTML = 'Hello';
```

### Feature Request 2
Add a new `div` with text "Hello World" to the body.
```javascript
const FeatureBody = document.getElementsByTagName('body');
const Featurediv = document.createElement('div');
Featurediv.innerHTML = 'Hello World';
FeatureBody[0].appendChild(Featurediv);
```

### Feature Request 3
Remove the element with id "Featureh1" from the DOM.
```javascript
const FeatureH12 = document.getElementById('Featureh1');
FeatureH12.remove();
```

### Feature Request 4
Change the source of the first image to a new URL.
```javascript
const FeatureImg = document.getElementsByTagName('img');
FeatureImg[0].src = 'https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png';
```

### Feature Request 5
Change the color of text when mouse enters element with id "featureH13".
```javascript
const featureH13 = document.getElementById('featureH13');
featureH13.addEventListener('mouseenter', () => {
    featureH13.style.color = 'red';
});
```

---

## Benefits of Performing These Activities

1. **Dynamic Content Updating**: These activities demonstrate how to update content dynamically based on user actions or predefined logic, enhancing user experience.
   
2. **DOM Manipulation Proficiency**: Practicing these tasks improves proficiency in manipulating the DOM using JavaScript, essential for modern web development.

3. **Event Handling**: Tasks involving event listeners (e.g., click, mouseenter) teach effective event handling techniques, making web applications interactive.

4. **Accessibility and Usability**: Ensuring content updates and UI changes are accessible and usable enhances overall application usability and user satisfaction.

5. **Feature Implementation**: Implementing feature requests demonstrates flexibility and expands functionality, making applications more versatile and capable.

6. **Code Efficiency**: Learning to perform tasks succinctly and efficiently improves code quality and maintainability, benefiting long-term development projects.

---

By following these exercises and implementing feature requests, developers can enhance their skills in web development, create more engaging user interfaces, and build robust applications that meet modern standards of usability and functionality.