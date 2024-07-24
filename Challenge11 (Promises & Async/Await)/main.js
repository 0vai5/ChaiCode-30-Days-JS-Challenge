// Activity 1

// Task 1

const Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello After 2 Seconds')
    }, 2000)
})

Promise1.then((message) => {
    console.log(message)
})

// Task 2

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

// Activity 2

// Task 3

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

// Activity 3

// Task 4

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



// Task 5

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


// Activity 4

// Task 6

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


// Task 7
const fetch =  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data)
}

// Activity 5

// Task 8

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


// Task 9

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


// Feature Request 1

const FeaturePromise = new Promise((resolve, reject) => {
    if(10 > 20) {
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

// Feature Request 2

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

// Feature Request 3

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



// Feature request 4

// Using Promises 

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

// Using Async Await

const FeaturePromise4 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data)
}

FeaturePromise4()

// Feature Request 5

// Promises.ALL

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

// Promise.race()

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
.then((messgae) => {
    console.log(messgae)
})

