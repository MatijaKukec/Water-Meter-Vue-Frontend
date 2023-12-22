<template>
  <NavBar />
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="row">
        <div
          class="content-wrapper full-page-wrapper auth option-2 register-half-bg"
        >
          <router-view />
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- row ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!--   
  <h1>{{ title }}</h1>
  <p>Wellcome</p>
  <br />
  <p>Here cums the modal</p>

 // Button to open the modal 
  <button class="btn btn-primary btn-sm" @click="openModal">
    Novi vodomjer<i class="mdi mdi-play-circle ms-1"></i>
  </button>

  // Modal component 
  <Modal
    :show.sync="showModal"
    :showClose="true"
    centered
    type="notice"
    :modalClasses="modalClasses"
    :modalContentClasses="modalContentClasses"
    gradient="primary"
    :headerClasses="headerClasses"
    :bodyClasses="bodyClasses"
    :footerClasses="footerClasses"
    :animationDuration="500"
    @close="closeModal"
  >
     //Modal header
    <template #header>
      <h2>Modal Header</h2>
    </template>

    // Modal content 
    <p>Modal Content</p>

    //Modal footer 
    <template #footer>
      <button class="btn btn-danger" @click="closeModal">Close</button>
    </template> 
  </Modal>

  <HelloWorld />
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <button @click="toggleModal">Toggle Modal</button>
  <router-view />-->
  <footer class="footer container">
    <div class="d-sm-flex justify-content-center justify-content-sm-between">
      <span
        class="text-muted d-block text-center text-sm-left d-sm-inline-block"
        >Copyright © Matija Kukec d.o.o. 2023, Zagreb</span
      >
      <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
        Smart metering
        <a href="mailto:matija.kuk5@gmai.com" target="_blank">Matija Kukec </a>
        Mjerenje potrošnje</span
      >
    </div>
  </footer>
</template>

<script>
import Modal from "./components/Modal.vue";
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavbarPlugin/NavBar.vue";

export default {
  name: "App",
  components: { NavBar, Modal, HelloWorld },
  data() {
    return {
      title: "Neki naslov",
      showModal: false,
      modalClasses: "custom-modal-class",
      modalContentClasses: "custom-modal-content-class",
      headerClasses: "custom-header-class",
      bodyClasses: "custom-body-class",
      footerClasses: "custom-footer-class",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
      // if (show === false) {
      //   show = true;
      // } else {
      //   show = false;
      // }
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
