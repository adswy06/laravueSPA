import { http, httpFile } from './http_service';
import Axios from 'axios';

export function createProduct(data) {
    return httpFile().post('/products', data);
}

export function loadProducts() {
    return http().get('/products');
}

export function loadCategories() {
    return http().get('/get-categories');
}

export function deleteProduct(id) {
    return http().delete(`/products/${id}`)
}

export function updateProduct(id, data) {
    return httpFile().post(`/products/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`products?page=${nextPage}`);
}

export function searching(keyword) {
    return http().get('findProduct?q=' + keyword)
}

export function findByCategory(id) {
    return http().post(`findByCategory/${id}`);
}