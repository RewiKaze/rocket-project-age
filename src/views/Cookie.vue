<template>
  <div class="cookie">
    <cButton nameButton="Back" v-on:click.native="back"></cButton>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import router from "@/router";
export default {
  name: "Cookie",
  components: { cButton: Button },
  methods: {
    back() {
      router.push("/");
    }
  }
};
</script>

<style>
.cookie {
  background: linear-gradient(
    135deg,
    rgba(252, 221, 157, 1) 0%,
    rgba(219, 184, 95, 1) 100%
  );
  background-size: 400% 400%;
  width: 100%;
  height: 100%;
  /* animation: gradient 3.5s ease infinite; */
}
</style>
