<template>
  <div id="app">
    <fixed-task />
  </div>
</template>

<script>
import FixedTask from "./screens/FixedTask"

export default {
  name: "App",
  components: {
    FixedTask
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
