<template>
  <div class="home d-flex">
    <div class="quotes mx-auto ml13" id="quote">
      "{{ quote }}" - {{ person }}
    </div>
    <img src="../assets/Main/logo.png" class="logo fixed-bottom" />
    <cButton
      name="START!"
      icon="true"
      class="position-fixed"
      style="z-index:1040; top:85%; left:50%; transform: translate(-50%,-50%);"
      v-on:click.native="next"
    ></cButton>
    <!-- Animation -->
    <div id="particle-container">
      <div v-for="n in 60" :key="n" class="particle"></div>
    </div>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
<script>
// @ is an alias to /src
import json from "../assets/quotes.json";
import Button from "@/components/Button.vue";
import router from "@/router";
var vue = undefined;
// console.log("Hello");
export default {
  name: "Home",
  components: {
    cButton: Button
  },
  methods: {
    next() {
      router.push("/age");
    },
    changeQuote() {
      this.persons = Object.keys(this.data[0]);
      this.number = Math.floor(
        Math.random() * Object.keys(this.data[0]).length
      );
      this.quote = this.data[0][this.persons[this.number]];
      this.person = this.persons[this.number];
    },
    animation() {
      var textWrapper = document.querySelector(".ml13");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
      anime
        .timeline({
          loop: false
        })
        .add({
          targets: ".ml13 .letter",
          translateY: [100, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 300 + 30 * i
        })
        .add({
          targets: ".ml13 .letter",
          translateY: [0, -100],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 1200,
          delay: (el, i) => 100 + 30 * i,
          update: function(anim) {
            if (Math.round(anim.progress == 100)) {
              document.getElementById("quote").innerText =
                '"' + vue.quote + '" -' + vue.person;
              vue.changeQuote();
              // console.log(vue.quote);
              vue.animation();
            }
            // console.log(Math.round(anim.progress));
          }
        });
    }
  },
  data() {
    return { data: json, quote: "", persons: [], person: "", number: 0 };
  },
  created() {
    this.changeQuote();
    vue = this;
    // console.log(Object.keys(this.data[0]).length); // Get key length
    // console.log(Object.keys(this.data[0])); //get key data
    // console.log(Math.floor(Math.random() * Object.keys(this.data[0]).length)); //random num
  },
  mounted() {
    this.animation();
  }
};
</script>
<style>
body {
  background: black;
  overflow: hidden;
}
#particle-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 3;
}
.particle {
  border-radius: 50%;
}
@media screen and (max-width: 1919px) {
  .logo {
    width: 1334px;
    height: 807px;
  }
}
.ml13 {
  font-size: 1.5em;
  text-transform: uppercase;
  /* text-align: center; */
  letter-spacing: 0.25em;
  font-weight: 600;
}

/* .ml13 .letter {
  display: inline-block;
  line-height: 1em;
} */
.home {
  height: 100%;
  background: #aa5c9f;
  color: #fff;
  background-size: 400% 400%;
  cursor: default;
  /* animation: gradient 3.5s ease infinite; */
}
.logo {
  z-index: 2;
  cursor: default;
}
.star {
  position: absolute;
  bottom: 0;
  left: 10px;
  z-index: 3;
  width: auto;
  height: auto;
  cursor: default;
}
.quotes {
  margin-left: 50%;
  margin-right: 50%;
  margin-top: 2.5em;
  font-size: 1.5em;
  text-align: center;
}
</style>
