'use strict';
// Promise = JavaScript object for asynchronous operation
//State : pending -> fulfilled or rejected
//Producer vs Consumer

//Producer
//Promise는 만들어진 순간 executor가 바로 작동한다.
const promise = new Promise((resolve, reject) => {
    //doing heavy work (network, read files)
    console.log('doing something...'); 
    setTimeout(() => {
        resolve('Aperture');
        reject(new Error('no network'));
    }, 2000)
});

//Consumers : then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

//promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        })
    })
    .then(num => console.log(num));
    
    //fewjiov
    