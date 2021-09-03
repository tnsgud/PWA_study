import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'
import './registerServiceWorker'

import firebase from 'firebase/app'
import  '@/datasources/firebase'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  created() {
    firebase.auth().onAuthStateChanged(pUserInfo => {
      if(pUserInfo) {
        store.dispatch('fnDoLoginAuto', pUserInfo)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
