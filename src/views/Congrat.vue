<template>
  <div class="Congrat">
    <img class="congrat" src="@/assets/Congrats/congrat.png" />
    <div class="container content">
      <h1 class="hope" style="z-index:10">
        คุณอาจเป็นคนแรก<br />ที่ประสบความสำเร็จ !!
        <br />
        <b-icon-house-door-fill @click="back" style="cursor:pointer">
        </b-icon-house-door-fill>
      </h1>
    </div>
    <img class="hologram" src="@/assets/Congrats/hologram.png" />
    <div id="particle-container">
      <div v-for="n in 60" :key="n" class="particle"></div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
export default {
  name: "congrat",
  methods: {
    back() {
      router.push("/");
    }
  },
  mounted() {
    document.body.style.background = "linear-gradient(#3e426b, #ac61a9)";
  }
};
</script>
<style>
#particle-container {
  top: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 3;
}
.particle {
  border-radius: 50%;
}
body {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#3e426b, #ac61a9);
  font-family: kanit;
}
.congrat {
  width: 100vw;
  margin: auto;
  display: block;
}
.hope {
  color: white;
  text-align: center;
  font-family: kanit;
  font-weight: 500;
  font-size: 3em;
  line-height: 1.5;
}
.hologram {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 50vw;
  transform: translate(-50%, 0);
}
.content {
  height: 100vh;
  width: 100vw;
}
.hope {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>