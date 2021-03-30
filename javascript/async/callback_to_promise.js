//callback hell ex

class UserStorage{
    loginUser(id, ps){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'Aperture' && ps === 'glados') ||
                    (id === 'Reena' && ps === 'suki')
                ){
                    resolve(id);
                } else {
                    reject(new Error('Not found'));
                }
            }, 2000);   //네트워크 통신하며 로그인하는데 2초정도 걸리는 것처럼 

        })
    }

    getRoles(user){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if (user === 'Aperture'){
                    resolve({name: 'Aperture', role: 'admin'});
                } else {
                    reject(new Error('No access'));
                } 
            }, 1000);
    
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your id');
const ps = prompt('Enter your ps');
userStorage 
    .loginUser(id, ps)
    .then(userStorage.getRoles)
    .then(user =>  alert(`hello ${user.name}! you have a ${user.role} role`))
    .catch(console.log);
