
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import VueMaterial from 'vue-material'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(VueMaterial)
Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false;
const config = {
  apiKey: "AIzaSyCBdeGr7WEi53ZzmWqrJTVS5fD_ntacmEQ",
    authDomain: "cardapio-v3.firebaseapp.com",
    databaseURL: "https://cardapio-v3.firebaseio.com",
    projectId: "cardapio-v3",
    storageBucket: "cardapio-v3.appspot.com",
    messagingSenderId: "741796839864"
};
firebase.initializeApp(config);

const router = new VueRouter({
  routes,
  mode: 'history' // No servidor deve retornar sempre index.html independente do endereço requisitado
 });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
