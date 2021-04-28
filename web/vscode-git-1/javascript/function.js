function log(message){
    console.log(message);
}
log("hello");
//parameters
//objects parameters -> reference가 함수의 명령에 따라 변화가능

function changeName(obj){
    obj.name = ("Reena");
}
const Aperture = {name: "ApertureLAB"};
changeName(Aperture);
console.log(Aperture); //{name: "Reena"}

//Default parameters

function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('hi');
//from parameter가 정의되지 않을경우 default 값으로 unknown가 호출되도록 설정

function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
printAll('bsdbfdsb', 'fewvew0', 'fewf');

//local scope
//밖에서는 안에 접근이 불가능하고, 안에서는 밖에 접근이 가능하다.

let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage); 
    
}
printMessage();

//return value

function sum(a, b){
    return(a + b);
}
console.log(sum(2, 3));

//early return
//조건이 맞지 않을경우 빠르게 return하도록 코드를 짜자.

//bad
function upgradeUser(user){
    if (user.point > 10){
        //user upgrade logic
    }
}

//good
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
    //user upgrade
}

//function declaration = (hoisted) javascript는 선언한 것을 가장 먼저 처리하기 때문에 선언하기도 전에 사용할 수 있음
//ex) function sum(a, b){} 어쩌구를 선언한 위에 써도 사용 가능
//function expression = 선언하기 전에 사용 불가능
//print(); -> error
const print = function(){
    console.log('PRINT');
}
print();

const printAgain = print;
printAgain();

//callback

function quiz(answer, printYes, printNo){
    if(answer === 'I love you'){
        printYes();
    } else{
        printNo();
    }
}
const printYes = function(){
    console.log("ieiiiii");
}
const printNo = function print(){
    console.log("ha??");
}

quiz('I love you', printYes, printNo);
quiz('vewvds', printYes, printNo);

//Arrow function
//함수의 이름이 없는 anonymous function

const simplePrint = function(){
    console.log("SIMPLEPRINT");
}

//이러한 형태의 함수를 => 를 사용하여 간단히 바꾼다

const SimplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b;


//quiz

const calculate = function(command, a, b){
    switch(command){
        case('add'):
            return a + b;
        case('substract'):
            return a - b;
        default:
            throw Error('unknown command!!!');
    } 
}
console.log(calculate('add', 3, 5))
console.log(calculate("substract", 3, 6))
console.log(calculate("cdsvt", 3, 6))