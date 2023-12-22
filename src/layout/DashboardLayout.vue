<template>
  <div class="wrapper">
    <nav-bar>
      <template slot="links">
        <navbar-link
          to="/dashboard"
          :name="$t('navbar.dashboard')"
          icon="tim-icons icon-chart-pie-36"
        />
        <!-- <navbar-link to="/icons" :name="$t('navbar.icons')" icon="tim-icons icon-atom"/>
        <navbar-link to="/maps" :name="$t('navbar.maps')" icon="tim-icons icon-pin"/>
        <navbar-link to="/notifications" :name="$t('navbar.notifications')" icon="tim-icons icon-bell-55"/>
        <navbar-link to="/profile" :name="$t('navbar.userProfile')" icon="tim-icons icon-single-02"/>
        <navbar-link to="/table-list" :name="$t('navbar.tableList')" icon="tim-icons icon-puzzle-10"/>
        <navbar-link to="/typography" :name="$t('navbar.typography')" icon="tim-icons icon-align-center"/>
        <navbar-link to="/dashboard?enableRTL=true" :name="$t('navbar.rtlSupport')" icon="tim-icons icon-world"/> -->
      </template> </nav-bar
    >ssssssssssssssssssssss
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleNavbar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
  },
  methods: {
    toggleNavbar() {
      if (this.$navbar.showNavbar) {
        this.$navbar.displayNavbar(false);
      }
    },
  },
};
</script>
