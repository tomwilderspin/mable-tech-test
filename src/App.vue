<template>
  <div id="app">
    <title-bar class="nav" titleText="Github Search"/>
    <router-view/>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue';

export default {
  name: 'App',
  components: {
    TitleBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
