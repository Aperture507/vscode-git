'use strict';

//비동기적인 실행
console.log('1');
setTimeout(() => console.log('2'), 1000);  //callback 함수
console.log('3');
 
// 1을 실행하고 setTimeout에서 web API로 요청을 보내고 3을 실행한다. 1초뒤에 2가 출력된다. 


//Synchronous callback
function printImmidiately(print){
    print();
}
printImmidiately(() => console.log('hello'));
//hoisting으로 function을 가장 위에서 처리하고 1을 받고 setTime을 받고 3을 받고 printImmidiately() 명령을 받아 hello를 출력하고
//1초 뒤에 2를 출력한다.


//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);
//이 역시 hoisting으로 function을 위에서 먼저 받고 1(동기) setTimeout(비동기) 3(동기) hello(동기) async callback(비동기)
//의 순으로 실행된다



//callback hell ex

class UserStorage{
    loginUser(id, ps, onSuccess, onError){
        setTimeout(() => {
            if (
                (id === 'Aperture' && ps === 'glados') ||
                (id === 'Reena' && ps === 'suki')
            ){
                onSuccess(id);
            } else {
                onError(new Error('Not found'));
            }
        }, 2000);   //네트워크 통신하며 로그인하는데 2초정도 걸리는 것처럼 
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if (user === 'Aperture'){
                onSuccess({name: 'Aperture', role: 'admin'});
            } else{
                onError(new Error('No access'));
            }
        }, 1000);

    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const ps = prompt('Enter your ps');
userStorage.loginUser(
    id, 
    ps, 
    user =>{
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`hello ${userWithRole.name}! you have a ${userWithRole.role} role`);
            },
            error => {console.log('Error')}
        )
    }, 
    error => {console.log('Error')}
);


