// Activity 1
    // Task 1
    const para1 = document.getElementById('textContent');
    const btn1 = document.getElementById('btn');
    btn1.addEventListener('click', () => {
      para1.innerHTML = 'Hello Changed Text';
    });

    // Task 2
    const img1 = document.getElementsByTagName('img');
    const btn2 = document.getElementById('btn2');
    btn2.addEventListener('dblclick', () => {
      img1[0].style.visibility = 'hidden';
    });

    // Activity 2


    const container1 = document.getElementById('container1');

    // Task 3

    container1.addEventListener('mouseover', () => {
      container1.style.backgroundColor = 'red';
    });

    // Task 4

    container1.addEventListener('mouseout', () => {
      container1.style.backgroundColor = '#ccc';
    });

    // Activity 3
    const input1 = document.getElementById('text');
    const para2 = document.getElementById('para2');

    // Task 5

    input1.addEventListener('keydown', (e) => {
      console.log(`Key is: ${e.key}`);
    });

    // Task 6

    input1.addEventListener('keyup', (e) => {
      para2.innerHTML = e.target.value;
    });

    // Activity 4

    // Task 7
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

    // Task 8

    const dropdown = document.getElementById('dropdown');
    dropdown.addEventListener('change', (e) => {
      console.log(e.target.value);
    });

    // Activity 5

    // Task 9

    const ul1 = document.getElementById('ul1');
    ul1.addEventListener('click', (e) => {
      if (e.target && e.target.nodeName === 'LI') {
        console.log(`List item clicked: ${e.target.textContent}`);
      }
    });

    // Task 10

    const ul2 = document.getElementById('ul1');
    const btn4 = document.getElementById('btn4');
    ul2.addEventListener('click', (e) => {
      if (e.target && e.target.nodeName === 'LI') {
        console.log(`List item clicked: ${e.target.textContent}`);
      }
    });
    btn4.addEventListener('click', () => {
      const li = document.createElement('li');
      li.textContent = ul2.children.length + 1;
      ul2.appendChild(li);
    });

    // Feature Requests 1
    const featureP = document.getElementById('featureP');
    const btn5 = document.getElementById('btn5');
    btn5.addEventListener('click', () => {
      featureP.textContent = 'Feature Request 1: Added a new feature to the app. Now';
    });

    // Feature Requests 2

    // MouseOver 

    const container2 = document.getElementById('container2');
    container2.addEventListener('mouseover', () => {
      container2.style.backgroundColor = 'red';
    });

    // MouseLeave

    container2.addEventListener('mouseleave', () => {
      container2.style.backgroundColor = '#ccc';
    });

    // Feature Request 3

    const input5 = document.getElementById('text');
    const para3 = document.getElementById('para3');

    // KeyDown

    input5.addEventListener('keydown', (e) => {
      console.log(e.key);
    });

    // KeyUp

    input5.addEventListener('keyup', (e) => {
      para3.innerHTML = ` ${e.target.value}`;
    });

    // Feature Request 4

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


    // Feature Request 5

    const btn6 = document.getElementById('btn6');
    const ul3 = document.getElementById('ul3');
    btn6.addEventListener('click', () => {
      const li = document.createElement('li');
      li.textContent = ul3.children.length + 1;
      ul3.appendChild(li);
    });
    ul3.addEventListener('click', (e) => {
      if (e.target && e.target.nodeName === 'LI') {
        console.log(`${e.target.textContent}`);
      }
    });