import "../styles/app.scss";
import '@fortawesome/fontawesome-free/css/all.css';

import Vue from 'vue';
import App from '../App.vue';

window.onload = function () {
    var app = new Vue({
        el: '#app',
        render: h => h(App)
    }).$mount("#app")
}