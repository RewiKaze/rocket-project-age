<template>
  <div class="content">
    <b-container fluid class="h-100 w-100">
      <div class="title" id="title" style="margin-top:7%;">
        When
        <div class="d-inline text-blur-in" id="nameAnimation">
          {{ dataPerson[start]["name"] }}
        </div>
        <div class="d-inline text-blur-in" id="ageAnimation">
          &nbsp;{{ dataPerson[start]["age"] }}
        </div>
        years old.
        <br />
        <div class="text-blur-in" id="titleAnimation">
          {{ dataPerson[start]["title"] }}
        </div>
      </div>
      <div class="row mt-4" id="rowContent">
        <div
          v-if="dataPerson[start].status == 'l'"
          class="col-4 align-self-end h-100 slide-in-left"
          id="dicutl"
          style="z-index:3;"
        >
          <!-- <img src="../assets/42y/Alan Rickman.png" width="500px" /> -->
          <img
            class="setBottomleft"
            :src="require('@/assets/' + dataPerson[start].person)"
            width="100%"
            rel="preload"
          />
          <!-- '{{ dataPerson[start].person }}' -->
        </div>
        <div
          class="col text-center slide-in-bottom text-content p-5"
          id="text-animation"
        >
          <p id="data" class="gettext">
            {{ dataPerson[start]["description"] }}
          </p>
          <b-button v-b-modal.modal-scrollable variant="outline-light"
            >อ่านเพิ่มเติม</b-button
          >
        </div>
        <div
          v-if="dataPerson[start].status == 'r'"
          class="col-4 align-self-end h-100 slide-in-right"
          id="dicutr"
          style="z-index:3;"
        >
          <img
            class="setBottomright"
            :src="require('@/assets/' + dataPerson[start].person)"
            width="100%"
            rel="preload"
          />
        </div>
      </div>
      <div class="bg fade-in" id="bg-reload">
        <img
          :src="require('@/assets/' + dataPerson[start].bg)"
          class="bg-img"
          style="z-index:1"
          rel="preload"
        />
      </div>
      <div style="z-index:30;" class="navTab" id="navTab">
        <b-icon-caret-left-fill
          style="cursor:pointer"
          scale="3"
          @click="back"
          v-if="start != 0"
        ></b-icon-caret-left-fill>
        <b-icon-house-door-fill
          @click="home"
          scale="3"
          style="cursor:pointer"
          class="mr-5 ml-5"
        >
        </b-icon-house-door-fill>
        <b-icon-caret-right-fill
          style="cursor:pointer"
          scale="3"
          @click="change"
        ></b-icon-caret-right-fill>
      </div>

      <!-- pop-up -->
      <b-modal
        id="modal-scrollable"
        style="color:black"
        ok-only
        scrollable
        title="Person Info"
      >
        <p id="dataModal">{{ dataPerson[start]["description"] }}</p>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import dataPerson from "../assets/data.json";
