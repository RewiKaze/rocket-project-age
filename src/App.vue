<template>
  <div id="app">
    <vue-page-transition style="height:100vh">
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
#app {
  height: 100vh;
}
:root {
  /* --overlay-bg : color  เปลี่ยนสี transition*/
  --transition-duration: 1.5s;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
