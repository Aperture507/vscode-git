//object = { key : value};


 const person1 = {name: 'bob', age: '3'}
 const person2 = {name: 'aperture', age: '4'}
 const person3 = {name: 'reena', age: '5'}
 //반복해서 key를 작성하지 않기 위해 함수를 작성해서 사용

 function Person(name, age){
    this.name = name;
    this.age = age;
 }
const person4 = new Person('black', 20); //class와 같은 역할
console.log(person4);

//In operator: check key in obj
console.log('name' in person1); //true

//for ... in vs for ... of
//for (key in obj0)
for (key in person1){
    console.log(key);
}
//모든 key 값을 받아온다

//for (value of iterable)
const array = [1, 2, 3, 5];
for (value of array){
    console.log(value);
}
//모든 value 값을 받아온다


//cloning
const user1 = { name : 'aperture', age : 20};
const user2 = user1
user2.name = 'reena'
console.log(user2); //reena로 바뀐다
console.log(user1); //user1 역시 reena로 바뀐다

const user4 = {};
Object.assign(user4, user1);
console.log(user4);

//or

const user5 = Object.assign({}, user1);
console.log(user5);

//another ex
const fruit1 = {color : 'blue'};
const fruit2 = {color : 'red', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2); //assign은 뒤에 나오는 것을 계속 덮어쓰기 때문에 
console.log(mixed.color);
console.log(mixed.size);                         //이에 대한 출력은 fruit2의 값이 출력되게된다.

