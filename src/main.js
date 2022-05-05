import Vue from "vue"
import VueRouter from "vue-router"
import { Button, message } from "ant-design-vue"
import App from "./App.vue"
import router from "./routes"
import store from "./store"

Vue.use(VueRouter)
Vue.use(Button)

Vue.prototype.$message = message
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
