<template>
  <transition name="modal-fade">
    <div class="modal-backdrop container-fluid">
      <div class="modal " role="dialog">
        <section class="modal-body">
          <slot name="body">
            Are you sure you want to delete this user?
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-success" @click="close" aria-label="Close modal">Cancel</button>
            <button type="button" class="btn btn-danger" @click="deleteItem"  aria-label="Delete User">Delete</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: 'modal',
        // Emits event to parent component home.vue
        methods: {
            close() {
                this.$emit('close')
            },
            deleteItem() {
                this.$emit('deleteItem')
            },
        },
    };
</script>


<style scoped>
.modal-backdrop {
  background-color: rgba(0,0,0, 0.1);
}
.modal {
  width: 400px;
  height: 150px;
  margin-top: 40vh;
  background: #fff;
  box-shadow: -1px -1px 8px -3px;
  overflow-x: auto;
  display: flex;
  flex-direction: column; 
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease
}
</style>
