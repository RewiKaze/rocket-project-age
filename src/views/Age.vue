<template>
  <div class="page-input d-flex">
    <b-container class="align-self-center align-items-center">
      <b-row>
        <b-col class="d-flex">
          <img src="../assets/Main/when.png" class="when mx-auto" />
        </b-col>
      </b-row>
      <b-row class="mt-3 mb-3">
        <b-col class="d-flex">
          <b-form-input
            v-model="numAge"
            type="number"
            placeholder="Enter your age (1-100)"
            :number="true"
            :max="100"
            :min="1"
            class="input mx-auto"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="d-flex">
          <cButton
            name="LET'S GO !"
            icon="true"
            v-on:click.native="check"
            class="mx-auto"
          ></cButton>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import router from "@/router";
import Button from "@/components/Button.vue";
export default {
  name: "agePage",
  components: {
    cButton: Button
  },
  methods: {
    check() {
      // if (this.numAge > 0 && this.numAge <= 100) {
      //   this.inputStatus = null;
      //   if (this.numAge >= 20 && this.numAge <= 25) {
      //     router.push("/elon"); //Go to page
      //   } else if (this.numAge > 25 && this.numAge <= 30) {
      //     router.push("/stan");
      //   } else {
      //     router.push("/template");
      //   }
      // } else {
      //   this.inputStatus = false;
      // }
      if (this.numAge > 20) {
        router.push({ path: "/content", query: { age: this.numAge } });
      }
    }
  },
  data() {
    return {
      numAge: null
      //   inputStatus: null
    };
  }
};
</script>
<style>
@media screen and (max-width: 1920px) {
  .when {
    width: 685px;
    height: 494px;
  }
}
.page-input {
  height: 100%;
  background: #aa5c9f;
}
.when {
  width: 30vw;
  height: 30vw;
}
.input {
  /* background-color: transparent; */
  transition: 500ms;
  width: 50%;
}
.input ::placeholder {
  color: white !important;
  opacity: 50%;
}
</style>