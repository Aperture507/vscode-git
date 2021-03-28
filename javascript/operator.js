//Increment and decrement operator
let counter = 2;
const preIncrement = ++counter;
//=> counter = counter + 1;
//   preIncrement = counter;
console.log(counter);
//counter = 3, preIncrement = 3

const postIncrement = counter++;
//=> postIncrement = counter;
//   counter = counter + 1;
console.log(counter);
//counter = 4, postIncremnet = 3

const preDecremnet = --counter;
const postDecrement = counter--;



let x = 3;
let y = 4;
x += y; //x = x + y;
console.log(x);//7


//logical operator : ||(or), &&(and), !(not)

let value1 = false;
const value2 = 2 > 4;

console.log(`or: ${value1 || value2 || check()}`);

console.log(`and: ${value1 && value2 && check()}`);

function check(){
    for (let i = 0; i < 10; i++){
        console.log('wasting time finish!')

    }
    return true;
}

//순서가 중요하다. or operator의 경우 순차적으로 true false를 판단하여 true가 나올시 종료한다. 
//value1이 true일 시 함수 check()를 실행하지 않고 종료된다.
//따라서 함수와 같은 무거운 연산자는 가장 뒤에서 실행되는 것이 가장 효율적이다.


// ! (not)
console.log(!value1);
//값을 반대로 바꿔준다


//Equality
const stringFive = '5';
const numberFive = 5;
console.log(stringFive == numberFive); //true 
console.log(stringFive === numberFive); //false

//object equality
const Aperture1 = { name: 'Aperture'};
const Aperture2 = { name: 'Aperture'};
const Aperture3 = Aperture1;

console.log(Aperture1 == Aperture2); //false -> 각각 다른 Reference에 저장되었기 때문에 false로 인식한다.
console.log(Aperture1 === Aperture2); //false
console.log(Aperture1 === Aperture3); //true11

//0, empty string, null은 false로 간주된다.
console.log(0 == false); //true
console.log(0 === false); //false -> Strict equality를 사용하게 되면 0은 불리언 타입이 아니기 때문에 false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

const name = 'Aperture';
if ( name === 'Aperture'){
    console.log("Hello Aperture!");
} else if ( name === 'Reena'){
    console.log("Hello Reena");
} else {
    console.log("Unknown")
};

//Ternary operator: ?
console.log( name === 'Aperture' ? 'yes' : 'no'); // 값이 true일 경우의 앞의 값인 'yes'를 출력하고 false일 경우 뒤의 값인 'no'를 출력한다.

//Switch

const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('Fuck you');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('Good');
        break;
    default:
        console.log('same all');
        break;
}

//loops
//while과 do while
let i = 3;
while (i>0){
    console.log(`while: ${i}`);
    i--;
}

do {
    console.log(`do while: ${i}`);
    i--;
} while (i>0);

//For loops
for (i=3; i>0; i--) {
    console.log(`for: ${i}`);
}

//nested loops
for (i=3; i>0; i--){
    for (j=3; j>0; j--){
        console.log(`i:${i}, j:${j}`);
    }
}




for(i = 0; i<11; i++){
    if(i % 2 == 1){
        continue;
    }
    console.log(i);
}

for(i = 0; i<10; i++){
    if(i > 8){
        break;
    }
    console.log(i);
}
















