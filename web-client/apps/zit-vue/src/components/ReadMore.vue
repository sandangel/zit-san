<template>
  <p>
    <span>{{textWithLength}}</span>
    <span
      class="hover-underline-animation"
      @click="expanded = !expanded"
    > {{ expanded ? 'less': 'more'}}</span>
  </p>
</template>

<script src="./ReadMore.ts" lang="ts">
</script>

<style lang="scss" scoped>
p {
  span:first-of-type {
    margin-right: 5px;
  }
}
.hover-underline-animation {
  cursor: pointer;
  display: inline-block;
  position: relative;
  color: $zehitomo-primary;
}
.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: $zehitomo-primary;
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}
.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>


