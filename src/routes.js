import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue"
import OtherPage from "./components/OtherPage.vue"
import NotFound from "./components/NotFound.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/other-page",
    name: "OtherPage",
    component: OtherPage,
  },
  {
    path: "/error-404",
    name: "NotFound",
    component: NotFound,
  }
];

const router = new VueRouter({
    mode: "history",
    routes
});
  
export default router;