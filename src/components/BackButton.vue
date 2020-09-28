<template>
  <div class="back">
    <b-icon-house-fill
      class="d-flex mx-auto bottom"
      scale="4"
    ></b-icon-house-fill>
  </div>
</template>

<style>
.back {
  cursor: pointer;
}
.bottom {
  position: absolute;
  bottom: 5%;
  left: 50%;
  z-index: 2;
}
</style>

<script>
export default {
  name: "backButton"
};
</script>
