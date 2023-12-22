<template>
  <Transition :duration="100">
    <div class="backdrop" @click.self="closeModal">
      <div
        class="modal fade"
        :class="{ show: isopen === 'true' }"
        id="exampleModal-4"
        tabindex="-1"
        aria-labelledby="ModalLabel"
        style="display: block; padding-right: 17px"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalLabel">New message to @mdo</h5>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <h1>{{ header }}</h1>
                </div>
                <div class="form-group">
                  <p>{{ text }}</p>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success">
                Send message
              </button>
              <button type="button" class="btn btn-light" @click="closeModal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  props: ["header", "text", "isopen"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
