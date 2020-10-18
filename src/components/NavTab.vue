<template>
  <div class="navTab bottom">
    <div class="home">
      <b-icon-house-fill class="d-flex mx-auto" scale="4"></b-icon-house-fill>
    </div>
  </div>
</template>

<style>
.navTab {
  display: inline;
  z-index: 2;
}
.back {
  cursor: pointer;
}
/* .bottom { */
/* width: 100%; */
/* position: absolute; */
/* bottom: 5%; */
/* left: 50%; */
/* } */
.home {
  cursor: pointer;
}
</style>

<script>
export default {
  name: "navTab",
  props: ["next", "back"]
};
</script>
