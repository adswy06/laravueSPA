import { http, httpFile } from './http_service';
import jwt from 'jsonwebtoken';
import store from '../store';

export function register(user) {
    return http().post('/auth/register', user)
}

export function login(user) {
    return http().post('/auth/login', user)
        .then(response => {
            if (response.status === 200) {
                setToken(response.data);
            }
            return response.data;
        })
}

function setToken(user) {
    const token = jwt.sign({ user: user }, 'thisIsmyToken');
    localStorage.setItem('laravue-spa-token', token);
    store.dispatch('authenticate', user.user);
}

export function isLoggedIn() {
    const token = localStorage.getItem('laravue-spa-token');
    return token != null;
}

export function logout() {
    http().get('/auth/logout');
    localStorage.removeItem('laravue-spa-token');
}

export function getAccessToken() {
    const token = localStorage.getItem('laravue-spa-token');
    if (!token) {
        return null;
    }

    const tokenData = jwt.decode(token);
    return tokenData.user.access_token;
}

export function getProfile() {
    return http().get('/auth/profile');
}