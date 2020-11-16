<template>
  <div class="wait-to-end">
    <div id="particle-container">
      <div v-for="n in 60" :key="n" class="particle"></div>
    </div>
    <div class="wait alltext m-auto front" id="first">
      <p class="text-center text-focus-in">แต่เดี๋ยวก่อน. . .</p>
    </div>
    <div class="wait alltext m-auto front" id="second">
      <p class="text-center">
        นี่เป็นเพียงคนที่ประสบความสำเร็จตอนอายุใกล้เคียงกับคุณเท่านั้น
      </p>
    </div>
    <div class="wait alltext m-auto front" id="third">
      <p class="text-center">
        ยังมีผู้คนอีกมากมายที่ใช้เวลาทั้งชีวิตเพื่อท้าทายความฝันที่ยิ่งใหญ่ของพวกเขา
      </p>
    </div>
    <div class="wait alltext m-auto front" id="forth">
      <p class="text-center">
        มาดูกันดีกว่าว่ามีใครบ้างที่พยายามอย่างหนักไปจนถึงช่วงอายุ 100 ปี!
      </p>
    </div>
  </div>
</template>

<style>
/* Particla in Page */
#particle-container {
  top: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 4;
}
.particle {
  border-radius: 50%;
}

/* Element in Page */
.front {
  z-index: 10;
}
.wait {
  font-size: 50px;
  display: block;
  color: white;
}
.alltext {
  font-family: "Kanit", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#second {
  display: none;
}
#third {
  display: none;
}
#forth {
  display: none;
}

/* Animation */

.text-focus-in {
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
.text-blur-out {
  animation: text-blur-out 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes text-blur-out {
  0% {
    filter: blur(0.01);
  }
  100% {
    filter: blur(12px) opacity(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-in {
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.fade-out {
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both reverse;
}
</style>

<script>
import router from "@/router";
export default {
  name: "NotEnd",
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      setTimeout(() => {
        document.getElementById("first").classList.remove("text-focus-in");
        document.getElementById("first").classList.add("text-blur-out");
      }, 2000);
      setTimeout(() => {
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        document.getElementById("second").classList.add("fade-in");
      }, 4200);
      setTimeout(() => {
        document.getElementById("second").classList.remove("fade-in");
        document.getElementById("second").classList.add("text-blur-out");
      }, 6000);
      setTimeout(() => {
        document.getElementById("second").style.display = "none";
        document.getElementById("third").style.display = "block";
        document.getElementById("third").classList.add("fade-in");
      }, 7200);
      setTimeout(() => {
        document.getElementById("third").classList.remove("fade-in");
        document.getElementById("third").classList.add("text-blur-out");
      }, 9000);
      setTimeout(() => {
        document.getElementById("third").style.display = "none";
        document.getElementById("forth").style.display = "block";
        document.getElementById("forth").classList.add("fade-in");
      }, 10200);
      setTimeout(() => {
        router.push({
          path: "/content",
          query: {
            ageInput: 100,
            continue: parseInt(this.$route.query.start),
          },
        });
      }, 13000);
    },
  },
};
</script>