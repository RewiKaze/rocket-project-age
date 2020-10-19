<template>
  <div class="wow">
    <img class="wow_line" src="@/assets/Wow/wow_line2.png" />
    <div class="container content">
      <h1 class="hope" style="z-index:10">
        คุณสามารถ<br />สร้างความฝัน<br />อันยิ่งใหญ่ได้!!<br />
        <b-icon-house-door-fill @click="back" style="cursor:pointer">
        </b-icon-house-door-fill>
      </h1>
      <!-- <div class="row button">
        <button type="button" class="btn-home btn btn-outline-light">
          HOME
        </button>
      </div> -->
    </div>
    <img class="moon" src="@/assets/Wow/moon.png" />
    <div id="particle-container">
      <div v-for="n in 60" :key="n" class="particle"></div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
export default {
  name: "wow",
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
.wow_line {
  width: 100vw;
  margin: auto;
  display: block;
}
.hope {
  color: #060c43;
  text-align: center;
  font-family: kanit;
  font-weight: 500;
  font-size: 3em;
  line-height: 1.5;
}
.moon {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 50vw;
  transform: translate(-50%, 0);
  /* margin: auto;
  display: block;
  margin-top: -6%; */
}
.hope {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
}
.content {
  height: 100vh;
  width: 100vw;
}
</style>