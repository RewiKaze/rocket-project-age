<template>
  <div id="app">
    <vue-page-transition style="height: 100vh;">
      <!-- <transition name="fade"> -->
      <router-view />
      <!-- </transition> -->
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
@import url("particle.css");
#app {
  overflow: hidden;
  height: 100vh;
}
:root {
  --overlay-bg: linear-gradient(
    303deg,
    rgba(77, 27, 123, 1) 0%,
    rgba(54, 59, 116, 1) 100%
  ) !important;
  /* --transition-duration: 0.35s; */
  z-index: 10;
}
.overlay-right[data-v-4c22b934] {
  z-index: 10000;
}
/* @keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
} */
body {
  transition: 1s;
}
</style>
