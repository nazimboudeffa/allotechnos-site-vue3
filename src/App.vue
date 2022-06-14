<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <!-- 
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
  -->
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */

export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style lang="scss">
$darkmode-bg-color: #38383a;
$darkmode-color: whitesmoke;
$darkmode-anchor-color: hotpink;
body {
  background: $darkmode-bg-color;
  color: $darkmode-color;

}
a {
  color: $darkmode-anchor-color;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
