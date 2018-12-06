import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import { routes } from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' // No servidor deve retornar sempre index.html independente do endereço requisitado
 });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
