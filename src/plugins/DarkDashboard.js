import NavBar from "../components/NavbarPlugin";
// import Notify from "@/components/NotificationPlugin";
// import GlobalComponents from "./globalComponents";
// import GlobalDirectives from "./globalDirectives";
// import RTLPlugin from "./RTLPlugin";

//css assets
// import "@/assets/sass/black-dashboard.scss";
// import "@/assets/css/nucleo-icons.css";
import "../assets/css/custom/style.css";

export default {
  install(Vue) {
    // Vue.use(GlobalComponents);
    // Vue.use(GlobalDirectives);
    Vue.use(NavBar);
    // Vue.use(Notify);
    // Vue.use(RTLPlugin);
  },
};