import router from "@/router";
export default {
  name: "Content",
  data() {
    return {
      dataPerson: dataPerson,
      start: 0,
      max: 0,
      limitAge: 0
    };
  },
  created() {
    this.max = this.dataPerson.length;
    document.body.style.background = this.dataPerson[0].color;
    this.limitAge = parseInt(this.$route.query.age);
    document.body.style.color = "black";
    document.getElementById("title").style.color = this.dataPerson[
      this.start
    ].tone;
  },
  mounted() {
    document.getElementById("title").style.color = this.dataPerson[
      this.start
    ].tone;
    for (let index = 0; index < this.max; index++) {
      new Image().src = require("@/assets/" + dataPerson[index].bg);
      new Image().src = require("@/assets/" + dataPerson[index].person);
      console.log("load" + index + " really?");
    }
  },
  methods: {
    change() {
      if (this.start < 16) {
        if (this.dataPerson[this.start + 1].age <= this.limitAge) {
          if (this.start < this.max) {
            //   console.log(this.start);
            this.start++;
            document.getElementById("title").style.color = this.dataPerson[
              this.start
            ].tone;
            document.body.style.background = this.dataPerson[this.start].color;
            if (this.start == 5) {
              document.body.style.color = "white";
              document.getElementById("dataModal").style.color = "black";
            } else {
              document.body.style.color = "black";
            }
            document
              .getElementById("text-animation")
              .classList.remove("slide-in-bottom");
            void document.getElementById("text-animation").offsetWidth;
            document
              .getElementById("text-animation")
              .classList.add("slide-in-bottom");
            if (this.dataPerson[this.start].status == "l") {
              document
                .getElementById("dicutl")
                .classList.remove("slide-in-left");
              void document.getElementById("dicutl").offsetWidth;
              document.getElementById("dicutl").classList.add("slide-in-left");
            } else {
              document
                .getElementById("dicutr")
                .classList.remove("slide-in-right");
              void document.getElementById("dicutr").offsetWidth;
              document.getElementById("dicutr").classList.add("slide-in-right");
            }
            document
              .getElementById("nameAnimation")
              .classList.remove("text-blur-in");
            void document.getElementById("nameAnimation").offsetWidth;
            document
              .getElementById("nameAnimation")
              .classList.add("text-blur-in");
            document
              .getElementById("ageAnimation")
              .classList.remove("text-blur-in");
            void document.getElementById("ageAnimation").offsetWidth;
            document
              .getElementById("ageAnimation")
              .classList.add("text-blur-in");
            document
              .getElementById("titleAnimation")
              .classList.remove("text-blur-in");
            void document.getElementById("titleAnimation").offsetWidth;
            document
              .getElementById("titleAnimation")
              .classList.add("text-blur-in");
            document.getElementById("bg-reload").classList.remove("fade-in");
            void document.getElementById("bg-reload").offsetWidth;
            document.getElementById("bg-reload").classList.add("fade-in");
          }
        } else {
          router.push("/wait");
        }
      } else {
        router.push("/wait");
      }
    },
    back() {
      if (this.start > 0) {
        this.start--;
        document.getElementById("title").style.color = this.dataPerson[
          this.start
        ].tone;
        if (this.start == 5) {
          document.body.style.color = "white";
          document.getElementById("dataModal").style.color = "black";
        } else {
          document.body.style.color = "black";
        }
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
        document
          .getElementById("nameAnimation")
          .classList.remove("text-blur-in");
        //   void document.getElementById("nameAnimation").offsetWidth;
        document.getElementById("nameAnimation").classList.add("text-blur-in");
        document
          .getElementById("ageAnimation")
          .classList.remove("text-blur-in");
        //   void document.getElementById("ageAnimation").offsetWidth;
        document.getElementById("ageAnimation").classList.add("text-blur-in");
        document
          .getElementById("titleAnimation")
          .classList.remove("text-blur-in");
        //   void document.getElementById("titleAnimation").offsetWidth;
        document.getElementById("titleAnimation").classList.add("text-blur-in");
        document.getElementById("bg-reload").classList.remove("fade-in");
        // void document.getElementById("bg-reload").offsetWidth;
        document.getElementById("bg-reload").classList.add("fade-in");
      }
    },
    home() {
      router.push("/");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@600&display=swap%27");
@media screen and (max-width: 1919px) {
  #rowContent {
    height: 67%;
  }
}
.content {
  height: 100vh;
  width: 100vw;
}
.slide-in-bottom {
  animation: slide-in-bottom 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.text-content {
  font-size: 1.3em;
  z-index: 3;
  margin-left: 3%;
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.title {
  font-family: "Prompt", sans-serif;
  font-size: 3em;
  z-index: 4;
  position: relative;
  margin-left: 3%;
  text-shadow: grey 1px 0 10px;
}

.slide-in-left {
  animation: slide-in-left 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
#rowContent {
  height: 73%;
}
.slide-in-right {
  animation: slide-in-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

* {
  font-family: "Kanit", sans-serif;
}

.text-blur-out {
  animation: text-blur-out 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.text-blur-in {
  font-family: "Prompt", sans-serif;
  animation: text-blur-out 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) reverse
    both;
  z-index: 10;
}

@keyframes text-blur-out {
  0% {
    filter: blur(0.01);
  }

  100% {
    filter: blur(12px) opacity(0%);
  }
}

.navTab {
  color: white;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, 0);
}

.bg-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.gettext {
  color: white !important;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-height: 35px;
  /* number of lines to show */
  -webkit-box-orient: vertical;
  text-shadow: 3px 1px #222324, 1px 2px #222324, 1px 3px #222324;
}

.setBottomleft {
  position: absolute;
  bottom: 0;
}
.setBottomright {
  position: absolute;
  bottom: 0;
}
.fade-in {
  animation: fade-in 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
