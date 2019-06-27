import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

import '../style/app.scss';

import App from '../pages/App.vue';
import Index from '../pages/Index.vue';
import List from '../pages/List.vue';

Vue.use(VueRouter);
Vue.prototype.$ajax = axios;

const router = new VueRouter({
    routes: [{
            path: '/',
            component: Index
        },
        {
            path: '/list',
            component: List
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});