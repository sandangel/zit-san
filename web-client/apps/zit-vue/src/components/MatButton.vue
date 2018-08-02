<template>
  <button
    class="mat-button"
    type="button"
    @click="$emit('click', $event)"
  >
    <span>
      <slot></slot>
    </span>
    </button>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'MatButton',
});
</script>

<style lang="scss" scoped>
.mat-button {
  height: 40px;
  padding: 0 10px;
  margin: 20px;
  border-radius: 5px;
  background-color: $zehitomo-primary;
  color: white;
  border: 0px solid transparent;
  box-shadow: 0 1px 3px #e6ebf1;
  transition: box-shadow 300ms ease, background-color 0.3s ease;
  overflow: hidden;
  position: relative;

  // Ink effect
  &:before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(236, 240, 241, 0.3);
    transform: translate(-50%, -50%);
  }

  &:active:before {
    width: 120%;
    padding-top: 120%;

    transition: width 0.3s ease-out, padding-top 0.3s ease-out;
  }

  &:focus {
    outline: none;
  }
}
</style>

