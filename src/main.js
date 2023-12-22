import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
// import
import "@mdi/font/css/materialdesignicons.css";
import "bootstrap/dist/css/bootstrap.css";
// import "@mdi/font/css/materialdesignicons.css";
import "./plugins/DarkDashboard";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "bootstrap/dist/js/bootstrap.js";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import "bootstrap-vue/dist/bootstrap-vue.js";

// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);
// Vue.use(DarkDashboard);

createApp(App).use(router).mount("#app");
