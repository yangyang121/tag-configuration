import Vue from "vue"
import App from "./App.vue"
import { Button, message } from "ant-design-vue"
Vue.use(Button)

Vue.prototype.$message = message
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app")
