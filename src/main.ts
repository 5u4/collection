import Vue from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import store from "./store";
import VueApollo from "vue-apollo";
import "./registerServiceWorker";
import "ant-design-vue/dist/antd.css";
import { client } from "./client";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueApollo);

new Vue({
  store,
  apolloProvider: new VueApollo({ defaultClient: client }),
  render: h => h(App)
}).$mount("#app");
