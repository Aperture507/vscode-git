'use strict';
//object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name : 'Aperture',
    color : 'red',
    birthDate : new Date(),
    jump: () => {
        console.log(`${name} can jump!`);  //함수는 오브젝트 내의 데이터가 아니라 JSON에 반영되지 않는다.
    }
}
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(key, value);
    return key === 'name'    ? 'Reena' : value;
})
console.log(json);


//JSON to object
json = JSON.stringify(rabbit);
let obj = JSON.parse(json);
console.log(obj);

rabbit.jump();    //처음 오브젝트에는 함수가 있었지만
//obj.jump();       //JSON으로 변환하고 나서는 함수는 반영되지 않았으므로 다시 오브젝트로 변환해도 함수는 반영되지 않는다...

console.log(rabbit.birthDate.getDate());  //오브젝트 안의 있는 함수가 작동한다
console.log(obj.birthDate);               //JSON으로 birthDate가 string타임이 되었기에 더 이상 작동x

obj = JSON.parse(json, (key, value) => {
    console.log(key, value);
    return key === 'birthDate' ? new Date() : value;
})
console.log(obj.birthDate.getDate());  // reviver 값을 지정해줌으로써 다시금 받아올 수 있다.
