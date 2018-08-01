<template>
  <header class="header-group">
    <div class="header-banner">
      <img class="header-logo" src="../assets/zehitomo-logo.svg" alt="Zehitomo Logo" />
      <span>Zehitomo Inc.</span>
      <span style="flex: auto;" />
      <span>INVOICE</span>
    </div>
    <div class="header-contact">
      <span>Zehitomo Sales </span>
      <span>(877) 412-7753</span>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-group {
  height: 110px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: space-between;
}

.header-logo {
  height: 50px;
  margin-right: 15px;
}

.header-contact {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  font-size: 0.9rem;
  font-weight: 100;
}

.header-banner {
  display: flex;
  flex-flow: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
}

@media only screen and (min-width: 600px) {
  .header-banner {
    font-size: 1.3rem;
  }
}
</style>
