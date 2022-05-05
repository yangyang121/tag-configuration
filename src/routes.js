import VueRouter from "vue-router"
import TagList from "./pages/tag-list"
import ComponentList from "./pages/component-list"

const routes = [
  { path: "/", redirect: "/tagList" },
  { path: "/tagList", component: TagList },
  { path: "/componentList", component: ComponentList },
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
