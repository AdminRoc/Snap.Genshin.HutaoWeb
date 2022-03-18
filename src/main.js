import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import Cookies from 'js-cookie'
import Element from 'element-ui'
import "./plugins";
/**
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
window.store = store
Vue.prototype.$store = store
Vue.config.productionTip = false;
new Vue({
  el: "#vue-admin-beautiful",
  router,
  render: (h) => h(App),
});
