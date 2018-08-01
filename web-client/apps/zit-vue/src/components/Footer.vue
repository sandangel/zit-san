<template>
  <footer>
    <span>
      Copyright © 2017 REVOX. All rrights reserved.
    </span>
    <a href="#">Term of use</a>
    <a href="#">Privacy policy</a>
  </footer>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Footer',
});
</script>

<style lang="scss" scoped>
footer {
  margin-top: 20px;
  padding: 20px;
  display: flex;
  font-size: 0.6rem;
  text-align: start;
  a {
    padding: 0 5px;
    color: $zehitomo-primary;
  }
  span {
    width: 50%;
  }
}

@media only screen and (min-width: 600px) {
  footer {
    font-size: 0.8rem;
    a {
      padding: 0 20px;
    }

    span {
      padding-right: 20px;
      width: auto;
    }
  }
}
</style>
