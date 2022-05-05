import Vue from "vue"
import Vuex from "vuex"
import component from "./modules/component"
import tag from "./modules/tag"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
  modules: {
    component,
    tag,
  },
  strict: debug,
})
