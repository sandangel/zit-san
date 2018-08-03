import Vue from 'vue';
import App from './App.vue';
import Main from './views/Main';
import Router from 'vue-router';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{ path: '/', name: 'main', component: Main }],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
