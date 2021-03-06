// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Playground from './components/Playground.vue'
import Vuetify from 'vuetify'
import router from './router'
import('../node_modules/vuetify/dist/vuetify.css')

Vue.config.productionTip = false

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Playground },
  template: '<Playground/>'
})
