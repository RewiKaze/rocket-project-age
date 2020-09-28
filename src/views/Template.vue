<template>
  <div class="template">Test Template</div>
</template>

<script>
export default {
  name: "Template"
};
</script>

<style>
.template {
  background: linear-gradient(135deg, red 0%, white 100%);
  background-size: 400% 400%;
  width: 100vw;
  height: 100vh;
  animation: gradient 3.5s ease infinite;
}
</style>
