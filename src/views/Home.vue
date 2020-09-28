<template>
  <div class="home">
    <b-container class="d-flex justify-content-center h-100">
      <b-row align-content="center" align-v="center">
        <b-form>
          <h2 class="text-center w-100">How old are you?</h2>
          <b-form-input
            v-model="numAge"
            type="number"
            placeholder="Enter your age (1-100)"
            :number="true"
            :max="100"
            :min="1"
            :state="inputStatus"
          ></b-form-input>
          <cButton
            class="mx-auto mt-5"
            nameButton="Let's Go"
            icon="true"
            v-on:click.native="check"
          ></cButton>
        </b-form>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Button from "@/components/Button.vue";
import router from "@/router";
export default {
  name: "Home",
  components: {
    cButton: Button
  },
  methods: {
    check() {
      if (this.numAge > 0 && this.numAge <= 100) {
        this.inputStatus = null;
        if (this.numAge > 0 && this.numAge <= 5) {
          router.push("/cookie"); //Go to page
        } else {
          router.push("/template");
        }
      } else {
        this.inputStatus = false;
      }
    }
  },
  data() {
    return {
      numAge: null,
      inputStatus: null
    };
  }
};
</script>
<style>
.home {
  height: 100%;
  background: linear-gradient(
    -45deg,
    rgba(243, 166, 166, 1) 0%,
    rgba(168, 107, 181, 1) 100%
  );
  color: #fff;
  background-size: 400% 400%;
  animation: gradient 3.5s ease infinite;
}
</style>
