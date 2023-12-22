import Navbar from "./NavBar.vue";
import NavbarLink from "./NavbarLink.vue";

const NavbarStore = {
  showNavbar: false,
  navbarLinks: [],
  displayNavbar(value) {
    this.showNavbar = value;
  },
};

const NavbarPlugin = {
  install(Vue) {
    let app = new Vue({
      data: {
        navbarStore: NavbarStore,
      },
    });

    Vue.prototype.$navbar = app.navbarStore;
    Vue.component("nav-bar", Navbar);
    Vue.component("navbar-link", NavbarLink);
  },
};

export default NavbarPlugin;
