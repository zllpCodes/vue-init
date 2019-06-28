import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

import '../style/common.scss';

import App from '../pages/App.vue';
import Index from '../pages/Index.vue';
import List from '../pages/List.vue';

// 将VueRouter注册到Vue上
Vue.use(VueRouter);
// 将axios挂载到Vue原型链上，方便使用
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