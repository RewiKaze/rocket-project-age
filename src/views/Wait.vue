<template>
  <div class="wait">
    <div id="particle-container">
      <div v-for="n in 60" :key="n" class="particle"></div>
    </div>
    <div class="wait alltext m-auto front">
      <p class="text-center text-focus-in" id="first">แต่เดี๋ยวก่อน. . .</p>
    </div>

    <!-- user put their name and click ok to text -->
    <div class="name alltext m-auto front" style="width: 20em;" id="second">
      <p class="text-center m-auto">เราขอรู้ชื่อของคุณหน่อย</p>
      <div
        class="input-group mb-3 mt-3"
        style="width:50vw; margin-left:auto; margin-right:auto;"
      >
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="กรอกชื่อจริงของคุณ"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          v-model="name"
          style="w"
        />
      </div>
      <cButton
        name="GO!"
        style="font-size:20px; height:40px"
        class="center"
        v-on:click.native="getName"
      ></cButton>
    </div>

    <!-- Show thier name and Finally!!, Click to Continue -> Wow -->
    <div class="final alltext m-auto front" id="third" style="width: 20em;">
      <p id="show">สู้ๆนะคุณ {{ name }}</p>
      <p></p>
      <p>พวกเราเชื่อว่าคุณก็เป็นอย่างพวกเขาได้นะ. . !</p>
      <!-- put many dicut here -->
      <p style="text-align:center; cursor:pointer;" @click="goToWow">
        Click to Continue
      </p>
    </div>
    <div id="final">
      <img
        :src="require('@/assets/50yV2/Charlie.png')"
        style="position:absolute;bottom:0; left:0;"
        width="250px"
      />
      <img
        :src="require('@/assets/78y/grand.png')"
        style="position:absolute;bottom:0; right:0;"
        width="500px"
      />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");

.front {
  z-index: 10;
}
.alltext {
  font-family: "Kanit", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.center {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
.wait {
  font-size: 50px;
  display: block;
  color: white;
}
.name {
  display: none;
}
.final {
  display: none;
}
#final {
  display: none;
}

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
.fade-out {
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both reverse;
}
</style>

<script>
import button from "@/components/Button.vue";
import router from "@/router";
export default {
  name: "wait",
  data() {
    return {
      name: null
    };
  },
  components: {
    cButton: button
  },
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
    },
    getName() {
      document.getElementById("second").style.display = "none";
      document.getElementById("third").style.display = "block";
      document.getElementById("final").style.display = "block";
      document.getElementById("third").classList.add("fade-in");
      document.getElementById("final").classList.add("fade-in");
    },
    goToWow() {
      router.push("/wow");
    }
  }
};
</script>