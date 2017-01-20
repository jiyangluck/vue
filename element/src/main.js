import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  // components:{App},
  render: h => h(App)
})