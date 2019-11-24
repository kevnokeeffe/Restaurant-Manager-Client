import {http} from './HttpService'

export function getAllOrders() {
    return http().get('/order');
}

export function getOrderById(id) {
    return http().get(`/order/${id}`);
}

export function createOrder(order) {
    return http().post(`/order/add`,order);
}

export function deleteOrder(id) {
    return http().delete(`/order/${id}`);
}

export function updateOrder(order) {
    return http().put(`/order/`,order);
}