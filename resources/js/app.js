import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';
import VueConfirmDialog from 'vue-confirm-dialog';

Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('vue-confirm-dialog', VueConfirmDialog.default);

Vue.use(BootstrapVue);
Vue.use(FlashMessage);
Vue.use(VueConfirmDialog);

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});