<template>
    <div class="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BouncingLoader',
});
</script>

<style lang="scss" scoped>
@keyframes bouncing-loader {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
}
.bouncing-loader {
  display: flex;
  justify-content: center;
  height: 100%;
}
.bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 2rem 0.2rem;
  background: #8385aa;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}
.bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}
.bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}
</style>
