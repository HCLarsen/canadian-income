<template>
  <div id="app">
    <Comparator/>
  </div>
</template>

<script>
import HelloWorld from './components/Comparator.vue'

export default {
  name: 'App',
  components: {
    Comparator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
