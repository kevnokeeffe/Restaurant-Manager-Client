import store from '../../store'
import {http} from './HttpService'



export function isLoggedIn(){
const token = localStorage.getItem('token');
return token != null;
}

export function login(user){
    return http().post('api/user/login', user)
        .then(res =>{
            if (res) {
                setToken(res.data.token)
                }
        });
}

function setToken(token){
    localStorage.setItem('token', JSON.stringify(token));
    store.dispatch('authenticate');
}

export function getEmail() {
    return "kevokeeffe@gmail.com";
}

export function getName() {
    return "Kevin"
}

export function getUserId(){
    return 1;
}

export function registerUser(user){
    return http().post('api/user/register',user);
}

