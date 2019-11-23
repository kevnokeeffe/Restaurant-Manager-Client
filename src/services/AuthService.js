import store from '../../store'
import {http} from './HttpService'
import jwt from 'jsonwebtoken'


export function isLoggedIn(){
const token = localStorage.getItem('token');
return token != null;
}

export function login(user){
    return http().post('api/user/login', user)
        .then(res =>{
            if (res) {
                console.log(res)
                setToken(res.data.token)
                }
        });
}

export function logout(){
    localStorage.clear();
    store.dispatch('authenticate')
    //return http().get('api/user/logout')
}

function setToken(token){
    localStorage.setItem('token', token);
    store.dispatch('authenticate');
}

export function getToken(){
    return localStorage.getItem('token');
}

export function getEmail() {
    const token = decodeToken();
    if(!token) {
        return null;
    }
    return token.user.email;
}

export function getName() {
    return "Kevin"
}

export function getUserId(){
    const token = decodeToken();
    if(!token) {
        return null;
    }
    return token.user.id;
}

export function registerUser(user){
    return http().post('api/user/register',user);
}

export function decodeToken(){
    const token = getToken();
    if(!token){
        return null;
    }
    return jwt.decode(token);
}

