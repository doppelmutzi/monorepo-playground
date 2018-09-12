<template>
    <button>{{ text }}</button>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: String
  }
};
</script>

<style scoped>
button {
  background: silver;
  color: red;
}
</style>

