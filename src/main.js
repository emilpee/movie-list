import Vue from 'vue'
import App from './App.vue'
import {fb} from '../firebase-config';
import VueFire from 'vuefire'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueFire);

let app = '';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

fb.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});