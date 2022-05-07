import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载全局样式文件
import '@/styles/index.less'

// 全局导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
