import {http} from './HttpService'
import id from "bootstrap-vue/esm/mixins/id";
import jwt from "jsonwebtoken";


export function getToken(){
    return localStorage.getItem('token');
}

export function decodeToken(){
    const token = getToken();
    if(!token){
        return null;
    }
    return jwt.decode(token);
}

export function getAllOrders() {
    return http().get('/order/all');
}

export function fetchOrder(id) {
    return http().get(`/order/findOne/${id}`);
}

export function putOrder(id,order) {
    return http().put(`/order/update/${id}`,order,{ headers: {'Content-type': 'application/json'}});
}

export function createOrder(order) {
    return http().post(`/order/add`,order,{ headers: {'Content-type': 'application/json'}});
}

export function deleteOrder(id) {
    return http().delete(`/order/${id}/delete`);
}

export function payOrder(order) {
    return http().put(`/order/payed/${id}`,order);
}

export function unPayOrder(order) {
    return http().put(`/order/unpaid/${id}`,order);
}