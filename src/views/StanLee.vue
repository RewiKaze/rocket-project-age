<template>
  <div class="stan">
    <img
      src="../assets/StanLee/Nongif-lee.png"
      class="stan-img img-fluid fade-in"
    />
    <img src="../assets/StanLee/Comics.png" class="side img-fluid slide" />
    <div class="content">
      <h1 class="gradient">When Stan Lee</h1>
      <h2 class="gradient">39 yaer old</h2>
      <p>
        เริ่มด้วยต้นแบบนักเขียนคอมมิคบุ๊คชื่อดังอย่าง Stan Lee
        เขาเข้าวงการคอมมิคบุ๊คด้วยอายุเพียง 17
        ปีและเริ่มทำงานเป็นผู้ช่วยแผนกหนังสือการ์ตูนของบริษัท Timely
        Publications แม้จะใช้เวลานานสุดท้ายเมื่อปี 1961
        หนังสือการ์ตูนของเขาก็มีชื่อเสียงขึ้นมา
      </p>
    </div>
    <navControl v-on:click.native="back"></navControl>
  </div>
</template>
<style>
.content {
  margin-top: 4%;
  margin-left: 20%;
  margin-right: 20%;
  z-index: 2;
}
.stan {
  overflow: hidden;
  color: black;
  background: linear-gradient(
    315deg,
    rgba(161, 85, 88, 1) 0%,
    rgba(59, 67, 119, 1) 100%
  );
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.stan-img {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80%;
}
.side {
  position: fixed;
  bottom: 0;
  right: 0;
}
p {
  text-indent: 10%;
  color: white;
}
h1.gradient {
  font-size: 72px;
  background: -webkit-linear-gradient(#e5777b, #d393e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient {
  background: -webkit-linear-gradient(#e5777b, #d393e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fade-in {
  animation: fade-in-left 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation-delay: 0.5s;
}
.slide {
  overflow-x: hidden;
  overflow-y: hidden;
  animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation-delay: 0.5s;
}

@keyframes fade-in-right {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
<script>
import navTab from "@/components/NavTab.vue";
import router from "@/router";
export default {
  name: "stan",
  components: { navControl: navTab },
  methods: {
    back() {
      router.push("/");
    }
  }
};
</script>
