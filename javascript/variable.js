'use strict';

//let -> var 대신 쓰자
//기본적으로 바뀔 수 있는 mutaable type.

{
    let name = 'Reena';
    console.log(name);
    name = 'JaeHuen';
    console.log(name);
}
console.log(name);

//const = 선언한 후 바뀌지 않는 변수 
//immutable type
const Weeklenght = 7;

//variable type
//primitive, single item : number, string, boolean, null, undefined, symbol
//object, box container
//function, first class function

//string
const a = 'aperture';
console.log(a);
console.log(`hi ${a}`); //template literals (string)


//null
let nothing = null; //value = null, type = object

//undefined
let x; //value = undefined, type = undefined

//symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); //true

console.log(symbol1.description); //id
console.log(typeof symbol1); //symbol

//object
const Reena = { name: 'Reena', age: '20'};
Reena.age = 21;
console.log(Reena.age); 


//Dynamic typing
let text = 'hello';
console.log(text.charAt(0)); //h
//string을 number로 변환하게되면
text = 5;
console.log(text.charAt(0)); //error







