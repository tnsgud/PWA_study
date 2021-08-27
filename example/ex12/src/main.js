import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
// import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import { initializeApp } from 'firebase/app';
import './datasources/firebase'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    created() {
        initializeApp.auth().onAuthSateChanged((pUserInfo) => {
            if (pUserInfo) {
                store.dispatch('fnDoLoginAuto', pUserInfo);
            }
        });
    },
    render: (h) => h(App),
}).$mount('#app');
