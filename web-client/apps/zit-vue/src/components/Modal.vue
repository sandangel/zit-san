<template>
    <transition name="modal">
        <div class="modal-mask">

            <div class="modal-wrapper">
                <div
                    :style="{width: width, height: height}"
                    class="modal-container"
                >

                    <div class="modal-header">
                        <slot name="header">

                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">

                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">

                        </slot>
                    </div>
            </div>
        </div>

        </div>
    </transition>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Modal',
  props: {
    width: String,
    height: String,
  },
});
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  margin: 0px auto;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: stretch;
}

.modal-body {
  flex: 1;
  display: flex;
  flex-flow: column;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}
</style>
