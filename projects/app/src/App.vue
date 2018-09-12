<template>
  <div id="app">
    <h1>Awesome app</h1>
    <awesome-button text="aweseom button from Lib"></awesome-button>
  </div>
</template>

<script>
import Components from "@doppelmutzi/awesome-components";

export default {
  name: "app",
  components: {
    ...Components
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
