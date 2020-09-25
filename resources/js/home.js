import Home from './components/Home/layout/Header.vue';
import Vue from 'vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Home),
});