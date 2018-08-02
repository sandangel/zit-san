<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { invoiceService } from './invoice_service';

export default Vue.extend({
  name: 'app',
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap-reboot.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1080px;
  margin: auto;
  padding: 20px;
  font-size: 0.9rem;
}

@media only screen and (min-width: 600px) {
  #app {
    font-size: 1rem;
  }
}
</style>
