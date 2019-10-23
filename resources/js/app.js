require('./bootstrap')

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import Notifications from 'vue-notification'
Vue.use(Notifications)

import App from '@/App.vue'
Vue.component('App', App)

import '@/system'
import router from '@/router'
import store from '@/store'

new Vue({
  el: '#app',
  router,
  store
})