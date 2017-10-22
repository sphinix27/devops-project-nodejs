window._ = require('lodash');

import Vue from 'vue';

import Vuetify from 'vuetify'
Vue.use(Vuetify)

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import EmployeeView from './views/EmployeeView.vue';

const routes = [
    {
        name: 'EmployeeView',
        path: '/',
        component: EmployeeView
    }

];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
