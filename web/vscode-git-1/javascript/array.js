'use strict';
//Declaratiion
const arr = [1, 2];

//index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); //배열의 가장 마지막 인덱스에 접근

//Looping over an array
console.clear();
for (let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (let fruit of fruits){
    console.log(fruit);
}

//forEach
fruits.forEach(function(fruit, index){
    console.log(fruit, index)
});
//anonymos function이므로 arrow function으로 사용가능
fruits.forEach((fruit) => console.log(fruit));

//Addtion, deletion, copy
//push = add an item to the end
fruits.push('melon', 'pair');
console.log(fruits);
//pop = remove an item from the end
fruits.pop();
console.log(fruits);
//unshift = add an item to the beginning
fruits.unshift('strawberry', 'pineapple');
console.log(fruits);
//shift = remove an item from the beginning
fruits.shift();
console.log(fruits);

//shift와 unshift는 pop과 push에 비해서 훨씬 처리가 많기 때문에 느리다.

//splice = remove an item by index position
fruits.splice(1, 1, 'lemon');
console.log(fruits); //splice(몇 번 째 인덱스부터, 몇 개나 지울 것인지 설정, 지운 자리에 추가할 값)

//conbine two arrays
const fruits2 = ['peach', 'tomato'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//searching
//find the index
console.clear();
console.log(fruits); //["pineapple", "lemon", "banana", "melon"]
console.log(fruits.indexOf('pineapple')); //0
console.log(fruits.includes('apple')); //false
console.log(fruits.includes('banana')); //true
console.log(fruits.indexOf('apple')); //-1

//lastIndexOf

fruits.push('pineapple');
console.log(fruits);["pineapple", "lemon", "banana", "melon", "pineapple"] //똑같은 값이 두 개 존재할 시,
console.log(fruits.indexOf('pineapple')); //0 //indexOf로 index값을 찾아보면 가장 첫번째 오는 index값이 출력된다
console.log(fruits.lastIndexOf('pineapple')); //4 //lastIndexOf은 마지막 값의 index값 출력


















