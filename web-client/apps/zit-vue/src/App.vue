<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script src="./App.ts" lang="ts">
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
