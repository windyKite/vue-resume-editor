// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AV from 'leancloud-storage'

let bus = new Vue()
Vue.prototype.$bus = bus
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeCreate(){
    let APP_ID = 'uKowACnkYXi62c7SzybxSfqN-gzGzoHsz';
    let APP_KEY = 'Lxc6i2cXqmtnw0XfGk93D27T';
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    })
  },
})

