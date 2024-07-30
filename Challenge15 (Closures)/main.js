// Activity 1

// Task 1

const function1 = () => {
  let message = 'Hello World';
  function InnerFunction() {
    console.log(message);
  }

  return InnerFunction
}

let innerFunc = function1()
innerFunc()

// Task 2

const add = () => {
  let count = 0;
  return function () { count += 1; return count };
}

add()

// Activity 2

// Task 3

function uniqueIdGenerator() {
  let lastId = 0;

  return function () {
    lastId += 1;
    return lastId;
  };
}

const getUniqueId = uniqueIdGenerator();

console.log(getUniqueId()); // Output: 1
console.log(getUniqueId()); // Output: 2
console.log(getUniqueId()); // Output: 3

// Task 4

const Greeting = (name) => {
  return function () {
    console.log(`Hello, ${name}!`)
  }
}

const greet = Greeting('Ovais');
greet()


// Activity 3

// Task 5

let FuncArray = [];
for (let i = 1; i < 10; i++) {
  FuncArray.push((function (index) {
    return function () {
      console.log(index);
    };
  })(i));
}

FuncArray.forEach(func => func());

// Activity 4

const ListCollection = (function () {
  let items = [];

  function add(item) {
    if (item) {
      items.push(item);
      console.log('Item added to the list');
    }
  }

  function remove(id) {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      console.log(`Item with id ${id} removed from the list`);
    } else {
      console.log(`Item with id ${id} not found in the collection.`);
    }
  }

  function listItems() {
    console.log('Items in the collection:');
    items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.item} (ID: ${item.id}, Size: ${item.size}, Price: ${item.price})`);
    });
  }

  return {
    add,
    remove,
    listItems
  };
})();

// Usage
ListCollection.add({
  id: 1,
  item: 'Hello Tee',
  size: 'XL',
  price: '$15'
});
ListCollection.add({
  id: 2,
  item: 'Hello Tee',
  size: 'S',
  price: '$15'
});
ListCollection.add({
  id: 3,
  item: 'Hello Tee',
  size: 'M',
  price: '$15'
});
ListCollection.listItems();
ListCollection.remove(3);
ListCollection.listItems();


// Activity 5

// Task 7

const memoize = (function () {
  const cache = {};

  function memoizeUser (n) {
    if(n in cache) {
      console.log('Fetching n from cache');
      return cache[n]
    } else {
      let results;
      console.log('Calculating n');
      if(n<2){
        results = n
      } else {
        results = memoizeUser(n-1) + memoizeUser(n-2);
      }
      cache[n] = results;
    }
    return results;
  }
  return memoizeUser;
})();

// Task 9

const memoizedfactorial = (function () {
  const cache = {};

  function memoizedFactorial(n) {
    if (n in cache) {
      console.log('Fetching n from cache');
      return cache[n]
    } else {
      let results; 
      if(n === 0 || n === 1) {
        results =  1;
      } else {
        results = n * memoizedFactorial(n-1);
      }
      cache[n] = results;
      return results;
    }
  }
  return memoizedFactorial;
})();

memoizedfactorial(12);
memoizedfactorial(1);

// Feature Request 1


const FeatureFunc1 = () => {
  let message = 'Hello World';
  function InnerFunction() {
    console.log(message);
  }

  return InnerFunction
}

let innerFeature = FeatureFunc1()
innerFeature();

// Feature Request 2

const Counter = (function (){
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }  

  function getcount() {
    return count;
  }

  return {
    increment,
    getcount
  }
})();

Counter.getcount();
Counter.increment();
Counter.getcount();

// Feature Request 3

const IDGenerator = (function () {
  let id = 0;

  return function generate () {
    id++;
    console.log(id);
  }
})();

IDGenerator();

// Feature Request 4

let FeatureFuncArray = [];
for (let i = 1; i < 10; i++) {
  FeatureFuncArray.push((function (index) {
    return function () {
      console.log(index);
    };
  })(i));
}

FeatureFuncArray.forEach(func => func());


// Feature Request 5

const FeatureMemoizedFactorial = (function () {
  const cache = {};

  function memoizedFactorial(n) {
    if (n in cache) {
      console.log(`Fetching ${n} from cache`);
      return cache[n];
    } else {
      let result;
      if (n === 0 || n === 1) {
        result = 1;
      } else {
        result = n * memoizedFactorial(n - 1);
      }
      cache[n] = result;
      return result;
    }
  }

  return memoizedFactorial;
})();


console.log(FeatureMemoizedFactorial(12)); 
console.log(FeatureMemoizedFactorial(1));  
console.log(FeatureMemoizedFactorial(12));


