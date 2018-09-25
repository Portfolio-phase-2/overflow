import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import wysiwyg from 'vue-wysiwyg'
import FBSignInButton from 'vue-facebook-signin-button'

Vue.use(FBSignInButton)
Vue.use(wysiwyg, {
  hideModules: { 'image': true, 'removeFormat': true }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
