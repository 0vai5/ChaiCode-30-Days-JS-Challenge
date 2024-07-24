# JavaScript Promises and Async/Await Exercises

## Activity 1

### Task 1
```javascript
const Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello After 2 Seconds')
    }, 2000)
})

Promise1.then((message) => {
    console.log(message)
})
```

### Task 2
```javascript
const Promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Hello Error After 2 Seconds')
    }, 2000)
})

Promise2.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})
```

## Activity 2

### Task 3
```javascript
const PromiseFetching = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}

PromiseFetching('Hello')
    .then((message) => {
        console.log(message)
        return PromiseFetching('World')
    }).then((message) => {
        console.log(message)
        return PromiseFetching('From World')
    }).then((message) => {
        console.log(message)
    })
```

### Task 4
```javascript
const AsyncFunc1 = async () => {
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello After 2 Seconds')
        }, 2000)
    })
    return promise
}

AsyncFunc1()
    .then((message) => {
        console.log(message)
})
```

### Task 5
```javascript
const AsyncFunc2 = async () => {
    try {
        const promise = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello After 2 Seconds')
            }, 2000)
        })
        return promise
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
}

AsyncFunc2()
    .then((message) => {
        console.log(message)
    }).catch((message) => {
        console.log(message)
    })
```

## Activity 3

### Task 6
```javascript
const Promise3 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            if (data) {
                resolve(data)
            } else {
                reject('Task Not Completed')
            }
        })
})

Promise3.then((message) => {
    console.log(message)
}).catch(error => {
    console.log(error)
})
```

### Task 7
```javascript
const fetch =  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data)
}
```

## Activity 4

### Task 8
```javascript
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1')
    }, 2000)
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2')
    }, 1000)
})

const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3')
    }, 3000)
})

Promise.all([promise4, promise5, promise6])
    .then((message) => {
        console.log(message)
    })
```

### Task 9
```javascript
const Promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 7')
    }, 2000)
})

const Promise8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 8')
    }, 1000)
})

Promise.race([Promise7, Promise8])
    .then((message) => {
        console.log(message)
    })
```

## Feature Requests

### Feature Request 1
```javascript
const FeaturePromise = new Promise((resolve, reject) => {
    if (10 > 20) {
        resolve('Ten is Greater Than 20')
    } else {
        reject('Ten is Less Than 20')
    }
})

FeaturePromise.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})
```

### Feature Request 2
```javascript
const FeaturePromise2 = new Promise(function(resolve, reject) {
    return resolve(1)
})

FeaturePromise2.then(function(result){
    console.log(result)
    return result * 2
}).then(function(result) {
    console.log(result)
    return result * 3
}).then(function(result) {
    console.log(result)
    return result * 4
}).then(function(result) {
    console.log(result)
    return result * 5
})
```

### Feature Request 3
```javascript
const featureFunc = async () => {
    try{
        return new Promise((resolve, reject) => {
        })
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error)
        })
    }
}

featureFunc()
    .then((message) => {
        console.log(message)
    }).catch((message) => {
        console.log(message)
    })
```

### Feature Request 4
#### Using Promises
```javascript
const FeaturePromise3 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')  
    .then(response => response.json())
    .then(data => {
        if (data) {
            resolve(data)
        } else {
            reject('Task Not Completed')
        }
    })
})

FeaturePromise3.then((message) => {
    console.log(message)
}).catch(error => {
    console.log(error)
})
```
#### Using Async Await
```javascript
const FeaturePromise4 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data)
}

FeaturePromise4()
```

### Feature Request 5
#### Promises.all()
```javascript
const Promise9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('1')
    }, 300);
})

const Promise10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('2')
    }, 300);
})

const Promise11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('3')
    }, 300);
})

Promise.all([Promise9, Promise10, Promise11])
    .then((message) => {
        console.log(message)
    })

```

#### Promise.race()
```javascript
const Promise12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('1')
    }, 300);
})

const Promise13 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('2')
    }, 300);
})

Promise.race([Promise11, Promise12])
.then((message) => {
    console.log(message)
})
```

---

## Benefits of These Exercises

1. **Understanding Promises and Async/Await:** These exercises provide hands-on experience with asynchronous programming concepts in JavaScript, helping developers grasp the fundamental principles of promises and async functions.

2. **Error Handling:** Learning to handle errors in asynchronous operations is crucial for robust application development. These exercises cover scenarios like promise rejections and error catching in async functions.

3. **API Integration:** Practice fetching data from APIs asynchronously using both promises and async/await syntax, preparing developers for real-world scenarios where data retrieval and manipulation are asynchronous tasks.

4. **Promise Methods:** Gain familiarity with important promise methods such as `Promise.all` and `Promise.race`, understanding their use cases and advantages in managing multiple asynchronous operations.

5. **Practical Application:** By applying these concepts in various tasks and feature requests, developers improve their problem-solving skills and learn to implement best practices in asynchronous JavaScript programming.