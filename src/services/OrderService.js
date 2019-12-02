import {http} from './HttpService'
import id from "bootstrap-vue/esm/mixins/id";

export function getAllOrders() {
    return http().get('/order/all');
}

export function getOrderById(id) {
    return http().get(`/order/${id}`);
}

export function updateOrder(id,order) {
    return http().put(`/order/${id}`,order,{ headers: {'Content-type': 'application/json'} });
}

export function createOrder(order) {
    return http().post(`/order/add`,order);
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