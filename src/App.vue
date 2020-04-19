<template>
  <div id="app">
    <h1>{{title}}</h1>
    <Comparator/>
  </div>
</template>

<script>
import Comparator from './components/Comparator.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Canadian Income Comparator'
    }
  },
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
