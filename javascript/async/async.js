//async & await

function fetchUser(){
    //do network process 10sec
    return 'Aperture';
}

const user = fetchUser(); //자바 스크립트는 동기적인 처리를 하기 때문에 여기서 fetchUser함수를 받고 위에서 불러오는데 10초가 소요된 후
                          //다시 Aperture을 return 받아 11번째 줄을 실행하고 그 뒤를 실행한다. -> 비동기적으로 처리해야 효율적
console.log(user);

//Promise를 통해 하는법
function fetchUser1(){
    return new Promise((resolve, reject) => {
        //do network process 10sec
        resolve ('Aperture');
    })
}

const user1 = fetchUser1();
user1.then(console.log);
console.log(user1);


//async
async function fetchUser2(){
    return 'Reena';
}

const user2 = fetchUser2();
user2.then(console.log);
console.log(user2);
//async를 붙이면 promise와 똑같은 역할을 수행한다.


//await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000);
    return 'Apple';
}
async function getBanana(){
    await delay(2000);
    return 'Banana';
}

async function getFruits(){
    //const apple = await getApple();            //직렬적으로 수행하기 때문에 총 4초가 걸린다.
    //const banana = await getBanana();

    const applePromise = getApple();             //병렬 수행이긴 하지만 더러운 코드
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return (`${apple} + ${banana}`);
}
getFruits().then(console.log);


//USEFUL PROMISE API
function getAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
getAllFruits().then(console.log);
