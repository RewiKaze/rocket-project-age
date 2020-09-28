<template>
  <button class="button button-next" type="button">
    <span class="button-text">{{ nameButton }}</span>
    <div v-if="icon">
      <b-icon-arrow-right animation="cylon"></b-icon-arrow-right>
    </div>
  </button>
</template>

<style>
.button {
  position: relative;
  height: 60px;
  width: 300px;
  background-color: transparent;
  border: 3px solid #fff;
  color: #fff;
  cursor: pointer;
  transition: color 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9);
}
.button::before {
  content: "";
  /*surprise จัดบอกเลยอันนี้*/
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #fff;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9);
}
.button:hover.button-next {
  color: black;
}
.button:hover::before {
  transform: scaleX(1);
}
.button-text {
  position: relative;
}
button {
  font-family: inherit;
  font-size: inherit;
}
</style>

<script>
export default {
  name: "Button",
  props: ["nameButton", "icon"]
};
</script>
