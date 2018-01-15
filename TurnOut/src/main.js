import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import { firebaseApp } from './firebase';
import store from './store';

Vue.use(VueRouter);

import Dashboard from './components/Dashboard.vue';
import Signup from './components/Signup.vue';
import Signin from './components/Signin.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/signup', component: Signup },
    { path: '/signin', component: Signin },
    { path: '/dashboard', component: Dashboard }
  ]
});

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user);
    router.push('/dashboard');
  } else {
    router.replace('/signin');
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
