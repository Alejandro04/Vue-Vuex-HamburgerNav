import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

Vue.config.productionTip = false

import Slider from '@jeremyhamm/vue-slider'

Vue.use(Slider)

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
