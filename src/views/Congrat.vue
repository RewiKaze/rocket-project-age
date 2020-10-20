<template>
  <div class="Congrat">
    <audio autoplay>
      <source src="@/Congrat.mp3" type="audio/mpeg">
    </audio>
    <img class="congrat" src="@/assets/Congrats/congrat.png" />
    <div class="container content">
      <p class="gettext3 m-auto underline text-center">IT's Your Turn ..!</p>
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
@import url("https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@700&display=swap");

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
  color: white !important;
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

.gettext3 {
  font-family: "Sansita Swashed", cursive;
  color: white !important;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  /* number of lines to show */
  -webkit-box-orient: vertical;
  text-shadow: 3px 1px #222324, 1px 2px #222324, 1px 3px #222324;
}

.underline {
  font-size: 100px;
  height: 45vh;
  position: relative;
  -webkit-animation: roll-in-blurred-left 0.65s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: roll-in-blurred-left 0.65s cubic-bezier(0.23, 1, 0.32, 1) both;
}

@-webkit-keyframes roll-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1000px) rotate(-720deg);
    transform: translateX(-1000px) rotate(-720deg);
    -webkit-filter: blur(50px);
    filter: blur(50px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes roll-in-blurred-left {
  0% {
    -webkit-transform: translateX(-1000px) rotate(-720deg);
    transform: translateX(-1000px) rotate(-720deg);
    -webkit-filter: blur(50px);
    filter: blur(50px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
</style>
