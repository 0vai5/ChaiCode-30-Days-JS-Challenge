// Activity 1

// Task 1
const heading = document.getElementById("heading");
heading.innerHTML = 'How Are You??'

// Task 2
const headText = document.getElementsByClassName("headText");
headText[0].innerHTML = 'Hello';


// Activity 2

// Task 3

const body = document.getElementsByTagName('body');
const Elem = document.createElement('div')
Elem.innerHTML = 'Hello World';
body[0].appendChild(Elem);

// Task 4

const list = document.getElementsByTagName('ul');
const li = document.createElement('li');
li.innerText = 'Earth';
list[0].appendChild(li);

// Activity 3


// Task 5
const div1 = document.getElementById('div1');
div1.remove();


// Task 6
const listItems = document.getElementsByTagName('li');
const count = listItems.length;
listItems[count - 1].remove();

// Activity 4

// Task 7
const img = document.getElementsByTagName('img')
img[0].src = 'https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png';


// Task 8

const hello = document.getElementsByClassName('hello');
console.log(hello);
hello[0].classList.remove('world');
console.log(hello);


// Activity 5

// Task 9

const p = document.getElementById('p');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    p.innerHTML = 'Hello World'
});

// Task 10

const div2 = document.getElementById('div2');
div2.addEventListener('mouseenter', () => {
    div2.style.border = '10px solid blue'
})


// Feature Requests 1

const Featureh1 = document.getElementById('Featureh1');
Featureh1.innerHTML = 'Hello';

// Feature Request 2

const FeatureBody = document.getElementsByTagName('body');
const Featurediv = document.createElement('div');
Featurediv.innerHTML = 'Hello World';
FeatureBody[0].appendChild(Featurediv);


// Feature Request 3

const FeatureH12 = document.getElementById('Featureh1');
FeatureH12.remove();


// Feature Request 4

const FeatureImg = document.getElementByTagName('img');
FeatureImg[0].src = 'https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text-thumbnail.png';


// Feature Request 5

const featureH13 = document.getElementById('featureH13');
featureH13.addEnventListener('mouseenter', () => {
    featureH13.style.color = 'red';
});
