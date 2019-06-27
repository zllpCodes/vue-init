import Vue from 'vue';
import axios from 'axios';
import App from '../pages/App.vue';
import '../style/app.scss';

Vue.prototype.$ajax = axios;

new Vue({
    el: '#app',
    render: h => h(App)
});
