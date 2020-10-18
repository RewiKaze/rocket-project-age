<template>
  <div class="content">
    <b-container fluid>
      <div class="title">
        When {{ dataPerson[start]["name"] }}
        {{ dataPerson[start]["age"] }} years old. <br />{{
          dataPerson[start]["title"]
        }}
      </div>
      <div class="row">
        <div
          v-if="dataPerson[start].status == 'l'"
          class="col-3 align-self-end h-100 slide-in-left"
          id="dicutl"
          style="z-index:3;"
        >
          <!-- <img src="../assets/42y/Alan Rickman.png" width="500px" /> -->
          <img
            :src="require('@/assets/' + dataPerson[start].person)"
            height="500px"
          />
          <!-- '{{ dataPerson[start].person }}' -->
        </div>
        <div
          class="col text-center slide-in-bottom text-content"
          id="text-animation"
        >
          <p id="data">{{ dataPerson[start]["description"] }}</p>
        </div>
        <div
          v-if="dataPerson[start].status == 'r'"
          class="col-3 align-self-end h-100 slide-in-right"
          id="dicutr"
          style="z-index:3;"
        >
          <img
            :src="require('@/assets/' + dataPerson[start].person)"
            height="500px"
          />
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-12 mx-auto justify-items-center" style="z-index:30;">
          <button @click="back">Back</button>
          <button @click="change">Next</button>
        </div>
      </div>
      <!-- <div class="bg">
        <img
          :src="require('@/assets/' + dataPerson[start].bg)"
          class="bg-img"
        />
      </div> -->
    </b-container>
  </div>
</template>

<script>
import dataPerson from "../assets/data.json";
export default {
  name: "Content",
  data() {
    return {
      dataPerson: dataPerson,
      start: 0,
      max: 0
    };
  },
  created() {
    this.max = this.dataPerson.length;
    document.body.style.background = this.dataPerson[0].color;
  },
  methods: {
    change() {
      if (this.start < this.max) {
        console.log(this.start);
        this.start++;
        document.body.style.background = this.dataPerson[this.start].color;

        document
          .getElementById("text-animation")
          .classList.remove("slide-in-bottom");
        void document.getElementById("text-animation").offsetWidth;
        document
          .getElementById("text-animation")
          .classList.add("slide-in-bottom");
        if (this.dataPerson[this.start].status == "l") {
          document.getElementById("dicutl").classList.remove("slide-in-left");
          void document.getElementById("dicutl").offsetWidth;
          document.getElementById("dicutl").classList.add("slide-in-left");
        } else {
          document.getElementById("dicutr").classList.remove("slide-in-right");
          void document.getElementById("dicutr").offsetWidth;
          document.getElementById("dicutr").classList.add("slide-in-right");
        }
      }
    },
    back() {
      if (this.start > 0) {
        this.start--;
        document.body.style.background = this.dataPerson[this.start].color;
        document
          .getElementById("text-animation")
          .classList.remove("slide-in-bottom");
        void document.getElementById("text-animation").offsetWidth;
        document
          .getElementById("text-animation")
          .classList.add("slide-in-bottom");
        if (this.dataPerson[this.start].status == "l") {
          document.getElementById("dicutl").classList.remove("slide-in-left");
          void document.getElementById("dicutl").offsetWidth;
          document.getElementById("dicutl").classList.add("slide-in-left");
        } else {
          document.getElementById("dicutr").classList.remove("slide-in-right");
          void document.getElementById("dicutr").offsetWidth;
          document.getElementById("dicutr").classList.add("slide-in-right");
        }
      }
    }
  }
};
</script>

<style>
.content {
  height: 100vh;
  width: 100vw;
}
.slide-in-bottom {
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.text-content {
  font-size: 1.3em;
  z-index: 3;
}
@keyframes slide-in-bottom {
  0% {
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.title {
  font-size: 3em;
  z-index: 4;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.bg-img {
  object-fit: contain;
}
.slide-in-left {
  animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes slide-in-left {
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.slide-in-right {
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@keyframes slide-in-right {
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>