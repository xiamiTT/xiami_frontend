import Vue from 'vue';
import router from 'vue-router';

import './css/style.css'


import AppComponent from './component/App.vue';



new Vue({
    el: '#app',

    render: c => c(AppComponent),
    router


})